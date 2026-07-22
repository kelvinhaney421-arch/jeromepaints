







import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRightIcon, LayersIcon } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { ProductCard } from '../components/ProductCard';
import { byTag, CATEGORIES, categoryCount, categoryImage } from '../data/products';

const HERO = "/f3fc652a-0a65-4274-bedb-201c7aafca02.jpg";
const PROMO1 = "/3c27e7eb-4f04-4b22-b2e2-f1de6a3cc865.jpg";
const PROMO2 = "/4b80920e-39d1-4241-8e20-1504cc6f894f.jpg";

export function Home() {
  const { t } = useTranslation();
  const featured = byTag('Featured Products').slice(0, 10);
  const bestSelling = byTag('Best Selling').slice(0, 10);
  const deals = byTag("Today's Deal");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <img src={HERO} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        <div className="relative mx-auto flex min-h-[340px] max-w-7xl flex-col justify-center px-4 py-14 sm:min-h-[420px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl">
            
            <span className="mb-3 inline-block rounded-full bg-brand-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              KJ Consortium Trading
            </span>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Industrial Construction Chemicals
            </h1>
            <p className="mb-6 text-base text-slate-200 sm:text-lg">
              Hardeners, plasticizers, water reducers and specialty chemicals — trusted quality,
              delivered across Malaysia and beyond.
            </p>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500">
              
              {t('categories')}
              <ArrowRightIcon size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        {/* Promo banners */}
        <section className="-mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
          { img: PROMO1, title: t('todaysDeal'), sub: 'Hardener Chemicals', cat: 'Hardener Chemical' },
          { img: PROMO2, title: t('featuredCategories'), sub: 'Plasticizers', cat: 'Plasticizer' }].
          map((b) =>
          <Link
            key={b.cat}
            to={`/categories?cat=${encodeURIComponent(b.cat)}`}
            className="relative flex h-40 items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800">
            
              <img src={b.img} alt="" className="absolute right-0 h-full w-1/2 object-cover" />
              <div className="relative z-10 max-w-[55%] bg-gradient-to-r from-white via-white/90 to-transparent p-5 dark:from-slate-900 dark:via-slate-900/90">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {b.title}
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{b.sub}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                  {t('viewAll')} <ArrowRightIcon size={14} />
                </span>
              </div>
            </Link>
          )}
        </section>

        {/* Hot categories */}
        <section className="mt-12">
          <SectionTitle title={t('hotCategories')} viewAllTo="/categories" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((c) =>
            <Link
              key={c}
              to={`/categories?cat=${encodeURIComponent(c)}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-center transition hover:border-brand-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              
                <img
                src={categoryImage(c)}
                alt={c}
                className="h-16 w-16 rounded-full object-cover" />
              
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {c}
                </span>
                <span className="text-xs text-slate-500">
                  {categoryCount(c)} {t('itemsCount')}
                </span>
              </Link>
            )}
          </div>
        </section>

        {/* Featured products */}
        <section className="mt-12">
          <SectionTitle title={t('featuredProducts')} viewAllTo="/categories" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {featured.map((p) =>
            <ProductCard key={p.id} product={p} />
            )}
          </div>
        </section>

        {/* Featured categories banner */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-brand-700 dark:bg-brand-900">
          <div className="flex flex-col items-center justify-between gap-4 p-8 sm:flex-row">
            <div className="flex items-center gap-4">
              <LayersIcon size={40} className="text-white/80" />
              <div>
                <h3 className="text-xl font-bold text-white">{t('featuredCategories')}</h3>
                <p className="text-sm text-brand-100">
                  {CATEGORIES.length} {t('categories')} · {featured.length}+ {t('products')}
                </p>
              </div>
            </div>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50">
              
              {t('viewAll')} <ArrowRightIcon size={16} />
            </Link>
          </div>
        </section>

        {/* Best selling */}
        <section className="mt-12">
          <SectionTitle title={t('bestSelling')} viewAllTo="/categories" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {bestSelling.map((p) =>
            <ProductCard key={p.id} product={p} />
            )}
          </div>
        </section>

        {/* Today's deal */}
        <section className="mt-12 mb-4">
          <SectionTitle title={t('todaysDeal')} viewAllTo="/categories" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {deals.map((p) =>
            <ProductCard key={p.id} product={p} />
            )}
          </div>
        </section>
      </div>
    </div>);

}