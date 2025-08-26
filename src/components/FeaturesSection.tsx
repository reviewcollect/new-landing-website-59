import React from 'react';
import { CheckCircle, MessageSquare, Smartphone, Mail, Brain, Zap, Settings } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Multi-canal (WhatsApp, SMS, Email)",
      description: "Collectez des avis sur tous les canaux de communication préférés de vos clients",
      benefits: [
        "WhatsApp Business intégré pour des messages personnalisés",
        "SMS automatiques avec taux d'ouverture de 98%", 
        "Emails optimisés pour maximiser les réponses",
        "Synchronisation automatique entre tous les canaux"
      ],
      color: "mint",
      gradient: "from-mint/10 to-mint/5"
    },
    {
      icon: Brain,
      title: "Routage intelligent des avis",
      description: "Notre IA dirige automatiquement les clients satisfaits vers les bonnes plateformes",
      benefits: [
        "Détection automatique de la satisfaction client",
        "Redirection intelligente vers Google, Trustpilot...",
        "Gestion proactive des avis négatifs", 
        "Optimisation continue par machine learning"
      ],
      color: "periwinkle",
      gradient: "from-periwinkle/10 to-periwinkle/5"
    },
    {
      icon: Settings,
      title: "Compatible Shopify, Gorgias, Klaviyo",
      description: "Intégration native avec vos outils existants en quelques clics",
      benefits: [
        "Synchronisation automatique des commandes Shopify",
        "Integration complète avec Gorgias Support",
        "Workflows Klaviyo préconnectés",
        "API ouverte pour d'autres intégrations"
      ],
      color: "mint",
      gradient: "from-mint/10 to-periwinkle/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-isabelline">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-basic-sans text-4xl lg:text-5xl font-bold text-night mb-6">
            Nos fonctionnalités
            <span className="bg-gradient-to-r from-mint to-periwinkle bg-clip-text text-transparent"> avancées</span>
          </h2>
          <p className="font-montserrat text-lg text-night/80 max-w-3xl mx-auto">
            Découvrez comment notre plateforme transforme votre stratégie d'avis client
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border border-white/50`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color === 'mint' ? 'from-mint to-mint/80' : 'from-periwinkle to-periwinkle/80'} mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-basic-sans text-2xl font-bold text-night mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-montserrat text-night/70 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3 group">
                    <div className={`mt-1 p-1 rounded-full ${feature.color === 'mint' ? 'bg-mint' : 'bg-periwinkle'} group-hover:scale-110 transition-transform`}>
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-montserrat text-sm text-night/80 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mint/15 to-periwinkle/15 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-mint/30">
            <Zap className="w-5 h-5 text-mint" />
            <span className="font-montserrat text-sm font-bold text-night">
              Configuration en moins de 5 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;