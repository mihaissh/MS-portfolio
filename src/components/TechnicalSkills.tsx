import React from 'react';
import { TECHNICAL_SKILLS } from '../data/resumeData';
import { SectionHeading } from './SectionHeading';

export function TechnicalSkills() {
  return (
    <section id="skills" className="border-t border-line py-24">
      <SectionHeading file="skills.ts" title="Skills" />

      <dl className="divide-y divide-line border-y border-line">
        {TECHNICAL_SKILLS.map((group) => (
          <div key={group.category} className="grid gap-2 py-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
            <dt className="text-[15px] font-medium leading-7 text-fg">{group.category}</dt>
            <dd className="max-w-[44rem] text-[15px] leading-7 text-fg-2">
              {group.skills.map((skill, i) => (
                <React.Fragment key={skill}>
                  <span className="whitespace-nowrap">
                    {skill}
                    {i < group.skills.length - 1 && <span className="ml-2 text-fg-3" aria-hidden>·</span>}
                  </span>{' '}
                </React.Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
