
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling past hero section
      setIsVisible(scrollPosition > windowHeight && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-40 animate-slide-up">
      <div className="bg-gradient-to-r from-mint to-periwinkle rounded-2xl shadow-2xl p-3 sm:p-4 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <p className="font-basic-sans text-white font-semibold text-sm sm:text-lg">
              Prêt à multiplier vos avis par 30 ?
            </p>
            <p className="font-montserrat text-white/90 text-xs sm:text-sm">
              Essai gratuit 48h • Sans engagement
            </p>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 ml-3">
            <Button className="bg-white text-mint hover:bg-white/90 px-3 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg transition-all hover:scale-105 text-sm sm:text-base">
              <span className="flex items-center space-x-1 sm:space-x-2">
                <span className="hidden sm:inline">Commencer</span>
                <span className="sm:hidden">Go</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </Button>
            
            <button 
              onClick={() => setIsDismissed(true)}
              className="text-white/70 hover:text-white p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
