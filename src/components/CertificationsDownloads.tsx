import React from 'react';
import { Download, ShieldCheck, Printer } from 'lucide-react';
import { CERTIFICATIONS_DOWNLOADS } from '../data/resumeData';

export const CertificationsDownloads: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <section id="downloads" className="py-10 border-b border-[#403e43]">
      {/* Code Comment Header */}
      <div className="flex items-center space-x-2 font-mono text-xs text-[#727072] mb-6 overflow-hidden">
        <span className="text-[#fc618d] shrink-0">// 04. CERTIFICATIONS_&_DOWNLOADS</span>
        <span className="text-[#403e43] hidden sm:inline">---------------------------------------------------------</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#fcfcfa] font-sans flex flex-wrap items-center gap-x-2">
            <span className="text-[#fc618d] font-mono text-xl">const</span>
            <span>downloads</span>
            <span className="text-[#fc618d] font-mono text-xl">:</span>
            <span className="text-[#5ad4e6] font-mono text-xl">Document[]</span>
          </h2>
          <p className="text-[#a8a2a8] text-sm mt-1 font-sans">
            Printable curriculum vitae, web development engineering certification, and live profile URL
          </p>
        </div>

        {/* Print Trigger Button */}
        <button
          onClick={handlePrint}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-[#2d2a2e] hover:bg-[#403e43] border border-[#403e43] text-[#fce566] font-mono text-xs rounded transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span>Print 2-Page Resume</span>
        </button>
      </div>

      {/* Downloads Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {CERTIFICATIONS_DOWNLOADS.map((doc) => {
          const filename = doc.downloadUrl.split('/').pop() ?? doc.downloadUrl;
          return (
            <div
              key={doc.id}
              className="bg-[#2d2a2e] border border-[#403e43] rounded-lg p-5 flex flex-col justify-between hover:border-[#fce566]/60 transition-all shadow-editor group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className="px-2 py-0.5 bg-[#fce566]/10 text-[#fce566] border border-[#fce566]/30 rounded font-medium">
                    {doc.type} • {doc.fileSize}
                  </span>
                  <span className="text-[#727072]">{doc.year}</span>
                </div>

                <h3 className="text-lg font-bold text-[#fcfcfa] font-sans group-hover:text-[#fce566] transition-colors mb-1">
                  {doc.title}
                </h3>
                <p className="text-xs font-mono text-[#5ad4e6] mb-3">{doc.issuer}</p>
                <p className="text-[#a8a2a8] text-xs leading-relaxed font-sans mb-4">
                  {doc.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#403e43]/40 flex items-center justify-between font-mono text-xs">
                <span className="text-[#7bd88f] flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified PDF</span>
                </span>

                <button
                  onClick={() => handleDownload(doc.downloadUrl, filename)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#fce566] text-[#222222] font-semibold rounded hover:bg-[#fce566]/90 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

