
import React from 'react';
import * as Icons from 'lucide-react';
import { whyChooseUs } from '../data/mock';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-24 bg-[#61525a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-[#fad24b] tracking-[0.2em] uppercase mb-4">Excellence Guaranteed</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Why Anshul Saraogi?</h3>
            <p className="text-white/80 text-lg mb-12 leading-relaxed">
              With over a decade of experience and a passion for redefining bridal beauty, our studio offers a unique blend of international techniques and personalized care.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-[#fad24b] pl-6">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-white/60 text-sm font-medium">Years Experience</p>
              </div>
              <div className="border-l-4 border-[#fad24b] pl-6">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-white/60 text-sm font-medium">Hygiene Standards</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item) => {
              const IconComponent = (Icons as any)[item.icon];
              return (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <div className="text-[#fad24b] mb-4">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
