import './Features.css'

function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Task Management',
      description: 'Create, organize, and prioritize tasks with intuitive drag-and-drop interface.'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time updates and team chat.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Visualize your progress with detailed analytics and reporting tools.'
    },
    {
      icon: '⚡',
      title: 'Automation',
      description: 'Automate repetitive tasks and workflows to save time and boost efficiency.'
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Stay informed with intelligent notifications that matter to you.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Enterprise-grade security with end-to-end encryption for your data.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything You Need to Stay Productive</h2>
          <p className="section-subtitle">
            Powerful features designed to help individuals and teams accomplish more
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
