
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Units', path: '/units' },
    { name: 'Construction', path: '/construction' },
    { name: 'BBQ & Parties', path: '/bbq-parties' },
    { name: 'Festivals', path: '/festivals' },
    { name: 'Disaster Relief', path: '/disaster-relief' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                alt="BlueWater Solutions" 
                className="h-14 w-auto" 
                src="/imgs/logo.png" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] lg:text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'text-primary dark:text-secondary border-b-2 border-primary dark:border-secondary pb-1'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/quote" 
              className="bg-primary text-white px-5 py-2.5 rounded-full font-bold hover:shadow-lg transition-all text-[13px] uppercase tracking-widest"
            >
              Free Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 p-2"
            >
              <span className="material-icons-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/quote"
            onClick={() => setIsOpen(false)}
            className="block bg-primary text-white text-center px-6 py-4 rounded-xl font-bold uppercase tracking-widest"
          >
            Get A Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
