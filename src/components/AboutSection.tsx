import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { SectionHeading } from './SectionHeading';

const FACTS = [
  { label: 'Location', value: 'Romania, open to Cluj-Napoca, Bucharest or remote' },
  { label: 'Languages', value: 'Romanian (native), English (fluent)' },
  { label: 'Reference', value: 'Victor Danila, CEO and Principal Developer, Ariminum Remin SRL, on request' },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-line py-24">
      <SectionHeading file="about.md" title="About" />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
        <div className="max-w-[40rem] space-y-5 text-[17px] leading-[28px] text-fg-2">
          <p>
            I'm a front-end developer with 2 years of professional experience building client websites
            and web apps in React, Next.js and Tailwind CSS. At Ariminum Remin I built an interactive property map for a
            real estate agency, with listings loading live as you move around the map, and the client reported better
            usability and more leads.
          </p>
          <p>
            I also bring integration work on Boomi, SFTP and single sign-on, and a year running a Romstal store on my
            own, so I'm comfortable working directly with clients and explaining technical things in plain language.
          </p>
        </div>

        <dl className="space-y-5 border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
          {FACTS.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[12px] leading-5 text-fg-3">{f.label}</dt>
              <dd className="mt-1 text-[15px] leading-6 text-fg">{f.value}</dd>
            </div>
          ))}
          <div>
            <dt className="font-mono text-[12px] leading-5 text-fg-3">Email</dt>
            <dd className="mt-1 text-[15px] leading-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-accent transition-colors hover:text-[#ff7aa0]">
                {PERSONAL_INFO.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
