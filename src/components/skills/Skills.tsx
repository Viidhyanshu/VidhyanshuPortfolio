import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Tools</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Tech Stack</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="fab fa-html5" />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-css3-alt" />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-js" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-react" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-node-js" />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-database" />
                <span>Full Stack</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-java" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-code" />
                <span>C/C++</span>
              </div>
            </div>
          </div>
          <div className="skills-category">
            <h3 className="category-title">Tools</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="fab fa-github" />
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-terminal" />
                <span>Kali Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
