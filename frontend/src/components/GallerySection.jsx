import React, { useState, useEffect } from 'react';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { galleryAPI } from '../services/api';

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const response = await galleryAPI.getAll();
      setImages(response.data?.slice(0, 8) || []);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl text-center"
            style={{
              color: '#4D341E',
              fontFamily: 'Metamorphous'
            }}
          >
            Gallery
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-0 w-full">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-full aspect-[16/9] overflow-hidden bg-gray-200 animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <section className="py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl text-center"
            style={{
              color: '#4D341E',
              fontFamily: 'Metamorphous'
            }}
          >
            Gallery
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-0 w-full">
          {images.map((image, index) => (
            <div
              key={image._id || index}
              className="w-full aspect-[16/9] overflow-hidden group cursor-pointer relative"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.imageUrl}
                alt={image.title || `Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <HiX className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
            >
              <HiChevronLeft className="h-12 w-12" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-7xl max-h-[90vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex].imageUrl}
              alt={images[selectedImageIndex].title || 'Gallery Image'}
              className="max-w-full max-h-[90vh] object-contain"
            />
            {images[selectedImageIndex].title && (
              <p className="text-white text-center mt-4 text-lg">
                {images[selectedImageIndex].title}
              </p>
            )}
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
            >
              <HiChevronRight className="h-12 w-12" />
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
