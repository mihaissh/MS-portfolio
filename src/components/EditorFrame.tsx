import React, { useState } from 'react';
import {
  Menu,
  X,
  GitBranch,
  ChevronRight,
  CheckCircle2,
  Code2,
  FileCode,
  Terminal,
  Layers,
  Sparkles,
} from 'lucide-react';
import { NAV_ITEMS } from '../data/resumeData';

interface EditorFrameProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCommandPalette: () => void;
  onDownloadResume: () => void;
}

export function EditorFrame({
  children,
  activeSection,
  onNavigate,
  onOpenCommandPalette,
  onDownloadResume,
}: EditorFrameProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lineNumbers = Array.from({ length: 180 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#222222] text-[#fcfcfa] flex flex-col font-sans selection:bg-[#fc618d]/30 selection:text-[#fcfcfa]">

      {/* 1. IDE Main Menu & Command Bar Header */}
      <header className="no-print bg-[#19181a] border-b border-[#403e43] h-10 px-3 sm:px-4 flex items-center justify-between font-mono text-xs select-none sticky top-0 z-40">
        {/* Left: IDE Workspace Title & Breadcrumb Icon */}
        <div className="flex items-center space-x-2.5 min-w-0">
          <div className="flex items-center space-x-1.5 text-[#5ad4e6] font-semibold text-xs shrink-0">
            <Code2 className="w-4 h-4 text-[#fc618d]" />
            <span className="text-[#fcfcfa] font-bold">mihaissh / portfolio</span>
          </div>

          <span className="text-[#403e43] hidden md:inline">|</span>

          {/* Breadcrumb path */}
          <div className="hidden md:flex items-center gap-1 text-[#a8a2a8] text-[11px] truncate">
            <span>src</span>
            <ChevronRight className="w-3 h-3 text-[#727072]" />
            <span className="text-[#7bd88f]">components</span>
            <ChevronRight className="w-3 h-3 text-[#727072]" />
            <span className="text-[#fce566]">resume.tsx</span>
          </div>
        </div>

        {/* Right: Actions & Diagnostics */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="hidden md:flex items-center space-x-1.5 text-[11px] font-mono text-[#7bd88f]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7bd88f]" />
            <span>0 errors</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 bg-[#2d2a2e] text-[#fcfcfa] rounded sm:hidden border border-[#403e43]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* 2. IDE Editor Tabs Bar */}
      <nav className="no-print bg-[#19181a] border-b border-[#403e43] px-2 sm:px-4 flex items-center justify-between text-xs font-mono sticky top-10 z-30 overflow-x-auto no-scrollbar select-none">
        {/* Editor File Tabs */}
        <div className="flex items-center space-x-1 min-w-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 flex items-center space-x-2 text-xs font-mono transition-colors shrink-0 rounded-t border-t-2 ${
                  isActive
                    ? 'bg-[#222222] border-[#fc618d] text-[#fcfcfa] font-semibold'
                    : 'bg-[#19181a] border-transparent text-[#727072] hover:bg-[#2d2a2e] hover:text-[#a8a2a8]'
                }`}
              >
                <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-[#5ad4e6]' : 'text-[#727072]'}`} />
                <span>{item.label}</span>
                {isActive && <span className="text-[#fc618d] text-[10px]">●</span>}
              </button>
            );
          })}
        </div>

        {/* Current Active Section Comment Badge (Desktop) */}
        <div className="hidden lg:flex items-center space-x-1 text-[11px] font-mono text-[#fc618d] pl-4 shrink-0">
          <span>{NAV_ITEMS.find((n) => n.id === activeSection)?.comment || '// 00 Intro'}</span>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden no-print fixed top-[4.5rem] left-0 right-0 z-50 bg-[#2d2a2e] border-b border-[#403e43] shadow-xl">
          <div className="p-4 font-mono text-xs space-y-1.5">
            <div className="text-[#727072] text-[10px] uppercase font-bold tracking-wider mb-3">
              // Navigation Tabs
            </div>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#fc618d]/20 text-[#fc618d] font-bold border border-[#fc618d]/30'
                    : 'text-[#a8a2a8] hover:bg-[#403e43]/60 hover:text-[#fcfcfa]'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileCode className="w-3.5 h-3.5 text-[#5ad4e6]" />
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] text-[#727072] shrink-0 ml-2">:{item.lineNumber}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3. Main Editor Work Area with Line Numbers */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto print-container min-w-0">
        {/* Line number gutter — desktop only */}
        <div className="no-print w-10 sm:w-14 bg-[#19181a] border-r border-[#403e43] py-6 select-none font-mono text-[11px] text-[#5c5855] text-right pr-2 sm:pr-3 shrink-0 hidden md:block">
          {lineNumbers.map((num) => (
            <div key={num} className="leading-6 hover:text-[#fc618d] transition-colors">
              {num}
            </div>
          ))}
        </div>

        {/* Content View */}
        <main className="flex-1 p-4 sm:p-8 lg:p-10 min-w-0 overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* 4. Authentic IDE Status Bar Footer */}
      <footer className="no-print bg-[#19181a] border-t border-[#403e43] h-7 px-3 sm:px-4 flex items-center justify-between font-mono text-[11px] text-[#a8a2a8] select-none sticky bottom-0 z-40">
        {/* Left Status Bar Items */}
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
          <span className="flex items-center space-x-1 text-[#7bd88f] shrink-0">
            <GitBranch className="w-3 h-3" />
            <span>main*</span>
          </span>
          <span className="text-[#403e43] shrink-0">|</span>
          <span className="flex items-center space-x-1 text-[#5ad4e6] shrink-0">
            <CheckCircle2 className="w-3 h-3 text-[#7bd88f]" />
            <span>Prettier</span>
          </span>
          <span className="text-[#403e43] hidden sm:inline shrink-0">|</span>
          <span className="text-[#a8a2a8] hidden sm:inline shrink-0">TypeScript 5.7</span>
        </div>

        {/* Right Status Bar Items */}
        <div className="flex items-center space-x-2 sm:space-x-3 text-[11px] shrink-0">
          <span className="hidden sm:inline">Ln 42, Col 18</span>
          <span className="text-[#403e43] hidden sm:inline">|</span>
          <span className="hidden sm:inline text-[#a8a2a8]">Spaces: 2</span>
          <span className="text-[#403e43] hidden sm:inline">|</span>
          <span className="text-[#7bd88f]">UTF-8</span>
          <span className="text-[#403e43]">|</span>
          <span className="text-[#fc618d] font-bold">TypeScript React</span>
        </div>
      </footer>
    </div>
  );
};
