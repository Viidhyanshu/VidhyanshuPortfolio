import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">
              <i className="fas fa-link" />
            </div>
            <h3 className="project-title">TrustChain Microfinance Grid</h3>
            <p className="project-description">
              A microfinance grid prototype built with blockchain technology for
              secure and transparent financial transactions.
            </p>
            <a
              href="https://github.com/Viidhyanshu/TrustChain-Microfinance-Grid-Prototype.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github" /> View on GitHub
            </a>
          </div>
          <div className="project-card">
            <div className="project-icon">
              <i className="fas fa-phone" />
            </div>
            <h3 className="project-title">ShankhCall</h3>
            <p className="project-description">
              A communication application project focusing on seamless
              connectivity and user experience.
            </p>
            <a
              href="https://github.com/Viidhyanshu/shankhcall.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github" /> View on GitHub
            </a>
          </div>
          <div className="project-card">
            <div className="project-icon">
              <i className="fas fa-hand-pointer" />
            </div>
            <h3 className="project-title">On Air Keyboard</h3>
            <p className="project-description">
              An innovative virtual keyboard using OpenCV and MediaPipe for
              gesture-based input recognition.
            </p>
            <a
              href="https://github.com/Viidhyanshu/On_Air_Keyboard_Using_Opencv_Mediapipe.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github" /> View on GitHub
            </a>
          </div>
          <div className="project-card">
            <div className="project-icon">
              <i className="fa-solid fa-mug-hot" />
            </div>
            <h3 className="project-title">The Coffee Shop</h3>
            <p className="project-description">
              A cozy café-inspired website focused on clean design, warmth, and
              smooth user experience.
            </p>
            <a
              href="https://github.com/Viidhyanshu/FuzzySpoon.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github" /> View on GitHub
            </a>
          </div>
          <div className="project-card">
            <div className="project-icon">
              <i className="fas fa-car" />
            </div>
            <h3 className="project-title">F1 Telemetry Analytics Dashboard</h3>
            <p className="project-description">
              F1 telemetry dashboard transforming raw race data into interactive
              and intuitive insights.
            </p>
            <a
              href="https://github.com/Viidhyanshu/F1-Telemetry-Analytics-Dashboard.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github" /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
