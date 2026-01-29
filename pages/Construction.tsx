
import React from 'react';
import { Link } from 'react-router-dom';

const Construction: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <img 
          alt="Building construction site with cranes" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2P_k5Ph4yLbD1918JFos6xpY9uxB6iQAK3OoZYCHhWiH9xuKvp3-GIBUZQ8hr9IYP363RmMDy6hR20WnZwh2rI1NeXQJ1bY-QrpIisfQrq_JH6Lklc-X4IUSbLCr4-s8saAJuhC65RiXkCi-1WV_X0gohmFkPlLwck4sTsYROzHrJWG71w-rIeJUW876_7vDkSrDo4_UKTlRVX9LKfzO7_ZU4Qnrg-Uu2riH0U07fATQxz8X0SMRiYMnhN_uo_XNpO3bfusYUZqwH" 
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight drop-shadow-md uppercase">
              Construction Sites
            </h1>
            <div className="mt-4 w-24 h-2 bg-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                  Construction sites are the single most popular use for mobile sanitation equipment. Whether it's a high-rise project or a residential build, workers need clean, reliable access.
                </p>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  By housing temporary restroom facilities near worksites, crews have quick access to hygienic restrooms without taking too much time from their duties. Our units are designed to withstand the rigors of any active job site.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary dark:text-secondary mb-4 uppercase">
                  Home Construction Services
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  For any home construction site or new development project, keeping the environment clean and professional is essential for builder reputation and worker morale. We provide reliable weekly service and top-tier sanitation solutions tailored specifically for the rigorous demands of residential construction crews.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: 'local_shipping', label: 'Fast Delivery', color: 'blue' },
                    { icon: 'verified', label: 'OSHA Compliant', color: 'green' },
                    { icon: 'cleaning_services', label: 'Professional Servicing', color: 'amber' }
                  ].map((badge) => (
                    <span key={badge.label} className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-wide">
                      <span className="material-icons-outlined text-sm mr-2">{badge.icon}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/quote" className="inline-block bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all uppercase tracking-widest shadow-xl">
                  Get a Free Site Estimate
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 group">
                <img 
                  alt="Blue and lime green portable toilet units" 
                  className="w-full aspect-[4/5] object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC08nLTCmCFu89CyGgVw7YZSl8yMobD62viUic4E02t_CdRCvISzH6rwFkkNoQOUP8CPPXUzJZxRj_R9hyw6vCSldtQ3ASDFxqmD-2Q1cV_cRH_0bSKSUu0Ajnxj9yyR11woq-qkB8idHnyRNIurbfOpa9tFOhDOBQPGWIom7LrtvEnDeIUPltgg6A98SL-KlraAWFgbXSTkancvRyZ_pw2mOgxOqoUxS4EB4WYHpD6DHkOkBVusIu9hR75sj49hOGNj3VKCzbGJ902" 
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-4 rounded-xl text-white">
                      <span className="material-icons-outlined text-3xl">clean_hands</span>
                    </div>
                    <div>
                      <p className="font-display font-bold text-slate-900 dark:text-white text-lg uppercase">Full Sanitation Stations</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Included with every construction rental.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Blobs */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { icon: 'event_available', title: 'Same-Day Deployment', desc: 'Active job sites need equipment fast. We offer emergency same-day delivery.' },
              { icon: 'verified', title: 'OSHA Compliant', desc: 'All units meet or exceed health and safety compliance for industrial workers.' },
              { icon: 'local_shipping', title: 'Flexible Maintenance', desc: 'Choose from weekly, bi-weekly, or on-call maintenance schedules to suit your site.' }
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-secondary transform transition-transform group-hover:rotate-12">
                  <span className="material-icons-outlined text-5xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase">{item.title}</h3>
                <p className="text-slate-200 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;
