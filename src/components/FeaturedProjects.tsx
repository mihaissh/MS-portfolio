import React, { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/resumeData';
import { SectionHeading } from './SectionHeading';

const CATEGORIES = ['All', 'React / Next.js', 'AI Tools', 'Frontend', 'Tools & Apps'];

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const q = searchQuery.toLowerCase();
  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tech.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="border-t border-line py-24">
      <SectionHeading
        file="projects.tsx"
        title="Projects"
        description="Stream archives, live chat trackers, a stock lookup app for store staff, and client sites"
        aside={
          <label className="relative block w-full md:w-64">
            <span className="sr-only">Search projects</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-3"
              strokeWidth={1.5}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects"
              className="h-9 w-full rounded-lg border border-line bg-bg-card pl-9 pr-3 text-[14px] text-fg placeholder-fg-3 transition-colors focus:border-line-strong focus:outline-none"
            />
          </label>
        }
      />

      <div className="no-print mb-8 inline-flex flex-wrap gap-1 rounded-[10px] border border-line bg-bg-card p-1" role="tablist">
        {CATEGORIES.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={active}
              onClick={() => setActiveCategory(cat)}
              className={`h-8 rounded-md px-3 text-[13px] transition-colors ${
                active
                  ? 'bg-bg-raised text-fg shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]'
                  : 'text-fg-3 hover:text-fg-2'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="rounded-2xl border border-line bg-bg-card px-6 py-10 text-center text-[15px] text-fg-2">
          No projects match “{searchQuery}”
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="print-card flex flex-col rounded-2xl border border-line bg-bg-card p-6 transition-colors hover:border-line-strong"
            >
              <div className="mb-3 flex items-center justify-between font-mono text-[12px] text-fg-3">
                <span>{project.category}</span>
                <span className="tabular-nums">{project.year}</span>
              </div>

              <h3 className="text-[18px] font-medium leading-7 text-fg">{project.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-fg-2">{project.description}</p>

              {project.highlights && (
                <ul className="mt-4 space-y-1 text-[14px] leading-[22px] text-fg-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[11px] h-px w-3 shrink-0 bg-fg-3" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                <p className="font-mono text-[12px] leading-5 text-fg-3">{project.tech.join(' · ')}</p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-[14px] text-fg-2 transition-colors hover:text-fg"
                  >
                    GitHub
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
