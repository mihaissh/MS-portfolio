import React, { useState, useEffect } from 'react';
import { EditorFrame } from './components/EditorFrame';
import { HeroSection } from './components/HeroSection';
import { WorkExperience } from './components/WorkExperience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechnicalSkills } from './components/TechnicalSkills';
import { CertificationsDownloads } from './components/CertificationsDownloads';
import { AboutSection } from './components/AboutSection';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  // IntersectionObserver to set active section on scroll
  useEffect(() => {
    const sections = ['hero', 'experience', 'projects', 'skills', 'downloads', 'about'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/MS-Resume.pdf';
    link.download = 'Mihai-Straculencu-Resume.pdf';
    link.click();
  };

  return (
    <EditorFrame
      activeSection={activeSection}
      onNavigate={handleNavigate}
      onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      onDownloadResume={handleDownloadResume}
    >
      <div className="space-y-12 max-w-5xl mx-auto">
        <HeroSection onDownloadResume={handleDownloadResume} />
        <WorkExperience />
        <FeaturedProjects />
        <TechnicalSkills />
        <CertificationsDownloads />
        <AboutSection />
      </div>

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onDownloadResume={handleDownloadResume}
      />
    </EditorFrame>
  );
};

export default App;
