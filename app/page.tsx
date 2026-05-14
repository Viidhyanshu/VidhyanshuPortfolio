"use client"
import { useEffect } from "react"
import Navbar from "../src/components/navbar/Navbar"
import HomeHero from "../src/components/home/Home"
import About from "../src/components/about/About"
import Projects from "../src/components/projects/Projects"
import Skills from "../src/components/skills/Skills"
import Contact from "../src/components/contact/Contact"
import Footer from "../src/components/footer/Footer"

import "./globals.css"

export default function Home() {
    useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const href = this.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href)
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
        const sect = section as HTMLElement;
        const sectionTop = sect.offsetTop
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
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
          const target = entry.target as HTMLElement;
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
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
      const element = el as HTMLElement;
      element.style.opacity = '0'
      element.style.transform = 'translateY(20px)'
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    const header = document.querySelector('.header') as HTMLElement;
    const body = document.body

    const updateHeaderBackground = () => {
      if (!header) return

      const isDayMode = body.classList.contains('day-mode')

      if (window.pageYOffset > 100) {
        header.style.backgroundColor = isDayMode
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(10, 10, 10, 0.3)'
      } else {
        header.style.backgroundColor = isDayMode
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(10, 10, 10, 0.3)'
      }

      header.style.backdropFilter = 'blur(15px) saturate(180%)'
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
        if (!nav.contains(e.target as Node) && !mobileToggle.contains(e.target as Node)) {
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
      const c = card as HTMLElement;
      c.addEventListener('mouseenter', () => {
        c.style.borderLeft = '4px solid var(--primary-blue)'
      })

      c.addEventListener('mouseleave', () => {
        c.style.borderLeft = 'none'
      })
    })

    const hero = document.querySelector('.hero-content') as HTMLElement;
    if (hero) {
      hero.style.opacity = '0'
      hero.style.transition = 'opacity 1s ease-in'
      setTimeout(() => {
        hero.style.opacity = '1'
      }, 100)
    }

    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;

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
      const sun = document.querySelector('.sun') as HTMLElement;
      const moon = document.querySelector('.moon') as HTMLElement;

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
      <Navbar />
      <main>
        <HomeHero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
