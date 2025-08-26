
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SocialProofSection from '@/components/SocialProofSection';
import ResultsSection from '@/components/ResultsSection';
import StrategySection from '@/components/StrategySection';
import MultiChannelSection from '@/components/MultiChannelSection';
import AISection from '@/components/AISection';
import AutomatedResponsesSection from '@/components/AutomatedResponsesSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import ReviewDistributionSection from '@/components/ReviewDistributionSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import UpcomingFeaturesSection from '@/components/UpcomingFeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturesSection from '@/components/FeaturesSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCtA';

const Index = () => {
  return (
    <div className="min-h-screen bg-isabelline">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProblemSection />
      <SocialProofSection />
      <ResultsSection />
      <StrategySection />
      <MultiChannelSection />
      <AISection />
      <AutomatedResponsesSection />
      <AnalyticsSection />
      <ReviewDistributionSection />
      <IntegrationsSection />
      <UpcomingFeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
