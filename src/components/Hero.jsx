import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">✨</span>
              <span>Now with AI-powered insights</span>
            </div>
            <h1 className="hero-title">
              Manage Your Tasks.
              <span className="gradient-text"> Amplify Your Productivity.</span>
            </h1>
            <p className="hero-description">
              TaskFlow helps teams organize, track, and manage their work seamlessly. 
              From simple to-do lists to complex project management, we've got you covered.
            </p>
            <div className="hero-actions">
              <a href="#signup" className="btn btn-primary btn-large">
                Start Free Trial
              </a>
              <a href="#demo" className="btn btn-secondary btn-large">
                Watch Demo
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Tasks Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card card-1">
              <div className="card-header">
                <div className="status-dot status-active"></div>
                <span>In Progress</span>
              </div>
              <h3>Design System Update</h3>
              <div className="card-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '75%'}}></div>
                </div>
                <span className="progress-text">75%</span>
              </div>
            </div>
            <div className="hero-card card-2">
              <div className="card-header">
                <div className="status-dot status-complete"></div>
                <span>Completed</span>
              </div>
              <h3>Client Presentation</h3>
              <div className="card-tags">
                <span className="tag">Marketing</span>
                <span className="tag">High Priority</span>
              </div>
            </div>
            <div className="hero-card card-3">
              <div className="card-header">
                <div className="status-dot status-pending"></div>
                <span>Todo</span>
              </div>
              <h3>Code Review Session</h3>
              <p className="card-date">📅 Tomorrow, 2:00 PM</p>
            </div>
            <div className="floating-element element-1">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="url(#grad1)" opacity="0.2"/>
                <path d="M20 30L27 37L40 23" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="grad1">
                    <stop stopColor="#6366f1"/>
                    <stop offset="1" stopColor="#ec4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="floating-element element-2">
              <div className="notification">
                <span>🎉 Task completed!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
