
import React, { useState } from 'react';
import { sendQuoteEmail } from '../services/sendgridService';
import { FormData, FormStep } from '../types';

const Quote: React.FC = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Construction Site',
    location: '',
    unitCount: 1,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [id === 'units' ? 'unitCount' : id === 'full_name' ? 'fullName' : id]: value 
    }));
  };

  const nextStep = () => {
    if (step < 3) setStep((step + 1) as FormStep);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as FormStep);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const result = await sendQuoteEmail(formData);
    
    if (result.success) {
      setStatus({ type: 'success', message: result.message });
      // Reset form on success after delay
      setTimeout(() => {
        setStep(1);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          eventType: 'Construction Site',
          location: '',
          unitCount: 1,
          message: ''
        });
      }, 3000);
    } else {
      setStatus({ type: 'error', message: result.message });
    }
    setLoading(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-extrabold text-primary dark:text-white mb-2">Request a Free Quote</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">Tell us about your event or project, and we'll get back to you with a custom estimate within 24 hours.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex items-center border-b border-slate-100 dark:border-slate-700">
              {[
                { s: 1, label: 'Contact Details' },
                { s: 2, label: 'Event Details' },
                { s: 3, label: 'Finalize' }
              ].map((item) => (
                <div 
                  key={item.s} 
                  className={`flex-1 text-center py-4 border-b-4 transition-all ${
                    step === item.s 
                      ? 'border-primary bg-slate-50 dark:bg-slate-800/50' 
                      : 'border-transparent'
                  }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider ${step >= item.s ? 'text-primary' : 'text-slate-400'}`}>Step {item.s}</span>
                  <p className={`text-sm font-semibold ${step >= item.s ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400'}`}>{item.label}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {status && (
                <div className={`p-4 rounded-lg flex items-center gap-3 animate-fadeIn ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <span className="material-icons-outlined">{status.type === 'success' ? 'check_circle' : 'error'}</span>
                  {status.message}
                </div>
              )}

              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="full_name">Full Name</label>
                    <input 
                      className="w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-primary focus:border-primary" 
                      id="full_name" 
                      placeholder="John Doe" 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">Email Address</label>
                    <input 
                      className="w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-primary focus:border-primary" 
                      id="email" 
                      placeholder="john@example.com" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="phone">Phone Number</label>
                    <input 
                      className="w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-primary focus:border-primary" 
                      id="phone" 
                      placeholder="(305) 000-0000" 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="event_type">Event Type</label>
                    <select 
                      className="w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-primary focus:border-primary" 
                      id="event_type"
                      value={formData.eventType}
                      onChange={handleInputChange}
                    >
                      <option>Construction Site</option>
                      <option>Outdoor Wedding</option>
                      <option>Festival / BBQ</option>
                      <option>Sporting Event</option>
                      <option>Private Party</option>
                      <option>Disaster Relief</option>
                    </select>
                  </div>
                   <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="location">Delivery Location</label>
                    <div className="relative">
                      <span className="material-icons-outlined absolute left-3 top-2.5 text-slate-400 text-lg">location_on</span>
                      <input 
                        className="pl-10 w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-primary focus:border-primary" 
                        id="location" 
                        placeholder="City or Zip Code" 
                        type="text" 
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="units">Number of Units Needed</label>
                    <input 
                      className="w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-primary focus:border-primary" 
                      id="units" 
                      min="1" 
                      type="number" 
                      required
                      value={formData.unitCount}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fadeIn">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="message">Special Instructions or Requirements</label>
                  <textarea 
                    className="w-full border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-primary focus:border-primary min-h-[150px]" 
                    id="message" 
                    placeholder="Tell us about gate access, specific placement, or duration..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-800 dark:text-white mb-2">Summary</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Requesting <span className="font-bold">{formData.unitCount}</span> units for <span className="font-bold">{formData.eventType}</span> at <span className="font-bold">{formData.location}</span>.</p>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <span className="text-slate-500 text-sm">Step {step} of 3</span>
                <div className="flex gap-4">
                  {step > 1 && (
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="px-6 py-3 rounded-md font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                    >
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all flex items-center"
                    >
                      Next Step <span className="material-icons-outlined ml-2">arrow_forward</span>
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all flex items-center disabled:opacity-50"
                    >
                      {loading ? 'Sending...' : 'Submit Quote Request'}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="bg-primary text-white rounded-xl p-8 shadow-lg relative overflow-hidden">
             <div className="absolute top-[-20px] right-[-20px] text-white/10">
              <span className="material-icons-outlined text-9xl">verified</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-6 relative z-10">What's Included</h3>
            <ul className="space-y-4 relative z-10">
              {['On-time Delivery & Pickup', 'Full Sanitation & Deep Clean', 'Fully Stocked Supplies', '24/7 Emergency Support', 'Odor Control Treatment'].map(item => (
                <li key={item} className="flex items-start">
                  <span className="material-icons-outlined text-secondary mr-3">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-6">What Customers Say</h3>
            <div className="space-y-8">
              <div className="relative">
                <span className="material-icons-outlined text-secondary/30 absolute -top-4 -left-4 text-5xl">format_quote</span>
                <p className="text-slate-600 dark:text-slate-300 italic mb-4 relative z-10">
                  "BlueWater provided excellent service for our annual company picnic. The units were spotless and the delivery was seamless."
                </p>
                <div className="flex items-center">
                  <img src="https://picsum.photos/id/64/40/40" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-100 text-sm">Michael R.</p>
                    <p className="text-xs text-slate-500">Event Coordinator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Quote;
