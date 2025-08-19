'use client';

import Link from 'next/link';

export default function Navbar() {
  const linkStyle = {
    color: '#22c55e',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    fontFamily: '"Courier New", monospace',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    border: '1px solid transparent',
    textDecoration: 'none',
    display: 'inline-block'
  };



  return (
    <>
      <nav className="hacker-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="nav-link" style={linkStyle}>
                Home
              </Link>
              <Link href="/experiences" className="nav-link" style={linkStyle}>
                Experiences
              </Link>
                                   <Link href="/contact" className="nav-link" style={linkStyle}>
                       Contact Me
                     </Link>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .hacker-nav {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #000000 100%);
          box-shadow: 0 2px 20px rgba(34, 197, 94, 0.1);
          border-bottom: 1px solid rgba(34, 197, 94, 0.2);
          position: relative;
        }

        .hacker-nav::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #22c55e, transparent);
          animation: scanLine 3s ease-in-out infinite;
        }

        :global(.nav-link:hover) {
          color: #4ade80 !important;
          background: rgba(34, 197, 94, 0.1) !important;
          border-color: rgba(34, 197, 94, 0.3) !important;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.2) !important;
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.5) !important;
        }

        :global(.nav-link-cta:hover) {
          background: linear-gradient(135deg, #22c55e, #4ade80) !important;
          color: #000000 !important;
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.5) !important;
          transform: translateY(-2px) !important;
        }

        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
} 