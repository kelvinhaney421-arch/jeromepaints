



import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n/config';
import { formatPrice as fmt } from '../data/currencies';

interface SettingsCtx {
  language: string;
  currency: string;
  setLanguage: (code: string) => void;
  setCurrency: (code: string) => void;
  format: (amountMyr: number) => string;
}

const Ctx = createContext<SettingsCtx | undefined>(undefined);

export function SettingsProvider({ children }: {children: React.ReactNode;}) {
  const { i18n } = useTranslation();
  const [currency, setCurrencyState] = useState<string>(
    () => localStorage.getItem('kj_currency') || 'USD'
  );

  const applyDir = (lang: string) => {
    const meta = LANGUAGES.find((l) => l.code === lang);
    document.documentElement.dir = meta?.dir === 'rtl' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    applyDir(i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('kj_lang', code);
    applyDir(code);
    // When switching language, adopt that locale's default currency unless
    // the user has already made an explicit currency choice this session.
    if (!localStorage.getItem('kj_currency_manual')) {
      const meta = LANGUAGES.find((l) => l.code === code);
      if (meta) {
        setCurrencyState(meta.currency);
        localStorage.setItem('kj_currency', meta.currency);
      }
    }
  };

  const setCurrency = (code: string) => {
    setCurrencyState(code);
    localStorage.setItem('kj_currency', code);
    localStorage.setItem('kj_currency_manual', '1');
  };

  const format = (amountMyr: number) => fmt(amountMyr, currency);

  return (
    <Ctx.Provider
      value={{ language: i18n.language, currency, setLanguage, setCurrency, format }}>
      
      {children}
    </Ctx.Provider>);

}

export function useSettings() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}