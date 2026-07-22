









import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES, categoryCount, categoryImage, PRODUCTS } from '../data/products';

export function Categories() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const activeCat = params.get('cat') || '';
  const q = (params.get('q') || '').toLowerCase();

  let filtered = PRODUCTS;
  if (activeCat) filtered = filtered.filter((p) => p.category === activeCat);
  if (q)
  filtered = filtered.filter(
    (p) =>
    p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  );

  const setCat = (cat: string) => {
    const next = new URLSearchParams(params);
    if (cat) next.set('cat', cat);else
    next.delete('cat');
    setParams(next);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="mb-4 text-sm text-slate-500">
        <Link to="/" className="hover:text-brand-600">
          {t('home')}
        </Link>{' '}
        / <span className="text-slate-700 dark:text-slate-300">{t('allCategories')}</span>
      </nav>

      {/* Category grid */}
      {!activeCat && !q &&
      <section className="mb-10">
          <SectionTitle title={t('allCategories')} />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((c) =>
          <button
            key={c}
            onClick={() => setCat(c)}
            className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-center transition hover:border-brand-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            
                <img src={categoryImage(c)} alt={c} className="h-20 w-20 rounded-full object-cover" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{c}</span>
                <span className="text-xs text-slate-500">
                  {categoryCount(c)} {t('itemsCount')}
                </span>
              </button>
          )}
          </div>
        </section>
      }

      {/* Filter chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCat('')}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
          !activeCat ?
          'bg-brand-600 text-white' :
          'border border-slate-300 text-slate-600 hover:border-brand-400 dark:border-slate-700 dark:text-slate-300'}`
          }>
          
          {t('allCategories')}
        </button>
        {CATEGORIES.map((c) =>
        <button
          key={c}
          onClick={() => setCat(c)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
          activeCat === c ?
          'bg-brand-600 text-white' :
          'border border-slate-300 text-slate-600 hover:border-brand-400 dark:border-slate-700 dark:text-slate-300'}`
          }>
          
            {c}
          </button>
        )}
      </div>

      <SectionTitle title={activeCat || (q ? `“${params.get('q')}”` : t('products'))} />
      {filtered.length === 0 ?
      <p className="py-16 text-center text-slate-500">{t('noResults')}</p> :

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {filtered.map((p) =>
        <ProductCard key={p.id} product={p} />
        )}
        </div>
      }
    </div>);

}