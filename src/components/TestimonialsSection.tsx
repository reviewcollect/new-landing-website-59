
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: 'Feed',
      logo: '🥗',
      quote: 'Note Google passée de 3,3 à 4,9 en quelques semaines',
      author: 'Équipe Marketing',
      rating: 5,
      color: 'mint'
    },
    {
      company: 'Mr Bricolage',
      logo: '🔨',
      quote: '+80 % de retours clients sur Google, –95 % d\'avis négatifs',
      author: 'Direction E-commerce',
      rating: 5,
      color: 'periwinkle'
    },
    {
      company: 'The Bradery',
      logo: '👔',
      quote: '10× plus d\'avis collectés, et 20 % des acheteurs qui laissent un avis',
      author: 'Timothée Linyer',
      rating: 5,
      color: 'mint'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-isabelline to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-basic-sans text-4xl lg:text-5xl font-bold text-night mb-6">
            Témoignages
          </h2>
          <p className="font-montserrat text-lg text-night/80 max-w-3xl mx-auto">
            Découvrez comment nos clients transforment leur e-réputation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.company}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.logo}</div>
                <div>
                  <h3 className="font-basic-sans text-xl font-semibold text-night">
                    {testimonial.company}
                  </h3>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className={`w-8 h-8 ${testimonial.color === 'mint' ? 'text-mint' : 'text-periwinkle'} mb-4`} />
                <blockquote className="font-montserrat text-lg text-night/80 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <cite className="font-montserrat font-medium text-night/70">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
