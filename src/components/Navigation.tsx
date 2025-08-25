
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg py-2 sm:py-3' 
          : 'bg-transparent py-4 sm:py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="font-basic-sans text-xl sm:text-2xl font-bold text-night">
              Review Collect
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#fonctionnalites" className="font-montserrat text-night/80 hover:text-mint transition-colors text-sm lg:text-base">
                Fonctionnalités
              </a>
              <a href="#prix" className="font-montserrat text-night/80 hover:text-mint transition-colors text-sm lg:text-base">
                Tarifs
              </a>
              <a href="#temoignages" className="font-montserrat text-night/80 hover:text-mint transition-colors text-sm lg:text-base">
                Témoignages
              </a>
              <a href="/blog" className="font-montserrat text-night/80 hover:text-mint transition-colors text-sm lg:text-base">
                Blog
              </a>
              <Button className="bg-mint hover:bg-mint/90 text-white px-4 lg:px-6 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg text-sm lg:text-base">
                Essai gratuit
              </Button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
            <a href="#fonctionnalites" className="font-montserrat text-lg sm:text-xl text-night" onClick={() => setIsMobileMenuOpen(false)}>
              Fonctionnalités
            </a>
            <a href="#prix" className="font-montserrat text-lg sm:text-xl text-night" onClick={() => setIsMobileMenuOpen(false)}>
              Tarifs
            </a>
            <a href="#temoignages" className="font-montserrat text-lg sm:text-xl text-night" onClick={() => setIsMobileMenuOpen(false)}>
              Témoignages
            </a>
            <a href="/blog" className="font-montserrat text-lg sm:text-xl text-night" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </a>
            <Button className="bg-mint hover:bg-mint/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Essai gratuit
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
