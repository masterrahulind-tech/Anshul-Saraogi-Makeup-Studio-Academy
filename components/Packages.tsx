
import React from 'react';
import { Check, Star } from 'lucide-react';
import { packages } from '../data/mock';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="section-padding bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Our Pricing</span>
          <h2 className="section-title">Luxury Packages</h2>
          <p className="section-description max-w-2xl mx-auto">
            Choose a package that fits your celebration. All packages can be customized.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular-package bg-white' : 'bg-white/60'}`}>
              {pkg.popular && (
                <div className="popular-badge">
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="white" />
                    <span>Most Requested</span>
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#1e1919] mb-4">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-bold text-[#61525a]">{pkg.price}</span>
                <span className="text-gray-400 text-sm">/ starting</span>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-[#736c64] text-sm font-medium">
                    <Check className="w-5 h-5 text-[#61525a] mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-full font-bold transition-all ${
                  pkg.popular 
                    ? 'bg-[#61525a] text-white hover:bg-[#4a3e45]' 
                    : 'bg-[#f7f5f2] text-[#61525a] hover:bg-[#61525a] hover:text-white'
                }`}
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[#736c64] text-sm mt-12 font-medium">
          * Prices are subject to change based on distance, time, and specific customizations.
        </p>
      </div>
    </section>
  );
};

export default Packages;
