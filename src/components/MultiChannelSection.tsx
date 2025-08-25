
import React from 'react';
import { MessageSquare, Smartphone, Mail, RefreshCw } from 'lucide-react';

const MultiChannelSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-mint/5 to-mint/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-basic-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-4 sm:mb-6">
            Relance Multicanale
          </h2>
          <p className="font-montserrat text-base sm:text-lg text-night/80 max-w-3xl mx-auto">
            Une séquence parfaitement orchestrée pour maximiser vos taux de réponse
          </p>
        </div>

        {/* Mobile: Stack vertically, Desktop: Horizontal flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 mb-12 sm:mb-16">
          <div className="flex items-center animate-slide-up">
            <div className="bg-mint rounded-full p-3 sm:p-4">
              <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <span className="font-basic-sans text-base sm:text-lg font-semibold text-night ml-3">WhatsApp</span>
          </div>
          
          <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-mint animate-spin lg:block hidden" style={{ animationDuration: '3s' }} />
          
          <div className="flex items-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-periwinkle rounded-full p-3 sm:p-4">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-night" />
            </div>
            <span className="font-basic-sans text-base sm:text-lg font-semibold text-night ml-3">SMS</span>
          </div>
          
          <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-periwinkle animate-spin lg:block hidden" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          
          <div className="flex items-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="bg-isabelline border-2 border-mint rounded-full p-3 sm:p-4">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-mint" />
            </div>
            <span className="font-basic-sans text-base sm:text-lg font-semibold text-night ml-3">Email</span>
          </div>
          
          <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-mint animate-spin lg:block hidden" style={{ animationDuration: '3s', animationDelay: '2s' }} />
          
          <div className="flex items-center animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="bg-mint rounded-full p-3 sm:p-4">
              <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <span className="font-basic-sans text-base sm:text-lg font-semibold text-night ml-3">WhatsApp</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-mint mb-2">8×</div>
            <p className="font-montserrat text-sm sm:text-base text-night/80">
              Taux d'ouverture WhatsApp supérieur à l'email
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-periwinkle mb-2">+30×</div>
            <p className="font-montserrat text-sm sm:text-base text-night/80">
              Plus d'avis avec 3 canaux synchronisés
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-mint mb-2">100%</div>
            <p className="font-montserrat text-sm sm:text-base text-night/80">
              Séquences totalement automatisées
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelSection;
