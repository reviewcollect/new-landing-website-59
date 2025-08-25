
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, CheckCircle, MessageSquare, Smartphone, Mail, TrendingUp, ArrowRight, Users, Star, Eye, Zap, Radio } from 'lucide-react';

const HeroSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({ avis: 0, negatifs: 0, trustpilot: 3.4 });
  const [viewCount] = useState(2847);

  useEffect(() => {
    const timer = setTimeout(() => {
      let avisCount = 0;
      let negatifsCount = 0;
      let trustpilotScore = 3.4;
      
      const interval = setInterval(() => {
        if (avisCount < 30) {
          avisCount += 1;
          setAnimatedNumbers(prev => ({ ...prev, avis: avisCount }));
        }
        if (negatifsCount < 95) {
          negatifsCount += 3;
          setAnimatedNumbers(prev => ({ ...prev, negatifs: Math.min(negatifsCount, 95) }));
        }
        if (trustpilotScore < 4.6) {
          trustpilotScore += 0.04;
          setAnimatedNumbers(prev => ({ ...prev, trustpilot: Math.min(trustpilotScore, 4.6) }));
        }
        if (avisCount >= 30 && negatifsCount >= 95 && trustpilotScore >= 4.6) {
          clearInterval(interval);
        }
      }, 50);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-isabelline via-white/95 to-mint/5 min-h-screen flex items-center pt-8 sm:pt-12 pb-4 sm:pb-6 overflow-hidden">
      {/* Ultra Premium Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-mint/30 to-periwinkle/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-periwinkle/30 to-mint/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-mint/20 via-transparent to-transparent rounded-full blur-2xl"></div>
        {/* Additional premium layers */}
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-periwinkle/15 to-mint/15 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Enhanced Geometric Overlay */}    
      <div className="absolute inset-0 opacity-8" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(49, 193, 158, 0.4) 1px, transparent 1px),
          radial-gradient(circle at 80% 70%, rgba(229, 209, 254, 0.4) 1px, transparent 1px),
          linear-gradient(45deg, transparent 40%, rgba(49, 193, 158, 0.03) 50%, transparent 60%)
        `,
        backgroundSize: '60px 60px, 80px 80px, 120px 120px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full max-h-screen">
          <div className="lg:col-span-1 space-y-3 sm:space-y-4 animate-fade-in">
            {/* Premium Badge - PODCAST EXCLUSIF */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-mint/15 to-periwinkle/15 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border border-mint/30 hover:scale-105 transition-all duration-300 animate-glow">
              <div className="flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <span className="font-montserrat text-xs sm:text-sm font-bold text-night">
                🎙️ Podcast exclusif - LIVE
              </span>
            </div>

            {/* Main title - ENHANCED TYPOGRAPHY */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-basic-sans text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-night leading-[0.95] tracking-tight">
                Découvrez comment Tim a{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-mint via-mint to-periwinkle bg-clip-text text-transparent drop-shadow-sm">
                    multiplié ses avis
                  </span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-mint to-periwinkle rounded-full shadow-lg animate-glow"></div>
                </span>
                {' '}par 30
              </h1>
              
              <p className="font-montserrat text-sm sm:text-base lg:text-lg text-night/85 leading-relaxed max-w-2xl font-medium">
                <span className="font-bold text-mint">De 3,4 à 4,6 sur Trustpilot</span> en 30 jours avec notre solution e-réputation
              </p>
            </div>

            {/* Enhanced Metrics - 4 CARDS */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg border border-mint/20 hover:shadow-xl transition-all group hover:scale-105 animate-fade-in">
                <div className="flex items-center space-x-1.5 mb-1">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-mint group-hover:scale-110 transition-transform" />
                  <span className="font-basic-sans text-lg sm:text-xl font-bold text-mint">
                    ×{animatedNumbers.avis}
                  </span>
                </div>
                <p className="font-montserrat text-xs text-night/70">plus d'avis</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg border border-periwinkle/20 hover:shadow-xl transition-all group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center space-x-1.5 mb-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-periwinkle group-hover:scale-110 transition-transform" />
                  <span className="font-basic-sans text-lg sm:text-xl font-bold text-periwinkle">
                    {animatedNumbers.negatifs}%
                  </span>
                </div>
                <p className="font-montserrat text-xs text-night/70">positifs</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg border border-yellow-200 hover:shadow-xl transition-all group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-1.5 mb-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
                  <span className="font-basic-sans text-lg sm:text-xl font-bold text-orange-600">
                    {animatedNumbers.trustpilot.toFixed(1)}
                  </span>
                </div>
                <p className="font-montserrat text-xs text-night/70">Trustpilot</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg border border-mint/20 hover:shadow-xl transition-all group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-1.5 mb-1">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-mint group-hover:scale-110 transition-transform" />
                  <span className="font-basic-sans text-lg sm:text-xl font-bold text-mint">30j</span>
                </div>
                <p className="font-montserrat text-xs text-night/70">résultats</p>
              </div>
            </div>

            {/* Premium Features list */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center space-x-2 sm:space-x-3 group hover:translate-x-1 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                <div className="bg-mint rounded-full p-1 sm:p-1.5 group-hover:scale-110 transition-transform shadow-md animate-fade-in">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-montserrat text-xs sm:text-sm text-night/80 font-medium">Multi-canal (WhatsApp, SMS, Email)</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 group hover:translate-x-1 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="bg-mint rounded-full p-1 sm:p-1.5 group-hover:scale-110 transition-transform shadow-md animate-fade-in">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-montserrat text-xs sm:text-sm text-night/80 font-medium">Routage intelligent des avis</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 group hover:translate-x-1 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
                <div className="bg-mint rounded-full p-1 sm:p-1.5 group-hover:scale-110 transition-transform shadow-md animate-fade-in">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-montserrat text-xs sm:text-sm text-night/80 font-medium">Compatible Shopify, Gorgias, Klaviyo</span>
              </div>
            </div>

            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button className="btn-premium bg-gradient-to-r from-mint to-mint/90 hover:from-mint/90 hover:to-mint text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-xl transition-all hover:scale-105 hover:shadow-2xl group shadow-xl border-2 border-mint/20 animate-fade-in">
                <span className="flex items-center space-x-2">
                  <span>Obtenir les mêmes résultats</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="outline" className="border-2 border-mint/40 text-night hover:bg-mint hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold flex items-center gap-2 rounded-xl transition-all hover:scale-105 group bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Voir l'interview complète
              </Button>
            </div>

            {/* Social Proof Strip */}
            <div className="flex items-center gap-4 pt-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-night/60" />
                <span className="font-montserrat text-xs text-night/70">Vue par <span className="font-bold text-mint">{viewCount.toLocaleString()}</span> entrepreneurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-night/60" />
                <span className="font-montserrat text-xs text-night/70">Recommandé par <span className="font-bold text-mint">500+</span> e-commerces</span>
              </div>
            </div>
          </div>

          {/* Right side - STUNNING Premium Video Testimonial */}
          <div className="lg:col-span-1 relative animate-slide-up order-first lg:order-last">
            <div className="relative flex justify-center">
              {/* Hero video container - OPTIMIZED FOR ABOVE FOLD */}
              <div className="relative group w-full max-w-[550px] lg:max-w-[600px]">
                {/* Premium glow effect - REDUCED */}
                <div className="absolute -inset-6 bg-gradient-to-r from-white/30 via-mint/20 to-periwinkle/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
                
                {/* Main video container - PREMIUM STYLING */}
                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-white to-isabelline/50 group-hover:scale-[1.01] transition-all duration-700" style={{
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.8), inset 0 1px 0 rgba(255,255,255,0.9)'
                }}>
                  
                  {/* YouTube iframe */}
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
                  
                  {/* PREMIUM SUBTITLE OVERLAY - Key Impact Quotes */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-3xl p-4 sm:p-6">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-3 animate-fade-in" style={{ animationDelay: '2s' }}>
                        <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
                        <span className="text-white font-montserrat text-sm font-medium">Citation clé</span>
                      </div>
                      <blockquote className="text-white font-basic-sans text-lg sm:text-xl lg:text-2xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '2.5s' }}>
                        "De 3,4 à 4,6 sur Trustpilot en 30 jours"
                      </blockquote>
                      <p className="text-white/80 font-montserrat text-sm mt-2 animate-fade-in" style={{ animationDelay: '3s' }}>
                        ⚡ Résultats mesurés et vérifiables
                      </p>
                    </div>
                  </div>

                  {/* PREMIUM CUSTOM PLAY BUTTON OVERLAY */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-3xl">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/30 hover:scale-110 transition-transform duration-300 animate-pulse">
                      <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                
                {/* OPTIMIZED Overlay Cards - MOBILE PERFECTED */}
                
                {/* Mobile: Ultra-compact overlay cards */}
                <div className="block lg:hidden">
                  {/* Top right - Main metric - SMALLER */}
                  <div className="absolute -top-1 -right-1 animate-float">
                    <div className="bg-mint rounded-md p-1.5 shadow-md">
                      <div className="text-white text-center">
                        <div className="font-basic-sans text-sm font-bold">×30</div>
                        <div className="font-montserrat text-xs opacity-90">avis</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Top left - Success metric - SMALLER */}
                  <div className="absolute -top-1 -left-1 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="bg-periwinkle rounded-md p-1.5 shadow-md">
                      <div className="text-white text-center">
                        <div className="font-basic-sans text-sm font-bold">95%</div>
                        <div className="font-montserrat text-xs opacity-90">+</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom right - Rating - SMALLER */}
                  <div className="absolute -bottom-1 -right-1 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="bg-white/95 rounded-md p-1.5 shadow-md">
                      <div className="text-night text-center">
                        <div className="font-basic-sans text-xs font-bold">4.9★</div>
                        <div className="font-montserrat text-xs opacity-70">note</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom - Company info - MUCH SMALLER */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="bg-white/95 rounded-md p-1.5 shadow-md">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 bg-gradient-to-r from-mint to-periwinkle rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">TB</span>
                        </div>
                        <div className="text-night">
                          <div className="font-basic-sans text-xs font-bold">The Bradery</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Duration - Mobile - SMALLER */}
                  <div className="absolute top-1 left-1 bg-black/70 rounded-sm px-1.5 py-0.5 opacity-80">
                    <span className="text-white text-xs font-medium">2:15</span>
                  </div>
                </div>

                {/* Desktop: Elegant overlay cards */}
                <div className="hidden lg:block">
                  {/* Hero Metric - ×30 (TOP RIGHT) */}
                  <div className="absolute -top-4 -right-4 group/card animate-float">
                    <div className="bg-gradient-to-br from-mint via-mint to-mint/90 rounded-xl p-3 transform group-hover/card:scale-105 transition-all duration-500" style={{
                      boxShadow: '0 8px 20px rgba(49, 193, 158, 0.2), 0 3px 8px rgba(0,0,0,0.08)'
                    }}>
                      <div className="text-white text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <TrendingUp className="w-3 h-3 drop-shadow-sm" />
                          <span className="font-basic-sans text-xl font-bold drop-shadow-sm">×30</span>
                        </div>
                        <div className="font-montserrat text-xs font-medium opacity-90">plus d'avis</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Metric - 95% (TOP LEFT) */}
                  <div className="absolute -top-4 -left-4 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="bg-gradient-to-br from-periwinkle via-periwinkle to-periwinkle/90 rounded-xl p-3 hover:scale-105 transition-all duration-500" style={{
                      boxShadow: '0 8px 20px rgba(229, 209, 254, 0.2), 0 3px 8px rgba(0,0,0,0.08)'
                    }}>
                      <div className="text-white text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <CheckCircle className="w-3 h-3 drop-shadow-sm" />
                          <span className="font-basic-sans text-xl font-bold drop-shadow-sm">95%</span>
                        </div>
                        <div className="font-montserrat text-xs font-medium opacity-90">positifs</div>
                      </div>
                    </div>
                  </div>

                  {/* Rating Card - 4.9/5 (BOTTOM RIGHT) */}
                  <div className="absolute -bottom-4 -right-4 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 hover:scale-105 transition-all duration-500" style={{
                      boxShadow: '0 8px 20px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.04)'
                    }}>
                      <div className="text-night text-center">
                        <div className="flex items-center justify-center gap-0.5 mb-1">
                          <span className="text-base">⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="font-basic-sans text-lg font-bold">4.9/5</div>
                        <div className="font-montserrat text-xs font-medium opacity-70">satisfaction</div>
                      </div>
                    </div>
                  </div>

                  {/* Company Card - The Bradery (BOTTOM LEFT) */}
                  <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 hover:scale-105 transition-all duration-500" style={{
                      boxShadow: '0 8px 20px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.04)'
                    }}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-mint to-periwinkle rounded-lg flex items-center justify-center shadow-md">
                          <span className="text-white text-sm font-bold">TB</span>
                        </div>
                        <div className="text-night">
                          <div className="font-basic-sans text-sm font-bold">The Bradery</div>
                          <div className="font-montserrat text-xs font-medium opacity-70">Fondateur</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Duration indicator - Desktop */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 opacity-80 hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-medium">2:15</span>
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
