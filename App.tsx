
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Units from './pages/Units';
import Quote from './pages/Quote';
import DisasterRelief from './pages/DisasterRelief';
import Festivals from './pages/Festivals';
import Construction from './pages/Construction';
import BBQParties from './pages/BBQParties';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/units" element={<Units />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/disaster-relief" element={<DisasterRelief />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/bbq-parties" element={<BBQParties />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
