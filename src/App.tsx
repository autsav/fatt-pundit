import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';
import Reserve from './pages/Reserve';
import Vouchers from './pages/Voucher';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/:location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
