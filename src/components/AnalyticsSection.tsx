
import React from 'react';
import { BarChart3, Mail, TrendingUp, FileText } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AnalyticsSection = () => {
  const reportData = [
    {
      domaine: "Service Client",
      emoji: "👥",
      note: "4.0/5",
      evolution: "Stable",
      evolutionColor: "text-mint",
      justification: "Réactivité appréciée, gestion efficace des problèmes de livraison"
    },
    {
      domaine: "Qualité Produits",
      emoji: "🥜",
      note: "4.5/5",
      evolution: "+0.2",
      evolutionColor: "text-green-600",
      justification: "Formulation probiotique efficace, goût agréable des gélules"
    },
    {
      domaine: "Livraison",
      emoji: "🚚",
      note: "4.2/5",
      evolution: "+0.1",
      evolutionColor: "text-green-600",
      justification: "Rapidité confirmée (2-3 jours), quelques soucis ponctuels avec transporteurs"
    },
    {
      domaine: "UX/Interface",
      emoji: "📱",
      note: "4.3/5",
      evolution: "Stable",
      evolutionColor: "text-mint",
      justification: "Site ergonomique, parcours d'achat fluide et intuitif"
    },
    {
      domaine: "Rapport Q-P",
      emoji: "💰",
      note: "3.8/5",
      evolution: "-0.1",
      evolutionColor: "text-red-500",
      justification: "Prix perçu comme élevé mais justifié par l'efficacité ressentie"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h2 className="font-basic-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-night">
              Rapports & Analytics
            </h2>
            
            <p className="font-montserrat text-base sm:text-lg text-night/80">
              Rapports automatiques envoyés par email avec vue globale et recommandations IA
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-mint rounded-full p-1.5 sm:p-2">
                  <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-montserrat text-sm sm:text-base text-night">Vue globale + export</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-periwinkle rounded-full p-1.5 sm:p-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-night" />
                </div>
                <span className="font-montserrat text-sm sm:text-base text-night">Top avis positifs/négatifs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-mint rounded-full p-1.5 sm:p-2">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-montserrat text-sm sm:text-base text-night">Score NPS par canal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-periwinkle rounded-full p-1.5 sm:p-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-night" />
                </div>
                <span className="font-montserrat text-sm sm:text-base text-night">Recommandations IA pour chaque point d'amélioration</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-mint/10 to-periwinkle/10 rounded-2xl p-4 sm:p-8 animate-slide-up">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-mint text-white p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-basic-sans text-lg sm:text-xl font-semibold">Rapport hebdomadaire</h3>
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              
              {/* Métriques principales */}
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="font-basic-sans text-xl sm:text-2xl font-bold text-mint">+127</div>
                    <div className="font-montserrat text-xs sm:text-sm text-night/70">Avis collectés</div>
                  </div>
                  <div className="text-center">
                    <div className="font-basic-sans text-xl sm:text-2xl font-bold text-periwinkle">4.8/5</div>
                    <div className="font-montserrat text-xs sm:text-sm text-night/70">Note moyenne</div>
                  </div>
                  <div className="text-center">
                    <div className="font-basic-sans text-xl sm:text-2xl font-bold text-mint">39%</div>
                    <div className="font-montserrat text-xs sm:text-sm text-night/70">Taux de réponse</div>
                  </div>
                </div>
              </div>

              {/* Tableau détaillé */}
              <div className="p-3 sm:p-6">
                <h4 className="font-basic-sans text-base sm:text-lg font-semibold text-night mb-3 sm:mb-4">Analyse par domaine</h4>
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-montserrat font-semibold text-xs sm:text-sm">Domaine</TableHead>
                          <TableHead className="font-montserrat font-semibold text-xs sm:text-sm">Note/5</TableHead>
                          <TableHead className="font-montserrat font-semibold text-xs sm:text-sm hidden sm:table-cell">Évolution</TableHead>
                          <TableHead className="font-montserrat font-semibold text-xs sm:text-sm hidden md:table-cell">Justification</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {reportData.slice(0, 3).map((item, index) => (
                          <TableRow key={index} className="hover:bg-gray-50">
                            <TableCell>
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <span className="text-sm sm:text-lg">{item.emoji}</span>
                                <span className="font-montserrat font-medium text-night text-xs sm:text-sm">{item.domaine}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="font-basic-sans font-semibold text-night text-xs sm:text-sm">{item.note}</span>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <span className={`font-montserrat font-medium text-xs sm:text-sm ${item.evolutionColor}`}>
                                {item.evolution}
                              </span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              <span className="font-montserrat text-xs text-night/70">{item.justification.slice(0, 50)}...</span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
