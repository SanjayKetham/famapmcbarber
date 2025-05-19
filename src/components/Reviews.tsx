import React from 'react';
import { reviews } from '../data/reviews';
import Container from './ui/Container';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? 'text-gold fill-gold' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <section id="reviews" className="py-16 bg-burgundy/5">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience at Fama Barber Shop and Beauty Salon.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center">
              {renderStars(4.6)}
            </div>
            <span className="ml-2 text-lg font-semibold text-gray-900">4.6</span>
            <span className="ml-1 text-sm text-gray-600">(116+ reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                {review.avatarUrl && (
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <div className="flex items-center my-1">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center font-medium text-burgundy hover:text-gold transition-colors"
          >
            View all reviews
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;