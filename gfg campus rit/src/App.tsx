import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Contact from './pages/Contact';

import AdminDashboard from './pages/AdminDashboard';
import { EventProvider } from './context/EventContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <EventProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-green-100 selection:text-[#2F8D46]">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/community" element={<Community />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </EventProvider>
  );
}
