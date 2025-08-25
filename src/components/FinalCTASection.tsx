
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, ArrowRight, Star, Zap } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-mint via-periwinkle to-mint relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="font-montserrat text-white font-semibold text-sm sm:text-base">Solution Premium E-Réputation</span>
          </div>

          <h2 className="font-basic-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Prêt à devenir le leader de votre secteur ?
          </h2>
          
          <p className="font-montserrat text-lg sm:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed">
            Rejoignez les 500+ marques qui dominent leur e-réputation avec Review Collect
          </p>
          
          <p className="font-montserrat text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Essai gratuit 48h • Premiers avis 5⭐ garantis • Sans engagement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-slide-up mb-12 sm:mb-16" style={{ animationDelay: '200ms' }}>
            <Button className="bg-white text-mint hover:bg-white/90 px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-2xl group">
              <span className="flex items-center space-x-2 sm:space-x-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span>Démarrer maintenant</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-mint px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-2xl transition-all hover:scale-105 group backdrop-blur-sm">
              <span className="flex items-center space-x-2 sm:space-x-3">
                <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span>Voir Review Collect en action</span>
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">48h</div>
              <p className="font-montserrat text-white/80 text-sm sm:text-base">Pour vos premiers avis 5⭐</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">4,9/5</div>
              <p className="font-montserrat text-white/80 text-sm sm:text-base">Note moyenne garantie</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">500+</div>
              <p className="font-montserrat text-white/80 text-sm sm:text-base">Marques nous font confiance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
