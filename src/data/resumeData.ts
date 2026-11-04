import { ExperienceItem, ProjectItem, SkillCategory, CertificationItem, NavItem } from '../types/resume';

export const PERSONAL_INFO = {
  name: "Mihai Straculencu",
  role: "Front-End Developer",
  handle: "@mihai-straculencu",
  location: "Romania",
  openTo: ["Cluj-Napoca", "Bucharest", "Remote"],
  email: "mstraculencu@gmail.com",
  github: "https://github.com/mihai-straculencu",
  githubUsername: "mihai-straculencu",
  linkedin: "https://www.linkedin.com/in/mihai-straculencu/",
  linkedinUsername: "mihai-straculencu",
  portfolioUrl: "https://ms-resume.netlify.app/",
  tagline: "Front-end developer with 2 years of professional experience building client websites and web apps with React, Next.js, JavaScript and Tailwind CSS. I built an interactive property map for a real estate client, shipped Next.js portals with 95+ Lighthouse scores, and worked with REST APIs, Docker and Git in Agile sprints.",
  availability: "Open to work",
  yearsExperience: "2 years",
  languages: ["Romanian (native)", "English (fluent, professional working proficiency)"],
  reference: "Letter of recommendation from Victor Danila, CEO and Principal Developer, Ariminum Remin SRL (available on request)",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "profile.tsx", comment: "Intro", lineNumber: 1 },
  { id: "experience", label: "experience.ts", comment: "Experience", lineNumber: 2 },
  { id: "projects", label: "projects.tsx", comment: "Projects", lineNumber: 3 },
  { id: "skills", label: "skills.ts", comment: "Skills", lineNumber: 4 },
  { id: "downloads", label: "downloads.tsx", comment: "CV and education", lineNumber: 5 },
  { id: "about", label: "about.md", comment: "About", lineNumber: 6 },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "romstal-sales",
    role: "Sales Engineer",
    company: "Romstal Imex",
    location: "Romania",
    period: "Oct 2025 — Sep 2026",
    isCurrent: false,
    declaration: "const romstal: SalesEngineer =",
    description: [
      "Ran a Romstal store on my own, responsible for sales, stock, logistics and daily operations.",
      "Advised customers and prepared offers and quotes based on their technical needs.",
      "Managed stock, orders and transports in SAP and internal tools; tracked customers in the CRM.",
      "Kept sales and stock reports in Google Sheets and Drive."
    ],
    tech: ["SAP", "CRM", "Google Workspace"]
  },
  {
    id: "darwin-connectivity",
    role: "Connectivity Engineer",
    company: "Darwin Technologies Romania",
    location: "Romania",
    period: "Jul 2025 — Oct 2025",
    isCurrent: false,
    declaration: "const darwin: ConnectivityEngineer =",
    description: [
      "Built and maintained integrations on the Boomi iPaaS platform connecting several enterprise systems.",
      "Set up secure file transfers using SFTP, PGP encryption and SSH key rotation.",
      "Configured SAML-based single sign-on (SSO) across services."
    ],
    tech: ["Boomi iPaaS", "SFTP", "PGP", "SSH", "SAML SSO"]
  },
  {
    id: "ariminum-frontend",
    role: "Junior Front-End Developer",
    company: "Ariminum Remin SRL",
    location: "Cluj-Napoca, Romania",
    period: "Apr 2023 — Apr 2025",
    isCurrent: false,
    declaration: "const ariminum: FrontEndDeveloper =",
    description: [
      "Built and maintained public websites and client portals for real estate and construction companies.",
      "Designed and built an interactive map for a real estate agency: users browse regions and see property listings in real time, with markers and popups loaded from REST APIs and no page reloads. The client reported better usability and more leads.",
      "Developed responsive portals in React, Next.js and Tailwind CSS with server-side rendering, deployed on Vercel and kept at 95+ Google Lighthouse scores (performance, accessibility, best practices, SEO).",
      "Maintained and refactored features built with JavaScript, jQuery, Bootstrap, SCSS and Jinja2 templates; fixed bugs and cross-browser issues.",
      "Built reusable Bootstrap/SCSS UI kits (filter sidebars, modals, responsive navigation); worked in Docker on Linux with Git, Agile sprints and code reviews."
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript", "jQuery", "Bootstrap 5", "SCSS", "Jinja2", "Docker", "Vercel"]
  },
  {
    id: "cgs-support",
    role: "Technical Support Representative (AOL account)",
    company: "CGS Romania",
    location: "Romania",
    period: "Nov 2016 — Apr 2017",
    isCurrent: false,
    declaration: "const cgs: TechnicalSupport =",
    description: [
      "Helped AOL customers diagnose and fix technical problems with their accounts and services.",
      "Explained technical solutions in plain language to non-technical users."
    ],
    tech: ["Customer support", "Troubleshooting"]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "quin69-vod",
    title: "Quin69 VOD Archive & Chat Replay",
    year: "2025",
    category: "React / Next.js",
    description: "A VOD viewer with live Twitch chat replay synced to the video, timestamp search, and smooth scrubbing.",
    highlights: ["Synced chat replay", "Material UI & custom CSS modules", "Deployed on Vercel"],
    tech: ["React", "Material UI", "CSS Modules", "Vercel API"],
    link: "https://github.com/mihai-straculencu",
    github: "https://github.com/mihai-straculencu",
    badgeColor: "#fc618d" // Pink syntax
  },
  {
    id: "quin69-playlist",
    title: "Quin69 Playlist Tracker",
    year: "2025",
    category: "React / Next.js",
    description: "Reads live stream chat in real time, picks up song requests, and links them to Spotify and YouTube.",
    highlights: ["Live chat polling", "Tailwind CSS dark UI", "Jest test suite"],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Jest", "Spotify API"],
    link: "https://github.com/mihai-straculencu",
    github: "https://github.com/mihai-straculencu",
    badgeColor: "#5ad4e6" // Cyan syntax
  },
  {
    id: "genai-rag",
    title: "AI-Assisted Web Tools & Integrations",
    year: "2025",
    category: "AI Tools",
    description: "Small web tools and scripts built with AI coding assistants and LLM APIs to speed up everyday dev tasks.",
    highlights: ["AI-assisted code generation", "Node.js API integrations", "Prompt engineering & automation"],
    tech: ["Node.js", "LLM APIs", "AI Coding Tools"],
    github: "https://github.com/mihai-straculencu",
    badgeColor: "#7bd88f" // Green syntax
  },
  {
    id: "romstal-search",
    title: "Romstal Stock Search",
    year: "2025",
    category: "Tools & Apps",
    description: "A mobile PWA for quick stock code lookups and inventory checks, powered by Supabase.",
    highlights: ["Fast fuzzy search", "Supabase real-time database", "Vite + React 19"],
    tech: ["React 19", "TypeScript", "Vite", "Supabase", "PWA"],
    github: "https://github.com/mihai-straculencu",
    badgeColor: "#fce566" // Yellow syntax
  },
  {
    id: "remax-map",
    title: "Remax.md Property Map",
    year: "2023–2024",
    category: "Frontend",
    description: "An interactive map showing real estate listings with custom OpenStreetMap markers and location filters.",
    highlights: ["OpenStreetMap / Leaflet", "Containerized with Docker", "Bootstrap UI"],
    tech: ["JavaScript", "OpenStreetMap", "Bootstrap", "Docker", "REST API"],
    github: "https://github.com/mihai-straculencu",
    badgeColor: "#fd9353" // Orange syntax
  },
  {
    id: "cofetaria-marshal",
    title: "Cofetăria Marshal Brăila",
    year: "2024",
    category: "Frontend",
    description: "Bakery website with GSAP scroll animations, product grids, and fast image loading.",
    highlights: ["GSAP scroll animations", "Fast image loading", "Clean HTML5 structure"],
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Web"],
    github: "https://github.com/mihai-straculencu",
    badgeColor: "#948ae3" // Purple syntax
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Front-end",
    comment: "// Languages, frameworks & styling",
    skills: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "SCSS/Sass", "Tailwind CSS", "Bootstrap 5", "jQuery", "Jinja2"],
    color: "#fc618d"
  },
  {
    category: "Web",
    comment: "// Delivery & performance",
    skills: ["Responsive & mobile-first", "REST API integration", "Fetch/Axios", "JSON", "SSR", "Core Web Vitals", "Lighthouse", "Cross-browser testing"],
    color: "#5ad4e6"
  },
  {
    category: "Tools",
    comment: "// Workflow",
    skills: ["Git", "GitHub", "Docker", "Linux (Ubuntu/Debian)", "Vercel", "VS Code", "Chrome DevTools", "Postman", "Copilot / Cursor", "Agile/Scrum", "Code reviews"],
    color: "#7bd88f"
  },
  {
    category: "Integration",
    comment: "// Enterprise connectivity",
    skills: ["Boomi iPaaS", "SFTP", "PGP encryption", "SSH key management", "SAML single sign-on"],
    color: "#fd9353"
  },
  {
    category: "Business",
    comment: "// Sales & operations",
    skills: ["SAP", "CRM", "Google Workspace", "Client offers & quotes"],
    color: "#fce566"
  }
];

export const EDUCATION = [
  {
    title: "Bachelor's degree in Computer Science",
    school: "Transilvania University of Brașov",
    period: "2016 — 2019",
    detail: "",
  },
];

export const CERTIFICATIONS_DOWNLOADS: CertificationItem[] = [
  {
    id: "resume-pdf",
    title: "Mihai Straculencu — CV 2026",
    issuer: "Front-End Developer CV",
    year: "2026",
    description: "One-page CV with my experience, skills, education and certification.",
    fileSize: "61 KB",
    downloadUrl: "/MS-Resume.pdf",
    type: "PDF"
  },
  {
    id: "web-dev-cert",
    title: "Assistant Programmer certification",
    issuer: "IT School S.R.L. · Romanian Ministry of Labor and Ministry of Education",
    year: "2025",
    description: "Accredited professional qualification (RNCP RO/04/0613/670), grade 8.37/10. Algorithms, OOP, web architecture and databases.",
    fileSize: "840 KB",
    downloadUrl: "/mihai-straculencu-certificare.pdf",
    type: "PDF"
  }
];
