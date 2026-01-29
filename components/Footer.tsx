
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-6">
              <img 
                alt="BlueWater Logo" 
                className="h-16 w-auto" 
                src="/imgs/logo.png" 
              />
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              The leading provider of portable sanitation solutions in Florida. Family owned and operated.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 dark:text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/units" className="hover:text-primary transition-colors">Our Units</Link></li>
              <li><Link to="/quote" className="hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 dark:text-white">Services</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><Link to="/construction" className="hover:text-primary transition-colors">Construction Sites</Link></li>
              <li><Link to="/bbq-parties" className="hover:text-primary transition-colors">Special Events</Link></li>
              <li><Link to="/disaster-relief" className="hover:text-primary transition-colors">Disaster Relief</Link></li>
              <li><Link to="/units" className="hover:text-primary transition-colors">Hand Wash Stations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 dark:text-white">Contact Us</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-primary dark:text-secondary">location_on</span>
                <span>Miami, FL & Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-primary dark:text-secondary">phone</span>
                <span className="font-bold text-lg">305.339.9371</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-primary dark:text-secondary">email</span>
                <span>info@bluewatersolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:row justify-between items-center text-sm text-slate-500 dark:text-slate-400 text-center">
          <p>© 2024 BlueWater Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
