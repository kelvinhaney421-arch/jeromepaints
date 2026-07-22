







import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  PhoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  FlaskConicalIcon } from
'lucide-react';
import { BUSINESS } from '../data/config';
import { CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';
import { useSettings } from '../context/SettingsContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { CurrencySelector } from './CurrencySelector';

export function Header() {
  const { t } = useTranslation();
  const { count, subtotalMyr } = useCart();
  const { format } = useSettings();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/categories${query ? `?q=${encodeURIComponent(query)}` : ''}`);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-slate-900 text-white dark:bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          <a
            href={`tel:${BUSINESS.helpline}`}
            className="flex items-center gap-1.5 text-white/90 hover:text-white">
            
            <PhoneIcon size={13} />
            {t('helpline')}: {BUSINESS.helpline}
          </a>
          <div className="flex items-center gap-1">
            <LanguageSelector />
            <CurrencySelector />
            <ThemeToggle />
            <Link to="/login" className="hidden rounded-md px-2 py-1 hover:bg-white/10 sm:inline">
              {t('login')}
            </Link>
            <Link
              to="/account/dashboard"
              className="hidden rounded-md px-2 py-1 hover:bg-white/10 sm:inline">
              
              {t('dashboard')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
              <FlaskConicalIcon size={22} />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-base font-extrabold text-slate-900 dark:text-white">
                KJ Consortium
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-brand-600">
                Trading
              </span>
            </span>
          </Link>

          <form onSubmit={onSearch} className="relative flex-1">
            <SearchIcon
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-brand-900" />
            
          </form>

          <Link
            to="/cart"
            className="group flex shrink-0 items-center gap-2 rounded-lg px-2 py-1.5 text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-900">
            
            <span className="relative">
              <ShoppingCartIcon size={24} />
              {count > 0 &&
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-[11px] font-bold text-white">
                  {count}
                </span>
              }
            </span>
            <span className="hidden flex-col text-left leading-tight lg:flex">
              {count > 0 ?
              <>
                  <span className="text-sm font-semibold">{format(subtotalMyr)}</span>
                  <span className="text-[11px] text-slate-500">
                    {count} {t('items')}
                  </span>
                </> :

              <span className="text-xs text-slate-500">{t('cartEmpty')}</span>
              }
            </span>
          </Link>

          <button
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden dark:text-slate-200 dark:hover:bg-slate-900"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu">
            
            {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Nav menu */}
      <nav className="bg-brand-700 text-white dark:bg-brand-900">
        <div className="mx-auto hidden max-w-7xl items-center gap-1 px-4 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setCatOpen(true)}
            onMouseLeave={() => setCatOpen(false)}>
            
            <button className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold hover:bg-white/10">
              <MenuIcon size={16} />
              {t('allCategories')}
              <ChevronDownIcon size={14} />
            </button>
            {catOpen &&
            <div className="absolute left-0 top-full z-50 w-64 rounded-b-xl border border-t-0 border-slate-200 bg-white py-1 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                {CATEGORIES.map((c) =>
              <Link
                key={c}
                to={`/categories?cat=${encodeURIComponent(c)}`}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-800">
                
                    {c}
                  </Link>
              )}
              </div>
            }
          </div>
          <Link to="/" className="px-3 py-2.5 text-sm font-medium hover:bg-white/10">
            {t('home')}
          </Link>
          <Link to="/categories" className="px-3 py-2.5 text-sm font-medium hover:bg-white/10">
            {t('categories')}
          </Link>
          <Link
            to="/account/dashboard"
            className="px-3 py-2.5 text-sm font-medium hover:bg-white/10">
            
            {t('dashboard')}
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="border-b border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-1">
            <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-900">
            
              {t('home')}
            </Link>
            <Link
            to="/categories"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-900">
            
              {t('allCategories')}
            </Link>
            {CATEGORIES.map((c) =>
          <Link
            key={c}
            to={`/categories?cat=${encodeURIComponent(c)}`}
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 pl-6 text-sm text-slate-600 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-slate-900">
            
                {c}
              </Link>
          )}
            <Link
            to="/account/dashboard"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-900">
            
              {t('dashboard')}
            </Link>
          </div>
        </div>
      }
    </header>);

}