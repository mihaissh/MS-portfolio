import React from 'react';

interface SectionHeadingProps {
  file: string;
  title: string;
  description?: string;
  aside?: React.ReactNode;
}

/** Section label as a quiet code comment, then a plain heading. */
export function SectionHeading({ file, title, description, aside }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 font-mono text-[13px] text-fg-3">// {file}</p>
        <h2 className="text-[28px] font-medium leading-tight tracking-[-0.01em] text-fg sm:text-[32px]">
          {title}
        </h2>
        {description && <p className="mt-3 text-[15px] leading-6 text-fg-2">{description}</p>}
      </div>
      {aside}
    </div>
  );
}
