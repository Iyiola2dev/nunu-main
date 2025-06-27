import React from 'react';
import { Scissors, Waves, Sparkles, Flame } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Hair Styling",
      description: "Professional cuts, coloring, and styling by expert stylists"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Salon Services",
      description: "Complete beauty treatments including facials and nail care"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Massage Therapy",
      description: "Therapeutic and relaxation massages for ultimate wellness"
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Sauna Experience",
      description: "Detoxifying sauna sessions in our premium facilities"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-4 tracking-wide">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of wellness and beauty services, 
            each designed to provide you with an exceptional experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 text-center hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;