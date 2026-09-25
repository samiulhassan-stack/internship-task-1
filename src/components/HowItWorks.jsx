import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Workspace',
      description: 'Set up your team workspace in seconds. Invite team members and get everyone on the same page.',
      icon: '🚀'
    },
    {
      number: '02',
      title: 'Organize Tasks',
      description: 'Create projects, add tasks, and organize them with custom boards, lists, and tags.',
      icon: '📋'
    },
    {
      number: '03',
      title: 'Collaborate Seamlessly',
      description: 'Assign tasks, set deadlines, comment, and track progress in real-time with your team.',
      icon: '🤝'
    },
    {
      number: '04',
      title: 'Achieve Your Goals',
      description: 'Monitor progress with powerful analytics and celebrate milestones as you complete projects.',
      icon: '🎯'
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How TaskFlow Works</h2>
          <p className="section-subtitle">
            Get started in minutes and transform the way your team works together
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
