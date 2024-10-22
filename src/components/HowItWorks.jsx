import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="page how-it-works">
      <h1>How AI Transforms Your Learning</h1>
      <p>Experience a personalized, adaptive learning journey that evolves with your progress.</p>
      <div className="steps-grid">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>AI-Powered Assessment</h3>
          <p>We analyze your existing skills and knowledge base to create a tailored plan.</p>
        </div>
        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Personalized Learning</h3>
          <p>Receive a custom learning path filled with challenges that align with your goals.</p>
        </div>
        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Real-World Projects</h3>
          <p>Engage in hands-on projects that mirror real industry challenges.</p>
        </div>
        <div className="step-card">
          <div className="step-number">4</div>
          <h3>Continuous AI Feedback</h3>
          <p>Get AI-driven feedback after every step, ensuring consistent improvement.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
