import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const aboutMenuItems = [
    { name: 'About Siamese Filmart', href: '#about-siamese-filmart' },
    { name: 'Our Team & Advisors', href: '#our-team-advisors' },
    { name: 'Mission & History', href: '#mission-history' },
    { name: 'Partners & Sponsors', href: '#partners-sponsors' }
  ];

  return (
    <div className="min-h-screen">
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
                className="text-amber-700 hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Futura' }}
              >
                NEWS
              </Link>
              <Link 
                to="/about" 
                className="text-amber-700 font-semibold hover:text-amber-600 transition-colors"
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

      {/* Secondary Navigation Bar (Dark Brown Background) */}
      <div className="text-white" style={{ background: 'var(--brown1, #503919)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 py-3">
            {aboutMenuItems.map((item) => (
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

      {/* Page Title - Above Main Content */}
      <div className="text-center py-8">
        <h1 
          className="text-3xl md:text-4xl font-bold"
          style={{ color: '#503919', fontFamily: 'Metamorphous' }}
        >
          ABOUT
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex items-center justify-center px-4 py-8">
        {/* Content Container with Specific Dimensions and Styling */}
        <div 
          className="flex-shrink-0"
          style={{
            width: '1340px',
            height: '531px',
            borderRadius: '50px 50px 0 0',
            background: 'linear-gradient(180deg, #F9C712 0%, #FFF 100%)'
          }}
        >
          {/* Content */}
          <div className="px-8 py-16 md:px-16 md:py-20 h-full flex flex-col justify-center">
            {/* Logo - Centered */}
            <div className="text-center mb-12">
              {/* Logo */}
              <div className="flex items-center justify-center mb-12">
                <img 
                  src="/src/assets/siameselogo.png" 
                  alt="Siamese Filmart Logo" 
                  className="w-auto h-32 md:h-40"
                  style={{ maxWidth: 'none', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Descriptive Text - Left Aligned */}
            <div className="max-w-4xl mx-auto">
              <div className="text-left text-lg leading-relaxed" style={{ fontFamily: 'Futura' }}>
                <p className="text-black mb-6">
                  Siamese Filmart stands at the forefront of contemporary cinema, blending traditional storytelling with cutting-edge filmmaking techniques.
                </p>
                
                <p className="text-black mb-6">
                  Our production house specializes in creating compelling narratives that resonate with audiences across cultures and generations.
                </p>
                
                <p className="text-black mb-6">
                  Founded on the principles of artistic integrity and creative excellence, we collaborate with visionary directors, talented actors, and skilled technicians to bring extraordinary stories to life on the silver screen.
                </p>
                
                <p className="text-black">
                  From intimate character studies to epic blockbusters, Siamese Filmart is committed to pushing the boundaries of cinematic expression while maintaining the highest standards of production quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
