import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Salon from './components/Salon';
import Sauna from './components/Sauna';
import Massage from './components/Massage';
import HairStyling from './components/HairStyling';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Salon />
      <Sauna />
      <Massage />
      <HairStyling />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;