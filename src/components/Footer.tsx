
import React from 'react';
import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-night text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="lg:col-span-2">
            <h3 className="font-basic-sans text-xl sm:text-2xl font-bold text-mint mb-3 sm:mb-4">
              Review Collect
            </h3>
            <p className="font-montserrat text-white/80 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              La solution e-réputation qui transforme vos clients en ambassadeurs. 
              Collecte automatisée d'avis clients multi-canal.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="bg-mint rounded-full p-1.5 sm:p-2 hover:bg-mint/80 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a href="#" className="bg-mint rounded-full p-1.5 sm:p-2 hover:bg-mint/80 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a href="#" className="bg-mint rounded-full p-1.5 sm:p-2 hover:bg-mint/80 transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-basic-sans font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Produits</h4>
            <ul className="space-y-1 sm:space-y-2 font-montserrat text-white/70 text-sm sm:text-base">
              <li><a href="#" className="hover:text-mint transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">API</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Intégrations</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Tarifs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-basic-sans font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Ressources</h4>
            <ul className="space-y-1 sm:space-y-2 font-montserrat text-white/70 text-sm sm:text-base">
              <li><a href="#" className="hover:text-mint transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Aide</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Cas d'usage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-basic-sans font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Entreprise</h4>
            <ul className="space-y-1 sm:space-y-2 font-montserrat text-white/70 text-sm sm:text-base">
              <li><a href="#" className="hover:text-mint transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Recrutement</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 font-montserrat text-white/60 text-xs sm:text-sm">
              <a href="#" className="hover:text-mint transition-colors">CGU</a>
              <a href="#" className="hover:text-mint transition-colors">RGPD</a>
              <a href="#" className="hover:text-mint transition-colors">Confidentialité</a>
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-mint" />
              <span className="font-montserrat text-white/80 text-xs sm:text-sm">Newsletter pro uniquement</span>
            </div>
          </div>
          
          <div className="text-center mt-4 sm:mt-6">
            <p className="font-montserrat text-white/60 text-xs sm:text-sm">
              © 2024 Review Collect. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
