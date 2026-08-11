import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/resumeData';

export function WorkExperience() {
  return (
    <section id="experience" className="py-10 border-b border-[#403e43]">
      {/* Comment Header */}
      <div className="flex items-center space-x-2 font-mono text-xs text-[#727072] mb-6 overflow-hidden">
        <span className="text-[#fc618d] shrink-0">// 01. WORK_EXPERIENCE</span>
        <span className="text-[#403e43] hidden sm:inline">---------------------------------------------------------</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#fcfcfa] font-sans flex flex-wrap items-center gap-x-2">
            <span className="text-[#fce566] font-mono text-xl">const</span>
            <span>workExperience</span>
            <span className="text-[#fc618d] font-mono text-xl">:</span>
            <span className="text-[#5ad4e6] font-mono text-xl">Experience[]</span>
            <span className="text-[#fc618d] font-mono text-xl">=</span>
          </h2>
          <p className="text-[#a8a2a8] text-sm mt-1 font-sans">
            Commercial client work, enterprise software operations, and independent R&D (2022 — Present)
          </p>
        </div>
      </div>

      {/* Experience Timeline / Cards */}
      <div className="space-y-6">
        {WORK_EXPERIENCE.map((exp, idx) => (
          <div
            key={exp.id}
            className="bg-[#2d2a2e] border border-[#403e43] rounded-lg p-6 hover:border-[#5ad4e6]/50 transition-all shadow-editor group relative overflow-hidden"
          >
            {/* Syntax Declaration Badge Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 border-b border-[#403e43]/60 pb-3 mb-4 font-mono text-xs">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[#fc618d] shrink-0">[{idx}]</span>
                <span className="text-[#fce566] font-semibold truncate">{exp.declaration}</span>
              </div>
              <div className="flex items-center gap-3 text-[#a8a2a8] shrink-0">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-[#fd9353] shrink-0" />
                  <span className="text-[#fcfcfa] whitespace-nowrap">{exp.period}</span>
                </span>
                <span className="flex items-center space-x-1 hidden sm:flex">
                  <MapPin className="w-3.5 h-3.5 text-[#7bd88f] shrink-0" />
                  <span className="truncate max-w-[140px]">{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Role & Company Header */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h3 className="text-xl font-semibold text-[#fcfcfa] font-sans group-hover:text-[#5ad4e6] transition-colors flex items-center space-x-2">
                <span>{exp.role}</span>
                {exp.isCurrent && (
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#7bd88f]/20 text-[#7bd88f] border border-[#7bd88f]/40 rounded">
                    Active
                  </span>
                )}
              </h3>
              <span className="text-sm font-mono text-[#fce566] font-medium">
                @ {exp.company}
              </span>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2.5 mb-5 text-[#a8a2a8] text-sm font-sans">
              {exp.description.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start space-x-2.5 leading-relaxed">
                  <ChevronRight className="w-4 h-4 text-[#fc618d] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Tag Cloud */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#403e43]/40">
              <span className="text-xs font-mono text-[#727072] mr-2">stack:</span>
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 bg-[#222222] border border-[#403e43] rounded text-xs font-mono text-[#5ad4e6] group-hover:border-[#5ad4e6]/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
