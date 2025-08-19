'use client';

import { useEffect, useState } from 'react';

export default function Home() {

  const [displayText, setDisplayText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showLeftContent, setShowLeftContent] = useState(false);
  const [showRightContent, setShowRightContent] = useState(false);
  const [typingTexts, setTypingTexts] = useState<{[key: string]: string}>({});
  const fullText = "hey, i'm josh";

  const scrambleText = (finalText: string, duration: number = 2000) => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let frame = 0;
    const totalFrames = Math.floor(duration / 50);
    
    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        let scrambled = '';
        
        for (let i = 0; i < finalText.length; i++) {
          if (frame / totalFrames > i / finalText.length) {
            scrambled += finalText[i];
          } else {
            scrambled += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        
        setTypingTexts(prev => ({
          ...prev,
          [finalText]: scrambled
        }));
        
        frame++;
        
        if (frame >= totalFrames) {
          clearInterval(interval);
          setTypingTexts(prev => ({
            ...prev,
            [finalText]: finalText
          }));
          resolve();
        }
      }, 50);
    });
  };

  const getDisplayText = (text: string) => {
    return typingTexts[text] || text;
  };

  useEffect(() => {
    const loadingSequence = async () => {
      // Quick loading for fast connections
      await new Promise(resolve => setTimeout(resolve, 150));
      
      // Show everything at once for quick loads
      setShowContent(true);
      setShowBackground(true);
      setShowHero(true);
      
      // Very quick stagger for content
      await new Promise(resolve => setTimeout(resolve, 100));
      setShowLeftContent(true);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      setShowRightContent(true);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Start typewriter effect quickly
      setTimeout(() => {
        let currentIndex = 0;
        const typewriterInterval = setInterval(() => {
          if (currentIndex < fullText.length) {
            setDisplayText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(typewriterInterval);
          }
        }, 80);
      }, 100);
      
      // Start scrambling text for content sections
      setTimeout(async () => {
        await new Promise(resolve => setTimeout(resolve, 300));
        await scrambleText('About Me', 1200);
        await new Promise(resolve => setTimeout(resolve, 150));
        await scrambleText('What I Do', 1200);
      }, 200);
    };

    loadingSequence();
  }, []);

  if (!showContent) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-dot"></div>
        </div>
        <style jsx>{`
          .loading-spinner {
            position: relative;
            width: 40px;
            height: 40px;
          }
          
          .spinner-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(34, 197, 94, 0.2);
            border-top: 2px solid #22c55e;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          
          .spinner-dot {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            background: #22c55e;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 1.2s ease-in-out infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              opacity: 0.4;
              transform: translate(-50%, -50%) scale(0.8);
            }
            50% { 
              opacity: 1;
              transform: translate(-50%, -50%) scale(1.2);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div className={`hacker-background ${showBackground ? 'background-loaded' : 'background-loading'}`}>
        {/* Animated background layers - hacker theme */}
        <div className={`absolute inset-0 overflow-hidden ${showBackground ? 'opacity-100' : 'opacity-0'} transition-opacity duration-400`}>
          {/* Matrix-style falling code lines */}
          <div className="matrix-line matrix-line-1"></div>
          <div className="matrix-line matrix-line-2"></div>
          <div className="matrix-line matrix-line-3"></div>
          <div className="matrix-line matrix-line-4"></div>
          
          {/* Glowing geometric shapes */}
          <div className="hacker-shape hacker-shape-1"></div>
          <div className="hacker-shape hacker-shape-2"></div>
          <div className="hacker-shape hacker-shape-3"></div>
          
          {/* Glowing orbs with green theme */}
          <div className="hacker-orb hacker-orb-1"></div>
          <div className="hacker-orb hacker-orb-2"></div>
          <div className="hacker-orb hacker-orb-3"></div>
          <div className="hacker-orb hacker-orb-4"></div>
          <div className="hacker-orb hacker-orb-5"></div>
          
          {/* Binary code effect - only show after content loads */}
          {showContent && (
            <>
              <div className="binary-code binary-code-1">
                01001000 01100001 01100011 01101011
              </div>
              <div className="binary-code binary-code-2">
                01110000 01110010 01101111 01100111
              </div>
            </>
          )}
          
          {/* Pulsing circles with green glow */}
          <div className="hacker-circle hacker-circle-1"></div>
          <div className="hacker-circle hacker-circle-2"></div>
          
          {/* Rotating elements with green theme */}
          <div className="hacker-rotate hacker-rotate-1">
            <div className="w-full h-full border-l-2 border-green-500 shadow-sm shadow-green-500/20"></div>
          </div>
          <div className="hacker-rotate hacker-rotate-2">
            <div className="w-full h-full border-t-2 border-green-400 shadow-sm shadow-green-400/20"></div>
          </div>
        </div>

        {/* Overlay gradient for depth with green tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-green-900/5 to-black/30"></div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Hero section with typewriter text */}
          <div className={`pt-20 px-4 text-center mb-16 ${showHero ? 'hero-loaded' : 'hero-loading'} transition-all duration-300 ease-out`}>
            <h1 className={`hacker-text ${showHero ? 'text-loaded' : 'text-loading'}`}>
              {displayText}
              <span className="animate-pulse text-green-400">|</span>
            </h1>
          </div>

          {/* Two-column content section */}
          <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left side - Content text */}
              <div className={`content-section ${showLeftContent ? 'content-loaded' : 'content-loading'}`}>
                <div className="content-block">
                  <h2 className="section-title">{getDisplayText('About Me')}</h2>
                  <p className="content-text">
                    Hey there, thanks for stopping by my website! I&apos;m Josh, and I&apos;m a sophomore studying Electrical Engineering, 
                    Computer Science, and Statistics at Harvard. Most of my work specializes in AI, full-stack development, and 
                    building anything that I think is cool and useful.
                  </p>
                  <p className="content-text">
                    If you&apos;re interested in my work and seeing what I&apos;ve already done, check out my experiences page. If you want 
                    to get in touch or learn more about me, check out my contact page. Here are some of the services I offer:
                  </p>
                </div>

                <div className="content-block">
                  <h3 className="subsection-title">{getDisplayText('What I Do')}</h3>
                  <ul className="content-list">
                    <li className="list-item">💻 Full-Stack Web Development</li>
                    <li className="list-item">⚡ Automation & Workflow Creation</li>
                    <li className="list-item">🤖 AI Development</li>
                    <li className="list-item">🎓 Tutoring & Academic Support</li>
                    <li className="list-item">🏫 College Application Consulting</li>
                  </ul>
                </div>

                <div className="content-block">
                  <p className="content-text">
                    If you&apos;re interested in my work and working together, make sure to contact me on LinkedIn or email me at 
                    jzyzak@college.harvard.edu
                  </p>
                </div>
              </div>

              {/* Right side - Profile picture */}
              <div className={`profile-section ${showRightContent ? 'profile-loaded' : 'profile-loading'}`}>
                <div className="profile-container">
                  <div className="profile-image-container">
                    <img 
                      src="/profile-picture.jpg" 
                      alt="Josh's Profile Picture"
                      className="profile-image"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations and styling */}
      <style jsx>{`
        .hacker-background {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #000000 75%, #001100 100%);
          background-size: 400% 400%;
          animation: hackerShimmer 6s ease-in-out infinite;
          transition: all 1s ease-out;
        }

        .background-loaded {
          opacity: 1;
          transform: scale(1);
        }

        .background-loading {
          opacity: 0;
          transform: scale(1.05);
        }

        .hero-loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-loading {
          opacity: 0;
          transform: translateY(-50px);
        }

        .hacker-text {
          font-size: 2.25rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1.5rem;
          transition: all 1s ease;
          background: linear-gradient(45deg, #ffffff, #a3f3a3, #4ade80);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hackerGradient 3s ease infinite;
          text-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
        }

        @media (min-width: 768px) {
          .hacker-text {
            font-size: 3.75rem;
          }
        }

        .text-loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .text-loading {
          opacity: 0;
          transform: translateY(2.5rem);
        }

        .content-section {
          color: #e5e7eb;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .content-loaded {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .content-loading {
          opacity: 0;
          transform: translateX(-50px) translateY(20px);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #22c55e;
          margin-bottom: 1.5rem;
          font-family: 'Courier New', monospace;
          text-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
        }

        .subsection-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4ade80;
          margin-bottom: 1rem;
          font-family: 'Courier New', monospace;
        }

        .content-block {
          margin-bottom: 2.5rem;
        }

        .content-text {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: #d1d5db;
        }

        .content-list {
          list-style: none;
          padding: 0;
        }

        .list-item {
          font-size: 1.125rem;
          padding: 0.75rem 0;
          color: #d1d5db;
          border-left: 2px solid #22c55e;
          padding-left: 1rem;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .list-item:hover {
          color: #22c55e;
          background: rgba(34, 197, 94, 0.05);
          padding-left: 1.5rem;
        }

        .profile-section {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-loaded {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
        }

        .profile-loading {
          opacity: 0;
          transform: translateX(50px) translateY(20px) scale(0.95);
        }

        .profile-container {
          position: relative;
        }

        .profile-image-container {
          width: 300px;
          height: 400px;
          border: 2px solid #22c55e;
          border-radius: 1rem;
          background: rgba(34, 197, 94, 0.05);
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.2);
          transition: all 0.3s ease;
        }

        .profile-image-container:hover {
          box-shadow: 0 0 50px rgba(34, 197, 94, 0.3);
          transform: translateY(-5px);
        }

        .profile-image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent);
          animation: shimmer 3s ease-in-out infinite;
          z-index: 1;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.75rem;
          position: relative;
          z-index: 0;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .matrix-line {
          position: absolute;
          top: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #22c55e, transparent);
        }

        .matrix-line-1 {
          left: 2.5rem;
          opacity: 0.3;
          animation: matrixFall 8s linear infinite;
        }

        .matrix-line-2 {
          left: 25%;
          opacity: 0.25;
          animation: matrixFall 12s linear infinite 2s;
        }

        .matrix-line-3 {
          right: 33.333333%;
          opacity: 0.2;
          animation: matrixFall 10s linear infinite 4s;
        }

        .matrix-line-4 {
          right: 5rem;
          opacity: 0.35;
          animation: matrixFall 15s linear infinite 1s;
        }

        .hacker-shape {
          position: absolute;
          border: 1px solid #22c55e;
          opacity: 0.4;
          box-shadow: 0 0 1rem rgba(34, 197, 94, 0.2);
        }

        .hacker-shape-1 {
          top: 2.5rem;
          left: 2.5rem;
          width: 5rem;
          height: 5rem;
          animation: spin 20s linear infinite;
        }

        .hacker-shape-2 {
          top: 33.333333%;
          right: 5rem;
          width: 4rem;
          height: 4rem;
          border-width: 2px;
          border-color: #4ade80;
          opacity: 0.3;
          box-shadow: 0 0 0.5rem rgba(74, 222, 128, 0.2);
          animation: hackerPulse 3s ease-in-out infinite;
        }

        .hacker-shape-3 {
          bottom: 5rem;
          left: 25%;
          width: 3rem;
          height: 3rem;
          border-color: #16a34a;
          opacity: 0.35;
          box-shadow: 0 0 0.25rem rgba(22, 163, 74, 0.2);
          animation: float 6s ease-in-out infinite;
        }

        .hacker-orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(to right, #4ade80, #16a34a);
        }

        .hacker-orb-1 {
          top: 25%;
          left: 25%;
          width: 1rem;
          height: 1rem;
          opacity: 0.6;
          box-shadow: 0 0 1rem rgba(34, 197, 94, 0.3);
          animation: float 8s ease-in-out infinite;
        }

        .hacker-orb-2 {
          top: 75%;
          left: 33.333333%;
          width: 0.5rem;
          height: 0.5rem;
          opacity: 0.5;
          background: linear-gradient(to right, #86efac, #22c55e);
          box-shadow: 0 0 0.5rem rgba(74, 222, 128, 0.3);
          animation: float 5s ease-in-out infinite 2s;
        }

        .hacker-orb-3 {
          top: 50%;
          right: 25%;
          width: 1.5rem;
          height: 1.5rem;
          opacity: 0.45;
          background: linear-gradient(to right, #22c55e, #15803d);
          box-shadow: 0 0 1rem rgba(22, 163, 74, 0.25);
          animation: float 7s ease-in-out infinite 1s;
        }

        .hacker-orb-4 {
          top: 33.333333%;
          right: 33.333333%;
          width: 0.75rem;
          height: 0.75rem;
          opacity: 0.55;
          background: linear-gradient(to right, #4ade80, #16a34a);
          box-shadow: 0 0 0.5rem rgba(34, 197, 94, 0.3);
          animation: float 6s ease-in-out infinite 3s;
        }

        .hacker-orb-5 {
          bottom: 25%;
          left: 50%;
          width: 1.25rem;
          height: 1.25rem;
          opacity: 0.4;
          background: linear-gradient(to right, #86efac, #22c55e);
          box-shadow: 0 0 1rem rgba(74, 222, 128, 0.25);
          animation: float 9s ease-in-out infinite 1.5s;
        }

        .binary-code {
          position: absolute;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
        }

        .binary-code-1 {
          top: 16.666667%;
          left: 16.666667%;
          opacity: 0.2;
          animation: binaryFlicker 2s ease-in-out infinite;
        }

        .binary-code-2 {
          bottom: 16.666667%;
          right: 16.666667%;
          color: #4ade80;
          opacity: 0.25;
          animation: binaryFlicker 3s ease-in-out infinite 1s;
        }

        .hacker-circle {
          position: absolute;
          border: 1px solid #22c55e;
          border-radius: 50%;
        }

        .hacker-circle-1 {
          top: 20%;
          right: 20%;
          width: 8rem;
          height: 8rem;
          opacity: 0.2;
          box-shadow: 0 0 2rem rgba(34, 197, 94, 0.1);
          animation: hackerPulse 4s ease-in-out infinite;
        }

        .hacker-circle-2 {
          bottom: 20%;
          left: 20%;
          width: 6rem;
          height: 6rem;
          border-color: #4ade80;
          opacity: 0.25;
          box-shadow: 0 0 1.5rem rgba(74, 222, 128, 0.15);
          animation: hackerPulse 6s ease-in-out infinite 2s;
        }

        .hacker-rotate {
          position: absolute;
        }

        .hacker-rotate-1 {
          top: 50%;
          left: 16.666667%;
          width: 2rem;
          height: 2rem;
          opacity: 0.3;
          animation: spin 25s linear infinite;
        }

        .hacker-rotate-2 {
          bottom: 33.333333%;
          right: 16.666667%;
          width: 2.5rem;
          height: 2.5rem;
          opacity: 0.35;
          animation: spin 30s linear infinite reverse;
        }

        @keyframes hackerGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes hackerShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes matrixFall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes binaryFlicker {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        @keyframes hackerPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
