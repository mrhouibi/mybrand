import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      pageRef.current.classList.add('page-visible');
    }
  }, []);

  const team = [
    { name: 'Alex Rivera', role: 'Founder & CEO', initials: 'AR', bio: 'Visionary leader with 15+ years in tech and a passion for innovation.' },
    { name: 'Jordan Lee', role: 'Lead Designer', initials: 'JL', bio: 'Award-winning designer who creates intuitive and beautiful experiences.' },
    { name: 'Sam Patel', role: 'CTO', initials: 'SP', bio: 'Full-stack architect with expertise in scalable cloud solutions.' },
    { name: 'Casey Morgan', role: 'Head of Marketing', initials: 'CM', bio: 'Growth strategist who turns brands into household names.' },
  ];

  const values = [
    { icon: 'fas fa-lightbulb', title: 'Innovation', desc: 'We push boundaries and embrace new technologies to deliver cutting-edge solutions.' },
    { icon: 'fas fa-handshake', title: 'Integrity', desc: 'We operate with transparency, honesty, and a commitment to doing what\'s right.' },
    { icon: 'fas fa-users', title: 'Collaboration', desc: 'We believe the best work comes from diverse teams working together.' },
    { icon: 'fas fa-trophy', title: 'Excellence', desc: 'We never settle for good enough. Every detail matters in what we deliver.' },
  ];

  return (
    <div ref={pageRef} className="page-enter">
      {/* ======== ABOUT HERO ======== */}
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            About <span className="gradient-text">Us</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            We're a team of passionate creators, developers, and strategists
            dedicated to building remarkable digital experiences.
          </p>
        </div>
      </section>

      {/* ======== OUR STORY ======== */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <i className="fas fa-building"></i>
            </div>
            <div className="about-text">
              <h2>Our <span className="gradient-text">Story</span></h2>
              <p>
                Founded in 2018, MyBrand started as a small team of three
                developers with a shared vision: to make high-quality digital
                solutions accessible to businesses of all sizes.
              </p>
              <p>
                Today, we've grown into a team of 50+ talented professionals
                serving clients worldwide. We've completed over 250 projects
                and continue to push the boundaries of what's possible in
                digital technology.
              </p>
              <p>
                Our journey has been driven by a simple belief — great
                technology should solve real problems and create genuine
                value for the people who use it.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>250+ Projects Delivered</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>50+ Team Members</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>15+ Countries Served</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>99% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== OUR VALUES ======== */}
      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <h2 className="section-title">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="section-subtitle">
            The principles that guide everything we do.
          </p>
          <div className="services-grid">
            {values.map((v, i) => (
              <div className="service-card" key={i}>
                <div className={`service-icon ${['purple', 'blue', 'green', 'orange'][i]}`}>
                  <i className={v.icon}></i>
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== TEAM ======== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="section-subtitle">
            The talented people behind our success.
          </p>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <p className="bio">{member.bio}</p>
                <div className="team-socials">
                  <a href="#!"><i className="fab fa-twitter"></i></a>
                  <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#!"><i className="fab fa-github"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="cta-section">
        <div className="container">
          <h2>Want to Join Our Team?</h2>
          <p>We're always looking for talented people to join us.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-outline">
              Get in Touch <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;