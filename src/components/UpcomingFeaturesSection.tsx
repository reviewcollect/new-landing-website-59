import React from 'react';
import { Sparkles, QrCode, Users, Palette, HardDrive, ArrowRight, Zap } from 'lucide-react';

const UpcomingFeaturesSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Suggestions IA pour avis négatifs',
      description: 'Intelligence artificielle pour transformer les avis négatifs en opportunités',
      status: 'Prêt',
      color: 'mint'
    },
    {
      icon: QrCode,
      title: 'QR code en caisse',
      description: 'Collecte d\'avis directement au point de vente',
      status: 'Prêt',
      color: 'periwinkle'
    },
    {
      icon: Users,
      title: 'Rapport mensuel stratégique',
      description: 'Analyse personnalisée et recommandations business avec le CEO',
      status: 'Prêt',
      color: 'mint'
    },
    {
      icon: Palette,
      title: 'Interface UX refondue',
      description: 'Nouvelle interface utilisateur repensée pour plus d\'efficacité',
      status: 'Prêt',
      color: 'periwinkle'
    },
    {
      icon: HardDrive,
      title: 'Intégration native POS',
      description: 'Connexion directe avec Cegid et principaux logiciels de caisse',
      status: 'En développement',
      color: 'mint'
    },
    {
      icon: Zap,
      title: 'Automatisation avancée',
      description: 'Workflows personnalisés et triggers intelligents',
      status: 'En développement',
      color: 'periwinkle'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-isabelline via-white to-periwinkle/10 relative overflow-hidden">
      {/* Background Elements - More subtle like Bigblue */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-mint/10 to-periwinkle/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-l from-periwinkle/10 to-mint/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-sm border border-mint/10">
            <Sparkles className="w-5 h-5 text-mint" />
            <span className="font-montserrat text-mint font-semibold">Innovation Continue</span>
          </div>
          
          <h2 className="font-basic-sans text-4xl lg:text-6xl font-bold text-night mb-8 leading-tight">
            Plus de fonctionnalités{' '}
            <span className="bg-gradient-to-r from-mint to-periwinkle bg-clip-text text-transparent">
              à venir...
            </span>
          </h2>
          <p className="font-montserrat text-xl text-night/70 max-w-4xl mx-auto leading-relaxed">
            L'innovation ne s'arrête jamais chez Review Collect. Découvrez les fonctionnalités premium 
            qui révolutionneront encore plus votre e-réputation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-night/5 hover:shadow-xl hover:border-mint/20 transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`${feature.color === 'mint' ? 'bg-mint/10' : 'bg-periwinkle/10'} rounded-2xl p-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color === 'mint' ? 'text-mint' : 'text-periwinkle'}`} />
                </div>
                <span className={`${
                  feature.status === 'Prêt' 
                    ? 'bg-green-100 text-green-700' 
                    : feature.color === 'mint' 
                      ? 'bg-mint/10 text-mint' 
                      : 'bg-periwinkle/10 text-periwinkle'
                } text-xs font-semibold px-3 py-1 rounded-full`}>
                  {feature.status}
                </span>
              </div>
              
              <h3 className="font-basic-sans text-xl font-bold text-night mb-4 group-hover:text-mint transition-colors">
                {feature.title}
              </h3>
              <p className="font-montserrat text-night/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section - Bigblue style */}
        <div className="text-center bg-gradient-to-r from-mint to-periwinkle rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="font-basic-sans text-3xl lg:text-4xl font-bold mb-6">
            Prêt à révolutionner votre e-réputation ?
          </h3>
          <p className="font-montserrat text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Découvrez notre roadmap complète et participez à l'évolution de Review Collect
          </p>
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 font-semibold hover:bg-white/30 transition-all cursor-pointer group">
            <span>Découvrir notre roadmap complète</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeaturesSection;
