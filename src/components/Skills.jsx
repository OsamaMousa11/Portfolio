import React, { useEffect, useState } from 'react';
import IconCloudDemo from './IconCloudDemo';

// Icon slugs for skills (C# / .NET stack)
// dotnet = LINQ, EF Core, SignalR (كلها جزء من .NET)
const ICON_SLUGS = [
  'csharp', 'html5', 'css3', 'microsoftsqlserver',
  'dotnet', 'python', 'cplusplus', 'javascript',
  'swagger', 'redis', 'docker', 'git', 'github',
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
    </div>
  );
};

export default Skills; 