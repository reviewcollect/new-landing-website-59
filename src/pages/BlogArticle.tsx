import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, ChevronRight, BookOpen, TrendingUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Mock article data
const mockArticle = {
  id: 1,
  title: "Guide complet : Optimiser ses avis Google My Business en 2024",
  slug: "optimiser-avis-google-my-business-2024",
  excerpt: "Découvrez les meilleures stratégies pour collecter et gérer efficacement vos avis Google My Business et améliorer votre visibilité locale.",
  category: "Plateformes d'avis",
  categorySlug: "plateformes-avis",
  image: "/api/placeholder/800/400",
  author: "Marie Dubois",
  authorImage: "/api/placeholder/40/40",
  date: "15 janvier 2024",
  readTime: "8 min",
  content: `
    <div class="article-content">
      <h2>Introduction : L'importance des avis Google My Business</h2>
      <p>En 2024, les avis Google My Business sont devenus un facteur déterminant pour la visibilité locale et la crédibilité de votre entreprise. Avec plus de 90% des consommateurs qui consultent les avis avant de faire un achat, optimiser votre stratégie d'avis Google est devenu indispensable.</p>
      
      <div class="conseil-pro">
        <h3>💡 Conseil Pro</h3>
        <p>Les entreprises avec une note supérieure à 4,0 étoiles génèrent en moyenne 35% de clics supplémentaires sur leur fiche Google My Business.</p>
      </div>

      <h2>1. Configuration optimale de votre fiche Google My Business</h2>
      <p>Avant de collecter des avis, assurez-vous que votre fiche Google My Business est parfaitement optimisée :</p>
      <ul>
        <li>Informations complètes et à jour (horaires, adresse, téléphone)</li>
        <li>Photos de qualité professionnelle</li>
        <li>Description détaillée avec mots-clés pertinents</li>
        <li>Catégories business précises</li>
      </ul>

      <blockquote>
        "Une fiche Google My Business optimisée peut améliorer votre visibilité locale de 50% en moyenne." - Étude Google 2024
      </blockquote>

      <h2>2. Stratégies de collecte d'avis efficaces</h2>
      <p>La collecte d'avis Google nécessite une approche méthodique et régulière. Voici les meilleures pratiques :</p>

      <h3>A. Le timing parfait</h3>
      <p>Le moment idéal pour demander un avis est juste après une expérience positive. Identifiez ces moments clés dans votre parcours client :</p>
      <ul>
        <li>Après la livraison d'une commande</li>
        <li>Après un service client réussi</li>
        <li>Après une transaction satisfaisante</li>
      </ul>

      <h3>B. Automatisation avec Review Collect</h3>
      <p>L'automatisation est la clé pour maintenir un flux régulier d'avis. Review Collect vous permet de :</p>
      <ul>
        <li>Programmer des demandes d'avis automatiques</li>
        <li>Personnaliser vos messages selon le type de client</li>
        <li>Suivre les taux de réponse et optimiser vos campagnes</li>
      </ul>

      <div class="a-retenir">
        <h3>📌 À retenir</h3>
        <p>Les entreprises qui automatisent leurs demandes d'avis collectent 3x plus d'avis que celles qui procèdent manuellement.</p>
      </div>

      <h2>3. Gestion et réponse aux avis</h2>
      <p>Collecter des avis n'est que la première étape. La gestion active de vos avis est tout aussi importante :</p>

      <h3>Répondre aux avis positifs</h3>
      <p>Remerciez vos clients pour leurs retours positifs. Cela montre votre engagement et encourage d'autres clients à laisser des avis.</p>

      <h3>Gérer les avis négatifs</h3>
      <p>Les avis négatifs sont une opportunité d'amélioration. Répondez rapidement, montrez de l'empathie et proposez une solution.</p>

      <h2>4. Métriques et suivi de performance</h2>
      <p>Pour mesurer l'efficacité de votre stratégie d'avis Google, suivez ces indicateurs clés :</p>
      <ul>
        <li>Note moyenne et évolution</li>
        <li>Nombre d'avis collectés par mois</li>
        <li>Taux de réponse aux avis</li>
        <li>Impact sur le trafic et les conversions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Optimiser vos avis Google My Business est un investissement à long terme qui impacte directement votre visibilité locale et vos conversions. Avec les bonnes stratégies et les bons outils, vous pouvez transformer votre e-réputation en véritable avantage concurrentiel.</p>
    </div>
  `
};

// Mock related articles
const relatedArticles = [
  {
    id: 2,
    title: "Trustpilot vs Google Reviews : Comparatif complet 2024",
    category: "Plateformes d'avis",
    image: "/api/placeholder/300/200",
    author: "Thomas Martin",
    date: "12 janvier 2024",
    slug: "trustpilot-vs-google-reviews-comparatif"
  },
  {
    id: 3,
    title: "Automatiser ses campagnes d'avis avec Klaviyo",
    category: "Outils CRM",
    image: "/api/placeholder/300/200",
    author: "Pierre Durand",
    date: "8 janvier 2024",
    slug: "automatiser-campagnes-avis-klaviyo"
  },
  {
    id: 4,
    title: "Comment répondre efficacement aux avis négatifs",
    category: "Stratégie",
    image: "/api/placeholder/300/200",
    author: "Sophie Laurent",
    date: "5 janvier 2024",
    slug: "repondre-avis-negatifs"
  }
];

// Table of contents
const tableOfContents = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "configuration", title: "Configuration optimale", level: 2 },
  { id: "strategies", title: "Stratégies de collecte", level: 2 },
  { id: "timing", title: "Le timing parfait", level: 3 },
  { id: "automatisation", title: "Automatisation", level: 3 },
  { id: "gestion", title: "Gestion et réponse", level: 2 },
  { id: "metriques", title: "Métriques et suivi", level: 2 },
  { id: "conclusion", title: "Conclusion", level: 2 }
];

const BlogArticle = () => {
  const { slug } = useParams();
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollTotal) * 100;
      setReadingProgress(Math.min(scrollProgress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: mockArticle.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-isabelline">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Progress value={readingProgress} className="h-1 rounded-none bg-transparent" />
      </div>

      {/* Header & Breadcrumb */}
      <div className="bg-white border-b border-mint/10 sticky top-0 z-40 pt-16">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-night/60 mb-4">
            <Link to="/" className="hover:text-mint transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-mint transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/blog?category=${mockArticle.categorySlug}`} className="hover:text-mint transition-colors">
              {mockArticle.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-night">{mockArticle.title}</span>
          </nav>
          
          <Link to="/blog" className="inline-flex items-center text-night/70 hover:text-mint transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32">
              <Card className="border-mint/20">
                <CardContent className="p-6">
                  <h3 className="font-basic-sans text-lg font-semibold text-night mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-mint" />
                    Table des matières
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm transition-colors hover:text-mint ${
                          item.level === 3 ? 'pl-4' : ''
                        } ${activeSection === item.id ? 'text-mint font-medium' : 'text-night/70'}`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* CTA Sidebar */}
              <Card className="bg-gradient-to-br from-mint to-periwinkle text-white border-0 mt-6">
                <CardContent className="p-6 text-center">
                  <h3 className="font-basic-sans text-lg font-bold mb-2">
                    🚀 Automatisez vos avis
                  </h3>
                  <p className="font-montserrat text-sm mb-4 opacity-90">
                    Atteignez 4,9/5 étoiles en 30 jours avec Review Collect
                  </p>
                  <Button variant="secondary" size="sm" className="w-full bg-white text-mint hover:bg-white/90">
                    Réserver une démo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="max-w-4xl mx-auto">
              {/* Article Header */}
              <header className="mb-8">
                <Badge variant="secondary" className="bg-mint/10 text-mint mb-4">
                  {mockArticle.category}
                </Badge>
                
                <h1 className="font-basic-sans text-3xl lg:text-5xl font-bold text-night mb-6 leading-tight">
                  {mockArticle.title}
                </h1>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={mockArticle.authorImage} 
                      alt={mockArticle.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-4 text-sm text-night/70">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {mockArticle.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {mockArticle.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {mockArticle.readTime} de lecture
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="border-mint/20 hover:bg-mint/10"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </header>

              {/* Hero Image */}
              <div className="mb-8">
                <img 
                  src={mockArticle.image} 
                  alt={mockArticle.title}
                  className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-night/60 mt-2 text-center">
                  Interface Review Collect pour la gestion des avis Google My Business
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: mockArticle.content }}
                  className="font-montserrat text-night/80 leading-relaxed space-y-6"
                />
              </div>

              {/* Mid-Article CTA */}
              <Card className="my-12 bg-gradient-to-r from-mint/10 to-periwinkle/10 border-mint/20">
                <CardContent className="p-8 text-center">
                  <div className="max-w-md mx-auto">
                    <h3 className="font-basic-sans text-xl font-bold text-night mb-2">
                      💡 Prêt à optimiser vos avis Google ?
                    </h3>
                    <p className="font-montserrat text-night/70 mb-6">
                      Découvrez comment Review Collect peut vous aider à atteindre 4,9/5 étoiles en 30 jours.
                    </p>
                    <Button className="bg-mint hover:bg-mint/90">
                      Réserver une démo gratuite
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="mb-12 border-mint/20">
                <CardContent className="p-8">
                  <div className="max-w-md mx-auto text-center">
                    <h3 className="font-basic-sans text-xl font-semibold text-night mb-2">
                      📧 Checklist gratuite e-réputation
                    </h3>
                    <p className="font-montserrat text-night/70 mb-6">
                      Recevez notre checklist complète pour optimiser votre e-réputation en 15 jours.
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Votre email professionnel"
                        className="flex-1 px-4 py-2 border border-mint/20 rounded-lg focus:outline-none focus:border-mint"
                      />
                      <Button className="bg-mint hover:bg-mint/90">
                        Recevoir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="font-basic-sans text-2xl font-bold text-night mb-8 flex items-center">
                <TrendingUp className="w-6 h-6 text-mint mr-2" />
                Articles recommandés dans {mockArticle.category}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-mint/10">
                    <CardHeader className="p-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="bg-periwinkle/20 text-night mb-3 text-xs">
                        {article.category}
                      </Badge>
                      <h3 className="font-basic-sans text-lg font-semibold text-night mb-2 group-hover:text-mint transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-night/60">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-4 w-full text-mint hover:text-mint/80 hover:bg-mint/10"
                      >
                        Lire l'article
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-mint to-periwinkle py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-basic-sans text-3xl font-bold text-white mb-4">
            Transformez vos avis clients dès aujourd'hui
          </h2>
          <p className="font-montserrat text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 1000 marques qui font confiance à Review Collect pour gérer leur e-réputation et booster leurs conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-mint hover:bg-white/90">
              Réserver une démo gratuite
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;