import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'FESTIVAL', href: '/festival' },
    { name: 'MARKET', href: '/market' },
    { name: 'PROGRAMS', href: '#programs' },
    { name: 'CONFERENCE', href: '#conference' },
    { name: 'NEWS', href: '#news' },
    { name: 'ABOUT', href: '#about' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Yellow strip */}
      <div 
        style={{
          height: '10px',
          alignSelf: 'stretch',
          background: 'var(--mainyell1, #F9C712)'
        }}
      ></div>
      
      {/* Main navbar */}
      <nav 
        style={{
          display: 'flex',
          height: '85px',
          padding: '10px 100px',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '10px',
          alignSelf: 'stretch',
          borderRadius: '0 0 20px 20px',
          background: 'var(--white1, #FFF)',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        <div className="w-full max-w-7xl">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src="/assets/siameselogo.png" 
                  alt="Siamese Filmart" 
                  className="w-auto cursor-pointer"
                  style={{ width: 'var(--brandWidth)', height: 'auto' }}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{
                    color: location.pathname === item.href ? '#F9C712' : '#000',
                    fontFamily: 'Metamorphous',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    textDecoration: 'none'
                  }}
                  className="hover:text-yellow-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Login Button */}
              <Link 
                to="/login"
                className="border-2 border-yellow-400 text-black hover:bg-yellow-400 hover:text-black transition duration-300"
                style={{
                  fontFamily: 'Metamorphous',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  padding: '8px 24px',
                  borderRadius: '25px',
                  background: 'transparent',
                  textDecoration: 'none'
                }}
              >
                LOGIN
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 focus:outline-none"
              >
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{
                    color: location.pathname === item.href ? '#F9C712' : '#000',
                    fontFamily: 'Metamorphous',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    textDecoration: 'none'
                  }}
                  className="hover:text-yellow-500 block px-3 py-2 rounded-md transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/login"
                className="w-full text-center border-2 border-yellow-400 text-black hover:bg-yellow-400 hover:text-black transition duration-300 mt-2"
                style={{
                  fontFamily: 'Metamorphous',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  padding: '8px 24px',
                  borderRadius: '25px',
                  background: 'transparent',
                  textDecoration: 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                LOGIN
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MainNavbar;



