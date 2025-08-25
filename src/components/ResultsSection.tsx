
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const ResultsSection = () => {
  const data = [
    { name: 'Email', value: 1, color: '#E5D1FE' },
    { name: 'SMS', value: 8, color: '#F5EFEA' },
    { name: 'WhatsApp', value: 12, color: '#31C19E' },
    { name: 'Review Collect', value: 39, color: '#31C19E' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-periwinkle/20 to-isabelline">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-basic-sans text-4xl lg:text-5xl font-bold text-night">
              Multipliez votre collecte d'avis 
              <span className="text-mint"> x30</span>
            </h2>
            
            <p className="font-montserrat text-lg text-night/80">
              Comparaison des taux de réponse par canal de collecte d'avis
            </p>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <blockquote className="font-montserrat italic text-night/80 text-lg mb-4">
                "Grâce à Review Collect, The Bradery a multiplié par 10 le nombre d'avis collectés."
              </blockquote>
              <cite className="font-montserrat font-semibold text-mint">
                — Timothée Linyer, The Bradery
              </cite>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-slide-up">
            <h3 className="font-basic-sans text-2xl font-semibold text-night mb-6 text-center">
              Taux de réponse par canal
            </h3>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" className="font-montserrat text-sm" />
                  <YAxis className="font-montserrat text-sm" />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 text-center">
              <p className="font-montserrat text-sm text-night/60">
                Pourcentage de clients qui laissent un avis après sollicitation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
