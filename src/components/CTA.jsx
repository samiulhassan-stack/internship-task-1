import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Ready to Transform Your Workflow?</h2>
            <p className="cta-description">
              Join thousands of teams already using TaskFlow to accomplish more every day. 
              Start your free 14-day trial — no credit card required.
            </p>
          </div>
          <div className="cta-actions">
            <a href="#signup" className="btn btn-primary btn-large">
              Start Free Trial
            </a>
            <a href="#demo" className="btn btn-secondary btn-large">
              Schedule Demo
            </a>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
