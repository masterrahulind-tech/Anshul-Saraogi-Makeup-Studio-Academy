
import React from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Academy from './components/Academy';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Academy />
      <Testimonials />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
