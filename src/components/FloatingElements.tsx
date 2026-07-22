















import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircleIcon, XIcon } from 'lucide-react';
import { BUSINESS } from '../data/config';

export function FloatingElements() {
  const { t } = useTranslation();
  const [cookieDismissed, setCookieDismissed] = useState(
    () => localStorage.getItem('kj_cookie') === '1'
  );

  const dismissCookie = () => {
    localStorage.setItem('kj_cookie', '1');
    setCookieDismissed(true);
  };

  return (
    <>
      <a
        href={`https://wa.me/${BUSINESS.whatsappPhone}?text=${encodeURIComponent(
          'Hi KJ Consortium Trading, I would like to enquire about your products.'
        )}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-600 py-3 pl-3 pr-4 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500">
        
        <MessageCircleIcon size={22} />
        <span className="hidden sm:inline">{t('chatWithUs')}</span>
      </a>

      {!cookieDismissed &&
      <div className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xl sm:flex-row sm:justify-between dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-300">{t('cookieText')}</p>
          <div className="flex items-center gap-2">
            <button
            onClick={dismissCookie}
            className="whitespace-nowrap rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
            
              {t('cookieBtn')}
            </button>
            <button
            onClick={dismissCookie}
            aria-label="Close"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            
              <XIcon size={16} />
            </button>
          </div>
        </div>
      }
    </>);

}