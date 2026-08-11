import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Download, Check, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroSectionProps {
  onDownloadResume: () => void;
}

export function HeroSection({ onDownloadResume }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-6 pb-12 border-b border-[#403e43]">
      {/* Code Comment Header */}
      <div className="flex items-center space-x-2 font-mono text-xs text-[#727072] mb-6 overflow-hidden">
        <span className="text-[#fc618d] shrink-0">// 00. INTRO & PROFILE</span>
        <span className="text-[#403e43] hidden sm:inline">---------------------------------------------------------</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Details Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 py-1 bg-[#7bd88f]/10 border border-[#7bd88f]/30 rounded-full font-mono text-xs text-[#7bd88f]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7bd88f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7bd88f]"></span>
            </span>
            <span>{PERSONAL_INFO.availability}</span>
            <span className="text-[#727072]">•</span>
            <span className="text-[#fcfcfa]">Remote or Relocation Worldwide</span>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#fcfcfa] tracking-tight font-sans">
              Mihai Straculencu
            </h1>
            <p className="mt-2 text-xl font-mono text-[#5ad4e6] flex items-center space-x-2">
              <span>Frontend Developer</span>
            </p>
          </div>

          {/* Tagline */}
          <p className="text-[#a8a2a8] text-base leading-relaxed font-sans max-w-2xl">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onDownloadResume}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#fc618d] hover:bg-[#fc618d]/90 text-[#222222] font-mono font-semibold text-sm rounded transition-all shadow-glow-pink active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#2d2a2e] hover:bg-[#403e43] border border-[#403e43] text-[#fcfcfa] font-mono text-sm rounded transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-[#7bd88f]" /> : <Mail className="w-4 h-4 text-[#5ad4e6]" />}
              <span>{copied ? "Copied Email!" : "Copy Email"}</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#2d2a2e] hover:bg-[#403e43] border border-[#403e43] text-[#a8a2a8] hover:text-[#fcfcfa] rounded transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#2d2a2e] hover:bg-[#403e43] border border-[#403e43] text-[#a8a2a8] hover:text-[#fcfcfa] rounded transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* JSX Props / Code Spec Block Column */}
        <div className="lg:col-span-5 font-mono text-xs">
          <div className="bg-[#2d2a2e] border border-[#403e43] rounded-lg p-4 shadow-editor relative overflow-hidden group">
            {/* Header bar of code card */}
            <div className="flex items-center justify-between border-b border-[#403e43]/60 pb-2 mb-3 text-[#727072]">
              <div className="flex items-center space-x-2">
                <Terminal className="w-3.5 h-3.5 text-[#fce566]" />
                <span className="text-[#fcfcfa] font-semibold">DeveloperProfile.tsx</span>
              </div>
              <span className="text-[10px] text-[#7bd88f]">TSX • Validated</span>
            </div>

            {/* Syntax Highlighted Props */}
            <pre className="text-[#a8a2a8] leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
              <code>
                <span className="text-[#fc618d]">export function </span>
                <span className="text-[#fce566]">DeveloperProfile</span>
                <span className="text-[#fcfcfa]">() &#123;</span>
                {'\n'}  <span className="text-[#fc618d]">return</span> (
                {'\n'}    <span className="text-[#5ad4e6]">&lt;Developer</span>
                {'\n'}      <span className="text-[#fd9353]">name</span>=<span className="text-[#7bd88f]">"Mihai Straculencu"</span>
                {'\n'}      <span className="text-[#fd9353]">role</span>=<span className="text-[#7bd88f]">"Frontend Developer"</span>
                {'\n'}      <span className="text-[#fd9353]">location</span>=<span className="text-[#7bd88f]">"Brașov / Open to Work Anywhere"</span>
                {'\n'}      <span className="text-[#fd9353]">openTo</span>=&#123;[<span className="text-[#7bd88f]">"Remote Worldwide"</span>, <span className="text-[#7bd88f]">"Relocation Anywhere"</span>]&#125;
                {'\n'}      <span className="text-[#fd9353]">stack</span>=&#123;[<span className="text-[#7bd88f]">"React"</span>, <span className="text-[#7bd88f]">"TypeScript"</span>, <span className="text-[#7bd88f]">"Node.js"</span>, <span className="text-[#7bd88f]">"AI-Assisted Dev"</span>]&#125;
                {'\n'}      <span className="text-[#fd9353]">status</span>=<span className="text-[#7bd88f]">"Ready to Start"</span>
                {'\n'}    <span className="text-[#5ad4e6]">/&gt;</span>
                {'\n'}  );
                {'\n'}<span className="text-[#fcfcfa]">&#125;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
