import React from 'react';
import HeroSection from '../components/HeroSection';
import ActionButtonsSection from '../components/ActionButtonsSection';
import NewStatsSection from '../components/NewStatsSection';
import WhySiamSection from '../components/WhySiamSection';

import SponsorSection from '../components/SponsorSection';
import GallerySection from '../components/GallerySection';
import LatestUpdatesSection from '../components/LatestUpdatesSection';
import SocialFeedSection from '../components/SocialFeedSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ActionButtonsSection />
      <NewStatsSection />
      <WhySiamSection />
      <LatestUpdatesSection />
      <SocialFeedSection />
      <GallerySection />
      <SponsorSection />
    </div>
  );
};

export default Home; 