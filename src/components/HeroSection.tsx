import React, { useState } from 'react';
import { Download, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroSectionProps {
  onDownloadResume: () => void;
}

type Token = [string, string];

const t = {
  kw: 'text-syn-pink',
  fn: 'text-syn-green',
  tag: 'text-syn-cyan',
  attr: 'text-syn-orange',
  str: 'text-syn-yellow',
  punct: 'text-syn-text',
  com: 'text-syn-comment',
};

const CODE: Token[][] = [
  [[t.com, '// Front-end developer']],
  [[t.kw, 'export function '], [t.fn, 'DeveloperProfile'], [t.punct, '() {']],
  [[t.kw, '  return '], [t.punct, '(']],
  [[t.punct, '    <'], [t.tag, 'Developer']],
  [[t.attr, '      name'], [t.punct, '='], [t.str, '"Mihai Straculencu"']],
  [[t.attr, '      role'], [t.punct, '='], [t.str, '"Front-End Developer"']],
  [[t.attr, '      experience'], [t.punct, '='], [t.str, '"2 years"']],
  [[t.attr, '      location'], [t.punct, '='], [t.str, '"Romania"']],
  [[t.attr, '      openTo'], [t.punct, '={['], [t.str, '"Cluj-Napoca"'], [t.punct, ', '], [t.str, '"Bucharest"'], [t.punct, ', '], [t.str, '"Remote"'], [t.punct, ']}']],
  [[t.attr, '      stack'], [t.punct, '={[']],
  [[t.str, '        "React"'], [t.punct, ', '], [t.str, '"Next.js"'], [t.punct, ',']],
  [[t.str, '        "TypeScript"'], [t.punct, ', '], [t.str, '"Tailwind CSS"'], [t.punct, ',']],
  [[t.punct, '      ]}']],
  [[t.attr, '      lighthouse'], [t.punct, '='], [t.str, '"95+"']],
  [[t.punct, '    />']],
  [[t.punct, '  );']],
  [[t.punct, '}']],
];

const CURRENT_LINE = 13;

function CodeWindow() {
  return (
    <figure
      className="overflow-hidden rounded-2xl border border-line-strong bg-syn-bg"
      style={{ boxShadow: '0 1px 0 rgb(255 255 255 / 0.06) inset, 0 24px 48px -16px rgb(0 0 0 / 0.6)' }}
      aria-label="Developer profile written as a React component"
    >
      <div className="flex h-10 items-center border-b border-line px-4">
        <div className="flex gap-2" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#3a373b]" />
          <span className="h-3 w-3 rounded-full bg-[#3a373b]" />
          <span className="h-3 w-3 rounded-full bg-[#3a373b]" />
        </div>
        <span className="flex-1 text-center font-mono text-[12px] text-fg-3">DeveloperProfile.tsx</span>
        <span className="w-[52px] text-right font-mono text-[12px] text-fg-3">TSX</span>
      </div>
      <pre className="overflow-x-auto py-4 font-mono text-[12px] leading-[22px] sm:text-[13px]">
        <code className="block min-w-max">
          {CODE.map((line, i) => (
            <span
              key={i}
              className={`flex pr-6 ${i === CURRENT_LINE ? 'bg-white/[0.04]' : ''}`}
            >
              <span
                className={`w-12 shrink-0 select-none pr-4 text-right tabular-nums ${
                  i === CURRENT_LINE ? 'text-fg' : 'text-fg-3'
                }`}
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.map(([cls, text], j) => (
                  <span key={j} className={cls}>
                    {text}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}

export function HeroSection({ onDownloadResume }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="grid min-h-[calc(100svh-56px)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16 lg:py-20"
    >
      <div>
        <p className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-fg-2">
          <span className="h-2 w-2 rounded-full bg-ok" aria-hidden />
          <span className="text-fg">{PERSONAL_INFO.availability}</span>
          <span className="hidden text-fg-3 sm:inline">·</span>
          <span className="basis-full sm:basis-auto">Cluj-Napoca, Bucharest or remote</span>
        </p>

        <h1 className="text-[44px] font-medium leading-[1.04] tracking-[-0.03em] text-fg sm:text-[64px]">
          Mihai Straculencu
        </h1>
        <p className="mt-4 text-[18px] leading-7 text-fg-2 sm:text-[20px] sm:leading-[30px]">
          Front-end developer working in React, Next.js, TypeScript and Tailwind CSS
        </p>
        <p className="mt-6 max-w-[34rem] text-[16px] leading-[26px] text-fg-2">
          Two years building client websites and web apps, including an interactive property map for a real estate
          agency and Next.js portals kept at 95+ on Lighthouse.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={onDownloadResume}
            className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-accent px-5 text-[15px] font-medium text-bg transition-[background-color,transform] hover:bg-[#ff7aa0] active:scale-[0.98]"
          >
            <Download className="h-[18px] w-[18px]" strokeWidth={1.75} />
            Download CV
          </button>
          <button
            onClick={handleCopyEmail}
            className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-line-strong bg-bg-raised px-5 text-[15px] text-fg transition-colors hover:bg-[#2c2a2d]"
            style={{ boxShadow: 'inset 0 1px 0 rgb(255 255 255 / 0.06)' }}
          >
            {copied ? (
              <Check className="h-[18px] w-[18px] text-ok" strokeWidth={1.75} />
            ) : (
              <Copy className="h-[18px] w-[18px] text-fg-3" strokeWidth={1.5} />
            )}
            {copied ? 'Email copied' : 'Copy email'}
          </button>
        </div>
      </div>

      <div className="enter enter-2">
        <CodeWindow />
      </div>
    </section>
  );
}
