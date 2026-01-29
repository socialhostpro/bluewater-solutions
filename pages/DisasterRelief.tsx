
import React from 'react';
import { Link } from 'react-router-dom';

const DisasterRelief: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <img 
          alt="Satellite view of a hurricane storm" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8n0-MXfqIV4gtWH3-TzkafeWEjG8MFwpK1NpdFjHJDPO4pbj8QEgHJySrGZzhKWnjz1uTZrlBUKKLo9_yHAYrVk8G2O-wj2TUW_2hqlg19ySqOWDEQLRW1XrcMRVP0gp8d6WnAsOc1aRGdZl9lGme1jAoiWgeQLMf1OtwyHysdirJb_stekZpbjNnKNlv-DgGbd0aseagDX9oRPU3r6ai0AjqgVfX5M3mJclUFZgupr2ML6XPiTAPrC0UOkUTbwkzfpI-vL2TlDkH" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-4 drop-shadow-lg uppercase">
            Disaster Relief
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-light drop-shadow-md">
            Reliable sanitation solutions when they're needed most. Rapid deployment for emergency situations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <article className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight uppercase">
              Why rent a porta potty for disaster relief?
            </h2>
            <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
              <p>
                Disasters, be it man-made or natural, can have devastating consequences on people's lives and property. In some cases they can even result in the loss of life. Emergency management professionals and first responders work relentlessly to guarantee that our communities are prepared for such adversities with efficient responses.
              </p>
              <p>
                Their main objective is to save lives while minimizing suffering. One way this goal may be achieved is through renting a porta potty for disaster relief; as these units provide much-needed sanitation infrastructure when local facilities are compromised.
              </p>
              <p>
                In the wake of floods, hurricanes, or fires, traditional plumbing systems often fail. Providing portable restrooms ensures that hygiene standards are maintained, preventing the spread of secondary illnesses and providing a sense of dignity to displaced families and tireless workers on the front lines.
              </p>
            </div>
            <div className="pt-8">
              <Link 
                to="/quote" 
                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold rounded-xl shadow-xl hover:bg-primary/90 transition-all transform hover:-translate-y-1 uppercase tracking-wider"
              >
                Get Emergency Assistance
              </Link>
            </div>
          </article>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-slate-100 dark:border-slate-800">
              <img 
                alt="Rows of lime green and blue portable toilets on site" 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4KlFwxX74XezLTMW4ewwO1qNSDVYToR_64vQfeej8lFxq7UyxVSvu66I3F4S0JsrBnBfyRZF2DtBk_4gcYmg9CUpWwvQ0zbNEJRWAzPxuCrcfjqQB_PS_KGcfkHDP0imIg6oU6IGMQfSP3j11WNkGOW-yphsx8VFyDhkViOyQjwdVBFJKi9HlhgqtWU5qfsVT4ADkNM24Rc5iAiQaZthKrlYnzAvyT1P7cjrds5NhJYeU9udV7orbVpiLOIPyVb4Y-qSCt6ap8PmO" 
              />
              <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-2xl flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="material-icons-outlined text-primary text-2xl">verified</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900 dark:text-white leading-none">Standard Units</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Ready for Immediate Deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'speed', title: 'Rapid Response', desc: 'We prioritize disaster zones to ensure equipment arrives within hours of request.' },
              { icon: 'clean_hands', title: 'Strict Hygiene', desc: 'Units are sanitized daily to maintain health standards in relief camps.' },
              { icon: 'inventory', title: 'Large Inventory', desc: 'Thousands of units available including ADA compliant and handwashing stations.' }
            ].map((item) => (
              <div key={item.title} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="material-icons-outlined text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold uppercase">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisasterRelief;
