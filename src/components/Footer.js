import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-about">
            <div className="logo">
              <div className="logo-icon">
                <i className="fas fa-cube"></i>
              </div>
              <span>MyBrand</span>
            </div>
            <p>
              We build amazing digital experiences that help businesses grow
              and succeed in the modern world. Let's create something
              extraordinary together.
            </p>
            <div className="footer-social">
              <a href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#!" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#!" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#!">Web Development</a></li>
              <li><a href="#!">Mobile Apps</a></li>
              <li><a href="#!">UI/UX Design</a></li>
              <li><a href="#!">Cloud Solutions</a></li>
              <li><a href="#!">Consulting</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h4>Newsletter</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Subscribe to get the latest news and updates from us.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved. Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;