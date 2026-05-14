import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="contact-links">
            <a href="mailto:viidhyasnhu@gmail.com" className="contact-card">
              <i className="fas fa-envelope" />
              <h3>Email</h3>
              <p>viidhyasnhu@gmail.com</p>
            </a>
            <a
              href="https://github.com/viidhyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <i className="fab fa-github" />
              <h3>GitHub</h3>
              <p>viidhyanshu</p>
            </a>
            <a
              href="https://www.linkedin.com/in/viidhyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <i className="fab fa-linkedin" />
              <h3>LinkedIn</h3>
              <p>Vidhyanshu Kumar</p>
            </a>
            <a
              href="https://leetcode.com/viidhyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <i className="fas fa-code" />
              <h3>LeetCode</h3>
              <p>viidhyanshu</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
