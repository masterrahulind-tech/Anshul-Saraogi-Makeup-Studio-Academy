
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { studioInfo } from '../data/mock';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-[#61525a] tracking-[0.2em] uppercase mb-4">Contact Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1e1919] mb-8">Get in Touch</h3>
            <p className="text-[#736c64] text-lg mb-12 leading-relaxed font-medium">
              Ready for your transformation? Contact us to book your session or inquire about our academy courses.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#f7f5f2] rounded-2xl flex items-center justify-center text-[#61525a] flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e1919]">Phone</h4>
                  <p className="text-[#736c64] font-medium">{studioInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#f7f5f2] rounded-2xl flex items-center justify-center text-[#61525a] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e1919]">Email</h4>
                  <p className="text-[#736c64] font-medium">{studioInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#f7f5f2] rounded-2xl flex items-center justify-center text-[#61525a] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e1919]">Location</h4>
                  <p className="text-[#736c64] font-medium leading-relaxed">
                    {studioInfo.address.line1}, <br />
                    {studioInfo.address.line2}, {studioInfo.address.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <iframe
                src={studioInfo.mapUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-[2.5rem] shadow-sm grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          <div className="bg-[#fdfbf9] p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-xl">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-500">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#61525a]">Full Name</label>
                    <input type="text" placeholder="Your Name" required className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#61525a]/20 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#61525a]">Phone Number</label>
                    <input type="tel" placeholder="91XXXXXXXX" required className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#61525a]/20 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#61525a]">Email Address</label>
                  <input type="email" placeholder="example@email.com" required className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#61525a]/20 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#61525a]">Service Interest</label>
                  <select className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#61525a]/20 outline-none appearance-none">
                    <option>Bridal Makeup</option>
                    <option>Airbrush Makeup</option>
                    <option>Academy Courses</option>
                    <option>Party Makeup</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#61525a]">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#61525a]/20 outline-none resize-none"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#61525a] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#4a3e45] transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
            
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-sm font-bold text-[#1e1919]/40 uppercase tracking-widest mb-4">Follow Our Journey</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#61525a] hover:scale-110 transition-transform">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
