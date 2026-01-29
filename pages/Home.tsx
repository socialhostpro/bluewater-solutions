
import React from 'react';
import { Link } from 'react-router-dom';
import { UNITS } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative hero-gradient min-h-[700px] flex items-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Portable Restrooms <span className="text-secondary">& More</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-100 font-light leading-relaxed">
              Premium porta potty rentals for BBQs, parties, construction sites, and disaster relief across the coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/quote" 
                className="bg-primary border-2 border-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-center text-lg transition-all shadow-xl"
              >
                Get a Free Quote
              </Link>
              <Link 
                to="/units" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-center text-lg transition-all"
              >
                View Our Units
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-secondary">
              <span className="material-icons-outlined">call</span>
              <span className="text-2xl font-bold">305.339.9371</span>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary dark:text-white mb-4">Our Premium Services</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              We provide clean, reliable, and professional portable sanitation solutions for every need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {UNITS.slice(0, 3).map((unit) => (
              <div 
                key={unit.id} 
                className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group relative ${unit.badge === 'Popular' ? 'ring-2 ring-primary scale-105' : ''}`}
              >
                {unit.badge && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase">
                    {unit.badge}
                  </div>
                )}
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary dark:text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons-outlined text-4xl">
                    {unit.id === 'standard' ? 'construction' : unit.id === 'event' ? 'celebration' : 'star'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{unit.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{unit.description}</p>
                <ul className="space-y-3 mb-8 text-slate-500 dark:text-slate-400">
                  {unit.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="material-icons-outlined text-secondary text-sm">check_circle</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/units" className="text-primary dark:text-secondary font-bold inline-flex items-center hover:gap-2 transition-all">
                  Learn More <span className="material-icons-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                alt="Clean portable unit lineup" 
                className="rounded-3xl shadow-2xl w-full" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU0ctDsR3atL3qxGg9wkAWsI_yRrKI3QfRduW-po_3cCf_8VTXNmOsG5FUxy5qp0tZk1HK3Mv-szuUnqKtny8X-a9F-TMOIfrsdIKprZkMZgEjeRciVjVJDqhmICjiQREi0EJam7A8NEcY_NG2gWvWrMwzoMBp5hBkUVX3rTKLbT9FaYwzAM1PaouCMwrC0y97Hg_NgdtGzZ0B3sy1JmItxOJy6QMD39fjUWgCF-ui_TjDGyMgQTZdn6rubBkGD4NGr5_D7RqRHshA" 
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl font-bold text-primary dark:text-white mb-6">Why Choose BlueWater Solutions?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We pride ourselves on providing the cleanest portable sanitation equipment in the industry. Whether it's a small family gathering or a major disaster relief effort, our team is dedicated to excellence.
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'clean_hands', title: 'Impeccable Cleanliness', desc: 'Every unit is deep-cleaned and sanitized before delivery using medical-grade supplies.' },
                  { icon: 'local_shipping', title: 'Reliable Delivery', desc: 'On-time delivery and flexible pickup schedules to match your project or event timeline.' },
                  { icon: 'support_agent', title: '24/7 Support', desc: 'Our local team is always available for maintenance requests or emergency services.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary dark:text-secondary">
                      <span className="material-icons-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl dark:text-white">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Relief CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">Crisis & Disaster Relief Specialists</h2>
          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto">
            Rapid deployment for hurricane relief, flood response, and emergency infrastructure. We're ready when you need us most.
          </p>
          <a 
            href="tel:3053399371" 
            className="bg-secondary text-primary hover:bg-white px-10 py-4 rounded-full font-extrabold text-lg transition-all inline-block"
          >
            Emergency Hotline: 305.339.9371
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
