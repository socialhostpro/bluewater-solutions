
import React from 'react';
import { Link } from 'react-router-dom';

const BBQParties: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[550px] flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5jj6EQVvtd_3UB-ncGgqQ7NDceeNHoU7dAMp2qC9lvd820i8b0LrAtF_VgL_zXJyNQgD2NDD0lWgq0mFIUCWNAr3-3XtP38mk6deykZhub6G9CFP774nsIvuiND0iDBGigf68f-Y0ADPkhhsGy-SxREje7nwMXoM9lj4-BEBo4r4dDRu8Hq2_W7tHCXNYYoBstwQ3x13izHI6WkggCyyFl8FJI3jPeygPKFUE-uzKoWP520-FBpNr7RHvOfwXa5pYur7_GM9uWPV1")'
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-white text-5xl md:text-8xl font-display font-black leading-tight tracking-tighter mb-6 uppercase">
            BBQ & PARTIES
          </h1>
          <p className="text-white text-lg md:text-2xl font-light leading-relaxed mb-10 opacity-90 max-w-2xl mx-auto">
            Hassle-free event sanitation for your outdoor gatherings. Reliable, clean, and professional solutions for every celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/units" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform uppercase tracking-widest shadow-2xl">
              View Rental Options
            </Link>
            <Link to="/quote" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors uppercase tracking-widest shadow-2xl">
              Get A Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-primary dark:text-white text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase">
            Reliable Solutions for Every Event
          </h2>
          <div className="h-2 w-24 bg-secondary mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
            BlueWater Solutions provides premium portable restroom rentals, ensuring your guests stay comfortable so you can focus on the grill. We prioritize cleanliness and timely delivery for every party, from small backyard BBQs to large community festivals.
          </p>
        </div>
      </section>

      {/* Pricing & Info Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col gap-4 mb-16 border-l-8 border-primary pl-8">
          <h2 className="text-slate-900 dark:text-white text-4xl font-display font-black uppercase tracking-tight">Portable Toilet Rentals</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg uppercase font-bold tracking-widest">Pricing & Packages</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="p-10 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl hover:-translate-y-2 transition-transform">
            <span className="material-icons-outlined text-primary text-6xl mb-6">dry_cleaning</span>
            <h3 className="text-2xl font-display font-bold mb-4 dark:text-white uppercase tracking-tight">Standard Event Unit</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Perfect for small to medium backyard gatherings. Includes anti-slip flooring and superior ventilation.</p>
            <div className="text-4xl font-black text-primary flex items-baseline gap-2">
              <span className="text-xl">Starting at</span> $125
            </div>
          </div>
          
          <div className="p-10 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl hover:-translate-y-2 transition-transform ring-4 ring-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-primary font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-widest text-xs">
              Most Popular for Parties
            </div>
            <span className="material-icons-outlined text-primary text-6xl mb-6">high_quality</span>
            <h3 className="text-2xl font-display font-bold mb-4 dark:text-white uppercase tracking-tight">Deluxe Flushable</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Features internal sinks, flushing toilets, and mirrors. Ideal for weddings and upscale celebrations.</p>
            <div className="text-4xl font-black text-primary flex items-baseline gap-2">
              <span className="text-xl">Starting at</span> $245
            </div>
          </div>
        </div>

        <div className="bg-primary/5 dark:bg-primary/10 rounded-[2.5rem] p-12 border border-primary/10 relative overflow-hidden group">
          <div className="absolute top-[-50px] right-[-50px] opacity-10 group-hover:rotate-12 transition-transform duration-1000">
            <span className="material-icons-outlined text-[300px] text-primary">verified</span>
          </div>
          <p className="text-slate-900 dark:text-slate-200 text-xl font-medium leading-relaxed max-w-3xl relative z-10">
            We offer transparent pricing for all our rental units. Whether you need a standard unit for a backyard BBQ or deluxe trailers for a large celebration, our rates are designed to fit your event budget without compromising on hygiene.
          </p>
          <div className="flex items-center gap-4 mt-8 text-primary font-black uppercase tracking-widest relative z-10">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
              <span className="material-icons-outlined">verified</span>
            </div>
            <span>Signature 10-Point Sanitization Guarantee</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: 'schedule', title: 'On-Time Delivery', desc: 'Scheduled drop-offs that respect your event timeline. No waiting around.' },
              { icon: 'sanitizer', title: 'Ultra-Clean Units', desc: 'Deep-cleaned and deodorized before every single rental. Guaranteed.' },
              { icon: 'support_agent', title: '24/7 Event Support', desc: 'Emergency support line available for all active rentals throughout the party.' }
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center group">
                <div className="size-20 rounded-[2rem] bg-white/10 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                  <span className="material-icons-outlined text-4xl">{feature.icon}</span>
                </div>
                <h4 className="font-display font-bold text-2xl mb-4 uppercase tracking-tight">{feature.title}</h4>
                <p className="text-lg text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-black text-primary dark:text-white mb-8 uppercase tracking-tighter">
          Ready to Host the Best Party?
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
          Contact our event specialists today to book your units. Don't let sanitation be an afterthought!
        </p>
        <Link to="/quote" className="inline-block bg-primary text-white px-12 py-6 rounded-3xl font-bold text-xl hover:shadow-2xl transition-all uppercase tracking-widest shadow-xl transform hover:-translate-y-1">
          Reserve Your Units Now
        </Link>
      </section>
    </div>
  );
};

export default BBQParties;
