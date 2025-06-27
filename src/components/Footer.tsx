import React from 'react';
import { Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-white mr-2" />
              <h3 className="text-2xl font-light tracking-wide">NUNU</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Luxury wellness and beauty spa dedicated to providing exceptional 
              treatments in a tranquil, sophisticated environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Hair Styling</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Salon Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Massage Therapy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sauna Experience</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Wellness Avenue</li>
              <li>Luxury District, City 12345</li>
              <li>(555) 123-4567</li>
              <li>info@nunuspa.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Nunu Spa. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;