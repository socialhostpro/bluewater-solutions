
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! We will get back to you within 24 hours.');
  };

  return (
    <div>
      {/* Page Heading */}
      <section className="px-6 lg:px-10 py-12 lg:py-16 max-w-7xl mx-auto">
        <div className="max-w-[800px]">
          <h2 className="text-5xl font-black leading-tight tracking-tight mb-4 dark:text-white">Get in Touch</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
            Whether you're planning a wedding, a construction project, or a large outdoor event, our team is ready to provide the highest standard of portable sanitation.
          </p>
        </div>
      </section>

      {/* Contact Section: Two Columns */}
      <section className="px-6 lg:px-10 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold dark:text-white">Full Name</span>
                  <input
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                    placeholder="John Doe"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold dark:text-white">Email Address</span>
                  <input
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold dark:text-white">Subject</span>
                <input
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                  placeholder="Inquiry about event rentals"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold dark:text-white">Message</span>
                <textarea
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-4 focus:ring-2 focus:ring-primary focus:border-primary resize-none dark:text-white"
                  placeholder="Tell us about your needs..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </label>
              <button
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2"
                type="submit"
              >
                <span className="material-icons-outlined">send</span>
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-icons-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Call Us</p>
                    <p className="text-slate-500 dark:text-slate-400">305.339.9371</p>
                    <p className="text-xs text-slate-400 mt-1 italic">Mon-Fri: 8am - 6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-icons-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Email Support</p>
                    <p className="text-slate-500 dark:text-slate-400">info@bluewatersolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-icons-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Service Area</p>
                    <p className="text-slate-500 dark:text-slate-400">
                      Miami, FL & Surrounding Areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
              <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                <span className="material-icons-outlined text-sm">info</span>
                Rapid Response
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Our team typically responds to all inquiries within 24 business hours. For emergency service requests, please contact our 24/7 hotline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas / Map Section */}
      <section className="w-full pb-20">
        <div className="px-6 lg:px-10 mb-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Our Service Areas</h2>
          <p className="text-slate-500 dark:text-slate-400">Serving the greater Miami metropolitan area and surrounding counties.</p>
        </div>
        <div className="relative w-full h-[500px] overflow-hidden bg-slate-200 dark:bg-slate-800 lg:rounded-3xl lg:mx-auto max-w-[1200px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-1000 opacity-40"
            style={{backgroundImage: "url('/imgs/7.png')"}}
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

          {/* Map Overlays */}
          <div className="absolute top-1/3 left-1/4 group cursor-pointer">
            <div className="bg-primary text-white p-2 rounded-lg shadow-lg flex items-center gap-2 transform transition-transform group-hover:-translate-y-1">
              <span className="material-icons-outlined text-sm">check_circle</span>
              <span className="text-xs font-bold px-1 uppercase tracking-wider">Miami-Dade</span>
            </div>
            <div className="w-4 h-4 bg-primary rotate-45 -mt-2 ml-4"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/3 group cursor-pointer">
            <div className="bg-primary text-white p-2 rounded-lg shadow-lg flex items-center gap-2 transform transition-transform group-hover:-translate-y-1">
              <span className="material-icons-outlined text-sm">check_circle</span>
              <span className="text-xs font-bold px-1 uppercase tracking-wider">Broward County</span>
            </div>
            <div className="w-4 h-4 bg-primary rotate-45 -mt-2 ml-4"></div>
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl max-w-xs">
            <h5 className="font-bold mb-3 text-sm border-b pb-2 dark:border-slate-700 dark:text-white">Coverage Key</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="size-4 bg-primary rounded-sm"></div>
                <span className="text-xs font-medium dark:text-slate-300">Core Delivery Zone (1hr)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-4 bg-primary/40 rounded-sm"></div>
                <span className="text-xs font-medium dark:text-slate-300">Extended Region (Next Day)</span>
              </div>
            </div>
            <p className="mt-4 text-[10px] text-slate-500 leading-tight">
              * Deliveries outside core zones may incur additional transport fees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
