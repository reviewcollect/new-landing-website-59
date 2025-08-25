
import React from 'react';
import { Zap, ShoppingCart, MessageSquare, BarChart } from 'lucide-react';

const IntegrationsSection = () => {
  const integrations = [
    {
      category: 'CMS',
      icon: ShoppingCart,
      items: ['Shopify', 'WooCommerce', 'Magento'],
      color: 'mint'
    },
    {
      category: 'CRM & Messaging',
      icon: MessageSquare,
      items: ['Klaviyo', 'Gorgias', 'Slack'],
      color: 'periwinkle'
    },
    {
      category: 'Plateformes',
      icon: BarChart,
      items: ['Trustpilot', 'Google', 'Amazon'],
      color: 'mint'
    },
    {
      category: 'Communication',
      icon: Zap,
      items: ['WhatsApp Business', 'SMS', 'API/Webhook'],
      color: 'periwinkle'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-basic-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-4 sm:mb-6">
            Intégrations
          </h2>
          <p className="font-montserrat text-base sm:text-lg text-night/80 max-w-3xl mx-auto">
            Connectez Review Collect à tous vos outils existants
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {integrations.map((integration, index) => (
            <div 
              key={integration.category}
              className="bg-gradient-to-br from-isabelline to-white rounded-xl p-4 sm:p-6 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${integration.color === 'mint' ? 'bg-mint' : 'bg-periwinkle'} rounded-full p-2 sm:p-3 w-fit mb-3 sm:mb-4`}>
                <integration.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${integration.color === 'mint' ? 'text-white' : 'text-night'}`} />
              </div>
              <h3 className="font-basic-sans text-lg sm:text-xl font-semibold text-night mb-3 sm:mb-4">
                {integration.category}
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                {integration.items.map((item) => (
                  <li key={item} className="font-montserrat text-night/70 flex items-center text-sm sm:text-base">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${integration.color === 'mint' ? 'bg-mint' : 'bg-periwinkle'} rounded-full mr-2 sm:mr-3`}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="font-montserrat text-night/60 text-sm sm:text-base">
            + POS (logiciels caisse) et bien d'autres intégrations disponibles
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
