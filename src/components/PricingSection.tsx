
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Crown, Rocket, Building } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Rocket,
      description: 'Idéal pour démarrer avec des volumétries modérées',
      features: [
        'Collecte multi-canal (WhatsApp, SMS, Email)',
        'Routage intelligent',
        'Pages d\'avis personnalisées',
        'Dashboard & rapports automatisés',
        'Assistance prioritaire'
      ],
      color: 'mint'
    },
    {
      name: 'Premium',
      icon: Crown,
      description: 'Parfait pour les marques omnicanales',
      features: [
        'Tout du plan Starter',
        'Réponses IA automatiques',
        'Analytics avancés',
        'Intégrations premium',
        'Support dédié'
      ],
      color: 'periwinkle',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building,
      description: 'Conçu pour les grands comptes ou réseaux de points de vente',
      features: [
        'Tout du plan Premium',
        'API complète',
        'Rapports personnalisés',
        'Formation équipe',
        'Account manager dédié'
      ],
      color: 'mint'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-night/5 to-mint/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-basic-sans text-4xl lg:text-5xl font-bold text-night mb-6">
            Offres Review Collect
          </h2>
          <p className="font-montserrat text-lg text-night/80 mb-8">
            Tous nos plans incluent l'onboarding offert
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up ${plan.popular ? 'ring-2 ring-mint scale-105' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="bg-mint text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                  Plus populaire
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`${plan.color === 'mint' ? 'bg-mint' : 'bg-periwinkle'} rounded-full p-4 w-fit mx-auto mb-4`}>
                  <plan.icon className={`w-8 h-8 ${plan.color === 'mint' ? 'text-white' : 'text-night'}`} />
                </div>
                <h3 className="font-basic-sans text-2xl font-bold text-night mb-2">
                  {plan.name}
                </h3>
                <p className="font-montserrat text-night/70">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                    <span className="font-montserrat text-night/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 'bg-mint hover:bg-mint/90' : 'bg-night hover:bg-night/90'} text-white`}
              >
                Choisir {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-montserrat text-night/60 mb-4">
            🟢 Onboarding offert sur toutes les offres
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
