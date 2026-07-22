





import React, { useEffect, useRef, useState } from 'react';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { CURRENCY_LIST } from '../data/currencies';
import { useSettings } from '../context/SettingsContext';

export function CurrencySelector() {
  const { currency, setCurrency } = useSettings();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        
        <span className="font-semibold">{currency}</span>
        <ChevronDownIcon size={13} />
      </button>
      {open &&
      <div
        role="listbox"
        className="absolute right-0 z-50 mt-2 max-h-80 w-44 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-xl dark:border-slate-700 dark:bg-slate-900">
        
          {CURRENCY_LIST.map((c) =>
        <button
          key={c.code}
          role="option"
          aria-selected={c.code === currency}
          onClick={() => {
            setCurrency(c.code);
            setOpen(false);
          }}
          className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-800">
          
              <span className="flex items-center gap-2">
                <span className="w-8 text-slate-400">{c.symbol}</span>
                {c.code}
              </span>
              {c.code === currency && <CheckIcon size={15} className="text-brand-600" />}
            </button>
        )}
        </div>
      }
    </div>);

}