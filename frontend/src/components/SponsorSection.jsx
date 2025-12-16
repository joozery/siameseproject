import React, { useState, useEffect } from 'react';
import { sponsorAPI } from '../services/api';

const SponsorSection = () => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    try {
      setLoading(true);
      // Get active sponsors only
      const response = await sponsorAPI.getAll({ active: true });
      setSponsors(response.data || []);
    } catch (error) {
      console.error('Error fetching sponsors:', error);
      setSponsors([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSponsorClick = (sponsor) => {
    if (sponsor.website) {
      window.open(sponsor.website, '_blank');
    }
  };

  if (loading) {
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
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (sponsors.length === 0) {
    return null; // Don't show section if no sponsors
  }

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
              key={sponsor._id}
              onClick={() => handleSponsorClick(sponsor)}
              className={`aspect-square bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 group ${sponsor.website ? 'cursor-pointer' : ''
                }`}
              title={sponsor.name}
            >
              <img
                src={sponsor.logoUrl}
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
