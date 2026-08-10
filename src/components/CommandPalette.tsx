import React, { useState, useEffect } from 'react';
import { Search, FileText, ArrowRight, X, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/resumeData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onDownloadResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onDownloadResume
}) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled outside or state toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredNav = NAV_ITEMS.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.comment.toLowerCase().includes(query.toLowerCase())
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(PERSONAL_INFO, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#2d2a2e] border border-[#403e43] rounded-lg shadow-editor overflow-hidden flex flex-col text-[#fcfcfa]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-[#403e43] bg-[#222222]">
          <Search className="w-5 h-5 text-[#fc618d] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section (e.g. experience, projects, skills)..."
            className="w-full bg-transparent text-[#fcfcfa] placeholder-[#727072] font-mono text-sm focus:outline-none"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 text-[#a8a2a8] hover:text-[#fcfcfa] rounded hover:bg-[#403e43]/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 font-mono text-sm space-y-1">
          {/* Quick Actions */}
          <div className="px-3 py-1.5 text-xs text-[#fc618d] font-semibold tracking-wider uppercase border-b border-[#403e43]/40">
            Quick Actions & Commands
          </div>

          <button
            onClick={() => { onDownloadResume(); onClose(); }}
            className="w-full flex items-center justify-between px-3 py-2 text-left rounded hover:bg-[#403e43]/50 group transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <Download className="w-4 h-4 text-[#7bd88f]" />
              <span className="text-[#fcfcfa]">Download Resume PDF</span>
            </div>
            <span className="text-xs text-[#a8a2a8] group-hover:text-[#7bd88f]">Print / Download</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="w-full flex items-center justify-between px-3 py-2 text-left rounded hover:bg-[#403e43]/50 group transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              {copiedEmail ? <Check className="w-4 h-4 text-[#7bd88f]" /> : <Copy className="w-4 h-4 text-[#5ad4e6]" />}
              <span className="text-[#fcfcfa]">Copy Email Address ({PERSONAL_INFO.email})</span>
            </div>
            <span className="text-xs text-[#a8a2a8]">
              {copiedEmail ? "Copied!" : "Clipboard"}
            </span>
          </button>

          <button
            onClick={handleCopyJson}
            className="w-full flex items-center justify-between px-3 py-2 text-left rounded hover:bg-[#403e43]/50 group transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              {copiedJson ? <Check className="w-4 h-4 text-[#7bd88f]" /> : <FileText className="w-4 h-4 text-[#fce566]" />}
              <span className="text-[#fcfcfa]">Copy Developer Profile as JSON</span>
            </div>
            <span className="text-xs text-[#a8a2a8]">
              {copiedJson ? "Copied JSON!" : "Copy"}
            </span>
          </button>

          {/* Section Navigation */}
          <div className="px-3 py-1.5 pt-3 text-xs text-[#5ad4e6] font-semibold tracking-wider uppercase border-b border-[#403e43]/40">
            Go to Editor Section
          </div>

          {filteredNav.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); onClose(); }}
              className="w-full flex items-center justify-between px-3 py-2 text-left rounded hover:bg-[#403e43]/50 group transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-[#727072] text-xs font-mono w-6">:{item.lineNumber}</span>
                <span className="text-[#fce566] font-mono">{item.label}</span>
                <span className="text-[#a8a2a8] text-xs font-sans hidden sm:inline">{item.comment}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#727072] group-hover:text-[#fc618d] group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#222222] border-t border-[#403e43] flex items-center justify-between text-xs text-[#727072] font-mono">
          <span>Navigate with <kbd className="px-1.5 py-0.5 bg-[#403e43] text-[#fcfcfa] rounded text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-[#403e43] text-[#fcfcfa] rounded text-[10px]">↓</kbd></span>
          <span>Close with <kbd className="px-1.5 py-0.5 bg-[#403e43] text-[#fcfcfa] rounded text-[10px]">Esc</kbd></span>
        </div>
      </div>
    </div>
  );
};
