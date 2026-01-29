
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UNITS } from '../constants';

const Units: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Construction' | 'Event' | 'Luxury'>('All');

  const filteredUnits = filter === 'All' ? UNITS : UNITS.filter(u => u.category === filter);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary dark:text-white uppercase tracking-tight mb-4">
          Our Portable Restroom Units
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Premium sanitation solutions for events, construction sites, and disaster relief. Clean, reliable, and professional service.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['All', 'Construction', 'Event', 'Luxury'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === f 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredUnits.map((unit) => (
          <div key={unit.id} className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden custom-shadow transition-transform hover:-translate-y-1 border border-slate-100 dark:border-slate-800">
            <div className="relative h-64 bg-slate-100 overflow-hidden">
              <img 
                alt={unit.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={unit.imageUrl} 
              />
              {unit.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">
                    {unit.badge}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-3">{unit.name}</h3>
              <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-400">
                {unit.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="material-icons-outlined text-secondary text-sm">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link to="/quote" className="w-full bg-primary hover:bg-slate-800 text-white text-center font-bold py-3 rounded transition-colors uppercase tracking-wider">
                  Rent Now
                </Link>
                <button className="w-full border-2 border-slate-200 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-slate-300 font-bold py-3 rounded transition-colors uppercase tracking-wider text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-slate-200 dark:border-slate-800 pt-16">
        {[
          { icon: 'verified', title: 'Hygienic Guarantee', text: 'Every unit is professionally sanitized and inspected before delivery.' },
          { icon: 'local_shipping', title: 'Reliable Delivery', text: 'On-time delivery and flexible pickup scheduling to keep you running.' },
          { icon: 'support_agent', title: '24/7 Support', text: 'Our team is always available for emergencies in the Miami area.' }
        ].map((feat) => (
          <div key={feat.title} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-primary">
              <span className="material-icons-outlined text-3xl">{feat.icon}</span>
            </div>
            <h4 className="font-display text-xl font-bold text-primary dark:text-white mb-2 uppercase">{feat.title}</h4>
            <p className="text-slate-600 dark:text-slate-400">{feat.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Units;
