












import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MinusIcon, PlusIcon, ShoppingCartIcon, MessageCircleIcon, GavelIcon } from 'lucide-react';
import { findBySlug, byTag } from '../data/products';
import { useCart } from '../context/CartContext';
import { useSettings } from '../context/SettingsContext';
import { BUSINESS } from '../data/config';
import { ProductCard } from '../components/ProductCard';
import { SectionTitle } from '../components/SectionTitle';
import { BiddingModal } from '../components/Modals';
import { toast } from '../components/Toast';

export function ProductDetails() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { add } = useCart();
  const { format } = useSettings();
  const [qty, setQty] = useState(1);
  const [bidOpen, setBidOpen] = useState(false);

  const product = slug ? findBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-slate-500">{t('noResults')}</p>
        <Link to="/categories" className="mt-4 inline-block text-brand-600 hover:underline">
          {t('categories')}
        </Link>
      </div>);

  }

  const related = byTag('Best Selling').
  filter((p) => p.category === product.category && p.id !== product.id).
  slice(0, 5);

  const waLink = `https://wa.me/${BUSINESS.whatsappPhone}?text=${encodeURIComponent(
    `Hi, I'd like to order ${qty} x ${product.title} (${format(product.price)}).`
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="mb-6 text-sm text-slate-500">
        <Link to="/" className="hover:text-brand-600">
          {t('home')}
        </Link>{' '}
        /{' '}
        <Link
          to={`/categories?cat=${encodeURIComponent(product.category)}`}
          className="hover:text-brand-600">
          
          {product.category}
        </Link>{' '}
        / <span className="text-slate-700 dark:text-slate-300">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <img src={product.image} alt={product.title} className="aspect-square w-full object-cover" />
          </div>
        </div>

        <div>
          <span className="inline-block rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {product.category}
          </span>
          <h1 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
            {product.title}
          </h1>
          <p className="mt-3 text-3xl font-extrabold text-brand-600">{format(product.price)}</p>
          <p className="mt-1 text-sm font-medium text-emerald-600">● {t('inStock')}</p>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {t('quantity')}
            </span>
            <div className="inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-2.5 text-slate-600 hover:text-brand-600 dark:text-slate-300"
                aria-label="Decrease">
                
                <MinusIcon size={16} />
              </button>
              <span className="w-10 text-center text-sm font-semibold text-slate-800 dark:text-white">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-2.5 text-slate-600 hover:text-brand-600 dark:text-slate-300"
                aria-label="Increase">
                
                <PlusIcon size={16} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={() => {
                add(product.id, qty);
                toast(`${t('addedToCart')}: ${product.title}`);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              
              <ShoppingCartIcon size={18} />
              {t('addToCart')}
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
              
              <MessageCircleIcon size={18} />
              {t('buyOnWhatsapp')}
            </a>
          </div>
          <button
            onClick={() => setBidOpen(true)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-300 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 dark:border-brand-800 dark:text-brand-300 dark:hover:bg-brand-950">
            
            <GavelIcon size={16} />
            {t('requestQuote')}
          </button>

          {/* Specs */}
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              {t('specifications')}
            </h2>
            <dl className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              {product.specs.map((s, i) =>
              <div
                key={s.label}
                className={`grid grid-cols-2 gap-2 px-4 py-2.5 text-sm ${
                i % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-slate-950'}`
                }>
                
                  <dt className="font-medium text-slate-500">{s.label}</dt>
                  <dd className="text-slate-800 dark:text-slate-200">{s.value}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t('description')}</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {product.description}
        </p>
      </section>

      {related.length > 0 &&
      <section className="mt-12">
          <SectionTitle title={t('bestSelling')} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {related.map((p) =>
          <ProductCard key={p.id} product={p} />
          )}
          </div>
        </section>
      }

      <BiddingModal product={product} open={bidOpen} onClose={() => setBidOpen(false)} />
    </div>);

}