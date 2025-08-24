'use client';

import { useEffect, useState } from 'react';

export default function Experiences() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
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
    // Set page title
    document.title = "Josh Zyzak | Experiences";
    
    const showTimer = setTimeout(() => {
      setShowContent(true);
      setIsLoaded(true);
      
      // Start revealing timeline items one by one
      const revealItems = async () => {
        for (let i = 0; i < 8; i++) { // 5 work items + 3 project items
          await new Promise(resolve => setTimeout(resolve, 300));
          setVisibleItems(prev => [...prev, i]);
          
          // Start scrambling text for this item
          if (i < 5) {
            // Work experience items
            const titles = [
              'CEO',
              'AI/Software Engineer',
              'Marketing Technologies Intern', 
              'AI/Software Engineer',
              'Technical and Development Lead'
            ];
            const companies = [
              'Nightshade | Remote',
              'Series | New York City, NY',
              'The Coca-Cola Company | Atlanta, GA',
              'Andromeda Labs, L.L.C. | Remote',
              'NextCreator | Remote'
            ];
            
            if (titles[i]) {
              scrambleText(titles[i], 1500);
              setTimeout(() => scrambleText(companies[i], 1500), 200);
            }
          } else {
            // Project items
            const projectTitles = [
              'AI-Powered Fitness App',
              'AI-Driven Investment Insights Platform',
              'Black-Scholes Option Pricing Web App'
            ];
            
            const projectIndex = i - 5;
            if (projectTitles[projectIndex]) {
              scrambleText(projectTitles[projectIndex], 1500);
            }
          }
        }
      };
      
      revealItems();
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
      <div className="experiences-background">
        {/* Animated background layers */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="matrix-line matrix-line-1"></div>
          <div className="matrix-line matrix-line-2"></div>
          <div className="matrix-line matrix-line-3"></div>
          <div className="matrix-line matrix-line-4"></div>
          
          <div className="hacker-orb hacker-orb-1"></div>
          <div className="hacker-orb hacker-orb-2"></div>
          <div className="hacker-orb hacker-orb-3"></div>
          
          <div className="binary-code binary-code-1">01000101 01011000 01010000</div>
          <div className="binary-code binary-code-2">01010000 01010010 01001111</div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-green-900/5 to-black/30"></div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <div className="pt-24 pb-12 text-center">
            <h1 className={`page-title ${isLoaded ? 'title-loaded' : 'title-loading'}`}>
              Experiences
            </h1>
            <p className="page-subtitle">My professional journey and projects</p>
          </div>

          {/* Two-column layout */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left side - Work Experiences */}
              <div className="timeline-section">
                <h2 className="section-title">Work Experience</h2>
                <div className="timeline-container">
                  
                  {/* Timeline item 1 - Nightshade CEO */}
                  <div className={`timeline-item ${visibleItems.includes(0) ? 'item-visible' : 'item-hidden'}`}>
                    <div className="timeline-node company-logo-node">
                      <div className="company-logo-placeholder">
                        <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-date">July 2025 - Current</div>
                      <h3 className="timeline-title">{getDisplayText('CEO')}</h3>
                      <h4 className="timeline-company">{getDisplayText('Nightshade | Remote')}</h4>
                      <p className="timeline-description">
                        Building something cool...
                      </p>
                      <div className="timeline-skills">
                        <span className="skill-tag">Agentic AI Production</span>
                        <span className="skill-tag">Cybersecurity</span>
                        <span className="skill-tag">RL</span>
                        <span className="skill-tag">Operations</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline item 2 - Series */}
                  <div className={`timeline-item ${visibleItems.includes(1) ? 'item-visible' : 'item-hidden'}`}>
                    <div className="timeline-node company-logo-node">
                      <div className="company-logo-placeholder">
                        <img 
                          src="/series-logo.png" 
                          alt="Series Logo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-date">July 2025 - Aug 2025</div>
                      <h3 className="timeline-title">{getDisplayText('AI/Software Engineer')}</h3>
                      <h4 className="timeline-company">{getDisplayText('Series | New York City, NY')}</h4>
                      <p className="timeline-description">
                        Developed and shipped gamified referral leaderboard, optimized LinkedIn-scraping pipeline, built face analysis module, 
                        and optimized agent workflows/orchestration. Scaled backend services to reliably support over 200K user profiles.
                      </p>
                      <div className="timeline-skills">
                        <span className="skill-tag">LinkedIn Scraping</span>
                        <span className="skill-tag">Face Analysis</span>
                        <span className="skill-tag">Backend Scaling</span>
                        <span className="skill-tag">Agent Workflows</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline item 2 - Coca-Cola */}
                  <div className={`timeline-item ${visibleItems.includes(2) ? 'item-visible' : 'item-hidden'}`}>
                    <div className="timeline-node company-logo-node">
                      <div className="company-logo-placeholder">
                        <img 
                          src="/coca-cola-logo.jpeg" 
                          alt="Coca-Cola Logo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-date">June 2025 - Aug 2025</div>
                      <h3 className="timeline-title">{getDisplayText('Marketing Technologies Intern')}</h3>
                      <h4 className="timeline-company">{getDisplayText('The Coca-Cola Company | Atlanta, GA')}</h4>
                      <p className="timeline-description">
                        Collaborated with the MarTech team and Microsoft to architect an internal solution utilizing Azure AD B2C. 
                        Delivered presentations to Microsoft stakeholders, Coca-Cola leadership, and peer interns. 
                        Contributed to development of an internal web analytics platform supporting product analytics, A/B testing, etc.
                      </p>
                      <div className="timeline-skills">
                        <span className="skill-tag">Azure AD B2C</span>
                        <span className="skill-tag">Microsoft</span>
                        <span className="skill-tag">Web Analytics</span>
                        <span className="skill-tag">A/B Testing</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline item 3 - Andromeda Labs */}
                  <div className={`timeline-item ${visibleItems.includes(3) ? 'item-visible' : 'item-hidden'}`}>
                    <div className="timeline-node company-logo-node">
                      <div className="company-logo-placeholder">
                        <img 
                          src="/andromeda-logo.jpeg" 
                          alt="Andromeda Labs Logo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-date">Dec 2024 - Jan 2025</div>
                      <h3 className="timeline-title">{getDisplayText('AI/Software Engineer')}</h3>
                      <h4 className="timeline-company">{getDisplayText('Andromeda Labs, L.L.C. | Remote')}</h4>
                      <p className="timeline-description">
                        Developed AI-powered products/tools using aOS for enhancing internal team operations. 
                        Collaborated with the development team to solve technical problems and optimize performance.
                      </p>
                      <div className="timeline-skills">
                        <span className="skill-tag">AI/ML</span>
                        <span className="skill-tag">aOS</span>
                        <span className="skill-tag">Performance Optimization</span>
                        <span className="skill-tag">Team Collaboration</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline item 4 - NextCreator */}
                  <div className={`timeline-item ${visibleItems.includes(4) ? 'item-visible' : 'item-hidden'}`}>
                    <div className="timeline-node company-logo-node">
                      <div className="company-logo-placeholder">
                        <img 
                          src="/nextcreator-logo.jpeg" 
                          alt="NextCreator Logo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-date">June 2024 - June 2025</div>
                      <h3 className="timeline-title">{getDisplayText('Technical and Development Lead')}</h3>
                      <h4 className="timeline-company">{getDisplayText('NextCreator | Remote')}</h4>
                      <p className="timeline-description">
                        Led full-stack development for a 5-person dev team to build web & mobile apps from wireframes to launch
                      </p>
                      <div className="timeline-skills">
                        <span className="skill-tag">Full-Stack</span>
                        <span className="skill-tag">Team Leadership</span>
                        <span className="skill-tag">Web Development</span>
                        <span className="skill-tag">Mobile Apps</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right side - Projects */}
              <div className="timeline-section">
                <h2 className="section-title">Projects</h2>
                <div className="timeline-container">
                  
                  {/* Project item 1 */}
                  <div className={`timeline-item ${visibleItems.includes(5) ? 'item-visible' : 'item-hidden'}`}>
                    <div className="timeline-node project-node">
                      <div className="node-dot"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">{getDisplayText('AI-Powered Fitness App')}</h3>
                      <p className="project-summary">
                        Summary: My form sucked in the gym, so I built an app to help me fix that.
                      </p>
                      <p className="timeline-description">
                        Built a comprehensive AI-powered fitness application that serves as a personal trainer for any fitness goals. 
                        The app provides customized workout plans and diet recommendations tailored to individual needs. 
                        Features advanced real-time form analysis capabilities using computer vision to analyze workout form, 
                        sports form, and technique, providing instant feedback to help users improve their performance and prevent injuries.
                      </p>
                      <div className="timeline-skills">
                        <span className="skill-tag">AI/ML</span>
                        <span className="skill-tag">Computer Vision</span>
                        <span className="skill-tag">Real-time Analysis</span>
                        <span className="skill-tag">Mobile Development</span>
                      </div>
                    </div>
                  </div>

                  {/* Project item 2 */}
                  <div className={`timeline-item ${visibleItems.includes(6) ? 'item-visible' : 'item-hidden'}`}>
                    <div className="timeline-node project-node">
                      <div className="node-dot"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">{getDisplayText('AI-Driven Investment Insights Platform')}</h3>
                      <p className="project-summary">
                        Summary: I don&apos;t have the time to read through a ton of reports, so I built a tool to 
                        do the heavy lifting.
                      </p>
                      <p className="timeline-description">
                        Built and deployed a comprehensive API-driven investment insights application using Python and React. 
                        The platform aggregates portfolio holdings from multiple sources, runs sophisticated AI-based signal generation 
                        algorithms, and performs extensive backtesting of investment recommendations. Successfully realized a 20% gain 
                        in 3 months through intelligent market analysis and automated trading signals. Features real-time data processing, 
                        risk assessment, and performance analytics dashboard.
                      </p>
                      <div className="timeline-skills">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">AI Signal Generation</span>
                        <span className="skill-tag">Backtesting</span>
                        <span className="skill-tag">Financial APIs</span>
                      </div>
                    </div>
                  </div>

                  {/* Project item 3 */}
                  <div className={`timeline-item ${visibleItems.includes(7) ? 'item-visible' : 'item-hidden'}`}>
                    <div className="timeline-node project-node">
                      <div className="node-dot"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">{getDisplayText('Black-Scholes Option Pricing Web App')}</h3>
                      <p className="project-summary">
                        Summary: I was bored so I built a web app to price options.
                      </p>
                      <p className="timeline-description">
                        Developed a sophisticated financial modeling web application featuring a FastAPI-powered Python backend 
                        and interactive React frontend. The app implements the Black-Scholes option pricing model, allowing users 
                        to input parameters such as strike price, spot price, volatility, time to expiration, and risk-free rate. 
                        Features dynamic visualization of option values across different volatility scenarios with real-time calculations, 
                        interactive charts, and comprehensive Greeks analysis for advanced options trading strategies.
                      </p>
                      <div className="timeline-skills">
                        <span className="skill-tag">FastAPI</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Financial Modeling</span>
                        <span className="skill-tag">Data Visualization</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .experiences-background {
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

        .timeline-section {
          position: relative;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #4ade80;
          margin-bottom: 2rem;
          font-family: 'Courier New', monospace;
          text-align: center;
          text-shadow: 0 0 15px rgba(74, 222, 128, 0.3);
        }

        .timeline-container {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          left: 1.5rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #22c55e, #16a34a, #22c55e);
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          display: flex;
          align-items: flex-start;
          transition: all 0.8s ease;
        }

        .item-hidden {
          opacity: 0;
          transform: translateX(-50px);
        }

        .item-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-node {
          position: absolute;
          left: -2rem;
          top: 0.5rem;
          z-index: 2;
        }

        .company-logo-node {
          width: 4rem;
          height: 4rem;
          border: 2px solid #22c55e;
          border-radius: 0.5rem;
          background: rgba(34, 197, 94, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
          transition: all 0.3s ease;
        }

        .company-logo-node:hover {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
          transform: scale(1.05);
        }

        .company-logo-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-node {
          width: 3rem;
          height: 3rem;
          border: 2px solid #4ade80;
          border-radius: 50%;
          background: rgba(74, 222, 128, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.2);
          transition: all 0.3s ease;
        }

        .project-node:hover {
          box-shadow: 0 0 25px rgba(74, 222, 128, 0.4);
          transform: scale(1.1);
        }

        .node-dot {
          width: 1rem;
          height: 1rem;
          background: #4ade80;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
        }

        .timeline-content {
          margin-left: 1rem;
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          background: rgba(34, 197, 94, 0.08);
          border-color: rgba(34, 197, 94, 0.3);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.1);
        }

        .timeline-date {
          color: #22c55e;
          font-size: 0.875rem;
          font-weight: bold;
          font-family: 'Courier New', monospace;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
          font-family: 'Courier New', monospace;
        }

        .timeline-company {
          color: #4ade80;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          font-family: 'Courier New', monospace;
        }

        .timeline-description {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-summary {
          color: #fbbf24;
          font-style: italic;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(251, 191, 36, 0.08);
          border-left: 3px solid #fbbf24;
          border-radius: 0 0.5rem 0.5rem 0;
          font-family: 'Courier New', monospace;
          text-shadow: 0 0 8px rgba(251, 191, 36, 0.2);
        }

        .timeline-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .skill-tag {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          font-size: 0.75rem;
          font-weight: bold;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          border: 1px solid rgba(34, 197, 94, 0.3);
          font-family: 'Courier New', monospace;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          color: #4ade80;
          font-size: 0.875rem;
          font-weight: bold;
          text-decoration: none;
          border: 1px solid #4ade80;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          font-family: 'Courier New', monospace;
        }

        .project-link:hover {
          background: #4ade80;
          color: #000000;
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.3);
        }

        .matrix-line {
          position: absolute;
          top: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #22c55e, transparent);
        }

        .matrix-line-1 {
          left: 10%;
          opacity: 0.2;
          animation: matrixFall 10s linear infinite;
        }

        .matrix-line-2 {
          left: 30%;
          opacity: 0.15;
          animation: matrixFall 15s linear infinite 3s;
        }

        .matrix-line-3 {
          right: 20%;
          opacity: 0.25;
          animation: matrixFall 12s linear infinite 6s;
        }

        .matrix-line-4 {
          right: 40%;
          opacity: 0.18;
          animation: matrixFall 18s linear infinite 2s;
        }

        .hacker-orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(to right, #4ade80, #16a34a);
        }

        .hacker-orb-1 {
          top: 20%;
          left: 15%;
          width: 0.75rem;
          height: 0.75rem;
          opacity: 0.4;
          animation: float 8s ease-in-out infinite;
        }

        .hacker-orb-2 {
          top: 60%;
          right: 25%;
          width: 1rem;
          height: 1rem;
          opacity: 0.3;
          animation: float 6s ease-in-out infinite 2s;
        }

        .hacker-orb-3 {
          bottom: 30%;
          left: 25%;
          width: 0.5rem;
          height: 0.5rem;
          opacity: 0.5;
          animation: float 10s ease-in-out infinite 4s;
        }

        .binary-code {
          position: absolute;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          opacity: 0.15;
        }

        .binary-code-1 {
          top: 25%;
          left: 5%;
          animation: binaryFlicker 3s ease-in-out infinite;
        }

        .binary-code-2 {
          bottom: 40%;
          right: 10%;
          animation: binaryFlicker 4s ease-in-out infinite 2s;
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
          25% { transform: translateY(-15px) translateX(8px); }
          50% { transform: translateY(-8px) translateX(-5px); }
          75% { transform: translateY(-12px) translateX(3px); }
        }

        @keyframes binaryFlicker {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }

        @media (max-width: 1023px) {
          .timeline-container {
            padding-left: 1.5rem;
          }
          
          .timeline-container::before {
            left: 1rem;
          }
          
          .timeline-node {
            left: -1.5rem;
          }
          
          .company-logo-node, .project-node {
            width: 3rem;
            height: 3rem;
          }
        }
      `}</style>
    </>
  );
} 