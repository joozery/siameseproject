import React from 'react';

const LatestUpdatesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl text-center mb-12"
          style={{
            color: '#4D341E',
            fontFamily: 'Metamorphous'
          }}
        >
          LATEST UPDATES
        </h2>

        {/* Updates Grid - 3 equal columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-200 rounded-lg h-64 overflow-hidden relative group cursor-pointer">
            <img 
              src="/src/assets/gallery/1.jpg" 
              alt="Festival Announcement"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <div className="text-xs mb-1 opacity-90">26 June 2025</div>
                <h3 className="text-sm font-bold mb-2" style={{ fontFamily: 'Futura' }}>
                  Siamese FilmArt 2026 Official Launch
                </h3>
                <p className="text-xs opacity-90 line-clamp-2">
                  Southeast Asia's premier film festival announces its biggest edition yet.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-200 rounded-lg h-64 overflow-hidden relative group cursor-pointer">
            <img 
              src="/src/assets/gallery/2.jpg" 
              alt="Submission Open"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <div className="text-xs mb-1 opacity-90">15 Jan 2025</div>
                <h3 className="text-sm font-bold mb-2" style={{ fontFamily: 'Futura' }}>
                  Film Submissions Now Open
                </h3>
                <p className="text-xs opacity-90 line-clamp-2">
                  Submit your films for competition categories and market screenings.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gray-200 rounded-lg h-64 overflow-hidden relative group cursor-pointer">
            <img 
              src="/src/assets/gallery/3.jpeg" 
              alt="Industry Partners"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <div className="text-xs mb-1 opacity-90">10 Jan 2025</div>
                <h3 className="text-sm font-bold mb-2" style={{ fontFamily: 'Futura' }}>
                  Industry Partnership Program
                </h3>
                <p className="text-xs opacity-90 line-clamp-2">
                  Join our network of international distributors and producers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
