import React from 'react';
import { Sparkles, Clock, Star } from 'lucide-react';

const Salon = () => {
  const treatments = [
    { name: "Signature Facial", duration: "60 min", price: "$120" },
    { name: "Deep Cleansing Facial", duration: "45 min", price: "$95" },
    { name: "Anti-Aging Treatment", duration: "90 min", price: "$180" },
    { name: "Luxury Manicure", duration: "45 min", price: "$65" },
    { name: "Deluxe Pedicure", duration: "60 min", price: "$85" },
    { name: "Eyebrow Shaping", duration: "30 min", price: "$45" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <Sparkles className="h-8 w-8 text-black mr-3" />
              <h2 className="text-4xl sm:text-5xl font-light text-black tracking-wide">
                Salon Services
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our salon offers a full range of beauty treatments using premium products 
              and the latest techniques. Each service is tailored to enhance your natural beauty.
            </p>
            
            <div className="space-y-4 mb-8">
              {treatments.map((treatment, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div>
                    <h4 className="font-medium text-black">{treatment.name}</h4>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {treatment.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-medium text-black">{treatment.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="inline-flex items-center px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300">
              <Star className="h-5 w-5 mr-2" />
              Book Salon Service
            </button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Luxury salon treatment"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Salon;