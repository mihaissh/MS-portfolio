import React, { useState, useEffect } from 'react';
import { Search, FileText, Copy, Check, Download, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/resumeData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onDownloadResume: () => void;
}

const rowClass =
  'group flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-[14px] text-fg transition-colors hover:bg-bg-raised';
const iconClass = 'h-4 w-4 shrink-0 text-fg-3';

export function CommandPalette({ isOpen, onClose, onNavigate, onDownloadResume }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase();
  const filteredNav = NAV_ITEMS.filter(
    (item) => item.label.toLowerCase().includes(q) || item.comment.toLowerCase().includes(q),
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
    <div
      className="no-print fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-label="Command palette"
        className="pop flex w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-line-strong bg-bg-card"
        style={{ boxShadow: '0 24px 64px -16px rgb(0 0 0 / 0.7)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-12 items-center gap-3 border-b border-line px-4">
          <Search className="h-4 w-4 shrink-0 text-fg-3" strokeWidth={1.5} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent text-[15px] text-fg placeholder-fg-3 focus:outline-none"
            autoFocus
          />
          <kbd className="keycap">Esc</kbd>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          <p className="px-3 pb-1 pt-2 text-[12px] text-fg-3">Actions</p>

          <button onClick={() => { onDownloadResume(); onClose(); }} className={rowClass}>
            <Download className={iconClass} strokeWidth={1.5} />
            <span className="flex-1">Download CV</span>
            <span className="font-mono text-[12px] text-fg-3">PDF</span>
          </button>

          <button onClick={handleCopyEmail} className={rowClass}>
            {copiedEmail ? (
              <Check className="h-4 w-4 shrink-0 text-ok" strokeWidth={1.5} />
            ) : (
              <Copy className={iconClass} strokeWidth={1.5} />
            )}
            <span className="flex-1">{copiedEmail ? 'Email copied' : 'Copy email'}</span>
            <span className="font-mono text-[12px] text-fg-3">{PERSONAL_INFO.email}</span>
          </button>

          <button onClick={handleCopyJson} className={rowClass}>
            {copiedJson ? (
              <Check className="h-4 w-4 shrink-0 text-ok" strokeWidth={1.5} />
            ) : (
              <FileText className={iconClass} strokeWidth={1.5} />
            )}
            <span className="flex-1">{copiedJson ? 'Profile copied' : 'Copy profile as JSON'}</span>
          </button>

          {filteredNav.length > 0 && <p className="px-3 pb-1 pt-4 text-[12px] text-fg-3">Sections</p>}

          {filteredNav.map((item) => (
            <button key={item.id} onClick={() => { onNavigate(item.id); onClose(); }} className={rowClass}>
              <span className="w-4 shrink-0 text-center font-mono text-[12px] text-fg-3">#</span>
              <span className="flex-1">{item.comment}</span>
              <span className="font-mono text-[12px] text-fg-3">{item.label}</span>
              <CornerDownLeft
                className="h-4 w-4 text-fg-3 opacity-0 transition-opacity group-hover:opacity-100"
                strokeWidth={1.5}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
