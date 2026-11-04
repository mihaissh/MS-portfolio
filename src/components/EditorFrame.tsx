import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Search } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/resumeData';

interface EditorFrameProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCommandPalette: () => void;
  onDownloadResume: () => void;
}

export function EditorFrame({ children, activeSection, onNavigate, onOpenCommandPalette }: EditorFrameProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="no-print sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-6 px-6 lg:px-8">
          <button
            onClick={() => onNavigate('hero')}
            className="shrink-0 text-[15px] font-medium text-fg"
          >
            Mihai Straculencu
          </button>

          {/* File tabs */}
          <nav className="hidden h-full items-stretch xl:flex" aria-label="Sections">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative px-3 font-mono text-[13px] transition-colors ${
                    isActive ? 'text-fg' : 'text-fg-3 hover:text-fg-2'
                  }`}
                >
                  {item.label}
                  {isActive && <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" />}
                </button>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={onOpenCommandPalette}
              className="hidden h-8 items-center gap-2 rounded-lg border border-line bg-bg-card pl-3 pr-1.5 text-[13px] text-fg-3 transition-colors hover:border-line-strong hover:text-fg-2 sm:inline-flex"
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
              <span className="mr-2">Search</span>
              <kbd className="keycap">⌘K</kbd>
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-lg text-fg-3 transition-colors hover:bg-bg-raised hover:text-fg"
            >
              <Github className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-fg-3 transition-colors hover:bg-bg-raised hover:text-fg"
            >
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-lg text-fg-2 transition-colors hover:bg-bg-raised xl:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-[18px] w-[18px]" strokeWidth={1.5} /> : <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="pop border-t border-line bg-bg xl:hidden">
            <div className="mx-auto max-w-[1200px] px-4 py-3 lg:px-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex h-10 w-full items-center justify-between rounded-lg px-3 text-left text-[15px] transition-colors ${
                    activeSection === item.id ? 'bg-bg-raised text-fg' : 'text-fg-2 hover:bg-bg-card'
                  }`}
                >
                  <span>{item.comment}</span>
                  <span className="font-mono text-[12px] text-fg-3">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 lg:px-8">{children}</main>

      <footer className="no-print border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-8 text-[13px] text-fg-3 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>Mihai Straculencu · {PERSONAL_INFO.location}</span>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono transition-colors hover:text-fg">
            {PERSONAL_INFO.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
