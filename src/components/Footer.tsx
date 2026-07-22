








import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPinIcon, PhoneIcon, MailIcon, FlaskConicalIcon } from 'lucide-react';
import { BUSINESS } from '../data/config';

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
  { label: t('terms'), path: '/terms' },
  { label: t('returns'), path: '/returns' },
  { label: t('support'), path: '/support' },
  { label: t('privacy'), path: '/privacy' }];

  const accountLinks = [
  { label: t('login'), path: '/login' },
  { label: t('orderHistory'), path: '/account/orders' },
  { label: t('wishlist'), path: '/account/wishlist' },
  { label: t('trackOrder'), path: '/track-order' }];


  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-800 dark:bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
              <FlaskConicalIcon size={20} />
            </span>
            <span className="text-lg font-extrabold text-white">{BUSINESS.companyName}</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">{t('aboutCompany')}</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPinIcon size={16} className="mt-0.5 shrink-0 text-brand-400" />
              <span>{BUSINESS.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon size={16} className="shrink-0 text-brand-400" />
              <a href={`tel:${BUSINESS.helpline}`} className="hover:text-white">
                {BUSINESS.helpline}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon size={16} className="shrink-0 text-brand-400" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('quickLinks')}
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) =>
            <li key={l.path}>
                <Link to={l.path} className="text-slate-400 hover:text-white">
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('myAccount')}
          </h3>
          <ul className="space-y-2 text-sm">
            {accountLinks.map((l) =>
            <li key={l.path}>
                <Link to={l.path} className="text-slate-400 hover:text-white">
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('contactUs')}
          </h3>
          <p className="mb-4 text-sm text-slate-400">
            {t('helpline')}: {BUSINESS.helpline}
          </p>
          <a
            href={`https://wa.me/${BUSINESS.whatsappPhone}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
            
            <PhoneIcon size={16} />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {BUSINESS.companyName}. All rights reserved.
      </div>
    </footer>);

}