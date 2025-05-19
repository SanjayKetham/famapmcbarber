import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-gray-900 to-burgundy"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        ></div>
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-gold">Premium</span> Barber & Beauty Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Where style meets tradition. Experience the art of grooming at Fama Barber Shop and Beauty Salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href='#contact'><Button size="lg">Book Appointment</Button></a>
            <a href='#services'>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                View Services
              </Button>
            </a>
          </div>

          <div className="mt-12 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-white">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
                <span>Open · Closes 7 pm</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-gray-500"></div>
              <div>4.6 ★★★★☆ (116+ reviews)</div>
              <div className="hidden md:block h-4 w-px bg-gray-500"></div>
              <div>+1 940-612-9127</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;