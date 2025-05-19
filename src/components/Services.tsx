import React from 'react';
import { services } from '../data/services';
import Container from './ui/Container';
import { Scissors } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of premium barber services and beauty treatments 
            tailored to your individual style and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${
                service.popular ? 'border-2 border-gold' : ''
              }`}
            >
              <div className="p-6">
                {service.popular && (
                  <div className="bg-gold text-xs font-semibold text-gray-900 uppercase px-2 py-1 rounded-full inline-block mb-3">
                    Popular
                  </div>
                )}
                <div className="flex items-center mb-3">
                  <Scissors className="h-5 w-5 text-burgundy mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-burgundy">{service.price}</span>
                  <button className="text-sm font-medium text-burgundy hover:text-gold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            "Costly compared to other barbershops with better haircuts."
          </p>
          <p className="mt-2 text-burgundy font-medium">
            We strive to provide premium service that's worth every penny.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Services;