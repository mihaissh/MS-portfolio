import React from 'react';
import { Code, Server, Database, Cpu, Terminal, CheckCircle } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/resumeData';

export const TechnicalSkills: React.FC = () => {
  return (
    <section id="skills" className="py-10 border-b border-[#403e43]">
      {/* Code Comment Header */}
      <div className="flex items-center space-x-2 font-mono text-xs text-[#727072] mb-6 overflow-hidden">
        <span className="text-[#fc618d] shrink-0">// 03. TECHNICAL_SKILLS</span>
        <span className="text-[#403e43] hidden sm:inline">---------------------------------------------------------</span>
      </div>

      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#fcfcfa] font-sans flex flex-wrap items-center gap-x-2">
          <span className="text-[#fc618d] font-mono text-xl">type</span>
          <span>SkillMatrix</span>
          <span className="text-[#fc618d] font-mono text-xl">=</span>
          <span className="text-[#7bd88f] font-mono text-xl">Record&lt;Category, string[]&gt;</span>
        </h2>
        <p className="text-[#a8a2a8] text-sm mt-1 font-sans">
          Frontend architecture, backend services, database management, and Gen AI search pipelines
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECHNICAL_SKILLS.map((skillGroup, idx) => (
          <div
            key={idx}
            className="bg-[#2d2a2e] border border-[#403e43] rounded-lg p-5 hover:border-[#7bd88f]/40 transition-all shadow-editor group"
          >
            {/* Header of skill block */}
            <div className="flex items-center justify-between border-b border-[#403e43]/60 pb-3 mb-4 font-mono text-xs gap-2">
              <div className="flex items-center space-x-2 min-w-0">
                <Terminal className="w-4 h-4 shrink-0" style={{ color: skillGroup.color }} />
                <h3 className="text-sm font-bold text-[#fcfcfa] font-mono truncate">
                  {skillGroup.category}
                </h3>
              </div>
              <span className="text-[#727072] hidden sm:inline shrink-0 text-right">{skillGroup.comment}</span>
            </div>

            {/* Tag Cloud */}
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 bg-[#222222] border border-[#403e43] rounded font-mono text-xs text-[#fcfcfa] hover:border-[#fc618d] hover:text-[#fc618d] transition-colors cursor-default flex items-center space-x-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skillGroup.color }}></span>
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
