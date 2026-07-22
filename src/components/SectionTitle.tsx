




import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function SectionTitle({
  title,
  viewAllTo



}: {title: string;viewAllTo?: string;}) {
  const { t } = useTranslation();
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="relative text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
        {title}
        <span className="absolute -bottom-1.5 left-0 h-1 w-12 rounded-full bg-brand-600" />
      </h2>
      {viewAllTo &&
      <Link
        to={viewAllTo}
        className="text-sm font-medium text-brand-600 hover:underline">
        
          {t('viewAll')} →
        </Link>
      }
    </div>);

}