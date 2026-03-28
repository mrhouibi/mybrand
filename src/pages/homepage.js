import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/servicecard';
import GojsDiagram from '../components/GojsDiagram';

function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      pageRef.current.classList.add('page-visible');
    }
  }, []);

  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies. Fast, secure, and scalable.',
      color: 'purple',
    },
   
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that put your users first and drive engagement.',
      color: 'blue',
    },
   
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      initials: 'SJ',
      quote: 'Working with this team was an absolute game-changer. They delivered beyond our expectations and the results speak for themselves.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow',
      initials: 'MC',
      quote: 'The technical expertise and attention to detail is unmatched. Our platform performance improved by 300% after their optimization.',
    },
    {
      name: 'Emily Davis',
      role: 'Founder, DesignHub',
      initials: 'ED',
      quote: 'From concept to launch, they guided us every step of the way. The design quality and user experience exceeded all expectations.',
    },
  ];

  return (
    <div ref={pageRef} className="page-enter">
      {/* ======== HERO SECTION ======== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <i className="fas fa-sparkles"></i>
              Welcome to MyBrand
            </div>
            <h1 className="hero-title">
              We Build
              <br />
              <span className="gradient-text">Digital Experiences</span>
              <br />
              That Matter
            </h1>
            <p className="hero-description">
              Transform your ideas into powerful digital solutions. We combine
              cutting-edge technology with creative design to help your
              business thrive in the digital age.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start a Project <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number gradient-text">250+</div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number gradient-text">50+</div>
                <div className="hero-stat-label">Team Members</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number gradient-text">99%</div>
                <div className="hero-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-content">
                <i className="fas fa-rocket"></i>
                <p>Launch Your Vision</p>
              </div>
            </div>

            <div className="hero-floating-card card-1">
              <div className="card-icon green">
                <i className="fas fa-check"></i>
              </div>
              <div className="card-text">
                <strong>Project Delivered</strong>
                <span>Just now</span>
              </div>
            </div>

            <div className="hero-floating-card card-2">
              <div className="card-icon blue">
                <i className="fas fa-users"></i>
              </div>
              <div className="card-text">
                <strong>+12 New Clients</strong>
                <span>This month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SERVICES PREVIEW ======== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Explore Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            We offer a comprehensive range of digital services designed to
            elevate your business and deliver exceptional results.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                delay={`${index * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======== GOJS DIAGRAM ======== */}
      <section className="section diagram-section">
        <div className="container">
          <h2 className="section-title">
            Our <span className="gradient-text">Organization</span>
          </h2>
          <p className="section-subtitle">
            Interactive organization chart built with GoJS. Drag nodes
            around, zoom in and out, and explore our team structure.
          </p>
          <GojsDiagram />
        </div>
      </section>

      {/* ======== TESTIMONIALS ======== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to
            say about working with us.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <blockquote>"{t.quote}"</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-author-avatar">{t.initials}</div>
                  <div className="testimonial-author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA SECTION ======== */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's work together to bring your ideas to life.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-outline">
              Get in Touch <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;