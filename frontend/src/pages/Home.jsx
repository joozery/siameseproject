import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ActionButtonsSection from '../components/ActionButtonsSection';
import NewStatsSection from '../components/NewStatsSection';
import WhySiamSection from '../components/WhySiamSection';
import HomeAnimations from '../components/HomeAnimations';
import Footer from '../components/Footer';
import SponsorSection from '../components/SponsorSection';
import GallerySection from '../components/GallerySection';
import LatestUpdatesSection from '../components/LatestUpdatesSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
                        <HomeAnimations />
                  <HeroSection />
                  <ActionButtonsSection />
                  <NewStatsSection />
                  <WhySiamSection />
                  <LatestUpdatesSection />
                  <GallerySection />
                  <SponsorSection />
                  <Footer />
    </div>
  );
};

export default Home; 