


















import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserIcon, PackageIcon, TruckIcon, Trash2Icon, MapPinIcon, MailIcon } from 'lucide-react';
import { BUSINESS } from '../data/config';
import { useSettings } from '../context/SettingsContext';
import { DeleteAccountModal } from '../components/Modals';

const ORDERS = [
{ id: 'KJ-10294', date: '2026-07-12', status: 'Delivered', totalMyr: 43500 },
{ id: 'KJ-10281', date: '2026-06-28', status: 'Shipped', totalMyr: 21500 },
{ id: 'KJ-10250', date: '2026-06-05', status: 'Processing', totalMyr: 38987 }];


export function Dashboard() {
  const { t } = useTranslation();
  const { format } = useSettings();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [track, setTrack] = useState('');

  const statusColor = (s: string) =>
  s === 'Delivered' ?
  'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' :
  s === 'Shipped' ?
  'bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300' :
  'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300';

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">{t('dashboard')}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Profile */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <UserIcon size={18} className="text-brand-600" />
            {t('profileInfo')}
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
              KJ
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-white">Valued Customer</p>
              <p className="text-sm text-slate-500">Sabah, Malaysia</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <MailIcon size={15} className="text-brand-500" />
              {BUSINESS.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon size={15} className="mt-0.5 text-brand-500" />
              {BUSINESS.address}
            </li>
          </ul>
          <button
            onClick={() => setDeleteOpen(true)}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/40">
            
            <Trash2Icon size={15} />
            {t('deleteAccount')}
          </button>
        </div>

        {/* Orders + track */}
        <div className="lg:col-span-2">
          {/* Track order */}
          <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <TruckIcon size={18} className="text-brand-600" />
              {t('trackOrder')}
            </h2>
            <div className="flex gap-2">
              <input
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                placeholder="KJ-XXXXX"
                className="flex-1 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              
              <button className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
                {t('trackOrder')}
              </button>
            </div>
          </div>

          {/* Order history */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <PackageIcon size={18} className="text-brand-600" />
              {t('orderHistory')}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800">
                    <th className="pb-2 pr-4">#</th>
                    <th className="pb-2 pr-4">Date</th>
                    <th className="pb-2 pr-4">Status</th>
                    <th className="pb-2 text-right">{t('total')}</th>
                  </tr>
                </thead>
                <tbody>
                  {ORDERS.map((o) =>
                  <tr key={o.id} className="border-b border-slate-50 dark:border-slate-800/60">
                      <td className="py-3 pr-4 font-semibold text-slate-800 dark:text-white">
                        {o.id}
                      </td>
                      <td className="py-3 pr-4 text-slate-500">{o.date}</td>
                      <td className="py-3 pr-4">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor(o.status)}`}>
                          {o.status}
                        </span>
                      </td>
                      <td className="py-3 text-right font-semibold text-slate-800 dark:text-white">
                        {format(o.totalMyr)}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <DeleteAccountModal open={deleteOpen} onClose={() => setDeleteOpen(false)} />
    </div>);

}