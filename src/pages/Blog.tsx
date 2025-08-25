import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, TrendingUp, Scale, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Mock data pour les articles
const articles = [
  {
    id: 1,
    title: "Guide complet : Optimiser ses avis Google My Business en 2024",
    excerpt: "Découvrez les meilleures stratégies pour collecter et gérer efficacement vos avis Google My Business et améliorer votre visibilité locale.",
    category: "Plateformes d'avis",
    image: "/api/placeholder/400/250",
    author: "Marie Dubois",
    date: "15 janvier 2024",
    popular: true,
    slug: "optimiser-avis-google-my-business-2024"
  },
  {
    id: 2,
    title: "Trustpilot vs Google Reviews : Comparatif complet 2024",
    excerpt: "Analyse détaillée des avantages et inconvénients de chaque plateforme pour choisir la meilleure stratégie d'avis clients.",
    category: "Plateformes d'avis",
    image: "/api/placeholder/400/250",
    author: "Thomas Martin",
    date: "12 janvier 2024",
    popular: true,
    slug: "trustpilot-vs-google-reviews-comparatif"
  },
  {
    id: 3,
    title: "Intégration Judge.me avec Shopify : Guide pratique",
    excerpt: "Comment configurer et optimiser Judge.me sur votre boutique Shopify pour maximiser la collecte d'avis produits.",
    category: "Avis produit",
    image: "/api/placeholder/400/250",
    author: "Sophie Laurent",
    date: "10 janvier 2024",
    popular: false,
    slug: "integration-judge-me-shopify-guide"
  },
  {
    id: 4,
    title: "Automatiser ses campagnes d'avis avec Klaviyo",
    excerpt: "Stratégies avancées pour créer des workflows automatisés de collecte d'avis clients via Klaviyo et augmenter vos conversions.",
    category: "Outils CRM",
    image: "/api/placeholder/400/250",
    author: "Pierre Durand",
    date: "8 janvier 2024",
    popular: true,
    slug: "automatiser-campagnes-avis-klaviyo"
  },
  {
    id: 5,
    title: "Zendesk vs Gorgias : Quel outil choisir pour vos avis ?",
    excerpt: "Comparaison détaillée des fonctionnalités de gestion d'avis clients entre Zendesk et Gorgias pour optimiser votre service client.",
    category: "Outils Service client",
    image: "/api/placeholder/400/250",
    author: "Lisa Chen",
    date: "5 janvier 2024",
    popular: false,
    slug: "zendesk-vs-gorgias-comparatif"
  },
  {
    id: 6,
    title: "Retour d'expérience : Axome Agency et Review Collect",
    excerpt: "Découvrez comment l'agence Shopify Axome utilise Review Collect pour améliorer l'e-réputation de ses clients e-commerce.",
    category: "Agences Shopify",
    image: "/api/placeholder/400/250",
    author: "Marc Rousseau",
    date: "3 janvier 2024",
    popular: true,
    slug: "retour-experience-axome-agency"
  }
];

const categories = [
  { name: "Tous les articles", slug: "all", icon: BookOpen },
  { name: "Plateformes d'avis", slug: "plateformes", icon: TrendingUp },
  { name: "Avis produit", slug: "avis-produit", icon: Scale },
  { name: "Outils CRM", slug: "outils-crm", icon: BookOpen },
  { name: "Outils Service client", slug: "service-client", icon: BookOpen },
  { name: "Agences Shopify", slug: "agences-shopify", icon: BookOpen },
  { name: "Agences Web", slug: "agences-web", icon: BookOpen },
  { name: "Autres", slug: "autres", icon: BookOpen }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === categories.find(cat => cat.slug === selectedCategory)?.name;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularArticles = articles.filter(article => article.popular);

  return (
    <div className="min-h-screen bg-isabelline">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-isabelline to-periwinkle/20 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-basic-sans text-4xl lg:text-6xl font-bold text-night mb-6">
              Ressources & Guides 
              <span className="bg-gradient-to-r from-mint to-periwinkle bg-clip-text text-transparent"> E-Réputation</span>
            </h1>
            <p className="font-montserrat text-lg lg:text-xl text-night/70 mb-8 max-w-3xl mx-auto">
              Découvrez nos articles, comparatifs et bonnes pratiques pour maîtriser vos avis clients et booster votre e-commerce.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-night/50 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-white border-mint/20 focus:border-mint"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-10 bg-white border-b border-mint/10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-4 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.slug
                      ? 'bg-mint text-white'
                      : 'bg-gray-100 text-night hover:bg-mint/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-montserrat font-medium text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Popular Articles */}
            {selectedCategory === "all" && (
              <section className="mb-12">
                <h2 className="font-basic-sans text-2xl font-bold text-night mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 text-mint mr-2" />
                  Articles populaires
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {popularArticles.slice(0, 4).map((article) => (
                    <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-mint/10">
                      <CardHeader className="p-0">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="bg-mint/10 text-mint mb-3">
                          {article.category}
                        </Badge>
                        <h3 className="font-basic-sans text-lg font-semibold text-night mb-2 group-hover:text-mint transition-colors">
                          {article.title}
                        </h3>
                        <p className="font-montserrat text-night/70 text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-night/60">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <User className="w-3 h-3 mr-1" />
                              {article.author}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {article.date}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-mint group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* All Articles */}
            <section>
              <h2 className="font-basic-sans text-2xl font-bold text-night mb-6">
                {selectedCategory === "all" ? "Tous nos articles" : `Articles - ${categories.find(cat => cat.slug === selectedCategory)?.name}`}
              </h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-mint/10">
                    <CardHeader className="p-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="bg-periwinkle/20 text-night mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <h3 className="font-basic-sans text-base font-semibold text-night mb-2 group-hover:text-mint transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="font-montserrat text-night/70 text-xs mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-night/60">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </span>
                        <Button variant="ghost" size="sm" className="h-auto p-0 text-mint hover:text-mint/80">
                          Lire l'article
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-mint to-periwinkle text-white border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-basic-sans text-lg font-bold mb-2">
                    📥 Guide gratuit
                  </h3>
                  <p className="font-montserrat text-sm mb-4 opacity-90">
                    Recevez notre guide complet pour maîtriser votre e-réputation
                  </p>
                  <Button variant="secondary" size="sm" className="w-full bg-white text-mint hover:bg-white/90">
                    Télécharger gratuitement
                  </Button>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-mint/20">
                <CardContent className="p-6">
                  <h3 className="font-basic-sans text-lg font-semibold text-night mb-2">
                    📧 Newsletter
                  </h3>
                  <p className="font-montserrat text-sm text-night/70 mb-4">
                    1 conseil actionnable par semaine pour booster vos avis clients
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Votre email" className="border-mint/20" />
                    <Button className="w-full bg-mint hover:bg-mint/90">
                      S'abonner
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Articles */}
              <Card className="border-mint/20">
                <CardContent className="p-6">
                  <h3 className="font-basic-sans text-lg font-semibold text-night mb-4">
                    Articles récents
                  </h3>
                  <div className="space-y-3">
                    {articles.slice(0, 3).map((article) => (
                      <div key={article.id} className="group cursor-pointer">
                        <h4 className="font-montserrat text-sm font-medium text-night group-hover:text-mint transition-colors line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-night/60">{article.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-mint to-periwinkle py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-basic-sans text-3xl font-bold text-white mb-4">
            Prêt à transformer vos avis clients ?
          </h2>
          <p className="font-montserrat text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 1000 marques qui font confiance à Review Collect pour gérer leur e-réputation.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-mint hover:bg-white/90">
            Réserver une démo gratuite
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;