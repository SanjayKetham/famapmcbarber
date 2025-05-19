import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { MapPin, Phone, Clock } from 'lucide-react';
import { businessHours } from '../data/hours';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-gray-600 mb-8">
              We're conveniently located in Denton, Texas. Stop by for a quality haircut or 
              book an appointment in advance to secure your preferred time.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-burgundy mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600 mt-1">
                    500 N Bell Ave #109, Denton, TX 76209
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-medium text-burgundy hover:text-gold transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-burgundy mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Contact</h3>
                  <p className="text-gray-600 mt-1">
                    +1 940-612-9127
                  </p>
                  <a 
                    href="tel:+19406129127" 
                    className="inline-block mt-2 text-sm font-medium text-burgundy hover:text-gold transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-burgundy mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <div className="mt-2 space-y-1">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-gray-600 w-28">{item.day}</span>
                        <span className="text-gray-900 font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Book an Appointment
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Men's Haircut</option>
                    <option value="beard">Beard Trim</option>
                    <option value="shave">Hot Towel Shave</option>
                    <option value="color">Hair Coloring</option>
                    <option value="womens">Women's Haircut</option>
                    <option value="kids">Kids Haircut</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                </div>
                <Button className="w-full" size="lg">
                  Book Appointment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;