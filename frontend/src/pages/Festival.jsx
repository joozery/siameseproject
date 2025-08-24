import React from 'react';
import { Link } from 'react-router-dom';

const Festival = () => {
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
                className="text-amber-700 font-semibold hover:text-amber-600 transition-colors"
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
            <Link 
              to="/festival/about" 
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ fontFamily: 'Futura' }}
            >
              About
            </Link>
            <Link 
              to="/festival/submit" 
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ fontFamily: 'Futura' }}
            >
              Submit
            </Link>
            <Link 
              to="/festival/rules" 
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ fontFamily: 'Futura' }}
            >
              Rules
            </Link>
            <Link 
              to="/festival/nominees" 
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ fontFamily: 'Futura' }}
            >
              Nominees
            </Link>
            <Link 
              to="/festival/gallery" 
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ fontFamily: 'Futura' }}
            >
              Gallery
            </Link>
            <Link 
              to="/festival/volunteer" 
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ fontFamily: 'Futura' }}
            >
              Volunteer
            </Link>
            <Link 
              to="/festival/sponsor" 
              className="text-white hover:text-yellow-300 transition-colors"
              style={{ fontFamily: 'Futura' }}
            >
              Sponsor
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content Area (White Background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Festival Header - Centered */}
        <div className="text-center mb-16">
          <div 
            className="text-sm tracking-[0.3em] text-black uppercase mb-2"
            style={{ fontFamily: 'Futura' }}
          >
            FESTIVAL
          </div>
          <h2 
            className="text-7xl font-bold mb-4 leading-none"
            style={{
              color: '#000000',
              fontFamily: 'Metamorphous'
            }}
          >
            <span className="block">SIAMESE</span>
            <span className="block">FILM ART</span>
          </h2>
          <p 
            className="text-xl text-black"
            style={{ fontFamily: 'Futura' }}
          >
            Celebrating the Art of Cinema
          </p>
        </div>

        {/* About Festival Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Title */}
          <div className="lg:col-span-1">
            <div 
              className="text-4xl font-bold"
              style={{ color: '#503919', fontFamily: 'Metamorphous' }}
            >
              <span className="block">About</span>
              <span className="block">Festival</span>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="lg:col-span-2 space-y-6">
            <p 
              className="text-base text-black leading-relaxed"
              style={{ fontFamily: 'Futura' }}
            >
              Welcome to the Siamese Film Art Festival, a premier celebration of cinematic excellence that brings together filmmakers, artists, and cinema enthusiasts from around the world. Our festival is dedicated to showcasing innovative storytelling, artistic vision, and the diverse voices that shape contemporary cinema.
            </p>
            <p 
              className="text-base text-black leading-relaxed"
              style={{ fontFamily: 'Futura' }}
            >
              Founded with a passion for the art of filmmaking, we provide a platform for both emerging and established filmmakers to share their work with audiences who appreciate the craft and creativity behind every frame. From thought-provoking documentaries to experimental narratives, our festival celebrates the full spectrum of cinematic expression.
            </p>
            <p 
              className="text-base text-black leading-relaxed"
              style={{ fontFamily: 'Futura' }}
            >
              Join us for an unforgettable journey through the world of film, where stories come alive and artistic visions find their voice.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Background Image and Call to Action */}
      <div 
        className="relative mx-auto w-[1320px] h-[625px] flex-shrink-0 rounded-[15px] overflow-hidden"
        style={{
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/assets/bgsubmit.png') lightgray 50% / cover no-repeat`
        }}
      >
        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white">
            <h3 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
              style={{ fontFamily: 'Metamorphous', textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}
            >
              Submit Your Film
            </h3>
            
            <div className="relative inline-block">
              <button 
                className="bg-[#503919] text-white px-8 md:px-9 py-3 md:py-3.5 rounded-[10px] md:rounded-[12px] font-bold text-sm md:text-base tracking-wide shadow-lg"
                style={{ fontFamily: 'Futura' }}
              >
                SUBMIT YOUR FILM
              </button>
              <div className="absolute -right-6 md:-right-7 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                <svg 
                  className="w-4 h-4 md:w-5 md:h-5 text-white transform rotate-45" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rules & Regulations */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-amber-600"></div>
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider" style={{ fontFamily: 'Futura' }}>
                Guidelines
              </span>
              <div className="w-12 h-0.5 bg-amber-600"></div>
            </div>
            <h3
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#503919', fontFamily: 'Metamorphous' }}
            >
              Rules & Regulations
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Futura' }}>
              Essential information for filmmakers submitting to the Siamese Film Art Festival
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Submission Guidelines Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold" style={{ color: '#503919', fontFamily: 'Metamorphous' }}>
                  Submission Guidelines
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Genres:</span> Open to all genres. Short films ≤ 30 min; feature films ≥ 60 min.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Completion Date:</span> Films completed on or after 1 Jan 2023.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Subtitles:</span> English or Thai subtitles are required.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Format:</span> MP4/H.264, 1080p. Final delivery upon selection.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility & Rights Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold" style={{ color: '#503919', fontFamily: 'Metamorphous' }}>
                  Eligibility & Rights
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Rights:</span> Entrant must hold all necessary rights for image, music and talent.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Release:</span> No prior commercial theatrical release in Thailand.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Promotion:</span> Festival may use up to 30s clips and stills for promotion.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Screening:</span> Filmmaker agrees to one festival screening if selected.
                  </p>
                </div>
              </div>
            </div>

            {/* Deadlines & Fees Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold" style={{ color: '#503919', fontFamily: 'Metamorphous' }}>
                  Deadlines & Fees
                </h4>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-green-800 text-sm" style={{ fontFamily: 'Futura' }}>Earlybird</span>
                    <span className="text-green-800 font-bold" style={{ fontFamily: 'Futura' }}>300 THB</span>
                  </div>
                  <p className="text-green-700 text-xs mt-1" style={{ fontFamily: 'Futura' }}>Deadline: 30 Apr</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-yellow-800 text-sm" style={{ fontFamily: 'Futura' }}>Regular</span>
                    <span className="text-yellow-800 font-bold" style={{ fontFamily: 'Futura' }}>500 THB</span>
                  </div>
                  <p className="text-yellow-700 text-xs mt-1" style={{ fontFamily: 'Futura' }}>Deadline: 15 Jun</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-red-800 text-sm" style={{ fontFamily: 'Futura' }}>Late</span>
                    <span className="text-red-800 font-bold" style={{ fontFamily: 'Futura' }}>800 THB</span>
                  </div>
                  <p className="text-red-700 text-xs mt-1" style={{ fontFamily: 'Futura' }}>Deadline: 15 Jul</p>
                </div>
                <div className="text-center pt-2">
                  <p className="text-gray-600 text-xs" style={{ fontFamily: 'Futura' }}>
                    <span className="font-semibold">Notification:</span> 15 Aug<br/>
                    <span className="font-semibold">Screenings:</span> Late Sep
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-amber-50 px-6 py-3 rounded-full">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-amber-800 font-medium" style={{ fontFamily: 'Futura' }}>
                Questions? Contact us at rules@siamesefilmart.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Nominees & Jury */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: '#503919', fontFamily: 'Metamorphous' }}
          >
            Nominees & Jury
          </h3>
        </div>

        {/* Distinguished Jury Panel */}
        <div className="flex flex-col lg:flex-row items-start justify-between max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="lg:w-2/5 lg:pr-16">
            <h4
              className="text-3xl md:text-4xl font-bold mb-8 text-left"
              style={{ color: '#000000', fontFamily: 'Metamorphous' }}
            >
              Distinguished Jury Panel
            </h4>
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Futura' }}>
                Our esteemed jury consists of acclaimed filmmakers, critics, and industry professionals who bring decades of experience and expertise to the selection process.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Futura' }}>
                They evaluate each submission based on artistic merit, technical excellence, and storytelling innovation.
              </p>
            </div>
          </div>

          {/* Right Side - Jury Members */}
          <div className="lg:w-3/5 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="flex space-x-6 md:space-x-8">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs md:text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Jury 1
                </span>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs md:text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Jury 2
                </span>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs md:text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Jury 3
                </span>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs md:text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Jury 4
                </span>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs md:text-sm font-medium" style={{ fontFamily: 'Futura' }}>
                  Jury 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival;
