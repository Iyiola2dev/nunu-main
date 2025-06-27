import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury spa interior"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Sparkles className="h-8 w-8 text-white mr-3" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-wide">
            NUNU
          </h1>
          <Sparkles className="h-8 w-8 text-white ml-3" />
        </div>
        
        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 tracking-wide text-gray-200">
          Luxury Wellness & Beauty
        </p>
        
        {/* Description */}
        <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Experience tranquility and rejuvenation at our premier spa destination. 
          Indulge in world-class treatments designed to restore your body and soul.
        </p>
        
        {/* CTA Button */}
        <button className="group inline-flex items-center px-8 py-4 bg-white text-black font-medium text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Book Your Experience
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;