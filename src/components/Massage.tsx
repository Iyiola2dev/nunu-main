import React from 'react';
import { Waves, Heart, Zap } from 'lucide-react';

const Massage = () => {
  const massageTypes = [
    {
      name: "Swedish Relaxation",
      duration: "60 min",
      price: "$130",
      description: "Classic full-body massage for deep relaxation"
    },
    {
      name: "Deep Tissue Therapy",
      duration: "75 min",
      price: "$165",
      description: "Intensive treatment for muscle tension relief"
    },
    {
      name: "Hot Stone Massage",
      duration: "90 min",
      price: "$195",
      description: "Therapeutic stones for ultimate relaxation"
    },
    {
      name: "Aromatherapy Treatment",
      duration: "60 min",
      price: "$145",
      description: "Essential oils for mind and body wellness"
    },
    {
      name: "Couples Massage",
      duration: "60 min",
      price: "$260",
      description: "Side-by-side relaxation for two people"
    },
    {
      name: "Prenatal Massage",
      duration: "60 min",
      price: "$140",
      description: "Gentle care for expecting mothers"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Waves className="h-8 w-8 text-black mr-3" />
            <h2 className="text-4xl sm:text-5xl font-light text-black tracking-wide">
              Massage Therapy
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our skilled massage therapists combine traditional techniques with modern wellness 
            approaches to provide therapeutic treatments that restore balance to your body and mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {massageTypes.map((massage, index) => (
            <div key={index} className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-medium text-black">{massage.name}</h3>
                <span className="text-lg font-medium text-black">{massage.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{massage.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{massage.duration}</span>
                <button className="text-black hover:text-gray-600 transition-colors duration-300 font-medium">
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Relaxing massage therapy"
              className="w-full h-96 lg:h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
          </div>
          
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-light text-black mb-6">Massage Benefits</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-black mb-2">Stress Relief</h4>
                  <p className="text-gray-600">Reduce cortisol levels and promote deep relaxation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-black mb-2">Pain Relief</h4>
                  <p className="text-gray-600">Alleviate muscle tension and chronic pain</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Waves className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-black mb-2">Improved Circulation</h4>
                  <p className="text-gray-600">Enhanced blood flow and lymphatic drainage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Massage;