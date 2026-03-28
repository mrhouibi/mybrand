import React from 'react';

function ServiceCard({ icon, title, description, color, delay }) {
  return (
    <div
      className="service-card"
      style={{ animationDelay: delay || '0s' }}
    >
      <div className={`service-icon ${color}`}>
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#!" className="learn-more">
        Learn more <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
}

export default ServiceCard;