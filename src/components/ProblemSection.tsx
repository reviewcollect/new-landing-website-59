
import React from 'react';
import { Quote, AlertTriangle, ThumbsUp } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-night/5 to-periwinkle/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-mint rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-periwinkle rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-16 animate-fade-in">
          <div className="space-y-8">
            <Quote className="w-16 h-16 text-mint mx-auto opacity-80" />
            
            <blockquote className="font-basic-sans text-5xl lg:text-6xl font-bold text-night leading-tight">
              "Les clients satisfaits ne laissent 
              <span className="text-mint"> jamais</span> d'avis,<br/>
              les clients mécontents laissent 
              <span className="text-periwinkle"> tous</span> un avis"
            </blockquote>
            
            <p className="font-montserrat text-xl text-night/70 max-w-3xl mx-auto">
              C'est le paradoxe de l'e-réputation : vos meilleurs clients restent silencieux 
              pendant que les avis négatifs dominent votre image de marque.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="font-basic-sans text-2xl font-bold text-night mb-4">Le problème</h3>
              <p className="font-montserrat text-night/70 text-lg">
                Seulement <strong className="text-red-500">2% des clients satisfaits</strong> laissent spontanément un avis positif
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-mint/20 rounded-full p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ThumbsUp className="w-12 h-12 text-mint" />
              </div>
              <h3 className="font-basic-sans text-2xl font-bold text-night mb-4">Notre solution</h3>
              <p className="font-montserrat text-night/70 text-lg">
                Avec Review Collect : <strong className="text-mint">39% de taux de réponse</strong> sur tous canaux confondus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
