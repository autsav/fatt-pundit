import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';
import Reserve from './pages/Reserve';
import Vouchers from './pages/Voucher';
import ClickCollect from './pages/ClickCollect';
import BackToTop from './components/UI/BackToTop';
import GoogleReviewBadge from './components/UI/GoogleReviewBadge';
import ErrorBoundary from './components/ErrorBoundary';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
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
          <BackToTop />
          <GoogleReviewBadge />
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
