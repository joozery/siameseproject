import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { galleryAPI } from '../services/api';
import bgWhyChooseImage from '../assets/bgwhychoose.png';
import posterImage from '../assets/poster.jpg';

const WhySiamSection = () => {
  const [posters, setPosters] = useState([]);
  const [currentPoster, setCurrentPoster] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosters();
  }, []);

  useEffect(() => {
    if (posters.length > 1) {
      const timer = setInterval(() => {
        setCurrentPoster((prev) => (prev + 1) % posters.length);
      }, 5000); // Auto-slide every 5 seconds

      return () => clearInterval(timer);
    }
  }, [posters.length]);

  const fetchPosters = async () => {
    try {
      setLoading(true);
      // Get featured images from gallery
      const response = await galleryAPI.getAll();
      const featuredPosters = response.data?.filter(img => img.featured) || [];

      if (featuredPosters.length > 0) {
        setPosters(featuredPosters);
      } else {
        // Fallback to default poster
        setPosters([{
          _id: 'default',
          imageUrl: posterImage,
          title: 'Default Poster'
        }]);
      }
    } catch (error) {
      console.error('Error fetching posters:', error);
      // Fallback to default poster
      setPosters([{
        _id: 'default',
        imageUrl: posterImage,
        title: 'Default Poster'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const nextPoster = () => {
    setCurrentPoster((prev) => (prev + 1) % posters.length);
  };

  const prevPoster = () => {
    setCurrentPoster((prev) => (prev - 1 + posters.length) % posters.length);
  };

  const poster = posters[currentPoster];

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: `url(${bgWhyChooseImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Side - Movie Poster Slider */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Movie poster in the foreground */}
              <div className="relative z-10 flex items-center justify-center" style={{ height: 'calc(var(--posterWidth) * 1.35)' }}>
                {loading ? (
                  <div className="w-full max-w-sm h-96 bg-gray-200 rounded-lg animate-pulse" />
                ) : (
                  <div
                    className="rounded-lg shadow-2xl overflow-hidden transition-all duration-500"
                    style={{ width: 'var(--posterWidth)', height: 'calc(var(--posterWidth) * 1.25)' }}
                  >
                    <img
                      src={poster?.imageUrl || posterImage}
                      alt={poster?.title || 'Movie Poster'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Navigation Arrows - Only show if more than 1 poster */}
              {!loading && posters.length > 1 && (
                <>
                  <button
                    onClick={prevPoster}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 ml-2"
                    aria-label="Previous poster"
                  >
                    <HiChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextPoster}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 mr-2"
                    aria-label="Next poster"
                  >
                    <HiChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                    {posters.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPoster(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPoster
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/75'
                          }`}
                        aria-label={`Go to poster ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-6 flex flex-col items-center text-center w-full" style={{ maxWidth: '760px' }}>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{
                color: '#F9C712',
                fontFamily: 'Metamorphous'
              }}
            >
              Siamese Filmart
            </h2>

            <p
              className="text-lg text-gray-800 leading-relaxed"
              style={{
                fontFamily: 'Futura'
              }}
            >
              Southeast Asia's premier film market and conference. A global meeting point where stories, creators, and opportunities converge. We champion the future of Asian cinema by connecting filmmakers, producers, distributors, and investors across borders, bringing Southeast Asian content to the world stage.
            </p>

            <p
              className="text-lg text-gray-800 leading-relaxed font-semibold"
              style={{
                fontFamily: 'Futura'
              }}
            >
              Join us on the 24-26 June 2027 at Cloud 11, Bangkok, Thailand.
            </p>

            {/* Call to Action Button */}
            <div className="relative inline-block self-center">
              <button
                className="relative transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '44px',
                  padding: '0 28px',
                  paddingRight: '64px',
                  gap: '8px',
                  borderRadius: '12px',
                  background: '#F9C712',
                  color: '#FFFFFF',
                  fontFamily: 'Futura',
                  fontWeight: 700,
                  fontSize: '18px',
                  letterSpacing: '0.02em',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.18)'
                }}
              >
                LEARN MORE
                <span
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{
                    right: '-18px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '9999px',
                    background: '#F9C712',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.18)'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 7H17V16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySiamSection;
