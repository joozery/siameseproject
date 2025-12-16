import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateAPI } from '../services/api';

const LatestUpdatesSection = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    try {
      setLoading(true);
      const response = await updateAPI.getAll({ active: true, featured: true });
      // Get first 3 featured updates, or first 3 if no featured
      let displayUpdates = response.data?.slice(0, 3) || [];

      // If less than 3 featured, get more from all active
      if (displayUpdates.length < 3) {
        const allResponse = await updateAPI.getAll({ active: true });
        displayUpdates = allResponse.data?.slice(0, 3) || [];
      }

      setUpdates(displayUpdates);
    } catch (error) {
      console.error('Error fetching updates:', error);
      setUpdates([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl text-center mb-12"
            style={{
              color: '#4D341E',
              fontFamily: 'Metamorphous'
            }}
          >
            LATEST UPDATES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (updates.length === 0) {
    return null;
  }

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
          {updates.map((update) => (
            <Link
              key={update._id}
              to={`/updates/${update._id}`}
              className="bg-gray-200 rounded-lg h-64 overflow-hidden relative group cursor-pointer"
            >
              <img
                src={update.coverImage}
                alt={update.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-end">
                <div className="p-4 text-white">
                  <div className="text-xs mb-1 opacity-90">
                    {new Date(update.date).toLocaleDateString('th-TH', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ fontFamily: 'Futura' }}>
                    {update.title}
                  </h3>
                  <p className="text-xs opacity-90 line-clamp-2">
                    {update.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
