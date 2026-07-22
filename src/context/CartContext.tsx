




import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PRODUCTS, Product } from '../data/products';

export interface CartItem {
  productId: string;
  quantity: number;
}

interface CartCtx {
  items: CartItem[];
  add: (productId: string, quantity?: number) => void;
  remove: (productId: string) => void;
  updateQty: (productId: string, quantity: number) => void;
  clear: () => void;
  count: number;
  subtotalMyr: number;
  detailed: {product: Product;quantity: number;lineTotalMyr: number;}[];
}

const Ctx = createContext<CartCtx | undefined>(undefined);

const load = (): CartItem[] => {
  try {
    return JSON.parse(localStorage.getItem('kj_cart') || '[]');
  } catch {
    return [];
  }
};

export function CartProvider({ children }: {children: React.ReactNode;}) {
  const [items, setItems] = useState<CartItem[]>(load);

  useEffect(() => {
    localStorage.setItem('kj_cart', JSON.stringify(items));
  }, [items]);

  const add: CartCtx['add'] = (productId, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
        i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { productId, quantity }];
    });
  };

  const remove: CartCtx['remove'] = (productId) =>
  setItems((prev) => prev.filter((i) => i.productId !== productId));

  const updateQty: CartCtx['updateQty'] = (productId, quantity) =>
  setItems((prev) =>
  prev.
  map((i) => i.productId === productId ? { ...i, quantity: Math.max(1, quantity) } : i).
  filter((i) => i.quantity > 0)
  );

  const clear = () => setItems([]);

  const detailed = useMemo(
    () =>
    items.
    map((i) => {
      const product = PRODUCTS.find((p) => p.id === i.productId);
      if (!product) return null;
      return { product, quantity: i.quantity, lineTotalMyr: product.price * i.quantity };
    }).
    filter(Boolean) as CartCtx['detailed'],
    [items]
  );

  const count = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);
  const subtotalMyr = useMemo(() => detailed.reduce((s, d) => s + d.lineTotalMyr, 0), [detailed]);

  return (
    <Ctx.Provider value={{ items, add, remove, updateQty, clear, count, subtotalMyr, detailed }}>
      {children}
    </Ctx.Provider>);

}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}