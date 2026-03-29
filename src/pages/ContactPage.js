import React, { useState, useEffect, useRef } from 'react';

function ContactPage() {
  const pageRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      pageRef.current.classList.add('page-visible');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div ref={pageRef} className="page-enter">
      {/* ======== HERO ======== */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* ======== CONTACT CONTENT ======== */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-info-cards">
              

              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>rhouibi.pro@gmail.com<br />support@mybrand.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+212 722770801<br />Anytime</p>
                </div>
              </div>

              
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div style={{
                  padding: '16px 20px',
                  background: '#e8fff0',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--success)',
                  marginBottom: '24px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

           

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ======== MAP PLACEHOLDER ======== */}
      <section style={{ background: 'var(--gray-200)', padding: '0' }}>
        <div style={{
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '16px',
          color: 'var(--gray-500)',
        }}>
          <i className="fas fa-map-marked-alt" style={{ fontSize: '3rem' }}></i>
          <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>
            Map Integration — Add Google Maps or Mapbox here
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;