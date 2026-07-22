




import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Policy({ titleKey }: {titleKey: string;}) {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-4 text-sm text-slate-500">
        <Link to="/" className="hover:text-brand-600">
          {t('home')}
        </Link>{' '}
        / <span className="text-slate-700 dark:text-slate-300">{t(titleKey)}</span>
      </nav>
      <h1 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">{t(titleKey)}</h1>
      <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          This page outlines the {t(titleKey).toLowerCase()} of KJ Consortium Trading. By using our
          services you agree to the terms described here. For any enquiries please contact our team
          via the helpline or WhatsApp.
        </p>
        <p>
          KJ Consortium Trading is committed to transparency, quality, and customer satisfaction
          across all of our industrial chemical products and services.
        </p>
        <p>
          For full details or clarification regarding this policy, reach out to us at
          info@kjconsortiumt.com.
        </p>
      </div>
    </div>);

}