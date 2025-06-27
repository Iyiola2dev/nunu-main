import React from 'react';
import { Scissors, Palette, Crown } from 'lucide-react';

const HairStyling = () => {
  const services = [
    {
      category: "Cutting & Styling",
      treatments: [
        { name: "Precision Cut", price: "$85" },
        { name: "Wash & Blowout", price: "$55" },
        { name: "Special Occasion Style", price: "$95" }
      ]
    },
    {
      category: "Color Services",
      treatments: [
        { name: "Full Color", price: "$120" },
        { name: "Highlights", price: "$150" },
        { name: "Balayage", price: "$180" }
      ]
    },
    {
      category: "Treatments",
      treatments: [
        { name: "Deep Conditioning", price: "$65" },
        { name: "Keratin Treatment", price: "$250" },
        { name: "Scalp Treatment", price: "$85" }
      ]
    }
  ];

  const stylists = [
    {
      name: "Sarah Chen",
      specialty: "Color Specialist",
      experience: "8 years",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Marcus Rodriguez",
      specialty: "Cut & Style Expert",
      experience: "12 years",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Emma Thompson",
      specialty: "Bridal Specialist",
      experience: "10 years",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Scissors className="h-8 w-8 text-black mr-3" />
            <h2 className="text-4xl sm:text-5xl font-light text-black tracking-wide">
              Hair Styling
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your look with our expert hair stylists. From precision cuts to stunning color, 
            we create styles that enhance your natural beauty and reflect your personality.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {index === 0 && <Scissors className="h-6 w-6 text-black mr-3" />}
                {index === 1 && <Palette className="h-6 w-6 text-black mr-3" />}
                {index === 2 && <Crown className="h-6 w-6 text-black mr-3" />}
                <h3 className="text-xl font-medium text-black">{service.category}</h3>
              </div>
              <div className="space-y-4">
                {service.treatments.map((treatment, treatmentIndex) => (
                  <div key={treatmentIndex} className="flex justify-between items-center">
                    <span className="text-gray-700">{treatment.name}</span>
                    <span className="font-medium text-black">{treatment.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Stylists Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-black text-center mb-12">Meet Our Expert Stylists</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stylists.map((stylist, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-medium text-black mb-2">{stylist.name}</h4>
                <p className="text-gray-600 mb-1">{stylist.specialty}</p>
                <p className="text-sm text-gray-500">{stylist.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Booking CTA */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-light mb-4">Ready for a New Look?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Book a consultation with one of our expert stylists to discuss your vision 
            and create the perfect look for you.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-300">
            <Crown className="h-5 w-5 mr-2" />
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HairStyling;