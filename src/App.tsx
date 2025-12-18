import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import BackToTop from './components/UI/BackToTop';
import GoogleReviewBadge from './components/UI/GoogleReviewBadge';
import ErrorBoundary from './components/ErrorBoundary';
import { CartProvider } from './context/CartContext';
import PageLoader from './components/UI/PageLoader';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Location = lazy(() => import('./pages/Location'));
const Reserve = lazy(() => import('./pages/Reserve'));
const Vouchers = lazy(() => import('./pages/Voucher'));
const ClickCollect = lazy(() => import('./pages/ClickCollect'));

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/vouchers" element={<Vouchers />} />
              <Route path="/click-and-collect" element={<ClickCollect />} />
              <Route path="/:location" element={<Location />} />
              <Route path="/:location/reserve" element={<Reserve />} />
              <Route path="/:location/vouchers" element={<Vouchers />} />
              <Route path="/:location/click-and-collect" element={<ClickCollect />} />
            </Routes>
          </Suspense>
          <BackToTop />
          <GoogleReviewBadge />
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
