import React from 'react';

const sponsors = [
  { id: 1, image: '/assets/sponsor/1.jpg', name: 'Sponsor 1' },
  { id: 2, image: '/assets/sponsor/2.png', name: 'Sponsor 2' },
  { id: 3, image: '/assets/sponsor/3.webp', name: 'Sponsor 3' },
  { id: 4, image: '/assets/sponsor/4.png', name: 'Sponsor 4' },
  { id: 5, image: '/assets/sponsor/5.webp', name: 'Sponsor 5' },
  { id: 6, image: '/assets/sponsor/6.jpg', name: 'Sponsor 6' },
  // Add placeholders to fill the grid
  { id: 7, image: '/assets/sponsor/1.jpg', name: 'Sponsor 7' },
  { id: 8, image: '/assets/sponsor/2.png', name: 'Sponsor 8' },
  { id: 9, image: '/assets/sponsor/3.webp', name: 'Sponsor 9' }
];

const SponsorSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl"
          style={{
            color: '#4D341E',
            fontFamily: 'Metamorphous'
          }}
        >
          SPONSOR
        </h2>

        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="aspect-square bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;




