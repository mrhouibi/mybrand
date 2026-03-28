import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/servicecard';
import GojsDiagram from '../components/GojsDiagram';

function ServicesPage() {
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
      description: 'Custom websites and web applications built with React, Node.js, and modern frameworks. Fully responsive and optimized for performance.',
      color: 'purple',
    },
   
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'User-centered design process from research to prototyping. Figma, Sketch, and Adobe XD expertise.',
      color: 'blue',
    },
    
  ];

  // Custom workflow diagram data
  const workflowNodes = [
    { key: 1, name: 'Discovery', role: 'Phase 1', color: '#6c63ff' },
    { key: 2, name: 'Planning', role: 'Phase 2', color: '#8b85ff' },
    { key: 3, name: 'Design', role: 'Phase 3', color: '#ff6584' },
    { key: 4, name: 'Development', role: 'Phase 4', color: '#00d2ff' },
    { key: 5, name: 'Testing', role: 'Phase 5', color: '#00c851' },
    { key: 6, name: 'Launch', role: 'Phase 6', color: '#ff9800' },
    { key: 7, name: 'Support', role: 'Ongoing', color: '#e040fb' },
  ];

  const workflowLinks = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 6, to: 7 },
  ];

  return (
    <div ref={pageRef} className="page-enter">
      {/* ======== HERO ======== */}
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            Comprehensive digital solutions tailored to your business needs.
            From concept to deployment and beyond.
          </p>
        </div>
      </section>

      {/* ======== ALL SERVICES ======== */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======== WORKFLOW DIAGRAM ======== */}
      <section className="section diagram-section">
        <div className="container">
          <h2 className="section-title">
            Our <span className="gradient-text">Workflow</span>
          </h2>
          <p className="section-subtitle">
            A proven process that delivers results. Each phase is carefully
            designed to ensure quality and efficiency.
          </p>
          <GojsDiagram
            nodeDataArray={workflowNodes}
            linkDataArray={workflowLinks}
          />
        </div>
      </section>

      {/* ======== PRICING TEASER ======== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Transparent pricing with no hidden fees. Choose the plan that
            works best for your project.
          </p>
          <div className="services-grid">
            {[
              { name: 'Starter', price: '1000 MAD', features: ['Single Page Website', 'Responsive Design', 'SEO Basics', '12 Month Support'] },
              { name: 'Professional', price: '3000MAD', features: ['Multi-page Web App', 'Custom UI/UX Design', 'API Integration', '12 Months Support'] },
             
            ].map((plan, i) => (
              <div className="service-card" key={i} style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>{plan.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '16px 0', color: 'var(--dark)' }}>
                  {plan.price}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '24px' }}>
                  per project
                </p>
                <ul style={{ textAlign: 'left', marginBottom: '24px' }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ padding: '8px 0', borderBottom: '1px solid var(--gray-200)', color: 'var(--gray-700)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fas fa-check" style={{ color: 'var(--success)', fontSize: '0.8rem' }}></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="cta-section">
        <div className="container">
          <h2>Need a Custom Solution?</h2>
          <p>Let's discuss your specific requirements and build something amazing.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-outline">
              Contact Us <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;