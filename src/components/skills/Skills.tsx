import React from 'react';
import { 
  SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTypescript,
  SiNodedotjs, SiExpress, SiSpringboot, SiMysql, SiPostgresql, SiMongodb,
  SiCplusplus, SiC, SiPython, SiGo,
  SiGithub, SiBlender, SiFigma, SiLinux, SiDocker
} from 'react-icons/si';
import { FaCss3Alt, FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Tools</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skills-grid">
              <div className="skill-item" style={{ '--brand-color': '#E34F26' } as React.CSSProperties}>
                <SiHtml5 />
                <span>HTML</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#1572B6' } as React.CSSProperties}>
                <FaCss3Alt />
                <span>CSS</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#F7DF1E' } as React.CSSProperties}>
                <SiJavascript />
                <span>JavaScript</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#ffffff' } as React.CSSProperties}>
                <SiNextdotjs />
                <span>Next.js</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#61DAFB' } as React.CSSProperties}>
                <SiReact />
                <span>React</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#3178C6' } as React.CSSProperties}>
                <SiTypescript />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Backend</h3>
            <div className="skills-grid">
              <div className="skill-item" style={{ '--brand-color': '#339933' } as React.CSSProperties}>
                <SiNodedotjs />
                <span>Node.js</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#ffffff' } as React.CSSProperties}>
                <SiExpress />
                <span>Express.js</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#6DB33F' } as React.CSSProperties}>
                <SiSpringboot />
                <span>SpringBoot</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#4479A1' } as React.CSSProperties}>
                <SiMysql />
                <span>MySQL</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#4169E1' } as React.CSSProperties}>
                <SiPostgresql />
                <span>PostgreSQL</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#47A248' } as React.CSSProperties}>
                <SiMongodb />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Languages</h3>
            <div className="skills-grid">
              <div className="skill-item" style={{ '--brand-color': '#00599C' } as React.CSSProperties}>
                <SiCplusplus />
                <span>C++</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#A8B9CC' } as React.CSSProperties}>
                <SiC />
                <span>C</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#007396' } as React.CSSProperties}>
                <FaJava />
                <span>Java</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#3776AB' } as React.CSSProperties}>
                <SiPython />
                <span>Python</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#00ADD8' } as React.CSSProperties}>
                <SiGo />
                <span>Go</span>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Tools</h3>
            <div className="skills-grid">
              <div className="skill-item" style={{ '--brand-color': '#ffffff' } as React.CSSProperties}>
                <SiGithub />
                <span>Github</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#F5792A' } as React.CSSProperties}>
                <SiBlender />
                <span>Blender</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#007ACC' } as React.CSSProperties}>
                <VscCode />
                <span>VS Code</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#F24E1E' } as React.CSSProperties}>
                <SiFigma />
                <span>Figma</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#FCC624' } as React.CSSProperties}>
                <SiLinux />
                <span>Linux</span>
              </div>
              <div className="skill-item" style={{ '--brand-color': '#2496ED' } as React.CSSProperties}>
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
