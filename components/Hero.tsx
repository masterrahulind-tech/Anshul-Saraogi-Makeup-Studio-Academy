
import React from 'react';
import { Phone, MessageCircle, Star, MapPin } from 'lucide-react';
import { studioInfo, heroImage } from '../data/mock';

const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${studioInfo.whatsapp}?text=Hi, I would like to book an appointment`, '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Bridal Makeup"
          className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1919]/90 via-[#1e1919]/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20 shadow-lg">
            <Star className="w-5 h-5 text-[#fad24b] fill-[#fad24b] mr-2" />
            <span className="font-semibold text-white mr-2">{studioInfo.rating}</span>
            <span className="text-white/60 text-sm">({studioInfo.reviewCount}+ Google Reviews)</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title text-white mb-6">
            Soft, Classy & <br/>
            <span className="text-[#fad24b]">Elegant</span> Makeup
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light leading-relaxed">
            {studioInfo.description} in the heart of Mumbai.
          </p>

          {/* Location */}
          <div className="flex items-start text-white/80 mb-10">
            <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-[#fad24b]" />
            <p className="text-base">
              {studioInfo.address.line2}, {studioInfo.address.city}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToContact} className="btn-primary-large">
              Book Appointment
            </button>
            <button onClick={handleWhatsApp} className="btn-secondary-large">
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Now</span>
            </button>
            <a href={`tel:${studioInfo.phone}`} className="btn-outline-large hidden lg:flex">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="text-white">
              <p className="text-3xl font-bold text-[#fad24b]">{studioInfo.reviewCount}+</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Happy Clients</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold text-[#fad24b]">10+</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Years Exp.</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold text-[#fad24b]">100%</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
