
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { studioInfo } from '../data/mock';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1919] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight mb-2 uppercase">
              ANSHUL SARAOGI
            </h2>
            <p className="text-[#fad24b] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
              Makeup Studio & Academy
            </p>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed mb-8">
              Excellence in luxury bridal makeup and professional training since 2014. Committed to highlighting natural beauty through elite artistry and premium products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#fad24b] hover:text-[#1e1919] transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#fad24b] hover:text-[#1e1919] transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#fad24b] hover:text-[#1e1919] transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">Academy</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Studio Info</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li>Mon-Sat: {studioInfo.hours.weekdays}</li>
              <li>Sunday: {studioInfo.hours.sunday}</li>
              <li>{studioInfo.address.city}</li>
              <li><a href={`tel:${studioInfo.phone}`} className="text-[#fad24b] font-bold">{studioInfo.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-bold uppercase tracking-widest space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Anshul Saraogi. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-white/10">
            {/* HIGHLIGHT START: website designed by saveragraphics a sindhuragroup company */}
            website designed by <span className="text-[#fad24b]/30">saveragraphics</span> a <span className="text-white/20 italic font-serif lowercase tracking-normal px-1">sindhuragroup</span> company
            {/* HIGHLIGHT END */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
