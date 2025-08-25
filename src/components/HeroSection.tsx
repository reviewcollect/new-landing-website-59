
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, CheckCircle, MessageSquare, Smartphone, Mail, TrendingUp, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({ avis: 0, negatifs: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      let avisCount = 0;
      let negatifsCount = 0;
      
      const interval = setInterval(() => {
        if (avisCount < 30) {
          avisCount += 1;
          setAnimatedNumbers(prev => ({ ...prev, avis: avisCount }));
        }
        if (negatifsCount < 95) {
          negatifsCount += 3;
          setAnimatedNumbers(prev => ({ ...prev, negatifs: Math.min(negatifsCount, 95) }));
        }
        if (avisCount >= 30 && negatifsCount >= 95) {
          clearInterval(interval);
        }
      }, 50);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-isabelline h-screen flex items-center pt-12 sm:pt-16 pb-4 sm:pb-8">
      {/* Background Pattern - More subtle like Bigblue */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-mint/20 to-periwinkle/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-l from-periwinkle/20 to-mint/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-center h-full">
          <div className="lg:col-span-7 space-y-2 sm:space-y-4 animate-fade-in">
            {/* Badge - Bigblue style */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm border border-mint/10">
              <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
              <span className="font-montserrat text-xs sm:text-sm font-medium text-night/80">
                La solution e-réputation n°1 en France
              </span>
            </div>

            {/* Main title - Bigblue style with larger text */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-basic-sans text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-night leading-[1.1] tracking-tight">
                La solution e-réputation qui transforme vos clients en{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-mint to-periwinkle bg-clip-text text-transparent">
                    ambassadeurs
                  </span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-mint to-periwinkle rounded-full"></div>
                </span>
              </h1>
              
              <p className="font-montserrat text-sm sm:text-base lg:text-lg text-night/70 leading-relaxed max-w-2xl">
                Collecte automatisée d'avis clients avec des résultats garantis
              </p>
            </div>

            {/* Metrics - More visual like Bigblue - Hidden on small mobile */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-mint/10 hover:shadow-lg transition-all group">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-mint group-hover:scale-110 transition-transform" />
                  <span className="font-basic-sans text-2xl sm:text-3xl font-bold text-mint">
                    ×{animatedNumbers.avis}
                  </span>
                </div>
                <p className="font-montserrat text-xs sm:text-sm text-night/70">plus d'avis</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-periwinkle/10 hover:shadow-lg transition-all group">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-periwinkle rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-xs font-bold">−</span>
                  </div>
                  <span className="font-basic-sans text-2xl sm:text-3xl font-bold text-periwinkle">
                    {animatedNumbers.negatifs}%
                  </span>
                </div>
                <p className="font-montserrat text-xs sm:text-sm text-night/70">d'avis négatifs</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-mint/10 hover:shadow-lg transition-all group sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full group-hover:scale-110 transition-transform" style={{ animationDelay: `${i * 100}ms` }}></div>
                    ))}
                  </div>
                </div>
                <p className="font-montserrat text-xs sm:text-sm text-night/70">Note moyenne 4,9/5</p>
              </div>
            </div>

            {/* Features list - Simplified for mobile */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3 sm:space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-mint rounded-full p-1.5 sm:p-2 group-hover:scale-110 transition-transform shadow-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-montserrat text-sm sm:text-base lg:text-lg text-night/80">Multi-canal (WhatsApp, SMS, Email)</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-mint rounded-full p-1.5 sm:p-2 group-hover:scale-110 transition-transform shadow-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-montserrat text-sm sm:text-base lg:text-lg text-night/80">Routage intelligent des avis</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-mint rounded-full p-1.5 sm:p-2 group-hover:scale-110 transition-transform shadow-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-montserrat text-sm sm:text-base lg:text-lg text-night/80">Compatible Shopify, Gorgias, Klaviyo</span>
              </div>
            </div>

            {/* CTA buttons - Bigblue style */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-mint hover:bg-mint/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-xl group shadow-lg">
                <span className="flex items-center space-x-2">
                  <span>Essai gratuit 48h</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="outline" className="border-2 border-night/20 text-night hover:bg-night hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center gap-3 rounded-xl transition-all hover:scale-105 group bg-white/80 backdrop-blur-sm">
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Voir une démo
              </Button>
            </div>
          </div>

          {/* Right side - Mobile interface showing review collection */}
          <div className="lg:col-span-5 relative animate-slide-up order-first lg:order-last">
            <div className="relative flex justify-center">
              {/* Mobile phone mockup with review interface */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/51943c4a-2db3-4130-b643-9472b46e4b72.png" 
                  alt="Interface mobile de collecte d'avis - Rive Droite Paris"
                  className="w-48 sm:w-64 lg:w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating elements around the phone */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg border border-mint/10 animate-float">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-montserrat text-xs text-night/70">Client satisfait</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg border border-periwinkle/10 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-mint text-xs sm:text-sm">⭐⭐⭐⭐⭐</span>
                    <span className="font-montserrat text-xs text-night/70">Avis 5 étoiles</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-4 sm:-left-6 bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg border border-mint/10 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-mint" />
                    <span className="font-montserrat text-xs text-night/70">SMS automatique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
