import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-text">
            <span className="logo-main">VIDHYANSHU</span>
            <span className="logo-sub">KUMAR</span>
          </div>
        </div>
        <button className="mobile-menu-toggle" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
        <nav className="nav">
          <a href="#home" className="nav-link">
            HOME
          </a>
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#projects" className="nav-link">
            PROJECTS
          </a>
          <a href="#skills" className="nav-link">
            SKILLS
          </a>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </nav>
        <div className="header-right">
          <div className="theme-toggle">
            <input type="checkbox" id="theme-toggle" className="theme-checkbox" />
            <label htmlFor="theme-toggle" className="theme-label">
              <i className="fas fa-moon theme-icon moon-icon" />
              <i className="fas fa-sun theme-icon sun-icon" />
              <span className="theme-slider" />
            </label>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/viidhyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/viidhyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://leetcode.com/viidhyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LeetCode"
            >
              <i className="fas fa-code" />
            </a>
            <a
              href="mailto:viidhyasnhu@gmail.com"
              className="social-icon"
              title="Email"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
