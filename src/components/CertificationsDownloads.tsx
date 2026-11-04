import React from 'react';
import { Download, Printer } from 'lucide-react';
import { CERTIFICATIONS_DOWNLOADS, EDUCATION } from '../data/resumeData';
import { SectionHeading } from './SectionHeading';

export function CertificationsDownloads() {
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <section id="downloads" className="border-t border-line py-24">
      <SectionHeading
        file="downloads.tsx"
        title="CV and education"
        description="My current CV and the accredited certification, both as PDF"
        aside={
          <button
            onClick={() => window.print()}
            className="no-print inline-flex h-9 items-center gap-2 self-start rounded-lg px-3 text-[14px] text-fg-2 transition-colors hover:bg-bg-raised hover:text-fg md:self-auto"
          >
            <Printer className="h-4 w-4" strokeWidth={1.5} />
            Print this page
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {CERTIFICATIONS_DOWNLOADS.map((doc) => {
          const filename =
            doc.id === 'resume-pdf'
              ? 'Mihai_Straculencu_CV_2026.pdf'
              : (doc.downloadUrl.split('/').pop() ?? doc.downloadUrl);
          return (
            <article
              key={doc.id}
              className="print-card flex gap-5 rounded-2xl border border-line bg-bg-card p-6"
            >
              <div
                className="flex h-14 w-11 shrink-0 items-end justify-center rounded-md border border-line-strong bg-bg-raised pb-2 font-mono text-[11px] text-fg-2"
                aria-hidden
              >
                PDF
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="text-[17px] font-medium leading-6 text-fg">{doc.title}</h3>
                <p className="mt-1 text-[14px] leading-[22px] text-fg-3">{doc.issuer}</p>
                <p className="mt-3 text-[15px] leading-6 text-fg-2">{doc.description}</p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                  <span className="font-mono text-[12px] tabular-nums text-fg-3">
                    {doc.year} · {doc.fileSize}
                  </span>
                  <button
                    onClick={() => handleDownload(doc.downloadUrl, filename)}
                    className="no-print inline-flex h-9 items-center gap-2 rounded-lg border border-line-strong bg-bg-raised px-3 text-[14px] text-fg transition-colors hover:bg-[#2c2a2d]"
                  >
                    <Download className="h-4 w-4 text-fg-3" strokeWidth={1.5} />
                    Download
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ol className="mt-12 divide-y divide-line border-y border-line">
        {EDUCATION.map((ed) => (
          <li key={ed.title} className="grid gap-2 py-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
            <p className="font-mono text-[13px] leading-6 tabular-nums text-fg-2">{ed.period}</p>
            <div className="max-w-[44rem]">
              <h3 className="text-[16px] font-medium leading-6 text-fg">{ed.title}</h3>
              <p className="text-[15px] leading-6 text-fg-2">{ed.school}</p>
              {ed.detail && <p className="mt-2 text-[14px] leading-[22px] text-fg-3">{ed.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
