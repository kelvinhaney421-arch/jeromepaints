















import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  MinusIcon,
  PlusIcon,
  Trash2Icon,
  ShoppingCartIcon,
  MessageCircleIcon,
  ArrowLeftIcon } from
'lucide-react';
import { useCart } from '../context/CartContext';
import { useSettings } from '../context/SettingsContext';
import { BUSINESS } from '../data/config';

export function Cart() {
  const { t } = useTranslation();
  const { detailed, updateQty, remove, subtotalMyr, clear } = useCart();
  const { format, currency } = useSettings();

  const checkoutWhatsApp = () => {
    const lines = detailed.
    map(
      (d) => `• ${d.quantity} x ${d.product.title} — ${format(d.product.price)}`
    ).
    join('\n');
    const message = `Hello ${BUSINESS.companyName}, I'd like to place an order:\n\n${lines}\n\n${t(
      'subtotal'
    )}: ${format(subtotalMyr)} (${currency})`;
    window.open(
      `https://wa.me/${BUSINESS.whatsappPhone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (detailed.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <ShoppingCartIcon size={56} className="mx-auto text-slate-300 dark:text-slate-700" />
        <h1 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
          {t('shoppingCart')}
        </h1>
        <p className="mt-2 text-slate-500">{t('emptyCartMsg')}</p>
        <Link
          to="/categories"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
          
          <ArrowLeftIcon size={16} />
          {t('continueShopping')}
        </Link>
      </div>);

  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">{t('shoppingCart')}</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Items */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            {/* Header row (desktop) */}
            <div className="hidden bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:grid sm:grid-cols-[1fr_120px_140px_40px] dark:bg-slate-900">
              <span>{t('product')}</span>
              <span className="text-center">{t('price')}</span>
              <span className="text-center">{t('quantity')}</span>
              <span />
            </div>
            {detailed.map((d) =>
            <div
              key={d.product.id}
              className="grid grid-cols-1 items-center gap-3 border-t border-slate-100 p-4 sm:grid-cols-[1fr_120px_140px_40px] dark:border-slate-800">
              
                <div className="flex items-center gap-3">
                  <img
                  src={d.product.image}
                  alt={d.product.title}
                  className="h-16 w-16 rounded-lg object-cover" />
                
                  <div>
                    <Link
                    to={`/product/${d.product.slug}`}
                    className="text-sm font-semibold text-slate-800 hover:text-brand-600 dark:text-slate-100">
                    
                      {d.product.title}
                    </Link>
                    <p className="text-xs text-brand-600">{d.product.category}</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-700 sm:text-center dark:text-slate-200">
                  {format(d.product.price)}
                </div>
                <div className="flex sm:justify-center">
                  <div className="inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700">
                    <button
                    onClick={() => updateQty(d.product.id, d.quantity - 1)}
                    className="p-2 text-slate-600 hover:text-brand-600 dark:text-slate-300"
                    aria-label="Decrease">
                    
                      <MinusIcon size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold dark:text-white">
                      {d.quantity}
                    </span>
                    <button
                    onClick={() => updateQty(d.product.id, d.quantity + 1)}
                    className="p-2 text-slate-600 hover:text-brand-600 dark:text-slate-300"
                    aria-label="Increase">
                    
                      <PlusIcon size={14} />
                    </button>
                  </div>
                </div>
                <button
                onClick={() => remove(d.product.id)}
                className="justify-self-start text-slate-400 hover:text-red-500 sm:justify-self-center"
                aria-label={t('remove')}>
                
                  <Trash2Icon size={18} />
                </button>
              </div>
            )}
          </div>
          <div className="mt-4 flex justify-between">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:underline">
              
              <ArrowLeftIcon size={16} />
              {t('continueShopping')}
            </Link>
            <button
              onClick={clear}
              className="text-sm font-medium text-slate-400 hover:text-red-500">
              
              {t('remove')}
            </button>
          </div>
        </div>

        {/* Summary */}
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
              {t('subtotal')}
            </h2>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm dark:border-slate-800">
              <span className="text-slate-500">{t('subtotal')}</span>
              <span className="font-semibold text-slate-800 dark:text-white">
                {format(subtotalMyr)}
              </span>
            </div>
            <div className="flex items-center justify-between py-4 text-base font-bold text-slate-900 dark:text-white">
              <span>{t('total')}</span>
              <span className="text-brand-600">{format(subtotalMyr)}</span>
            </div>
            <button
              onClick={checkoutWhatsApp}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
              
              <MessageCircleIcon size={18} />
              {t('proceedToCheckout')}
            </button>
            <p className="mt-3 text-center text-xs text-slate-400">
              {t('buyOnWhatsapp')}
            </p>
          </div>
        </div>
      </div>
    </div>);

}