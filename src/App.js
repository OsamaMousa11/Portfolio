import React, { useEffect, useRef, useState } from "react";
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
    "Backend .NET Developer specializing in building production-grade REST APIs, real-time systems, and Clean Architecture.",
  summary:
    "Backend .NET Developer with hands-on experience building production-grade REST APIs, real-time systems, background-job processing, and AI-integrated services using C#, ASP.NET Core, and Clean Architecture.\n\nCurrently developing the backend of an ERP system for a pharmacy group. Delivered 5 end-to-end projects covering social media, e-commerce, AI-powered document processing, AI video detection pipelines, and enterprise application backend development.\n\nCompleted an intensive 3-month .NET Web Development training at the Information Technology Institute (ITI). Proficient in secure authentication pipelines (JWT/Refresh Tokens, OTP, OAuth), SQL Server query optimization, Redis caching, Hangfire background jobs, and CQRS/MediatR patterns.",
  experience: [
    {
      role: "Backend .NET Developer",
      company: "ERP System for a Pharmacy Group",
      timeframe: "Jul 2026 – Present",
      location: "Hail, Saudi Arabia",
      bullets: [
        "Developing the backend of a custom ERP system for a pharmacy group using ASP.NET Core and SQL Server, supporting day-to-day pharmacy operations across multiple branches.",
        "Designing and implementing REST APIs and business logic for core modules such as inventory, sales, and purchasing, following Clean Architecture principles.",
        "Optimizing SQL Server queries and database schema to keep the system fast and reliable under daily operational load.",
      ],
    },
    {
      role: "Backend .NET Developer",
      company: "SortTech",
      timeframe: "Oct 2025 – May 2026",
      location: "Cairo, Egypt",
      bullets: [
        "Built and maintained REST API endpoints for Modeer360, a web platform, using ASP.NET Core as part of the development team.",
        "Debugged and resolved backend errors and issues, and performed testing of API endpoints to ensure stability and reliability.",
      ],
    },
    {
      role: "Backend Developer (Freelance)",
      company: "Karakib App",
      timeframe: "2026",
      location: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.almayar.karakib",
      linkLabel: "Karakib on Google Play",
      bullets: [
        "Built the backend for Karakib, a mobile app that connects users who have recyclable or reusable waste with collection agents, enabling users to list items and request an on-demand pickup.",
        "Designed and implemented the core service flow: user registration, item submission with category selection, agent dispatching, and real-time request tracking, via a clean ASP.NET Core REST API.",
      ],
    },
    {
      role: "Backend Developer (Freelance)",
      company: "EduNasser App",
      timeframe: "2025",
      location: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.edunasser.app",
      linkLabel: "EduNasser on Google Play",
      bullets: [
        "Built the backend for EduNasser, a study-abroad guidance mobile application that helps students explore international programs and manage their application process.",
        "Implemented content management, user progress tracking, and secure access to user data via an ASP.NET Core REST API.",
      ],
    },
  ],
  projects: [
    {
      name: "VisionAiChrono",
      tagline: "AI Video Detection Pipeline API",
      stack: [
        "ASP.NET Core (.NET 9)",
        "SQL Server",
        "Redis",
        "Hangfire",
        "SignalR",
        "Docker",
        "Clean Architecture",
      ],
      highlights: [
        "Architected a .NET 9 backend that orchestrates AI detection pipelines (person, weapon, fire) on images and videos by streaming uploads (up to 500 MB) to a Python vision service and persisting per-file results, detection counts, and average confidence.",
        "Offloaded long-running runs to Hangfire background workers (SQL Server storage) with an isolated DI scope per run and fault-tolerant execution (a failed file or task is recorded without aborting the run), and auto-generated Excel reports with ClosedXML.",
        "Built a secure auth system: OTP email verification, JWT + refresh tokens, access-token blacklisting on logout, Google OAuth, and role-based (Admin/User) authorization.",
        "Delivered real-time run notifications with SignalR, Redis distributed caching, global exception-handling middleware, and FluentValidation request pipelines.",
        "Containerized with Docker Compose (API + Redis) and set up a GitHub Actions CI workflow that builds the solution on every push and pull request.",
      ],
      links: {
        github: "https://github.com/OsamaMousa11/VisionAiChrono",
        live: null,
      },
    },
    {
      name: "Social Media Platform",
      tagline: "High-Concurrency Backend API",
      stack: [
        "ASP.NET Core",
        "SignalR",
        "SQL Server",
        "JWT",
        "Clean Architecture",
      ],
      highlights: [
        "Architected a Twitter-like REST API with 10+ core features: tweets, comments, likes, bookmarks, hashtags, @mentions, and real-time push notifications, built for high-concurrency workloads.",
        "Implemented real-time messaging and live notifications via SignalR WebSockets, eliminating polling and reducing message delivery latency.",
        "Enforced 4-layer Clean Architecture (API / Application / Domain / Infrastructure) and secured 15+ endpoints with JWT + refresh token rotation and granular RBAC policies.",
      ],
      links: {
        github: "https://github.com/OsamaMousa11/SocialX",
        live: null,
      },
    },
    {
      name: "SolidHardware",
      tagline: "PC Hardware Store E-Commerce API",
      stack: [
        "ASP.NET Core",
        "EF Core",
        "SQL Server",
        "Redis",
        "Onion Architecture",
      ],
      highlights: [
        "Engineered a hardware e-commerce API with 20+ endpoints covering product catalog, advanced filtering, category browsing, and curated PC bundle management.",
        "Implemented Redis caching for high-frequency queries and applied Generic Repository & Unit of Work patterns to guarantee atomic transactions across orders and inventory.",
      ],
      links: {
        github: "https://github.com/OsamaMousa11/solidhardware.store",
        live: "https://solidhardware.netlify.app",
      },
    },
    {
      name: "EduAI — Question Generator",
      tagline: "AI-Integrated Exam Question Generator API",
      stack: [
        "ASP.NET Core",
        "Google Gemini 2.0",
        "OpenXML",
        "PDFPig",
        "Clean Architecture",
      ],
      highlights: [
        "Built an AI-integrated REST API that auto-generates structured exam questions from 5 document formats (PDF, DOCX, XLSX, PPT, TXT).",
        "Engineered a multi-format extraction pipeline (PDFPig + OpenXML) feeding text to Google Gemini 2.0 Flash with prompt-engineered, JSON-stable responses supporting configurable difficulty, question types, and multilingual output.",
      ],
      links: {
        github: "https://github.com/OsamaMousa11/EduAI.QuestionGenerator",
        live: "https://eduaiquestiongenerator.netlify.app",
      },
    },
  ],
  activities: [
    {
      title: "Information Technology Institute (ITI)",
      org: ".NET Web Development Track · 3-Month Intensive Program",
      timeframe: "Graduated",
      bullets: [
        "Completed a 3-month intensive, full-time technical training track focused on .NET web development, covering C#, ASP.NET Core, SQL Server, and modern software engineering practices.",
        "Gained hands-on project-based experience under mentorship, strengthening skills in Clean Architecture, REST API design, and professional development workflows.",
      ],
    },
    {
      title: "Zagazig University",
      org: "Bachelor of Computer and Information Science",
      timeframe: "2021 – 2025",
      description:
        "Bachelor of Computer and Information Science · GPA: 3.1 / 4.0 (Very Good). In-depth coursework in Data Structures, Algorithms, Software Engineering, and Database Design.",
    },
    {
      title: "Competitive Programming",
      codeforcesIcon: true,
      description:
        "Solved 500+ algorithmic problems on Codeforces covering Dynamic Programming, Graph Theory, and Greedy Algorithms. Strong grasp of core CS fundamentals (sorting algorithms, linear/nonlinear data structures, and greedy algorithms) via independent study and coursework.",
    },
    {
      title: "Languages",
      bullets: [
        "Arabic: Native",
        "English: Conversational / Professional Working Proficiency",
      ],
    },
  ],
  contact: {
    phone: "+966565192126",
    displayPhone: "+966 56 519 2126",
    email: "mailto:osamaomar1995@gmail.com",
    linkedin: "https://linkedin.com/in/osamamousa22",
    github: "https://github.com/OsamaMousa11",
    location: "Hail, Saudi Arabia",
  },
};

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [showCompactSidebar, setShowCompactSidebar] = useState(false);
  const hideCompactTimeoutRef = useRef(null);

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
            clearTimeout(hideCompactTimeoutRef.current);
            hideCompactTimeoutRef.current = setTimeout(() => setShowCompactSidebar(false), 1600);
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
      clearTimeout(hideCompactTimeoutRef.current);
      hideCompactTimeoutRef.current = setTimeout(() => setShowCompactSidebar(false), 1400);
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
          { id: 'activities', label: 'Education & Activities' },
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
              Education & Activities
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
          <h2 className="section-title">Education & Activities</h2>
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
