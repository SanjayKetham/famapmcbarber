import React, { useState } from 'react';
import Container from './ui/Container';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('haircuts');

  const galleryImages = {
    haircuts: [
      'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260',
    ],
    salon: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/3992861/pexels-photo-3992861.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/3993301/pexels-photo-3993301.jpeg?auto=compress&cs=tinysrgb&w=1260',
    ],
    shop: [
      'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/2035283/pexels-photo-2035283.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/3173359/pexels-photo-3173359.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=1260',
    ],
  };

  const tabs = [
    { id: 'haircuts', label: 'Haircuts' },
    { id: 'salon', label: 'Beauty Salon' },
    { id: 'shop', label: 'Our Shop' },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our work and environment. Quality and style is our signature.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-burgundy shadow-sm'
                    : 'text-gray-600 hover:text-burgundy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages[activeTab as keyof typeof galleryImages].map((src, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Professional Excellence</p>
                  <p className="text-sm opacity-80">Fama Barber Shop</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;