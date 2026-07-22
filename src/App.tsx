

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './i18n/config';
import { ThemeProvider } from './context/ThemeContext';
import { SettingsProvider } from './context/SettingsContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { ToastHost } from './components/Toast';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Dashboard } from './pages/Dashboard';
import { Policy } from './pages/Policy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <div className="app-surface flex min-h-screen w-full flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/product/:slug" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/account/dashboard" element={<Dashboard />} />
                  <Route path="/account/orders" element={<Dashboard />} />
                  <Route path="/account/wishlist" element={<Dashboard />} />
                  <Route path="/track-order" element={<Dashboard />} />
                  <Route path="/login" element={<Dashboard />} />
                  <Route path="/terms" element={<Policy titleKey="terms" />} />
                  <Route path="/returns" element={<Policy titleKey="returns" />} />
                  <Route path="/support" element={<Policy titleKey="support" />} />
                  <Route path="/privacy" element={<Policy titleKey="privacy" />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>
              <Footer />
              <FloatingElements />
              <ToastHost />
            </div>
          </BrowserRouter>
        </CartProvider>
      </SettingsProvider>
    </ThemeProvider>);

}