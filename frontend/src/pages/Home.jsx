import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ActionButtonsSection from '../components/ActionButtonsSection';
import NewStatsSection from '../components/NewStatsSection';
import WhySiamSection from '../components/WhySiamSection';
import CTASection from '../components/CTASection';
import HomeAnimations from '../components/HomeAnimations';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
                        <HomeAnimations />
                  <HeroSection />
                  <ActionButtonsSection />
                  <NewStatsSection />
                  <WhySiamSection />
                  <CTASection />
                  <Footer />
    </div>
  );
};

export default Home; 