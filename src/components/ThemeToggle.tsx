



import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();
  return (
    <button
      onClick={toggle}
      aria-label={t('theme')}
      title={t('theme')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white transition-colors hover:bg-white/10">
      
      {theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
    </button>);

}