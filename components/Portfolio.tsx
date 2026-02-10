
import React, { useState } from 'react';
import { portfolioImages } from '../data/mock';

const Portfolio: React.FC = () => {
  const categories = ['All', 'Bridal', 'Party Makeup', 'Behind the Scenes'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#61525a] tracking-[0.2em] uppercase mb-4">Our Work</h2>
          <p className="text-3xl md:text-5xl font-bold text-[#1e1919]">Artistry Showcase</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#61525a] text-white'
                    : 'bg-[#f7f5f2] text-[#736c64] hover:bg-[#61525a] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1919]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-[#fad24b] text-xs font-bold uppercase tracking-widest mb-2">{image.category}</p>
                <h4 className="text-white text-xl font-bold">{image.alt}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
