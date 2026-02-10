
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { studioInfo } from '../data/mock';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Academy', href: '#academy' },
    { name: 'Pricing', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex flex-col">
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#61525a]' : 'text-white'}`}>
              ANSHUL SARAOGI
            </span>
            <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-[#736c64]' : 'text-white/80'}`}>
              Makeup Studio & Academy
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#61525a] ${
                  isScrolled ? 'text-[#1e1919]' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href={`tel:${studioInfo.phone}`}
              className="flex items-center space-x-2 bg-[#61525a] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4a3e45] transition-all"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-[#1e1919]' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-[#1e1919]"
              >
                {item.name}
              </a>
            ))}
            <a
              href={`tel:${studioInfo.phone}`}
              className="flex items-center justify-center space-x-2 bg-[#61525a] text-white w-full py-4 rounded-xl font-bold"
            >
              <Phone size={18} />
              <span>{studioInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
