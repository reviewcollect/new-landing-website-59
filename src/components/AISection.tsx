
import React from 'react';
import { Bot, MessageCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const AISection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Réponse automatique Trustpilot',
      description: 'Réponses personnalisées et conformes à votre image de marque',
      color: 'mint'
    },
    {
      icon: Bot,
      title: 'Réponse IA Google',
      description: 'Intelligence artificielle qui répond automatiquement aux avis Google',
      color: 'periwinkle'
    },
    {
      icon: Lightbulb,
      title: 'Suggestions intelligentes',
      description: 'Alertes + réponses prêtes à copier pour optimiser votre réactivité',
      color: 'mint'
    },
    {
      icon: AlertTriangle,
      title: 'Tri automatique vers support',
      description: 'Avis <4 étoiles redirigés automatiquement vers votre équipe support',
      color: 'periwinkle'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-night/5 to-mint/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-basic-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-4 sm:mb-6">
            Fonctionnalités IA
          </h2>
          <p className="font-montserrat text-base sm:text-lg text-night/80 max-w-3xl mx-auto">
            Chaque avis est traité par une IA conforme à l'image de marque
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${feature.color === 'mint' ? 'bg-mint' : 'bg-periwinkle'} rounded-full p-2 sm:p-3 w-fit mb-3 sm:mb-4`}>
                <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color === 'mint' ? 'text-white' : 'text-night'}`} />
              </div>
              <h3 className="font-basic-sans text-lg sm:text-xl font-semibold text-night mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="font-montserrat text-sm sm:text-base text-night/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
