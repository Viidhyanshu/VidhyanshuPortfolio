import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <strong>Vidhyanshu Kumar</strong>, a second-year student
              at Manipal University Jaipur with a passion for software development
              and problem-solving.
            </p>
            <p>
              I enjoy building innovative projects and solving complex challenges.
              My journey in tech has led me to explore various technologies and
              work on exciting projects that combine creativity with technical
              skills.
            </p>
            <p>
              When I'm not coding, I'm constantly learning new technologies and
              contributing to open-source projects. I believe in continuous
              learning and pushing the boundaries of what's possible.
            </p>
          </div>
          <div className="about-links">
            <a
              href="https://github.com/viidhyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <i className="fab fa-github" />
              <span>GitHub: viidhyanshu</span>
            </a>
            <a
              href="https://leetcode.com/viidhyashu"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <i className="fas fa-code" />
              <span>LeetCode: viidhyanshu</span>
            </a>
            <a
              href="https://www.linkedin.com/in/viidhyanshu/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <i className="fab fa-linkedin" />
              <span>LinkedIn: Vidhyanshu Kumar</span>
            </a>
            <a href="mailto:viidhyasnhu@gmail.com" className="link-card">
              <i className="fas fa-envelope" />
              <span>Email: viidhyasnhu@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
