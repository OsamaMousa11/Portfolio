/**
 * Skill icons: Devicon (jsDelivr) first, Simple Icons CDN fallback.
 * @see https://github.com/devicons/devicon
 * @see https://simpleicons.org/
 */
const DEVICON_VER = 'v2.16.0';
export const DEVICON = `https://cdn.jsdelivr.net/gh/devicons/devicon@${DEVICON_VER}/icons`;

/** Simple Icons: slug + hex (no #), matches portfolio accent on dark cards */
export const si = (slug, hex = '637bff') =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

export const devicon = (folder, file) => `${DEVICON}/${folder}/${file}`;

/**
 * @typedef {{ name: string, icon: string, fallback?: string }} SkillItem
 * @typedef {{ title: string, items: SkillItem[] }} SkillCategory
 * @type {SkillCategory[]}
 */
export const skillsCategories = [
  {
    title: 'Backend',
    items: [
      { name: 'C#', icon: devicon('csharp', 'csharp-plain.svg'), fallback: si('csharp') },
      { name: '.NET', icon: devicon('dot-net', 'dot-net-plain.svg'), fallback: si('dotnet') },
      {
        name: 'ASP.NET Core Web API',
        icon: devicon('dotnetcore', 'dotnetcore-plain.svg'),
        fallback: si('dotnet'),
      },
      {
        name: 'ASP.NET MVC',
        icon: devicon('visualstudio', 'visualstudio-plain.svg'),
        fallback: si('dotnet'),
      },
      {
        name: 'EF Core',
        icon: devicon('microsoftsqlserver', 'microsoftsqlserver-plain.svg'),
        fallback: si('microsoftsqlserver'),
      },
      {
        name: 'Dapper',
        icon: devicon('microsoftsqlserver', 'microsoftsqlserver-plain.svg'),
        fallback: si('microsoftsqlserver'),
      },
      { name: 'LINQ', icon: devicon('csharp', 'csharp-plain.svg'), fallback: si('csharp') },
      { name: 'MediatR', icon: si('nuget'), fallback: si('csharp') },
      { name: 'SignalR', icon: devicon('dotnetcore', 'dotnetcore-plain.svg'), fallback: si('dotnet') },
      { name: 'gRPC', icon: si('grpc'), fallback: si('grpc', '244c5a') },
      {
        name: 'REST API',
        icon: devicon('swagger', 'swagger-plain.svg'),
        fallback: si('openapiinitiative'),
      },
    ],
  },
  {
    title: 'Auth & Security',
    items: [
      { name: 'JWT', icon: si('jsonwebtokens'), fallback: si('auth0') },
      { name: 'Refresh Tokens', icon: si('oauth'), fallback: si('openid') },
      { name: 'ASP.NET Identity', icon: si('microsoft'), fallback: si('dotnet') },
      { name: 'Role-Based Authorization', icon: si('auth0'), fallback: si('okta') },
    ],
  },
  {
    title: 'Databases & Caching',
    items: [
      {
        name: 'SQL Server',
        icon: devicon('microsoftsqlserver', 'microsoftsqlserver-plain.svg'),
        fallback: si('microsoftsqlserver'),
      },
      {
        name: 'T-SQL',
        icon: devicon('microsoftsqlserver', 'microsoftsqlserver-plain.svg'),
        fallback: si('microsoftsqlserver'),
      },
      { name: 'Redis', icon: devicon('redis', 'redis-plain.svg'), fallback: si('redis', 'dc382d') },
    ],
  },
  {
    title: 'Architecture',
    items: [
      { name: 'Clean Architecture', icon: si('mermaid'), fallback: si('terraform') },
      { name: 'Onion Architecture', icon: si('docker'), fallback: si('mermaid') },
      { name: 'SOLID Principles', icon: devicon('csharp', 'csharp-plain.svg'), fallback: si('dotnet') },
      { name: 'Repository Pattern', icon: devicon('git', 'git-plain.svg'), fallback: si('git', 'f05032') },
      {
        name: 'Unit of Work',
        icon: devicon('microsoftsqlserver', 'microsoftsqlserver-plain.svg'),
        fallback: si('microsoftsqlserver'),
      },
      { name: 'Domain Driven Design', icon: si('mermaid'), fallback: si('terraform') },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: devicon('git', 'git-plain.svg'), fallback: si('git', 'f05032') },
      { name: 'GitHub', icon: devicon('github', 'github-original.svg'), fallback: si('github') },
      { name: 'Swagger', icon: devicon('swagger', 'swagger-plain.svg'), fallback: si('swagger', '85ea2d') },
      { name: 'AutoMapper', icon: devicon('csharp', 'csharp-plain.svg'), fallback: si('nuget') },
      {
        name: 'Serilog',
        icon: devicon('elasticsearch', 'elasticsearch-plain.svg'),
        fallback: si('elastic', '005571'),
      },
      { name: 'xUnit', icon: si('xunit'), fallback: si('dotnet') },
      {
        name: 'Postman',
        icon: devicon('postman', 'postman-original.svg'),
        fallback: si('postman', 'ff6c37'),
      },
      { name: 'Google Gemini', icon: si('googlegemini'), fallback: si('google', '4285f4') },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: devicon('html5', 'html5-plain.svg'), fallback: si('html5', 'e34f26') },
      { name: 'CSS3', icon: devicon('css3', 'css3-plain.svg'), fallback: si('css3', '1572b6') },
      {
        name: 'JavaScript',
        icon: devicon('javascript', 'javascript-plain.svg'),
        fallback: si('javascript', 'f7df1e'),
      },
    ],
  },
];
