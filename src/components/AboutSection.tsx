import React from 'react';
import { Terminal, Coffee, Cpu, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 border-b border-[#403e43]">
      {/* Code Comment Header */}
      <div className="flex items-center space-x-2 font-mono text-xs text-[#727072] mb-6 overflow-hidden">
        <span className="text-[#fc618d] shrink-0">// 05. ABOUT // OFF_THE_CLOCK</span>
        <span className="text-[#403e43] hidden sm:inline">---------------------------------------------------------</span>
      </div>

      <div className="bg-[#2d2a2e] border border-[#403e43] rounded-lg p-6 shadow-editor font-sans leading-relaxed text-[#a8a2a8]">
        <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-[#403e43]/60 font-mono text-xs">
          <Terminal className="w-4 h-4 text-[#948ae3]" />
          <span className="text-[#fcfcfa] font-bold">README.md</span>
          <span className="text-[#727072]">• Developer Mindset & Personal Background</span>
        </div>

        <div className="space-y-4 text-sm">
          <p>
            I'm <strong className="text-[#fcfcfa]">Mihai Straculencu</strong>, a frontend developer based in <span className="text-[#5ad4e6]">Brașov, Romania</span>. I build React and TypeScript interfaces and use AI tools daily to write better code.
          </p>

          <p>
            I've built things like an OpenStreetMap property browser, a warehouse stock lookup app (<span className="text-[#fce566]">Romstal Stock Search</span>), and Twitch VOD viewers with live chat replay. I care about clean code, fast UIs, and making things that actually work well.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3 bg-[#222222] border border-[#403e43] rounded font-mono text-xs">
              <div className="text-[#fc618d] font-bold mb-1 flex items-center space-x-1.5">
                <Coffee className="w-3.5 h-3.5" />
                <span>Coding Routine</span>
              </div>
              <p className="text-[#727072] text-[11px]">TypeScript, modular components, clean git commits, dark mode IDEs.</p>
            </div>

            <div className="p-3 bg-[#222222] border border-[#403e43] rounded font-mono text-xs">
              <div className="text-[#7bd88f] font-bold mb-1 flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI-Assisted Workflow</span>
              </div>
              <p className="text-[#727072] text-[11px]">Using AI tools every day to write code faster, refactor, and test.</p>
            </div>

            <div className="p-3 bg-[#222222] border border-[#403e43] rounded font-mono text-xs">
              <div className="text-[#5ad4e6] font-bold mb-1 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Work Availability</span>
              </div>
              <p className="text-[#727072] text-[11px]">Open to work anywhere — fully remote roles or relocation anywhere worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
