
import React from 'react';

const SocialProofSection = () => {
  const brands = [
    { name: 'Quick', logo: '🍔' },
    { name: 'Air Caraïbes', logo: '✈️' },
    { name: 'Jonak', logo: '👠' },
    { name: 'The Bradery', logo: '👔' },
    { name: 'Feed', logo: '🥗' },
    { name: 'Mr Bricolage', logo: '🔨' }
  ];

  return (
    <section className="py-24 bg-white border-t border-night/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-montserrat text-night/60 mb-4">Ils nous font confiance</p>
          <h2 className="font-basic-sans text-3xl lg:text-4xl font-bold text-night">
            <span className="bg-gradient-to-r from-mint to-periwinkle bg-clip-text text-transparent">+500 marques</span> e-commerce nous font confiance
          </h2>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 lg:gap-12 items-center animate-slide-up">
          {brands.map((brand, index) => (
            <div 
              key={brand.name} 
              className="flex flex-col items-center space-y-3 p-6 rounded-2xl hover:bg-isabelline/30 hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{brand.logo}</div>
              <span className="font-montserrat text-sm font-medium text-night/70 group-hover:text-night transition-colors">{brand.name}</span>
            </div>
          ))}
        </div>
        
        {/* Stats bar - Bigblue style */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-basic-sans text-3xl lg:text-4xl font-bold text-mint mb-2">500+</div>
            <p className="font-montserrat text-night/70">marques clientes</p>
          </div>
          <div className="text-center">
            <div className="font-basic-sans text-3xl lg:text-4xl font-bold text-periwinkle mb-2">2M+</div>
            <p className="font-montserrat text-night/70">avis collectés</p>
          </div>
          <div className="text-center">
            <div className="font-basic-sans text-3xl lg:text-4xl font-bold text-mint mb-2">39%</div>
            <p className="font-montserrat text-night/70">taux de réponse</p>
          </div>
          <div className="text-center">
            <div className="font-basic-sans text-3xl lg:text-4xl font-bold text-periwinkle mb-2">4.9/5</div>
            <p className="font-montserrat text-night/70">note moyenne</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
