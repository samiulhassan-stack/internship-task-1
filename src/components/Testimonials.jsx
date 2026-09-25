import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Sami Hassan',
      role: 'Product Manager at TechCorp',
      avatar: '👨‍💼',
      content: 'TaskFlow has completely transformed how our team manages projects. The intuitive interface and powerful features make collaboration effortless.',
      rating: 5
    },
    {
      name: 'Shawaiz Ahmed',
      role: 'CEO at StartupXYZ',
      avatar: '👨‍💻',
      content: 'We tried dozens of project management tools, but TaskFlow is the only one that our entire team actually enjoys using. The automation features are game-changing.',
      rating: 5
    },
    {
      name: 'Hassan Ali',
      role: 'Design Lead at Creative Agency',
      avatar: '👨‍🎨',
      content: 'Beautiful design meets powerful functionality. TaskFlow helps us stay organized while keeping the creative process flowing smoothly.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Loved by Teams Worldwide</h2>
          <p className="section-subtitle">
            See what our customers have to say about their experience with TaskFlow
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
