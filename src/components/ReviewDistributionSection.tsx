
import React from 'react';
import { Star, ArrowDown, ArrowRight } from 'lucide-react';

const ReviewDistributionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-periwinkle/20 to-isabelline">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-basic-sans text-4xl lg:text-5xl font-bold text-night mb-6">
            🎯 Répartition automatique des avis
          </h2>
          <p className="font-montserrat text-lg text-night/80 max-w-4xl mx-auto">
            Chaque avis 5⭐ est redirigé vers la plateforme la plus stratégique pour maximiser votre SEO et votre conversion.
          </p>
        </div>

        {/* Layout adaptatif : vertical sur mobile, horizontal sur desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-12">
          
          {/* Column 1: 5-star review card */}
          <div className="text-center animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-mint/10 hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
              <div className="flex justify-center mb-4 animate-pulse-slow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              <h3 className="font-basic-sans text-xl font-semibold text-night">Avis 5⭐</h3>
            </div>
          </div>

          {/* Column 2: Review Collect logo with adaptive arrow */}
          <div className="flex flex-col items-center space-y-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-mint rounded-full p-4 animate-float">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="font-basic-sans text-mint font-bold text-lg">RC</span>
              </div>
            </div>
            {/* Flèche adaptative : vers le bas sur mobile, vers la droite sur desktop */}
            <ArrowDown className="w-8 h-8 text-mint animate-bounce-slow lg:hidden" />
            <ArrowRight className="w-8 h-8 text-mint animate-bounce-slow hidden lg:block" />
          </div>

          {/* Column 3: Platform distribution - Stack vertical sur mobile */}
          <div className="animate-slide-up w-full max-w-sm lg:max-w-none" style={{ animationDelay: '400ms' }}>
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-mint/10">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-6">
                
                {/* Google */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-mint/10 transition-colors">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-basic-sans font-semibold text-night text-sm lg:text-base">Google</h4>
                    <p className="text-xs lg:text-sm text-night/60">33%</p>
                  </div>
                  <div className="hidden lg:block flex-1 h-0.5 bg-gradient-to-r from-mint to-transparent"></div>
                </div>

                {/* Trustpilot */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-mint/10 transition-colors">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-basic-sans font-semibold text-night text-sm lg:text-base">Trustpilot</h4>
                    <p className="text-xs lg:text-sm text-night/60">33%</p>
                  </div>
                  <div className="hidden lg:block flex-1 h-0.5 bg-gradient-to-r from-mint to-transparent"></div>
                </div>

                {/* Avis Vérifiés */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-mint/10 transition-colors">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AV</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-basic-sans font-semibold text-night text-sm lg:text-base">Avis Vérifiés</h4>
                    <p className="text-xs lg:text-sm text-night/60">33%</p>
                  </div>
                  <div className="hidden lg:block flex-1 h-0.5 bg-gradient-to-r from-mint to-transparent"></div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Complementary text block */}
        <div className="text-center animate-fade-in px-4" style={{ animationDelay: '600ms' }}>
          <p className="font-montserrat text-night/70 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed">
            Notre algorithme intelligent analyse votre stratégie digitale et redirige automatiquement 
            chaque avis 5 étoiles vers la plateforme qui aura le plus d'impact pour votre business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewDistributionSection;
