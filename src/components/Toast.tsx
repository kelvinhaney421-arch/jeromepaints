












import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircleIcon } from 'lucide-react';

interface ToastItem {
  id: number;
  message: string;
}

let pushFn: ((msg: string) => void) | null = null;

export function toast(message: string) {
  if (pushFn) pushFn(message);
}

export function ToastHost() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    pushFn = (message: string) => {
      const id = Date.now() + Math.random();
      setItems((prev) => [...prev, { id, message }]);
      setTimeout(() => {
        setItems((prev) => prev.filter((i) => i.id !== id));
      }, 2600);
    };
    return () => {
      pushFn = null;
    };
  }, []);

  return createPortal(
    <div className="pointer-events-none fixed bottom-24 left-1/2 z-[60] flex -translate-x-1/2 flex-col items-center gap-2">
      {items.map((i) =>
      <div
        key={i.id}
        className="pointer-events-auto flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-xl dark:bg-brand-700">
        
          <CheckCircleIcon size={16} className="text-emerald-400" />
          {i.message}
        </div>
      )}
    </div>,
    document.body
  );
}