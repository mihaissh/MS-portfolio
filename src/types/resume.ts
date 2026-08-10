export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string[];
  tech: string[];
  declaration: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: 'React / Next.js' | 'AI Tools' | 'Frontend' | 'Tools & Apps';
  tech: string[];
  description: string;
  highlights?: string[];
  link?: string;
  github?: string;
  badgeColor: string; // Hex or Tailwind class for syntax accent
}

export interface SkillCategory {
  category: string;
  comment: string;
  skills: string[];
  color: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
  type: 'PDF' | 'External';
}

export interface NavItem {
  id: string;
  label: string;
  comment: string;
  lineNumber: number;
}
