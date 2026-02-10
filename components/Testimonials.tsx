
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#61525a] tracking-[0.2em] uppercase mb-4">Reviews</h2>
          <p className="text-3xl md:text-5xl font-bold text-[#1e1919]">Client Love</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm relative">
              <Quote className="absolute top-8 right-8 text-[#f7f5f2]" size={64} />
              <div className="relative z-10">
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#fad24b] fill-[#fad24b]" />
                  ))}
                </div>
                <p className="text-[#1e1919] text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#61525a] flex items-center justify-center text-white font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e1919]">{t.name}</h4>
                    <p className="text-[#736c64] text-xs uppercase tracking-widest">{t.occasion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
