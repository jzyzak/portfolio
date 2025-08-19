'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [typingTexts, setTypingTexts] = useState<{[key: string]: string}>({});

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

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowContent(true);
      setIsLoaded(true);
      
      // Start revealing contact cards one by one
      const revealCards = async () => {
        const contactMethods = [
          'Instagram',
          'LinkedIn', 
          'Email'
        ];
        
        for (let i = 0; i < 3; i++) {
          await new Promise(resolve => setTimeout(resolve, 400));
          setVisibleCards(prev => [...prev, i]);
          
          // Start scrambling text for this card
          if (contactMethods[i]) {
            scrambleText(contactMethods[i], 1500);
          }
        }
      };
      
      revealCards();
    }, 100);

    return () => clearTimeout(showTimer);
  }, []);

  const getDisplayText = (text: string) => {
    return typingTexts[text] || text;
  };

  if (!showContent) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center transition-opacity duration-500">
        <div className="text-green-400 font-mono animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="contact-background">
        {/* Animated background layers */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="matrix-line matrix-line-1"></div>
          <div className="matrix-line matrix-line-2"></div>
          <div className="matrix-line matrix-line-3"></div>
          <div className="matrix-line matrix-line-4"></div>
          
          <div className="hacker-orb hacker-orb-1"></div>
          <div className="hacker-orb hacker-orb-2"></div>
          <div className="hacker-orb hacker-orb-3"></div>
          
          <div className="binary-code binary-code-1">01000011 01001111 01001110</div>
          <div className="binary-code binary-code-2">01010100 01000001 01000011</div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-green-900/5 to-black/30"></div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <div className="pt-24 pb-12 text-center">
            <h1 className={`page-title ${isLoaded ? 'title-loaded' : 'title-loading'}`}>
              Contact Me
            </h1>
            <p className="page-subtitle">Let&apos;s connect and build cool stuff together</p>
          </div>

          {/* Contact Cards */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Instagram Card */}
              <div className={`contact-card ${visibleCards.includes(0) ? 'card-visible' : 'card-hidden'}`}>
                <div className="contact-icon instagram-icon">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="contact-title">{getDisplayText('Instagram')}</h3>
                <p className="contact-description">
                  Follow me for behind-the-scenes content, project updates, and seeing what other stupid ideas I can come up with on no sleep
                </p>
                <a href="https://instagram.com/josh_zyzak" target="_blank" rel="noopener noreferrer" className="contact-link">
                  @josh_zyzak
                </a>
                <div className="contact-action">
                  <a href="https://instagram.com/josh_zyzak" target="_blank" rel="noopener noreferrer" className="action-button instagram-button">
                    Follow on Instagram
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className={`contact-card ${visibleCards.includes(1) ? 'card-visible' : 'card-hidden'}`}>
                <div className="contact-icon linkedin-icon">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="contact-title">{getDisplayText('LinkedIn')}</h3>
                <p className="contact-description">
                  Connect with me on LinkedIn for networking/collaborating, keeping up with my projects, and career opportunities
                </p>
                <a href="https://www.linkedin.com/in/josh-zyzak-6b14b4246/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  /in/josh-zyzak-6b14b4246
                </a>
                <div className="contact-action">
                  <a href="https://www.linkedin.com/in/josh-zyzak-6b14b4246/" target="_blank" rel="noopener noreferrer" className="action-button linkedin-button">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className={`contact-card ${visibleCards.includes(2) ? 'card-visible' : 'card-hidden'}`}>
                <div className="contact-icon email-icon">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.98L12 10.515l9.382-6.694h.982c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </div>
                <h3 className="contact-title">{getDisplayText('Email')}</h3>
                <p className="contact-description">
                  Reach out directly for project inquiries, tutoring, consulting, or collaboration opportunities
                </p>
                <a href="mailto:jzyzak@college.harvard.edu" className="contact-link">
                  jzyzak@college.harvard.edu
                </a>
                <div className="contact-action">
                  <a href="mailto:jzyzak@college.harvard.edu" className="action-button email-button">
                    Send Email
                  </a>
                </div>
              </div>

            </div>

            {/* Additional Contact Info */}
            <div className="mt-16 text-center">
              <div className="contact-footer">
                <h3 className="footer-title">Ready to Work Together?</h3>
                <p className="footer-text">
                  Whether you need tutoring, college consulting, web/app development, or automation solutions,
                  I&apos;m here to help bring your ideas to life or even just to chat.
                </p>
                <div className="footer-skills">
                  <span className="skill-tag">Tutoring</span>
                  <span className="skill-tag">College Consulting</span>
                  <span className="skill-tag">Web/App Development</span>
                  <span className="skill-tag">Automation</span>
                  <span className="skill-tag">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .contact-background {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #000000 75%, #001100 100%);
          background-size: 400% 400%;
          animation: hackerShimmer 6s ease-in-out infinite;
        }

        .page-title {
          font-size: 3rem;
          font-weight: bold;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          transition: all 1s ease;
        }

        @media (min-width: 768px) {
          .page-title {
            font-size: 4rem;
          }
        }

        .title-loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .title-loading {
          opacity: 0;
          transform: translateY(2rem);
        }

        .page-subtitle {
          color: #9ca3af;
          font-size: 1.25rem;
          margin-top: 1rem;
          font-family: 'Courier New', monospace;
        }

        .contact-card {
          background: rgba(34, 197, 94, 0.05);
          border: 2px solid rgba(34, 197, 94, 0.2);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.8s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }

        .card-hidden {
          opacity: 0;
          transform: translateY(50px) scale(0.9);
        }

        .card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .contact-card:hover {
          border-color: rgba(34, 197, 94, 0.4);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.2);
          transform: translateY(-10px) scale(1.02);
        }

        .contact-icon {
          width: 5rem;
          height: 5rem;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .instagram-icon {
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          color: white;
        }

        .linkedin-icon {
          background: #0077b5;
          color: white;
        }

        .email-icon {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .contact-icon:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }

        .contact-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #22c55e;
          margin-bottom: 1rem;
          font-family: 'Courier New', monospace;
        }

        .contact-description {
          color: #9ca3af;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-style: italic;
          font-size: 0.95rem;
          border-left: 2px solid rgba(34, 197, 94, 0.3);
          padding-left: 1rem;
          background: rgba(34, 197, 94, 0.03);
          border-radius: 0 0.5rem 0.5rem 0;
          padding: 0.75rem 1rem;
        }

        .contact-link {
          color: #4ade80;
          font-weight: bold;
          text-decoration: none;
          font-family: 'Courier New', monospace;
          display: block;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          color: #22c55e;
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }

        .contact-action {
          margin-top: 1.5rem;
        }

        .action-button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: 'Courier New', monospace;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
        }

        .instagram-button {
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          color: white;
        }

        .instagram-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(240, 148, 51, 0.3);
        }

        .linkedin-button {
          background: #0077b5;
          color: white;
        }

        .linkedin-button:hover {
          background: #005885;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 119, 181, 0.3);
        }

        .email-button {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .email-button:hover {
          background: linear-gradient(135deg, #16a34a, #15803d);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
        }

        .contact-footer {
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 1rem;
          padding: 2rem;
          max-width: 4xl;
          margin: 0 auto;
        }

        .footer-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: #22c55e;
          margin-bottom: 1rem;
          font-family: 'Courier New', monospace;
        }

        .footer-text {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .footer-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .skill-tag {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          font-size: 0.875rem;
          font-weight: bold;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(34, 197, 94, 0.3);
          font-family: 'Courier New', monospace;
        }

        .matrix-line {
          position: absolute;
          top: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #22c55e, transparent);
        }

        .matrix-line-1 {
          left: 15%;
          opacity: 0.2;
          animation: matrixFall 12s linear infinite;
        }

        .matrix-line-2 {
          left: 35%;
          opacity: 0.15;
          animation: matrixFall 18s linear infinite 4s;
        }

        .matrix-line-3 {
          right: 25%;
          opacity: 0.25;
          animation: matrixFall 14s linear infinite 8s;
        }

        .matrix-line-4 {
          right: 45%;
          opacity: 0.18;
          animation: matrixFall 20s linear infinite 2s;
        }

        .hacker-orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(to right, #4ade80, #16a34a);
        }

        .hacker-orb-1 {
          top: 25%;
          left: 20%;
          width: 0.75rem;
          height: 0.75rem;
          opacity: 0.4;
          animation: float 10s ease-in-out infinite;
        }

        .hacker-orb-2 {
          top: 65%;
          right: 30%;
          width: 1rem;
          height: 1rem;
          opacity: 0.3;
          animation: float 8s ease-in-out infinite 3s;
        }

        .hacker-orb-3 {
          bottom: 35%;
          left: 30%;
          width: 0.5rem;
          height: 0.5rem;
          opacity: 0.5;
          animation: float 12s ease-in-out infinite 6s;
        }

        .binary-code {
          position: absolute;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          opacity: 0.15;
        }

        .binary-code-1 {
          top: 30%;
          left: 8%;
          animation: binaryFlicker 4s ease-in-out infinite;
        }

        .binary-code-2 {
          bottom: 45%;
          right: 12%;
          animation: binaryFlicker 5s ease-in-out infinite 2s;
        }

        @keyframes hackerShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes matrixFall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(12px); }
          50% { transform: translateY(-12px) translateX(-8px); }
          75% { transform: translateY(-16px) translateX(6px); }
        }

        @keyframes binaryFlicker {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @media (max-width: 767px) {
          .contact-card {
            margin-bottom: 2rem;
          }
          
          .footer-skills {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
} 