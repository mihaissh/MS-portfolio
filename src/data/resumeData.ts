import { ExperienceItem, ProjectItem, SkillCategory, CertificationItem, NavItem } from '../types/resume';

export const PERSONAL_INFO = {
  name: "Mihai Straculencu",
  role: "Frontend Developer",
  handle: "@mihaissh",
  location: "Brașov, Romania",
  openTo: ["Remote Worldwide", "Relocation Anywhere", "Hybrid / On-site"],
  email: "mstraculencu@gmail.com",
  github: "https://github.com/mihaissh",
  githubUsername: "mihaissh",
  linkedin: "https://www.linkedin.com/in/straculencu-mihai/",
  linkedinUsername: "straculencu-mihai",
  portfolioUrl: "https://www.mstraculencu.dev/",
  tagline: "I build web apps with React, TypeScript, and Next.js. I also use AI tools every day to write better code faster.",
  availability: "Available for Hire",
  yearsExperience: "3+ Years",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "profile.tsx", comment: "// 00 Intro & Props", lineNumber: 1 },
  { id: "experience", label: "experience.ts", comment: "// 01 Work Experience", lineNumber: 42 },
  { id: "projects", label: "projects.tsx", comment: "// 02 Featured Projects", lineNumber: 108 },
  { id: "skills", label: "skills.ts", comment: "// 03 Technical Skills", lineNumber: 184 },
  { id: "downloads", label: "downloads.tsx", comment: "// 04 Downloads & Certs", lineNumber: 240 },
  { id: "about", label: "about.md", comment: "// 05 Off the Clock", lineNumber: 295 },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "freelance-frontend",
    role: "Full-Stack & Frontend Developer",
    company: "Freelance & Client Projects",
    location: "Remote & Brașov, Romania",
    period: "2022 — Present",
    isCurrent: true,
    declaration: "const freelanceProjects: ClientWork[] =",
    description: [
      "Built client business platforms (Raypath, Sophia Houses, Betonix) using Next.js and Tailwind CSS with React Hook Form and WebP image pipelines.",
      "Built the Remax.md interactive property map with OpenStreetMap, JavaScript, and Bootstrap, improving search speed and mobile layouts.",
      "Built the Cofetăria Marshal Brăila bakery site featuring GSAP scroll animations, product showcases, and responsive menus.",
      "Integrated REST APIs and backend services using Node.js, Express, PostgreSQL, MongoDB, DBeaver, Clerk, and JWT auth.",
      "Explored Gen AI workflows with LLM API integrations, prompt engineering, and document search scripts in Node.js.",
      "Wrote unit tests using Jest and React Testing Library; managed deployments on Vercel and Netlify."
    ],
    tech: ["React 19", "Next.js 14", "TypeScript", "Tailwind CSS", "GSAP", "Jest", "Vercel", "Node.js", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    id: "romstal-ops",
    role: "Store Operations & Stock Management",
    company: "Romstal Brașov & Bran",
    location: "Brașov & Bran, Romania",
    period: "2024 — 2025",
    isCurrent: false,
    declaration: "const romstalTool: OperationsSoftware =",
    description: [
      "Handled stock code lookups, product catalogs, and inventory references for HVAC, plumbing, and sanitary equipment across Brașov and Bran store locations.",
      "Built 'Romstal Stock Search', a mobile product search tool using React, TypeScript, Vite, and Supabase so warehouse staff could look up stock codes instantly on their phones instead of searching through PDF price lists."
    ],
    tech: ["React 19", "TypeScript", "Vite", "Supabase", "PWA", "Inventory Logistics"]
  },
  {
    id: "independent-projects",
    role: "Independent Web & Tool Developer",
    company: "Open Source & Personal R&D",
    location: "Brașov, Romania",
    period: "2022 — Present",
    isCurrent: true,
    declaration: "const independentLaboratories: OpenSourceLab[] =",
    description: [
      "Built Quin69 VOD Archive — a Twitch stream viewer with synced live chat replay, log search, and player keyboard shortcuts.",
      "Built Quin69 Playlist Tracker, a song request monitor polling Twitch chat logs every 30 seconds with direct links for Spotify and YouTube.",
      "Built real-time web apps using Firebase, custom CSS layouts, and state-driven math calculators.",
      "Used AI tools and LLM APIs to build personal automation utilities, stream data parsers, and developer scripts."
    ],
    tech: ["Next.js 14", "React", "Firebase", "LLM APIs", "AI Coding Assistants", "TypeScript", "Material UI", "Tailwind CSS"]
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
    link: "https://github.com/mihaissh",
    github: "https://github.com/mihaissh",
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
    link: "https://github.com/mihaissh",
    github: "https://github.com/mihaissh",
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
    github: "https://github.com/mihaissh",
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
    github: "https://github.com/mihaissh",
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
    github: "https://github.com/mihaissh",
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
    github: "https://github.com/mihaissh",
    badgeColor: "#948ae3" // Purple syntax
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    comment: "// Core Syntax & Runtime Engines",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
    color: "#fc618d" // Pink
  },
  {
    category: "Frontend Frameworks & UI",
    comment: "// Component Libraries & State Trees",
    skills: ["React 18 / 19", "Next.js 14", "Angular", "Tailwind CSS", "Bootstrap", "jQuery", "Framer Motion", "Material UI"],
    color: "#5ad4e6" // Cyan
  },
  {
    category: "Backend & AI Tools",
    comment: "// APIs, Database Tools & AI Workflows",
    skills: ["Node.js", "Express", "RESTful APIs", "LLM APIs", "Prompt Engineering", "AI Coding Assistants"],
    color: "#7bd88f" // Green
  },
  {
    category: "Databases & Dev Tools",
    comment: "// Storage, Testing & Deployment Infra",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "DBeaver", "Firebase", "Jest", "Vite", "Git & Docker", "Vercel"],
    color: "#fd9353" // Orange
  }
];

export const CERTIFICATIONS_DOWNLOADS: CertificationItem[] = [
  {
    id: "resume-pdf",
    title: "Mihai Straculencu — Resume (PDF)",
    issuer: "Frontend Developer CV",
    year: "2026 Edition",
    description: "2-page resume covering my work history, projects, and skills.",
    fileSize: "1.2 MB",
    downloadUrl: "/MS-Resume.pdf",
    type: "PDF"
  },
  {
    id: "web-dev-cert",
    title: "Web Development Certification (PDF)",
    issuer: "Certified Professional Engineering Program",
    year: "2023",
    description: "Certificate confirming training in modern web standards, frontend frameworks, and responsive design.",
    fileSize: "840 KB",
    downloadUrl: "/mihai-straculencu-certificare.pdf",
    type: "PDF"
  }
];
