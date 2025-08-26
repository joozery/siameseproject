import React from 'react';
import { Link } from 'react-router-dom';

const Conference = () => {
  const conferenceMenuItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Key topics', href: '#key-topics' },
    { name: 'Speakers & guests', href: '#speakers-guests' },
    { name: 'Full schedule', href: '#full-schedule' },
    { name: 'Register for Conferences', href: '#register' },
    { name: 'Sponsor', href: '#sponsor' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Brown Stripe */}
      <div className="h-1" style={{ background: '#503919' }}></div>

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
                className="text-amber-700 hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                MARKET
              </Link>
              <Link 
                to="/conference" 
                className="text-amber-700 font-semibold hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                CONFERENCE
              </Link>
              <Link 
                to="/programs" 
                className="text-amber-700 hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                PROGRAMS
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
            {conferenceMenuItems.map((item) => (
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

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Header Section - Centered */}
        <div className="text-center mb-20">
          <div 
            className="text-sm tracking-[0.3em] text-black uppercase mb-4"
            style={{ fontFamily: 'Futura' }}
          >
            CONFERENCE
          </div>
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ color: '#503919', fontFamily: 'Metamorphous' }}
          >
            SIAMESE FILMART
          </h1>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#503919', fontFamily: 'Metamorphous' }}
          >
            Conference 2025
          </h2>
          <p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto"
            style={{ fontFamily: 'Futura' }}
          >
            Exploring the Future of Cinema and Digital Storytelling
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-20">
          {/* Overview Title - Left Aligned */}
          <h3 
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ color: '#503919', fontFamily: 'Metamorphous' }}
          >
            Overview
          </h3>

          {/* Three Content Blocks - Horizontal Arrangement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Block - Rounded bottom-left corner */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: '400px',
                height: '500px',
                alignSelf: 'stretch',
                borderRadius: '0 0 0 200px',
                background: '#D9D9D9'
              }}
            >
              <span className="text-gray-600 text-lg font-medium" style={{ fontFamily: 'Futura' }}>
                Content Block 1
              </span>
            </div>

            {/* Middle Block - All square corners */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: '400px',
                height: '500px',
                alignSelf: 'stretch',
                background: '#D9D9D9'
              }}
            >
              <span className="text-gray-600 text-lg font-medium" style={{ fontFamily: 'Futura' }}>
                Content Block 2
              </span>
            </div>

            {/* Right Block - Rounded top-right corner */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: '400px',
                height: '500px',
                alignSelf: 'stretch',
                borderRadius: '0 200px 0 0',
                background: '#D9D9D9'
              }}
            >
              <span className="text-gray-600 text-lg font-medium" style={{ fontFamily: 'Futura' }}>
                Content Block 3
              </span>
            </div>
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="space-y-20">
          {/* About Conference Section */}
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
                Welcome to the Siamese Film Art Conference, a premier gathering of film industry professionals, 
                creative visionaries, and thought leaders from around the world. Our conference is dedicated 
                to exploring the future of filmmaking, digital arts, and creative storytelling through 
                inspiring talks, workshops, and networking opportunities.
              </p>
              <p 
                className="text-base text-black leading-relaxed"
                style={{ fontFamily: 'Futura' }}
              >
                Founded with a passion for advancing the art of filmmaking through knowledge sharing and 
                collaboration, we provide a platform for both established professionals and emerging talents 
                to share insights, discuss trends, and explore innovative approaches to visual storytelling. 
                From traditional filmmaking techniques to cutting-edge digital technologies, our conference 
                celebrates the full spectrum of cinematic creativity.
              </p>
              <p 
                className="text-base text-black leading-relaxed"
                style={{ fontFamily: 'Futura' }}
              >
                Join us for an unforgettable journey through the world of film and digital arts, where 
                creativity meets innovation and where the stories of tomorrow are shaped today.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-amber-50 px-6 py-3 rounded-full mb-8">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-amber-800 font-medium" style={{ fontFamily: 'Futura' }}>
                Ready to join the conference? Contact us at conference@siamesefilmart.com
              </span>
            </div>
          </div>

          {/* Conference Tracks Section */}
          <div>
            {/* Header */}
            <div className="text-center mb-16">
              <h3 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#503919', fontFamily: 'Metamorphous' }}
              >
                Conference Tracks
              </h3>
            </div>

            {/* Grid of 8 Tracks */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Track 1 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Film Production
                </span>
              </div>
              {/* Track 2 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Digital Arts
                </span>
              </div>
              {/* Track 3 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Industry & Business
                </span>
              </div>
              {/* Track 4 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Technology
                </span>
              </div>
              {/* Track 5 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Storytelling
                </span>
              </div>
              {/* Track 6 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Distribution
                </span>
              </div>
              {/* Track 7 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Marketing
                </span>
              </div>
              {/* Track 8 */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Networking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
