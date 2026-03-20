import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-[#2F8D46] p-1.5 rounded-lg">
              <Code2 className="text-white w-6 h-6" />
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              GFG <span className="text-[#2F8D46]">RIT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#2F8D46] ${
                  location.pathname === link.path ? 'text-[#2F8D46]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/events"
              className="bg-[#2F8D46] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#267339] transition-all shadow-lg shadow-green-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#2F8D46] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-medium rounded-md ${
                    location.pathname === link.path
                      ? 'bg-green-50 text-[#2F8D46]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#2F8D46]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/events"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#2F8D46] text-white px-5 py-3 rounded-xl text-base font-semibold"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
