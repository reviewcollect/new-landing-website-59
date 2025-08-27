
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, CheckCircle, Star, Eye, Users, ArrowRight, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({ trustpilot: 3.4, positifs: 0 });
  const [viewCount] = useState(2847);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlayVideo = () => {
    const iframe = document.querySelector('iframe[title="Témoignage Tim - The Bradery"]') as HTMLIFrameElement;
    if (iframe) {
      const currentSrc = iframe.src;
      const muteParam = isMobile ? 'mute=1' : 'mute=0';
      let newSrc = currentSrc.replace(/mute=[01]/, muteParam);
      newSrc = newSrc.replace(/autoplay=[01]/, 'autoplay=1');
      newSrc = newSrc.replace(/controls=[01]/, 'controls=1');
      
      iframe.src = newSrc;
      setIsVideoPlaying(true);
      setShowPlayButton(false);
      
      if (isMobile) {
        iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      let positifsCount = 0;
      let trustpilotScore = 3.4;
      
      const interval = setInterval(() => {
        if (positifsCount < 95) {
          positifsCount += 3;
          setAnimatedNumbers(prev => ({ ...prev, positifs: Math.min(positifsCount, 95) }));
        }
        if (trustpilotScore < 4.6) {
          trustpilotScore += 0.04;
          setAnimatedNumbers(prev => ({ ...prev, trustpilot: Math.min(trustpilotScore, 4.6) }));
        }
        if (positifsCount >= 95 && trustpilotScore >= 4.6) {
          clearInterval(interval);
        }
      }, 50);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white h-screen flex items-center pt-16 pb-8 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-mint/20 to-periwinkle/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-periwinkle/20 to-mint/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-full max-w-7xl mx-auto">
          
          {/* Colonne gauche - Contenu principal */}
          <div className="space-y-4 animate-fade-in">
            {/* Badge témoignage */}
            <Badge className="bg-mint/10 text-mint border-mint/20 px-3 py-1.5 text-sm font-semibold">
              <MessageSquare className="w-4 h-4 mr-2" />
              💬 Témoignage client The Bradery
            </Badge>

            {/* Titre principal */}
            <div className="space-y-3">
              <h1 className="font-basic-sans text-3xl sm:text-4xl lg:text-5xl font-black text-night leading-tight">
                Découvrez comment The Bradery a <span className="relative bg-gradient-to-r from-mint to-periwinkle bg-clip-text text-transparent font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-mint after:to-periwinkle after:rounded">multiplié ses avis</span> par 30
              </h1>
              
              <h2 className="font-montserrat text-base sm:text-lg text-night/70 leading-relaxed font-medium">
                De <span className="text-mint font-semibold">3,4 à 4,6</span> sur Trustpilot en 30 jours avec notre solution e-réputation
              </h2>
            </div>

            {/* Statistiques - 3 cartes compactes */}
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-mint/20 hover:shadow-xl transition-all group hover:scale-105 flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle className="w-5 h-5 text-mint group-hover:scale-110 transition-transform" />
                  <span className="font-basic-sans text-2xl font-bold text-mint">
                    {animatedNumbers.trustpilot.toFixed(1)}/5
                  </span>
                </div>
                <p className="font-montserrat text-xs text-night/70">Trustpilot</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-mint/20 hover:shadow-xl transition-all group hover:scale-105 flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle className="w-5 h-5 text-mint group-hover:scale-110 transition-transform" />
                  <span className="font-basic-sans text-2xl font-bold text-mint">
                    +{animatedNumbers.positifs}%
                  </span>
                </div>
                <p className="font-montserrat text-xs text-night/70">avis positifs</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-mint/20 hover:shadow-xl transition-all group hover:scale-105 flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle className="w-5 h-5 text-mint group-hover:scale-110 transition-transform" />
                  <span className="font-basic-sans text-2xl font-bold text-mint">15min</span>
                </div>
                <p className="font-montserrat text-xs text-night/70">d'installation</p>
              </div>
            </div>

            {/* Section Social Proof compacte */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Métriques */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-night/60" />
                  <span className="font-montserrat text-sm text-night/70">Vue par <span className="font-bold text-mint">{viewCount.toLocaleString()}</span> entrepreneurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-night/60" />
                  <span className="font-montserrat text-sm text-night/70">Approuvé par <span className="font-bold text-mint">500+</span> e-commerces</span>
                </div>
              </div>


              {/* Section crédibilité - 3 points compacts */}
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-mint/10">
                  <CheckCircle className="w-4 h-4 text-mint flex-shrink-0" />
                  <p className="font-montserrat text-sm text-night font-medium">
                    Méthode testée par Bradery (leader français du e-commerce)
                  </p>
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-mint/10">
                  <CheckCircle className="w-4 h-4 text-mint flex-shrink-0" />
                  <p className="font-montserrat text-sm text-night font-medium">
                    Résultats prouvés chez 500+ boutiques en ligne
                  </p>
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-mint/10">
                  <CheckCircle className="w-4 h-4 text-mint flex-shrink-0" />
                  <p className="font-montserrat text-sm text-night font-medium">
                    Garantie de résultats en 30 jours
                  </p>
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button className="bg-mint hover:bg-mint/90 text-white px-8 py-4 text-base font-bold rounded-xl transition-all hover:scale-105 hover:shadow-xl group shadow-lg">
                <span className="flex items-center space-x-2">
                  <span>Obtenir les mêmes résultats</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-mint text-mint hover:bg-mint hover:text-white px-8 py-4 text-base font-semibold flex items-center gap-2 rounded-xl transition-all hover:scale-105 group bg-white shadow-lg hover:shadow-xl"
                onClick={handlePlayVideo}
              >
                <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Voir l'interview complète
              </Button>
            </div>
          </div>

          {/* Colonne droite - Vidéo avec logo Bradery */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-white to-isabelline/50 shadow-2xl">
                
                
                {/* YouTube iframe */}
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/n44Z4HDah7o?autoplay=0&mute=1&loop=1&playlist=n44Z4HDah7o&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&cc_load_policy=0&playsinline=1&showinfo=0`}
                  title="Témoignage Tim - The Bradery"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                {/* Custom play button overlay */}
                {showPlayButton && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl cursor-pointer z-10 hover:bg-black/40 transition-all"
                    onClick={handlePlayVideo}
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 border border-white/50 hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <PlayCircle className="w-16 h-16 text-mint" />
                    </div>
                  </div>
                )}
              </div>
              
              <p className="font-montserrat text-night/70 mt-3 text-center text-sm font-medium">
                Découvrez comment The Bradery a transformé sa réputation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
