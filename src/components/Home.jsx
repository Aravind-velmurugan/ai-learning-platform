import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="page home">
      <section className="hero">
        <div className="glass">
          <h1>Revolutionizing Learning with AI</h1>
          <p>Accelerate your learning journey with personalized AI-powered solutions, designed to optimize your success.</p>
          <button className="cta-button">Explore Our Platform</button>
        </div>
      </section>

      <section className="offerings">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card premium">
            <h3>Customized Learning Paths</h3>
            <p>Leverage AI to create a learning experience tailored specifically to your strengths and weaknesses.</p>
          </div>
          <div className="feature-card premium">
            <h3>Real-Life Problem Solving</h3>
            <p>Work on projects that replicate real-world challenges, preparing you for the future.</p>
          </div>
          <div className="feature-card premium">
            <h3>Instant AI Feedback</h3>
            <p>Receive immediate feedback to enhance your learning in real-time.</p>
          </div>
        </div>
        <button className="cta-button">Get Started for Free</button>
      </section>
    </div>
  );
};

export default Home;
