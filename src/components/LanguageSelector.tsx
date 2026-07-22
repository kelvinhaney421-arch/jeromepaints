




import React, { useEffect, useRef, useState } from 'react';
import { GlobeIcon, CheckIcon, ChevronDownIcon } from 'lucide-react';
import { LANGUAGES } from '../i18n/config';
import { useSettings } from '../context/SettingsContext';

export function LanguageSelector({ compact = false }: {compact?: boolean;}) {
  const { language, setLanguage } = useSettings();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-white/90 transition-colors hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}>
        
        <GlobeIcon size={15} />
        <span>{current.flag}</span>
        {!compact && <span className="hidden sm:inline">{current.label}</span>}
        <ChevronDownIcon size={13} />
      </button>
      {open &&
      <div
        role="listbox"
        className="absolute right-0 z-50 mt-2 max-h-80 w-56 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-xl dark:border-slate-700 dark:bg-slate-900">
        
          {LANGUAGES.map((l) =>
        <button
          key={l.code}
          role="option"
          aria-selected={l.code === language}
          onClick={() => {
            setLanguage(l.code);
            setOpen(false);
          }}
          className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-800">
          
              <span className="flex items-center gap-2">
                <span>{l.flag}</span>
                {l.label}
              </span>
              {l.code === language && <CheckIcon size={15} className="text-brand-600" />}
            </button>
        )}
        </div>
      }
    </div>);

}