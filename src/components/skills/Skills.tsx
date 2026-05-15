import React from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiReact, SiTypescript,
  SiNodedotjs, SiExpress, SiSpringboot, SiMysql, SiPostgresql, SiMongodb,
  SiCplusplus, SiC, SiJava, SiPython,
  SiGithub, SiBlender, SiVisualstudiocode, SiFigma, SiLinux, SiDocker
} from 'react-icons/si';

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
                <SiHtml5 />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <SiCss3 />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <SiJavascript />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <SiNextdotjs />
                <span>Next.js</span>
              </div>
              <div className="skill-item">
                <SiReact />
                <span>React</span>
              </div>
              <div className="skill-item">
                <SiTypescript />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Backend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <SiNodedotjs />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <SiExpress />
                <span>Express.js</span>
              </div>
              <div className="skill-item">
                <SiSpringboot />
                <span>SpringBoot</span>
              </div>
              <div className="skill-item">
                <SiMysql />
                <span>MySQL</span>
              </div>
              <div className="skill-item">
                <SiPostgresql />
                <span>PostgreSQL</span>
              </div>
              <div className="skill-item">
                <SiMongodb />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <SiCplusplus />
                <span>C++</span>
              </div>
              <div className="skill-item">
                <SiC />
                <span>C</span>
              </div>
              <div className="skill-item">
                <SiJava />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <SiPython />
                <span>Python</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Tools</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <SiGithub />
                <span>Github</span>
              </div>
              <div className="skill-item">
                <SiBlender />
                <span>Blender</span>
              </div>
              <div className="skill-item">
                <SiVisualstudiocode />
                <span>VS Code</span>
              </div>
              <div className="skill-item">
                <SiFigma />
                <span>Figma</span>
              </div>
              <div className="skill-item">
                <SiLinux />
                <span>Linux</span>
              </div>
              <div className="skill-item">
                <SiDocker />
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
