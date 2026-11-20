import React, { useEffect, useState } from 'react';
import IconCloudDemo from './IconCloudDemo';

// Icon slugs for skills (C# / .NET stack)
const ICON_SLUGS = [
  'csharp', 'dotnet', 'microsoftsqlserver', 'redis', 'docker',
  'git', 'github', 'swagger', 'postman', 'html5', 'css3', 'javascript',
];

const SKILL_CATEGORIES = [
  {
    category: "Languages & Frameworks",
    skills: ["C#", "ASP.NET Core Web API", "ASP.NET MVC", "FastEndpoints", "EF Core", "Dapper", "LINQ", "SignalR", "gRPC", "MediatR (CQRS)"],
  },
  {
    category: "Databases & Caching",
    skills: ["SQL Server", "T-SQL", "Redis", "Query Optimization", "Schema Design"],
  },
  {
    category: "Architecture & Patterns",
    skills: ["Clean Architecture", "Onion Architecture", "SOLID", "Design Patterns", "Repository Pattern", "Unit of Work", "DDD"],
  },
  {
    category: "Background Jobs & Integration",
    skills: ["Hangfire", "Background Processing", "Third-Party AI/REST Integration", "MailKit (SMTP)", "ClosedXML"],
  },
  {
    category: "Auth & Security",
    skills: ["JWT", "OAuth (Google)", "Refresh Token Rotation", "OTP Verification", "Token Blacklisting", "ASP.NET Identity", "Role-Based Authorization (RBAC)"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "Git", "Swagger", "Postman", "ApiDog", "AutoMapper", "FluentValidation", "Serilog", "xUnit", "AI SDK (Gemini 2.0)"],
  },
  {
    category: "Front-End & Soft Skills",
    skills: ["HTML", "CSS", "JavaScript", "Problem Solving", "Clean Code Mindset", "Self-Learning", "Attention to Detail", "Team Collaboration", "Agile Methodologies"],
  },
];

const Skills = () => {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'dark');

  useEffect(() => {
    const target = document.documentElement;
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'data-theme') {
          setTheme(target.getAttribute('data-theme') || 'dark');
        }
      }
    });
    observer.observe(target, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-grid">
      <div className="icon-cloud-card">
        <IconCloudDemo slugs={ICON_SLUGS} theme={theme} />
      </div>

      <div className="skills-categories-grid">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div className="skill-category-card" key={idx}>
            <h3 className="skill-category-title">{cat.category}</h3>
            <div className="chips">
              {cat.skills.map((s, i) => (
                <span className="chip" key={i}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 