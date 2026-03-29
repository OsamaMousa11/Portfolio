import React, { useEffect, useState } from "react";
import ParticlesBackground from "./components/Background";
import AboutWindow from "./components/AboutWindow";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./portfolio.css";
import "./App.css";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
// import Sidebar from "./components/Sidebar";
import CompactSidebar from "./components/CompactSidebar";
const resumeData = {
  name: "Osama Mousa",
  title: "Backend .NET Developer",
  heroTagline:
    "Passionate about building scalable, clean, and production-grade backend systems.",
  summary:
    "Backend .NET Developer specializing in C#, ASP.NET Core, and Clean Architecture.\n\nExperienced in designing and shipping scalable REST APIs, real-time systems with SignalR, AI-integrated services, and secure authentication pipelines. Passionate about writing clean, maintainable, production-grade code that solves real problems.",
  experience: [
    {
      role: "Freelance Backend Developer",
      company: "Freelance",
      timeframe: "2025– Present",
      location: "Cairo, Egypt",
      bullets: [
        "Developing backend systems using ASP.NET Core",
        "Designing RESTful APIs and database schemas",
        "Applying Clean Architecture and best practices",
      ],
    },
  ],
  projects: [
    {
      name: "Social Media App",
      tagline: "Twitter-like System",
      stack: [
        "C#",
        "ASP.NET Core",
        "SignalR",
        "SQL Server",
      ],
      highlights: [
        "Developed a scalable backend system for a social media platform including tweets, comments, likes, bookmarks, hashtags, mentions, and user profiles.",
        "Applied Clean Architecture & Onion Architecture.",
        "Implemented JWT authentication with role-based authorization.",
        "Integrated SignalR for real-time notifications and messaging.",
        "Used Repository Pattern & Unit of Work.",
      ],
      links: { github: "https://github.com/OsamaMousa11/SocialX", live: null },
    },
    {
      name: "SolidHardware",
      tagline: "Hardware E-Commerce Platform",
      stack: [
        "C#",
        "ASP.NET Core",
        "EF Core",
        "SQL Server",
      ],
      highlights: [
        "Specialized e-commerce platform for selling GPUs, CPUs, RAM, storage devices, and PC parts.",
        "Supports filtering, category browsing, and detailed product pages.",
        "Follows Clean Architecture & Onion Architecture.",
        "Includes Generic Repository & Unit of Work.",
      ],
      links: {
        github: "https://github.com/OsamaMousa11/solidhardware.store",
        live: "https://solidhardware.netlify.app/",
      },
    },
    {
      name: "EduAI Question Generator",
      tagline: "AI-Driven Exam Question Generator",
      stack: ["C#", "Web API", "Google Gemini API"],
      highlights: [
        "AI-driven system that generates structured exam questions from lecture files (PDF, Word, Excel, PPT, TXT).",
        "Supports configurable difficulty and multilingual output.",
        "Implements Clean Architecture, DI, validation, and structured JSON generation.",
      ],
      links: {
        github: "https://github.com/OsamaMousa11/EduAI.QuestionGenerator",
        live: "https://eduaiquestiongenerator.netlify.app/",
      },
    },
    {
      name: "Employee Management System API",
      tagline: "Full Employee Lifecycle Management",
      stack: ["ASP.NET Core Web API", "EF Core", "SQL Server"],
      highlights: [
        "Full employee lifecycle management system supporting roles, departments, attendance, permissions, and salaries.",
        "Includes secure authentication (JWT & Refresh Token).",
        "Built using Clean & Onion Architecture.",
      ],
      links: { github: "https://github.com/OsamaMousa11", live: null },
    },
  ],
  activities: [
    {
      title: "Competitive Programming",
      codeforcesIcon: true,
      description:
        "Solved 500+ algorithmic problems on Codeforces covering Dynamic Programming, Graph Theory, and Greedy Algorithms. Consistently ranked top 35% across rated contests, demonstrating strong problem-solving under pressure.",
    },
  ],
  contact: {
    phone: "https://wa.me/201025984672",
    email: "mailto:osamaomar1995@gmail.com",
    linkedin: "https://linkedin.com/in/osamamousa22",
    github: "https://github.com/OsamaMousa11",
    location: "Cairo, Egypt",
  },
};

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [showCompactSidebar, setShowCompactSidebar] = useState(false);
  let hideCompactTimeoutRef;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const ids = ["hero", "intro", "experience", "skills", "projects", "activities", "contact"];
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // show compact sidebar briefly on section change
            setShowCompactSidebar(true);
            clearTimeout(hideCompactTimeoutRef);
            hideCompactTimeoutRef = setTimeout(() => setShowCompactSidebar(false), 1600);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.4 }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => nodes.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const revealables = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
          } else {
            e.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.16 }
    );

    revealables.forEach((el) => revealObserver.observe(el));
    return () => revealables.forEach((el) => revealObserver.unobserve(el));
  }, []);

  useEffect(() => {
    // also show compact sidebar briefly on wheel scroll
    const onWheel = () => {
      setShowCompactSidebar(true);
      clearTimeout(hideCompactTimeoutRef);
      hideCompactTimeoutRef = setTimeout(() => setShowCompactSidebar(false), 1400);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="app-root">
      <ParticlesBackground theme={theme} />

      {/* Mobile theme toggle */}
      <button
        className="mobile-theme-toggle icon-btn"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm6.36 2.05a1 1 0 0 1 1.41 0l.71.7a1 1 0 1 1-1.41 1.42l-.71-.71a1 1 0 0 1 0-1.41zM20 11a1 1 0 0 1 1 1v0a1 1 0 1 1-2 0v0a1 1 0 0 1 1-1zM5.05 5.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 5.76 7.2l-.71-.71a1 1 0 0 1 0-1.41zM3 12a1 1 0 0 1 1-1h0a1 1 0 1 1 0 2h0a1 1 0 0 1-1-1zm2.05 6.36a1 1 0 0 1 0-1.41l.71-.71A1 1 0 1 1 7.2 17.6l-.71.71a1 1 0 0 1-1.41 0zM12 19a1 1 0 0 1 1 1v0a1 1 0 1 1-2 0v0a1 1 0 0 1 1-1zm6.36-2.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 19.07 19l-.71-.71a1 1 0 0 1 0-1.41zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      {/* Compact sidebar (appears briefly during navigation/scroll) */}
      <CompactSidebar
        visible={showCompactSidebar}
        activeSection={activeSection}
        sections={[
          { id: 'hero', label: 'Home' },
          { id: 'experience', label: 'Experience' },
          { id: 'skills', label: 'Tools' },
          { id: 'projects', label: 'Projects' },
          { id: 'activities', label: 'Activities' },
          { id: 'contact', label: 'Contact' },
        ]}
      />

      <header className="top-nav">
        <nav className="nav-inner">
          <div className="nav-brand"></div>
          <div className="nav-links">
            <a
              className={`nav-link ${activeSection === "hero" ? "active" : ""}`}
              href="#hero"
            >
              Home
            </a>
            <a
              className={`nav-link ${
                activeSection === "experience" ? "active" : ""
              }`}
              href="#experience"
            >
              Experience
            </a>
            <a
              className={`nav-link ${
                activeSection === "skills" ? "active" : ""
              }`}
              href="#skills"
            >
              Tools
            </a>
            <a
              className={`nav-link ${
                activeSection === "projects" ? "active" : ""
              }`}
              href="#projects"
            >
              Projects
            </a>
            <a
              className={`nav-link ${
                activeSection === "activities" ? "active" : ""
              }`}
              href="#activities"
            >
              Activities
            </a>
            <a
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm6.36 2.05a1 1 0 0 1 1.41 0l.71.7a1 1 0 1 1-1.41 1.42l-.71-.71a1 1 0 0 1 0-1.41zM20 11a1 1 0 0 1 1 1v0a1 1 0 1 1-2 0v0a1 1 0 0 1 1-1zM5.05 5.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 5.76 7.2l-.71-.71a1 1 0 0 1 0-1.41zM3 12a1 1 0 0 1 1-1h0a1 1 0 1 1 0 2h0a1 1 0 0 1-1-1zm2.05 6.36a1 1 0 0 1 0-1.41l.71-.71A1 1 0 1 1 7.2 17.6l-.71.71a1 1 0 0 1-1.41 0zM12 19a1 1 0 0 1 1 1v0a1 1 0 1 1-2 0v0a1 1 0 0 1 1-1zm6.36-2.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 19.07 19l-.71-.71a1 1 0 0 1 0-1.41zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className="content-container">
        <section id="hero" className="section reveal">
          <Hero
            name={resumeData.name}
            title={resumeData.title}
            tagline={resumeData.heroTagline}
            links={{
              github: resumeData.contact.github,
              linkedin: resumeData.contact.linkedin,
              email: resumeData.contact.email,
              whatsapp: resumeData.contact.phone,
            }}
          />
        </section>

        <section id="intro" className="section reveal">
          <AboutWindow
            name={resumeData.name}
            title={resumeData.title}
            summary={resumeData.summary}
          />
        </section>

        <section id="experience" className="section reveal">
          <h2 className="section-title">Experience</h2>
          <Experience experiences={resumeData.experience} />
        </section>

        <section id="skills" className="section reveal">
          <h2 className="section-title with-icon">
            <span className="cloud-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 17.5H7a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.1A4 4 0 0 1 20 17.5z" />
              </svg>
            </span>
            Skills & Technologies
          </h2>
          <Skills />
        </section>

        <section id="projects" className="section reveal">
          <h2 className="section-title with-icon">
            <span className="cloud-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </span>
            Projects
          </h2>
          <Projects projects={resumeData.projects} />
        </section>

        <section id="activities" className="section reveal">
          <h2 className="section-title">Activities</h2>
          <Activities items={resumeData.activities} />
        </section>

        <section id="contact" className="section reveal">
          <h2 className="section-title">Contact</h2>
          <Contact contact={resumeData.contact} />
        </section>
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {resumeData.name}
        </span>
      </footer>
    </div>
  );
}

export default App;
