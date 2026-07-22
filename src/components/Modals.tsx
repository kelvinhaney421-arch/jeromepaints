


















import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { XIcon, AlertTriangleIcon, GavelIcon } from 'lucide-react';
import { Product } from '../data/products';
import { useSettings } from '../context/SettingsContext';
import { toast } from './Toast';

function Backdrop({ onClose, children }: {onClose: () => void;children: React.ReactNode;}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
        
        {children}
      </motion.div>
    </motion.div>);

}

export function BiddingModal({
  product,
  open,
  onClose




}: {product: Product;open: boolean;onClose: () => void;}) {
  const { t } = useTranslation();
  const { format, currency } = useSettings();
  const [bid, setBid] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bid) return;
    toast(`${t('bidTitle')}: ${currency} ${bid}`);
    setBid('');
    onClose();
  };

  return (
    <AnimatePresence>
      {open &&
      <Backdrop onClose={onClose}>
          <div className="flex items-center justify-between border-b border-slate-200 bg-brand-600 px-5 py-3 dark:border-slate-800">
            <h3 className="flex items-center gap-2 text-base font-semibold text-white">
              <GavelIcon size={18} /> {t('bidTitle')}
            </h3>
            <button onClick={onClose} aria-label="Close" className="text-white/80 hover:text-white">
              <XIcon size={20} />
            </button>
          </div>
          <form onSubmit={submit} className="p-5">
            <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">
              {product.title} — {format(product.price)}
            </p>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
              {t('placeBidPrice')} *
            </label>
            <input
            type="number"
            required
            min={0}
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            className="mb-5 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            placeholder="0.00" />
          
            <div className="flex justify-end gap-2">
              <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800">
              
                {t('cancel')}
              </button>
              <button
              type="submit"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
              
                {t('submit')}
              </button>
            </div>
          </form>
        </Backdrop>
      }
    </AnimatePresence>);

}

export function DeleteAccountModal({
  open,
  onClose



}: {open: boolean;onClose: () => void;}) {
  const { t } = useTranslation();
  const warnings = [
  'Warning: You cannot undo this action',
  "Note: Don't click any button or perform any action during account deletion, it may take some time.",
  'If you created any classified products, after deleting your account, those products will no longer be in our system.',
  'After deleting your account, your wallet balance will no longer be in our system.'];


  return (
    <AnimatePresence>
      {open &&
      <Backdrop onClose={onClose}>
          <div className="flex items-center justify-between border-b border-slate-200 bg-red-600 px-5 py-3 dark:border-slate-800">
            <h3 className="flex items-center gap-2 text-base font-semibold text-white">
              <AlertTriangleIcon size={18} /> {t('deleteAccount')}
            </h3>
            <button onClick={onClose} aria-label="Close" className="text-white/80 hover:text-white">
              <XIcon size={20} />
            </button>
          </div>
          <div className="p-5">
            <ul className="mb-5 space-y-2">
              {warnings.map((w, i) =>
            <li
              key={i}
              className="flex gap-2 rounded-lg bg-red-50 p-2.5 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
              
                  <AlertTriangleIcon size={16} className="mt-0.5 shrink-0" />
                  <span>{w}</span>
                </li>
            )}
            </ul>
            <div className="flex justify-end gap-2">
              <button
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800">
              
                {t('cancelDelete')}
              </button>
              <button
              onClick={() => {
                toast('Account deletion requested');
                onClose();
              }}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
              
                {t('confirmDelete')}
              </button>
            </div>
          </div>
        </Backdrop>
      }
    </AnimatePresence>);

}