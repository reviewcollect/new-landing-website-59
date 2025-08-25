
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
    <section className="relative bg-gradient-to-br from-isabelline via-white/95 to-mint/5 min-h-screen flex items-center pt-12 sm:pt-16 pb-4 sm:pb-8 overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-mint/20 to-periwinkle/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-periwinkle/20 to-mint/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-mint/10 via-transparent to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Premium Geometric Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(49, 193, 158, 0.3) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(229, 209, 254, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px, 80px 80px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <div className="lg:col-span-1 space-y-3 sm:space-y-6 animate-fade-in">
            {/* Badge - Enhanced with video focus */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-mint/10 to-periwinkle/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-mint/20 hover:scale-105 transition-all duration-300">
              <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
              <span className="font-montserrat text-xs sm:text-sm font-semibold text-night">
                ✨ Témoignage client en direct
              </span>
            </div>

            {/* Main title - ENHANCED TYPOGRAPHY */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-basic-sans text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-night leading-[0.95] tracking-tight">
                Découvrez comment Tim a{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-mint via-mint to-periwinkle bg-clip-text text-transparent drop-shadow-sm">
                    multiplié ses avis
                  </span>
                  <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-mint to-periwinkle rounded-full shadow-lg"></div>
                </span>
                {' '}par 30
              </h1>
              
              <p className="font-montserrat text-lg sm:text-xl lg:text-2xl text-night/85 leading-relaxed max-w-2xl font-medium">
                De 0 à 95% d'avis positifs en 30 jours avec notre solution e-réputation
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

            {/* CTA buttons - Enhanced with video focus */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button className="bg-gradient-to-r from-mint to-mint/90 hover:from-mint/90 hover:to-mint text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl transition-all hover:scale-105 hover:shadow-2xl group shadow-xl border-2 border-mint/20">
                <span className="flex items-center space-x-3">
                  <span>Obtenir les mêmes résultats</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
              <Button variant="outline" className="border-2 border-mint/30 text-night hover:bg-mint hover:text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold flex items-center gap-3 rounded-xl transition-all hover:scale-105 group bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                Voir comment ça marche
              </Button>
            </div>
          </div>

          {/* Right side - STUNNING Premium Video Testimonial */}
          <div className="lg:col-span-1 relative animate-slide-up order-first lg:order-last">
            <div className="relative flex justify-center">
              {/* Hero video container - ENLARGED 30% */}
              <div className="relative group w-full max-w-[650px]">
                {/* Premium glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-white/30 via-mint/20 to-periwinkle/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
                
                {/* Main video container - PREMIUM STYLING */}
                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-white to-isabelline/50 group-hover:scale-[1.01] transition-all duration-700" style={{
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.8), inset 0 1px 0 rgba(255,255,255,0.9)'
                }}>
                  
                  {/* YouTube iframe - NO TECHNICAL ELEMENTS */}
                  <iframe
                    className="w-full h-full rounded-3xl"
                    src="https://www.youtube.com/embed/n44Z4HDah7o?autoplay=1&mute=0&loop=1&playlist=n44Z4HDah7o&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&cc_load_policy=0&playsinline=1&showinfo=0"
                    title="Témoignage Tim - The Bradery"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onMouseEnter={(e) => {
                      const iframe = e.currentTarget;
                      iframe.src = iframe.src.replace('controls=0', 'controls=1');
                    }}
                    onMouseLeave={(e) => {
                      const iframe = e.currentTarget;
                      iframe.src = iframe.src.replace('controls=1', 'controls=0');
                    }}
                    style={{ 
                      borderRadius: '1.5rem'
                    }}
                  ></iframe>
                </div>
                
                {/* PREMIUM Overlay Cards - ENHANCED */}
                
                {/* Hero Metric - ×30 (TOP RIGHT) - ENHANCED */}
                <div className="absolute -top-6 -right-6 group/card animate-float">
                  <div className="bg-gradient-to-br from-mint via-mint to-mint/90 rounded-2xl p-6 transform group-hover/card:scale-105 transition-all duration-500" style={{
                    boxShadow: '0 15px 35px rgba(49, 193, 158, 0.25), 0 5px 15px rgba(0,0,0,0.1)'
                  }}>
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <TrendingUp className="w-6 h-6 drop-shadow-sm" />
                        <span className="font-basic-sans text-4xl font-black drop-shadow-sm">×30</span>
                      </div>
                      <div className="font-montserrat text-sm font-semibold opacity-95">plus d'avis</div>
                    </div>
                  </div>
                </div>
                
                {/* Success Metric - 95% (TOP LEFT) */}
                <div className="absolute -top-6 -left-6 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="bg-gradient-to-br from-periwinkle via-periwinkle to-periwinkle/90 rounded-2xl p-6 hover:scale-105 transition-all duration-500" style={{
                    boxShadow: '0 15px 35px rgba(229, 209, 254, 0.25), 0 5px 15px rgba(0,0,0,0.1)'
                  }}>
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <CheckCircle className="w-6 h-6 drop-shadow-sm" />
                        <span className="font-basic-sans text-4xl font-black drop-shadow-sm">95%</span>
                      </div>
                      <div className="font-montserrat text-sm font-semibold opacity-95">positifs</div>
                    </div>
                  </div>
                </div>

                {/* Rating Card - 4.9/5 (BOTTOM RIGHT) */}
                <div className="absolute -bottom-6 -right-6 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-500" style={{
                    boxShadow: '0 15px 35px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)'
                  }}>
                    <div className="text-night text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                      </div>
                      <div className="font-basic-sans text-2xl font-black">4.9/5</div>
                      <div className="font-montserrat text-sm font-semibold opacity-70">satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Company Card - The Bradery (BOTTOM LEFT) */}
                <div className="absolute -bottom-6 -left-6 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-500" style={{
                    boxShadow: '0 15px 35px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)'
                  }}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-mint to-periwinkle rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg font-black">TB</span>
                      </div>
                      <div className="text-night">
                        <div className="font-basic-sans text-lg font-black">The Bradery</div>
                        <div className="font-montserrat text-sm font-semibold opacity-70">Fondateur</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle duration indicator */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 opacity-80 hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-semibold">2:15</span>
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
