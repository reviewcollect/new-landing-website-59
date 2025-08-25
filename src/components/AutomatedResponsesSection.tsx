
import React from 'react';
import { Bot, CheckCircle, Zap, Sparkles } from 'lucide-react';

const AutomatedResponsesSection = () => {
  const features = [
    'Compatible avec Trustpilot, Google Business, Amazon',
    'Réponses alignées à votre charte',
    'IA fine-tunée sur votre historique de réponses',
    'Réduction de charge SAV & image renforcée'
  ];

  const results = [
    'Gain de temps quotidien',
    'Réputation renforcée sur toutes les plateformes',
    'Avis négatifs mieux gérés, avis positifs mis en valeur'
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-mint/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-mint/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-mint" />
              <span className="font-montserrat text-mint font-semibold text-xs sm:text-sm">Intelligence Artificielle</span>
            </div>
            
            <h2 className="font-basic-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-4 sm:mb-6">
              🤖 Réponses automatisées aux avis<br />
              <span className="bg-gradient-to-r from-mint to-periwinkle bg-clip-text text-transparent">
                Trustpilot & Google
              </span>
            </h2>
            
            <p className="font-montserrat text-lg sm:text-xl text-night/80 max-w-3xl mx-auto leading-relaxed">
              Chaque avis reçoit une réponse personnalisée, instantanément.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8 animate-slide-up">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-mint/10">
                <p className="font-montserrat text-base sm:text-lg text-night/80 leading-relaxed mb-4 sm:mb-6">
                  Grâce à notre IA, vos avis Trustpilot et Google sont pris en charge sans intervention manuelle.
                  Chaque réponse est générée dans le ton de votre marque, validée par notre moteur de qualité linguistique, et optimisée pour renforcer la satisfaction client.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-mint flex-shrink-0 mt-0.5" />
                      <span className="font-montserrat text-sm sm:text-base text-night">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-mint/10 to-periwinkle/10 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="bg-mint rounded-full p-1.5 sm:p-2">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="font-basic-sans text-lg sm:text-xl font-bold text-night">📈 Résultat :</h3>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-mint font-bold">–</span>
                      <span className="font-montserrat text-sm sm:text-base text-night/80">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-periwinkle/20 to-mint/20 rounded-2xl p-4 sm:p-6 border-2 border-dashed border-mint/30">
                <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-periwinkle" />
                  <h4 className="font-basic-sans text-base sm:text-lg font-bold text-night">🪄 Option Premium</h4>
                </div>
                <p className="font-montserrat text-sm sm:text-base text-night/80">
                  Suggestions IA à copier/coller dans vos outils support (Zendesk, Gorgias...)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomatedResponsesSection;
