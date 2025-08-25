
import React from 'react';
import { TrendingUp, Star, Target } from 'lucide-react';

const StrategySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-basic-sans text-4xl lg:text-5xl font-bold text-night mb-6">
            La stratégie Review Collect
          </h2>
          <p className="font-montserrat text-lg text-night/80 max-w-3xl mx-auto">
            Une approche en deux étapes pour maximiser votre réputation en ligne
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-mint/10 to-mint/5 rounded-2xl p-8 animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="bg-mint rounded-full p-3 mr-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="font-basic-sans text-2xl font-bold text-night">Étape 1</span>
                <h3 className="font-basic-sans text-xl font-semibold text-night">Boost Référencement</h3>
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-mint mb-2">4,7/5</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="font-montserrat text-night/70">sur 100 avis</p>
              </div>
            </div>
            
            <p className="font-montserrat text-night/80 text-center">
              Amélioration immédiate de votre note moyenne grâce à la collecte ciblée
            </p>
          </div>

          <div className="bg-gradient-to-br from-periwinkle/20 to-periwinkle/10 rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <div className="bg-periwinkle rounded-full p-3 mr-4">
                <Target className="w-8 h-8 text-night" />
              </div>
              <div>
                <span className="font-basic-sans text-2xl font-bold text-night">Étape 2</span>
                <h3 className="font-basic-sans text-xl font-semibold text-night">Boost E-Réputation</h3>
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-periwinkle mb-2">4,9/5</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-montserrat text-night/70">sur 300 avis</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-montserrat text-night/70">Trustpilot</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-montserrat text-night/70">Google</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-montserrat text-night/70">Avis Vérifiés</span>
            </div>
            
            <p className="font-montserrat text-night/80 text-center">
              Domination de toutes les plateformes pour une réputation exceptionnelle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
