import React from 'react';
import ServiceCard from '@/components/services/service-card';
import { services } from '@/lib/constants';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide comprehensive care for mothers and babies, from pregnancy
          through postpartum.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
