import './Pricing.css'

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      period: 'Forever free',
      description: 'Perfect for individuals and small teams getting started',
      features: [
        'Up to 3 team members',
        '10 projects',
        'Basic task management',
        'Mobile app access',
        'Community support'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '12',
      period: 'per user/month',
      description: 'Ideal for growing teams that need advanced features',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Advanced automation',
        'Priority support',
        'Custom workflows',
        'Integrations',
        'Analytics & reporting'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact sales',
      description: 'For large organizations with specific requirements',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'On-premise option',
        'Training & onboarding'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the perfect plan for your team. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {plan.price !== 'Custom' && <span className="currency">$</span>}
                  <span className="amount">{plan.price}</span>
                </div>
                <div className="plan-period">{plan.period}</div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#6366f1" opacity="0.1"/>
                      <path d="M6 10L9 13L14 7" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#signup" className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'} btn-large plan-cta`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
