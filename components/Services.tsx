
import React from 'react';
import { Sparkles, Wand2, PartyPopper, Brush, Heart, GraduationCap, CheckCircle2 } from 'lucide-react';
import { services } from '../data/mock';

const iconMap: Record<string, any> = {
  Sparkles,
  Wand2,
  PartyPopper,
  Brush,
  Heart,
  GraduationCap
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Beauty & Beyond</h2>
          <p className="section-description max-w-2xl mx-auto">
            Experience premium artistry tailored to your unique features. We use only international luxury brands to ensure a flawless finish.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card group">
                <div className="service-icon-wrapper">
                  <IconComponent className="w-8 h-8 text-[#61525a]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e1919] mb-4 group-hover:text-[#61525a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#736c64] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm font-medium text-[#1e1919]/70">
                      <CheckCircle2 className="w-4 h-4 text-[#61525a] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary-large"
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
