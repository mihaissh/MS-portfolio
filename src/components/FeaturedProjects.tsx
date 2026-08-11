import React, { useState } from 'react';
import { ExternalLink, Github, Search, Filter, Sparkles, Code2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/resumeData';
import { ProjectItem } from '../types/resume';

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'React / Next.js', 'AI Tools', 'Frontend', 'Tools & Apps'];

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-10 border-b border-[#403e43]">
      {/* Code Comment Header */}
      <div className="flex items-center space-x-2 font-mono text-xs text-[#727072] mb-6 overflow-hidden">
        <span className="text-[#fc618d] shrink-0">// 02. FEATURED_PROJECTS</span>
        <span className="text-[#403e43] hidden sm:inline">---------------------------------------------------------</span>
      </div>

      {/* Section Title & Description */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#fcfcfa] font-sans flex flex-wrap items-center gap-x-2">
            <span className="text-[#fc618d] font-mono text-xl">export const</span>
            <span>featuredProjects</span>
            <span className="text-[#fc618d] font-mono text-xl">:</span>
            <span className="text-[#5ad4e6] font-mono text-xl">Project[]</span>
          </h2>
          <p className="text-[#a8a2a8] text-sm mt-1 font-sans">
            Stream VOD archives, real-time chat trackers, AI-assisted web tools, and mobile inventory PWAs
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-[#727072] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter projects..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#2d2a2e] border border-[#403e43] rounded text-xs font-mono text-[#fcfcfa] placeholder-[#727072] focus:outline-none focus:border-[#fc618d] transition-colors"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#403e43]/60 pb-4 font-mono text-xs">
        <span className="text-[#727072] flex items-center space-x-1 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded transition-all ${
              activeCategory === cat
                ? 'bg-[#fc618d] text-[#222222] font-semibold shadow-glow-pink'
                : 'bg-[#2d2a2e] text-[#a8a2a8] border border-[#403e43] hover:text-[#fcfcfa] hover:border-[#fc618d]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-8 text-center bg-[#2d2a2e] border border-[#403e43] rounded-lg font-mono text-sm text-[#a8a2a8]">
          No matching projects found for query "<span className="text-[#fc618d]">{searchQuery}</span>".
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#2d2a2e] border border-[#403e43] rounded-lg p-5 flex flex-col justify-between hover:border-[#fc618d]/60 transition-all shadow-editor group relative"
            >
              <div>
                {/* Header bar of project card */}
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span
                    className="px-2 py-0.5 rounded font-medium text-[#222222]"
                    style={{ backgroundColor: project.badgeColor }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[#727072]">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#fcfcfa] font-sans group-hover:text-[#fc618d] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#a8a2a8] text-xs leading-relaxed font-sans mb-4">
                  {project.description}
                </p>

                {/* Highlights list */}
                {project.highlights && (
                  <ul className="space-y-1 mb-4 font-mono text-[11px] text-[#7bd88f]">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center space-x-1.5">
                        <span className="text-[#fc618d]">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-[#403e43]/40">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#222222] border border-[#403e43] rounded text-[11px] font-mono text-[#5ad4e6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link Buttons */}
                <div className="flex items-center space-x-2 font-mono text-xs pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 bg-[#222222] hover:bg-[#403e43] border border-[#403e43] text-[#fcfcfa] rounded transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-1.5 bg-[#fc618d]/10 hover:bg-[#fc618d]/20 border border-[#fc618d]/30 text-[#fc618d] rounded transition-colors"
                      title="View Demo Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
