'use client';

import { useEffect, useMemo, useState } from 'react';

type NodeDef = {
  id: number;
  x: number;
  y: number;
  phase: number;
  speed: number;
  ampX: number;
  ampY: number;
};

const NODE_COUNT = 48;
const NEIGHBORS = 3;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const distance = (a: NodeDef, b: NodeDef) => Math.hypot(a.x - b.x, a.y - b.y);

export default function GraphBackground() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setTime(performance.now() / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nodes = useMemo<NodeDef[]>(
    () =>
      Array.from({ length: NODE_COUNT }, (_, id) => ({
        id,
        x: 4 + Math.random() * 92,
        y: 6 + Math.random() * 88,
        phase: Math.random() * Math.PI * 2,
        speed: 0.12 + Math.random() * 0.24,
        ampX: 0.6 + Math.random() * 1.6,
        ampY: 0.6 + Math.random() * 1.6,
      })),
    []
  );

  const edges = useMemo<[number, number][]>(() => {
    const seen = new Set<string>();
    for (const node of nodes) {
      const nearest = nodes
        .filter((other) => other.id !== node.id)
        .map((other) => ({ id: other.id, d: distance(node, other) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, NEIGHBORS);

      for (const neighbor of nearest) {
        const a = Math.min(node.id, neighbor.id);
        const b = Math.max(node.id, neighbor.id);
        seen.add(`${a}-${b}`);
      }
    }
    return Array.from(seen).map((pair) => pair.split('-').map(Number) as [number, number]);
  }, [nodes]);

  const animatedNodes = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        ax: clamp(node.x + Math.sin(time * node.speed + node.phase) * node.ampX, 2, 98),
        ay: clamp(node.y + Math.cos(time * node.speed + node.phase * 1.07) * node.ampY, 2, 98),
      })),
    [nodes, time]
  );

  return (
    <div className="graph-bg" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {edges.map(([a, b]) => {
          const n1 = animatedNodes[a];
          const n2 = animatedNodes[b];
          return <line key={`${a}-${b}`} className="graph-edge" x1={n1.ax} y1={n1.ay} x2={n2.ax} y2={n2.ay} />;
        })}
        {animatedNodes.map((node) => (
          <circle key={node.id} className="graph-node" cx={node.ax} cy={node.ay} r="0.28" />
        ))}
      </svg>
    </div>
  );
}
