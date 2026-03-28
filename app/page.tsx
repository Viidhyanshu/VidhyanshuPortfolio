"use client"
import { useEffect } from "react"


import "./globals.css"


export default function Home() {
    useEffect(() => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-link')

    const scrollSpy = () => {
      let current = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })

      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', scrollSpy)


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    const animatedElements = document.querySelectorAll(
      '.project-card, .skill-item, .contact-card, .link-card'
    )

    animatedElements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })


    const header = document.querySelector('.header')
    const body = document.body

    const updateHeaderBackground = () => {
      if (!header) return

      const isDayMode = body.classList.contains('day-mode')

      if (window.pageYOffset > 100) {
        header.style.backgroundColor = isDayMode
          ? 'rgba(135, 206, 235, 0.98)'
          : 'rgba(26, 35, 50, 0.98)'
      } else {
        header.style.backgroundColor = isDayMode
          ? 'rgba(135, 206, 235, 0.95)'
          : 'rgba(26, 35, 50, 0.95)'
      }

      header.style.backdropFilter = 'blur(10px)'
    }

    window.addEventListener('scroll', updateHeaderBackground)


    const mobileToggle = document.querySelector('.mobile-menu-toggle')
    const nav = document.querySelector('.nav')

    if (mobileToggle && nav) {

      mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active')
        nav.classList.toggle('active')
        document.body.style.overflow =
          nav.classList.contains('active') ? 'hidden' : ''
      })

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileToggle.classList.remove('active')
          nav.classList.remove('active')
          document.body.style.overflow = ''
        })
      })

      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
          mobileToggle.classList.remove('active')
          nav.classList.remove('active')
          document.body.style.overflow = ''
        }
      })

      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          mobileToggle.classList.remove('active')
          nav.classList.remove('active')
          document.body.style.overflow = ''
        }
      })
    }


    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.borderLeft = '4px solid var(--primary-blue)'
      })

      card.addEventListener('mouseleave', () => {
        card.style.borderLeft = 'none'
      })
    })


    const hero = document.querySelector('.hero-content')
    if (hero) {
      hero.style.opacity = '0'
      hero.style.transition = 'opacity 1s ease-in'
      setTimeout(() => {
        hero.style.opacity = '1'
      }, 100)
    }

    const themeToggle = document.getElementById('theme-toggle')

    if (themeToggle) {

      const savedTheme = localStorage.getItem('theme') || 'night'

      if (savedTheme === 'day') {
        themeToggle.checked = true
        body.classList.add('day-mode')
      }

      updateHeaderBackground()

      themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
          body.classList.add('day-mode')
          localStorage.setItem('theme', 'day')
        } else {
          body.classList.remove('day-mode')
          localStorage.setItem('theme', 'night')
        }

        updateHeaderBackground()
        setTimeout(updateSunMoonPositions, 600)
      })
    }

    const updateSunMoonPositions = () => {

      const sun = document.querySelector('.sun')
      const moon = document.querySelector('.moon')

      if (sun && sun.offsetParent !== null) {
        const r = sun.getBoundingClientRect()
        document.documentElement.style.setProperty('--sun-x',
          `${(r.left + r.width / 2) / window.innerWidth * 100}%`)
        document.documentElement.style.setProperty('--sun-y',
          `${(r.top + r.height / 2) / window.innerHeight * 100}%`)
      }

      if (moon && moon.offsetParent !== null) {
        const r = moon.getBoundingClientRect()
        document.documentElement.style.setProperty('--moon-x',
          `${(r.left + r.width / 2) / window.innerWidth * 100}%`)
        document.documentElement.style.setProperty('--moon-y',
          `${(r.top + r.height / 2) / window.innerHeight * 100}%`)
      }
    }

    updateSunMoonPositions()

    window.addEventListener('resize', updateSunMoonPositions)
    window.addEventListener('scroll', updateSunMoonPositions)


    return () => {
      window.removeEventListener('scroll', scrollSpy)
      window.removeEventListener('scroll', updateHeaderBackground)
      window.removeEventListener('resize', updateSunMoonPositions)
      window.removeEventListener('scroll', updateSunMoonPositions)
    }

  

  }, [])
  
  return (
    <>
  <meta charSet="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
  />
  <meta
    name="description"
    content="Portfolio of Vidhyanshu Kumar - First Year Student at Manipal University Jaipur | Developer | Problem Solver"
  />
  <meta name="theme-color" content="#1a2332" />
  <title>Vidhyanshu Kumar</title>
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <header className="header">
    <div className="container">
      <div className="logo">
        <div className="logo-icon">
          <i className="fa-brands fa-studiovinari" />
        </div>
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
            className="social-icon"
            title="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/viidhyanshu"
            target="_blank"
            className="social-icon"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://leetcode.com/viidhyashu"
            target="_blank"
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
  {/* Hero Section */}
  <section id="home" className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-subtitle">
        First Year Student | Developer | Problem Solver
      </p>
      <p className="hero-description">Manipal University Jaipur</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get In Touch
        </a>
      </div>
    </div>
    <div className="hero-illustration">
      <div className="sky" />
      <div className="milky-way" />
      <div className="stars">
        <div className="star star-1" />
        <div className="star star-2" />
        <div className="star star-3" />
        <div className="star star-4" />
        <div className="star star-5" />
        <div className="star star-6" />
        <div className="star star-7" />
        <div className="star star-8" />
        <div className="star star-9" />
        <div className="star star-10" />
        <div className="star star-11" />
        <div className="star star-12" />
      </div>
      {/* Ursa Major (Big Dipper) Constellation */}
      <div className="constellation ursa-major">
        <svg
          className="constellation-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Big Dipper lines */}
          <line
            x1={15}
            y1={25}
            x2={20}
            y2={30}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={20}
            y1={30}
            x2={25}
            y2={28}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={25}
            y1={28}
            x2={30}
            y2={32}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={30}
            y1={32}
            x2={35}
            y2={30}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={35}
            y1={30}
            x2={40}
            y2={35}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={30}
            y1={32}
            x2={40}
            y2={35}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={40}
            y1={35}
            x2={45}
            y2={38}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
        </svg>
        {/* Big Dipper stars */}
        <div className="constellation-star cs-1" />
        <div className="constellation-star cs-2" />
        <div className="constellation-star cs-3" />
        <div className="constellation-star cs-4" />
        <div className="constellation-star cs-5" />
        <div className="constellation-star cs-6" />
        <div className="constellation-star cs-7" />
      </div>
      {/* Orion Constellation */}
      <div className="constellation orion">
        <svg
          className="constellation-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Orion's Belt */}
          <line
            x1={60}
            y1={40}
            x2={65}
            y2={40}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={65}
            y1={40}
            x2={70}
            y2={40}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          {/* Orion's Body */}
          <line
            x1={65}
            y1={40}
            x2={65}
            y2={35}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={65}
            y1={40}
            x2={65}
            y2={45}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={60}
            y1={40}
            x2={62}
            y2={35}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
          <line
            x1={70}
            y1={40}
            x2={68}
            y2={35}
            stroke="rgba(245, 243, 231, 0.3)"
            strokeWidth="0.5"
          />
        </svg>
        {/* Orion stars */}
        <div className="constellation-star orion-1" />
        <div className="constellation-star orion-2" />
        <div className="constellation-star orion-3" />
        <div className="constellation-star orion-4" />
        <div className="constellation-star orion-5" />
        <div className="constellation-star orion-6" />
      </div>
      <div className="moon">
        <div className="moon-glow" />
        <div className="moon-body" />
      </div>
      <div className="sun">
        <div className="sun-glow" />
        <div className="sun-body" />
      </div>
      <div className="clouds-day">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>
      <div className="birds">
        <div className="bird" />
        <div className="bird" />
        <div className="bird" />
      </div>
      <div className="mountains">
        <div className="mountain mountain-1" />
        <div className="mountain mountain-2" />
        <div className="mountain mountain-3" />
      </div>
      <div className="foreground">
        <div className="trees">
          <div className="tree tree-1" />
          <div className="tree tree-2" />
          <div className="tree tree-3" />
        </div>
        <div className="person-silhouette">
          <div className="person-head" />
          <div className="person-body" />
        </div>
      </div>
    </div>
  </section>
  {/* About Section */}
  <section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm <strong>Vidhyanshu Kumar</strong>, a first-year student
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
            className="link-card"
          >
            <i className="fab fa-github" />
            <span>GitHub: viidhyanshu</span>
          </a>
          <a
            href="https://leetcode.com/viidhyashu"
            target="_blank"
            className="link-card"
          >
            <i className="fas fa-code" />
            <span>LeetCode: viidhyanshu</span>
          </a>
          <a
            href="https://www.linkedin.com/in/viidhyanshu/"
            target="_blank"
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
  {/* Projects Section */}
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
            className="project-link"
          >
            <i className="fab fa-github" /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Skills Section */}
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
  {/* Contact Section */}
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
            className="contact-card"
          >
            <i className="fab fa-github" />
            <h3>GitHub</h3>
            <p>viidhyanshu</p>
          </a>
          <a
            href="https://www.linkedin.com/in/viidhyanshu"
            target="_blank"
            className="contact-card"
          >
            <i className="fab fa-linkedin" />
            <h3>LinkedIn</h3>
            <p>Vidhyanshu Kumar</p>
          </a>
          <a
            href="https://leetcode.com/viidhyashu"
            target="_blank"
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
  {/* Footer */}
  <footer className="footer">
    <div className="container">
      <p>© 2025 Vidhyanshu Kumar. All rights reserved.</p>
      
    </div>
  </footer>
</>

  );
}
