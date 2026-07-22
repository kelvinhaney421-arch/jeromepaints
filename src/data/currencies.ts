

// Base prices in the product catalog are quoted in MYR (RM).
// Conversion rates are relative to 1 MYR.

export interface CurrencyMeta {
  code: string;
  symbol: string;
  rate: number; // 1 MYR = rate * currency
  decimals: number;
  symbolAfter?: boolean;
}

export const CURRENCIES: Record<string, CurrencyMeta> = {
  MYR: { code: 'MYR', symbol: 'RM', rate: 1, decimals: 2 },
  USD: { code: 'USD', symbol: '$', rate: 0.21, decimals: 2 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.2, decimals: 2 },
  GBP: { code: 'GBP', symbol: '£', rate: 0.17, decimals: 2 },
  PLN: { code: 'PLN', symbol: 'zł', rate: 0.85, decimals: 2, symbolAfter: true },
  RUB: { code: 'RUB', symbol: '₽', rate: 18.5, decimals: 0 },
  UAH: { code: 'UAH', symbol: '₴', rate: 8.7, decimals: 0 },
  TRY: { code: 'TRY', symbol: '₺', rate: 7.2, decimals: 2 },
  SAR: { code: 'SAR', symbol: 'ر.س', rate: 0.79, decimals: 2 },
  CNY: { code: 'CNY', symbol: '¥', rate: 1.53, decimals: 2 },
  JPY: { code: 'JPY', symbol: '¥', rate: 32, decimals: 0 },
  KRW: { code: 'KRW', symbol: '₩', rate: 290, decimals: 0 },
  INR: { code: 'INR', symbol: '₹', rate: 17.7, decimals: 0 },
  IDR: { code: 'IDR', symbol: 'Rp', rate: 3400, decimals: 0 },
  THB: { code: 'THB', symbol: '฿', rate: 7.6, decimals: 2 },
  VND: { code: 'VND', symbol: '₫', rate: 5400, decimals: 0, symbolAfter: true },
  SEK: { code: 'SEK', symbol: 'kr', rate: 2.3, decimals: 2, symbolAfter: true },
  NOK: { code: 'NOK', symbol: 'kr', rate: 2.4, decimals: 2, symbolAfter: true },
  DKK: { code: 'DKK', symbol: 'kr', rate: 1.5, decimals: 2, symbolAfter: true }
};

export const CURRENCY_LIST = Object.values(CURRENCIES);

export function formatPrice(amountMyr: number, currencyCode: string): string {
  const c = CURRENCIES[currencyCode] || CURRENCIES.MYR;
  const converted = amountMyr * c.rate;
  const formatted = converted.toLocaleString('en-US', {
    minimumFractionDigits: c.decimals,
    maximumFractionDigits: c.decimals
  });
  return c.symbolAfter ? `${formatted} ${c.symbol}` : `${c.symbol}${formatted}`;
}