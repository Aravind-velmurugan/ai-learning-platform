// src/Features.js
import React from 'react';

const Features = () => {
  return (
    <div className="page features">
      <h1>Explore Our Powerful Features</h1>
      <div className="features-grid">
        <div className="feature-card premium">
          <h3>AI-Driven Learning Paths</h3>
          <p>Our AI adapts to your unique learning style, providing you with personalized content every step of the way.</p>
        </div>
        <div className="feature-card premium">
          <h3>Instant Skill-Based Feedback</h3>
          <p>With instant feedback, stay on track with recommendations tailored to improve your skills.</p>
        </div>
        <div className="feature-card premium">
          <h3>Gamified Progress Tracking</h3>
          <p>Track your achievements and earn badges, keeping you motivated as you advance through challenges.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
