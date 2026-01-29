
import React from 'react';
import { Link } from 'react-router-dom';

const Festivals: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <img 
          alt="Vibrant music festival crowd under stage lights" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2XG4ezrQAFLPxajrlOHIa_HVXodtziZ12ykuU7aExhBRuI6Y59rr1DeejySOwzf8glMGEinwlZPFObzDy_6anPS3V2P0_m97FJjvTzibAPW-nJjcsZRlHwqutx-0EY1FzB5DdI3SevtatTzBJv28wBFoZ48qfK4EvBBHm9UgA4ui5JEg-tnPK1DZydu0kvlwLN9EcjE6j8OlV0a7auExDk5fIYwlqSmQ5pKRo8iS8dL-0RqSb-iUD5e-1IfsHH8gNtwnBeF0OcvFN" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight drop-shadow-lg uppercase">
            Festivals
          </h1>
          <div className="mt-8">
             <Link 
              to="/quote" 
              className="bg-secondary text-primary hover:bg-white transition-all duration-300 px-10 py-5 rounded-full font-extrabold tracking-wide shadow-xl flex items-center gap-3 mx-auto w-fit text-lg"
            >
              GET FREE QUOTE TODAY
              <span className="material-icons-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight uppercase">
                Why rent a porta potty for a festival?
              </h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  People from all over the country come together to celebrate various holidays and events each year with festivals, street fairs, and weekend celebrations. These gatherings may last for days on end where attendees can enjoy drinks, food, merchandise – even shows! 
                </p>
                <p>
                  To ensure a comfortable experience at these large-scale happenings – why not rent a porta potty? Doing so will make sure your guests stay happy and comfortable throughout the duration of the festivities.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    'High-capacity units for heavy usage',
                    'Dedicated hand-washing stations',
                    'ADA compliant for accessibility',
                    'On-site maintenance crews',
                    'Luxury options for VIP zones',
                    'Rapid setup and removal'
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="material-icons-outlined text-primary">check_circle</span>
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                  alt="Blue and lime green portable restrooms and washing stations" 
                  className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqnMAipHtqFwZ78emYvjJoJri9P4H1fEE64Xtf2THEIujq35s8_wd0vyhpAWCpqzPhpp4XXRUyCKaAtx-BaNQzIMgFRJNCeTPe6kth7o8W5aMWfDpddwTXluA3pCRg_i9IsYXJ_zVC1hR2doog1I9QN02DbqvElPR0FKhF-JDodGLfhDq0NeJMrl7eF8vG4pWf2t2PGl1SWI7iiWG_9pwzo8CbgFrvGvJ3_7OcD7DaNlw7TzRAD7DsS8-ZjpTQ056lKwROf7J73jyh" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xl font-bold uppercase tracking-wider">Premium Event Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Events Served', value: '500+' },
            { label: 'Support Team', value: '24/7' },
            { label: 'Cleanliness Guarantee', value: '100%' },
            { label: 'Units Available', value: '15k+' }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-display font-extrabold text-white mb-3">{stat.value}</div>
              <p className="text-secondary text-sm uppercase font-bold tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Festivals;
