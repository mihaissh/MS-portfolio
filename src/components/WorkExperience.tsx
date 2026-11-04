import React from 'react';
import { WORK_EXPERIENCE } from '../data/resumeData';
import { SectionHeading } from './SectionHeading';

export function WorkExperience() {
  return (
    <section id="experience" className="border-t border-line py-24">
      <SectionHeading
        file="experience.ts"
        title="Experience"
        description="Front-end work for real estate and construction clients, enterprise integrations, and a year running a store"
      />

      <ol className="divide-y divide-line border-y border-line">
        {WORK_EXPERIENCE.map((exp) => (
          <li key={exp.id} className="print-card grid gap-3 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
            <div className="font-mono text-[13px] leading-5 text-fg-3">
              <p className="tabular-nums text-fg-2">{exp.period}</p>
              <p className="mt-1">{exp.location}</p>
            </div>

            <div className="max-w-[44rem]">
              <h3 className="text-[18px] font-medium leading-7 text-fg">{exp.role}</h3>
              <p className="text-[15px] leading-6 text-fg-2">{exp.company}</p>

              <ul className="mt-4 space-y-2 text-[15px] leading-6 text-fg-2">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-3 h-px w-3 shrink-0 bg-fg-3" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-mono text-[12px] leading-5 text-fg-3">{exp.tech.join(' · ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
