import React from 'react';
import Container from './ui/Container';
import { Scissors, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="h-6 w-6 text-gold mr-2" />
              <span className="text-xl font-bold">Fama Barber</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium barber shop and beauty salon services in Denton, Texas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-gold transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>500 N Bell Ave #109</li>
              <li>Denton, TX 76209</li>
              <li>Phone: +1 940-612-9127</li>
              <li>Email: info@famabarber.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Fama Barber Shop and Beauty Salon. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;