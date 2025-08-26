import React from 'react';
import { Link } from 'react-router-dom';
import bgSubmitImage from '../assets/bgsubmit.png';

const News = () => {
  const newsMenuItems = [
    { name: 'News & Highlights', href: '#news-highlights' },
    { name: 'Awards & Winners', href: '#awards-winners' },
    { name: 'Industry Insight', href: '#industry-insight' }
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
                className="text-amber-700 hover:text-amber-600 transition-colors"
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
                className="text-amber-700 font-semibold hover:text-amber-600 transition-colors"
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
            {newsMenuItems.map((item) => (
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

      {/* Header Section - White Background */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header - Centered */}
          <div className="text-center mb-12">
            <div 
              className="text-sm tracking-[0.3em] text-black uppercase mb-4"
              style={{ fontFamily: 'Futura' }}
            >
              NEWS
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: '#503919', fontFamily: 'Metamorphous' }}
            >
              News & Highlights
            </h1>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Futura' }}
            >
              Official announcements and corporate communications
            </p>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-12">
            {/* 15,000+ Attendees */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Metamorphous' }}>
                15,000+
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'Futura' }}>
                Attendees
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-yellow-400 hidden md:block"></div>

            {/* 40+ Countries */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Metamorphous' }}>
                40+
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'Futura' }}>
                Countries
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-yellow-400 hidden md:block"></div>

            {/* 10+ Country Pavilions */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Metamorphous' }}>
                10+
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'Futura' }}>
                Country Pavilions
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-yellow-400 hidden md:block"></div>

            {/* 100+ Speakers */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Metamorphous' }}>
                100+
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'Futura' }}>
                Speakers
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-yellow-400 hidden md:block"></div>

            {/* 150+ Exhibitors */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Metamorphous' }}>
                150+
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'Futura' }}>
                Exhibitors
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgSubmitImage})`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8 md:p-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-end">
              {/* Text Content - Bottom Left */}
              <div className="text-white mb-8 md:mb-0">
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  style={{ fontFamily: 'Metamorphous' }}
                >
                  Head
                </h2>
                <h3 
                  className="text-xl md:text-2xl mb-3"
                  style={{ fontFamily: 'Futura' }}
                >
                  subhead
                </h3>
                <p 
                  className="text-lg"
                  style={{ fontFamily: 'Futura' }}
                >
                  body
                </p>
              </div>

              {/* Learn More Button - Bottom Right */}
              <div className="flex items-center space-x-2">
                <button 
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors flex items-center space-x-2"
                  style={{ fontFamily: 'Futura' }}
                >
                  <span>LEARN MORE</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Additional Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* News & Highlights Section */}
        <div className="mb-20">
          <h3 
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ color: '#503919', fontFamily: 'Metamorphous' }}
          >
            Latest News
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500" style={{ fontFamily: 'Futura' }}>News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-amber-600 mb-2" style={{ fontFamily: 'Futura' }}>December 15, 2024</div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#503919', fontFamily: 'Metamorphous' }}>
                  SIAMESE FILMART 2025 Announcement
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Futura' }}>
                  Exciting news! SIAMESE FILMART 2025 is officially announced with new features and expanded programming.
                </p>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500" style={{ fontFamily: 'Futura' }}>News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-amber-600 mb-2" style={{ fontFamily: 'Futura' }}>December 10, 2024</div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#503919', fontFamily: 'Metamorphous' }}>
                  Call for Submissions Open
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Futura' }}>
                  We are now accepting film submissions for SIAMESE FILMART 2025. Submit your work today!
                </p>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500" style={{ fontFamily: 'Futura' }}>News Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-amber-600 mb-2" style={{ fontFamily: 'Futura' }}>December 5, 2024</div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#503919', fontFamily: 'Metamorphous' }}>
                  New Partnership Announced
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Futura' }}>
                  SIAMESE FILMART partners with leading film institutions to expand opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
