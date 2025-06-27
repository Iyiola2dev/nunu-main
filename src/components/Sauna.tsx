import React from 'react';
import { Flame, Thermometer, Timer } from 'lucide-react';

const Sauna = () => {
  const features = [
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Optimal Temperature",
      description: "Precisely controlled at 85-90°C for maximum benefits"
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Flexible Sessions",
      description: "15-45 minute sessions tailored to your comfort level"
    },
    {
      icon: <Flame className="h-6 w-6" />,
      title: "Premium Woods",
      description: "Authentic Finnish sauna built with aromatic cedar"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6663460/pexels-photo-6663460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Luxury sauna interior"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-lg"></div>
          </div>
          
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <Flame className="h-8 w-8 text-white mr-3" />
              <h2 className="text-4xl sm:text-5xl font-light text-white tracking-wide">
                Sauna Experience
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Immerse yourself in the ancient tradition of sauna bathing. Our premium 
              sauna facilities offer the perfect environment for detoxification, 
              relaxation, and rejuvenation.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 mb-8">
              <h4 className="font-medium text-white mb-3">Sauna Benefits</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Improved circulation and cardiovascular health
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Deep muscle relaxation and stress relief
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Enhanced skin health and detoxification
                </li>
              </ul>
            </div>
            
            <button className="inline-flex items-center px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Flame className="h-5 w-5 mr-2" />
              Reserve Sauna Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sauna;