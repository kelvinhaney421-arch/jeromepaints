










import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCartIcon } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useSettings } from '../context/SettingsContext';
import { toast } from './Toast';

export function ProductCard({ product }: {product: Product;}) {
  const { t } = useTranslation();
  const { add } = useCart();
  const { format } = useSettings();

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        
        {product.tags.includes("Today's Deal") &&
        <span className="absolute left-2 top-2 rounded-md bg-brand-600 px-2 py-0.5 text-[11px] font-bold text-white">
            {t('todaysDeal')}
          </span>
        }
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <span className="mb-1 text-[11px] font-medium uppercase tracking-wide text-brand-600">
          {product.category}
        </span>
        <Link
          to={`/product/${product.slug}`}
          className="line-clamp-2 text-sm font-semibold text-slate-800 hover:text-brand-600 dark:text-slate-100">
          
          {product.title}
        </Link>
        <div className="mt-2 flex-1" />
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-base font-extrabold text-slate-900 dark:text-white">
            {format(product.price)}
          </span>
        </div>
        <button
          onClick={() => {
            add(product.id, 1);
            toast(`${t('addedToCart')}: ${product.title}`);
          }}
          className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
          
          <ShoppingCartIcon size={16} />
          {t('addToCart')}
        </button>
      </div>
    </div>);

}