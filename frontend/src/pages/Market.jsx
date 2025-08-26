import React from 'react';
import { Link } from 'react-router-dom';

const Market = () => {
  const marketMenuItems = [
    { name: 'About', href: '#about' },
    { name: 'Attend the market', href: '#attend' },
    { name: 'Exhibition zones', href: '#zones' },
    { name: 'Become an exhibitor', href: '#exhibitor' },
    { name: 'Sponsor', href: '#sponsor' },
    { name: 'Venue & floor plan', href: '#venue' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Stripe */}
      <div className="flex">
        <div className="w-1/2 h-2 bg-yellow-400"></div>
        <div className="w-1/2 h-2 bg-blue-900"></div>
      </div>

      {/* Primary Navigation Bar (White Background) */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-black rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-black text-lg font-bold" style={{ fontFamily: 'Metamorphous' }}>
                  SIAMESE
                </span>
                <span className="text-black text-lg font-bold" style={{ fontFamily: 'Metamorphous' }}>
                  FILMART
                </span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/festival" 
                className="text-amber-700 hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                FESTIVAL
              </Link>
              <Link 
                to="/market" 
                className="text-amber-700 font-semibold hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                MARKET
              </Link>
              <Link 
                to="/programs" 
                className="text-amber-700 hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                PROGRAMS
              </Link>
              <Link 
                to="/conference" 
                className="text-amber-700 hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                CONFERENCE
              </Link>
              <Link 
                to="/news" 
                className="text-amber-700 hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                NEWS
              </Link>
              <Link 
                to="/about" 
                className="text-amber-700 hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                ABOUT
              </Link>
            </nav>

            {/* Login Button */}
            <Link 
              to="/login" 
              className="border-2 border-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors"
              style={{ fontFamily: 'Futura' }}
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar (Brown Background) */}
      <div className="text-white" style={{ background: 'var(--brown1, #503919)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 py-3">
            {marketMenuItems.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className="text-white hover:text-yellow-300 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Area (White Background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Market Header - Centered */}
        <div className="text-center mb-16">
          <div 
            className="text-sm tracking-[0.3em] text-black uppercase mb-2"
            style={{ fontFamily: 'Futura' }}
          >
            MARKET
          </div>
        </div>

        {/* About Market Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Title */}
          <div className="lg:col-span-1">
            <div 
              className="text-4xl font-bold"
              style={{ color: '#503919', fontFamily: 'Metamorphous' }}
            >
              <span className="block">About</span>
              <span className="block" style={{ color: '#000000' }}>SIAMESE FILMART</span>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="lg:col-span-2 space-y-6">
            <p 
              className="text-base text-black leading-relaxed"
              style={{ fontFamily: 'Futura' }}
            >
              Welcome to the Siamese Film Art Market, a premier gathering of film industry professionals, 
              technology innovators, and creative visionaries from around the world. Our market is dedicated 
              to showcasing cutting-edge film technologies, innovative services, and breakthrough solutions 
              that are shaping the future of filmmaking.
            </p>
            <p 
              className="text-base text-black leading-relaxed"
              style={{ fontFamily: 'Futura' }}
            >
              Founded with a passion for advancing the art of filmmaking through technology and innovation, 
              we provide a platform for both established brands and emerging startups to showcase their latest 
              products and services. From state-of-the-art camera systems to revolutionary post-production tools, 
              from advanced lighting solutions to immersive sound technologies, our market celebrates the full 
              spectrum of cinematic innovation.
            </p>
            <p 
              className="text-base text-black leading-relaxed"
              style={{ fontFamily: 'Futura' }}
            >
              Join us for an unforgettable journey through the world of film technology, where innovation meets 
              creativity and where the tools of tomorrow are unveiled today.
            </p>
          </div>
        </div>





        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-50 px-6 py-3 rounded-full mb-8">
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-amber-800 font-medium" style={{ fontFamily: 'Futura' }}>
              Ready to join the market? Contact us at market@siamesefilmart.com
            </span>
          </div>
        </div>

        {/* Attend the Market Banner */}
        <div className="mt-20">
          <div 
            className="relative max-w-7xl mx-auto h-[400px] flex-shrink-0 rounded-[15px] overflow-hidden"
            style={{
              background: '#F9C712',
              border: '2px solid #000000',
              borderTop: '4px solid #FFFFFF',
              borderBottom: '4px solid #FFFFFF'
            }}
          >
            {/* Content */}
            <div className="relative z-10 h-full">
              <div className="h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start text-center text-black pt-16">
                <h3 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  style={{ fontFamily: 'Metamorphous', color: '#000000' }}
                >
                  Attend the Market
                </h3>
                
                <p 
                  className="text-lg md:text-xl text-black max-w-3xl"
                  style={{ fontFamily: 'Futura' }}
                >
                  Join industry professionals, filmmakers, and distributors in this dynamic marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition Zones Section */}
        <div className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h3 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#503919', fontFamily: 'Metamorphous' }}
              >
                Exhibition Zones
              </h3>
            </div>

            {/* Grid of 8 Zones */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Zone 1 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Zone 1
                </span>
              </div>
              {/* Zone 2 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Zone 2
                </span>
              </div>
              {/* Zone 3 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Zone 3
                </span>
              </div>
              {/* Zone 4 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Zone 4
                </span>
              </div>
              {/* Zone 5 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Zone 5
                </span>
              </div>
              {/* Zone 6 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Zone 6
                </span>
              </div>
              {/* Zone 7 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Zone 7
                </span>
              </div>
              {/* Zone 8 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Zone 8
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
