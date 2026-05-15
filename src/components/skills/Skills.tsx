import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Tools</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="fab fa-react" />
                <span>Next.js</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-react" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-wind" />
                <span>Tailwind</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-code" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Backend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="fab fa-node-js" />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-server" />
                <span>Express.js</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-leaf" />
                <span>SpringBoot</span>
              </div>
               <div className="skill-item">
                <i className="fas fa-database" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="fas fa-code" />
                <span>C++</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-code" />
                <span>C</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-java" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-python" />
                <span>Python</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Tools</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="fab fa-github" />
                <span>Github</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-cube" />
                <span>Blender</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-laptop-code" />
                <span>VS Code</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-figma" />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
