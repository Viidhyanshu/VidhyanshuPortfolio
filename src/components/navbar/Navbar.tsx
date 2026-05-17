import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
           <i className="fa-brands fa-fulcrum"></i>
          </div>
          <div className="logo-text">
            <span className="logo-main">VIDHYANSHU</span>
            <span className="logo-sub">KUMAR</span>
          </div>
        </div>
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
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

          <div className="menu-middle-section">
            <div className="nav-links">
              <a href="#home" className="nav-link" onClick={closeMenu}>
                HOME
              </a>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                ABOUT
              </a>
              <a href="#projects" className="nav-link" onClick={closeMenu}>
                PROJECTS
              </a>
              <a href="#skills" className="nav-link" onClick={closeMenu}>
                SKILLS
              </a>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                CONTACT
              </a>
            </div>

            <div className="vertical-divider" />

            <div className="theme-toggle-wrapper">
              <span className="theme-label-text dark">Dark Mode</span>
              <div className="theme-toggle">
                <input type="checkbox" id="theme-toggle" className="theme-checkbox" />
                <label htmlFor="theme-toggle" className="theme-label">
                  <i className="fas fa-moon theme-icon moon-icon" />
                  <i className="fas fa-sun theme-icon sun-icon" />
                  <span className="theme-slider" />
                </label>
              </div>
              <span className="theme-label-text light">Light Mode</span>
            </div>
          </div>

          <div className="menu-bottom-section">
            <p className="welcome-text">Welcome to My Portfolio</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
