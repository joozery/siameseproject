import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
    HiArrowLeft,
    HiCalendar,
    HiClock,
    HiShare,
    HiTag
} from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { updateAPI } from '../services/api';

const UpdateDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [update, setUpdate] = useState(null);
    const [relatedUpdates, setRelatedUpdates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        fetchUpdateDetail();
    }, [id]);

    const fetchUpdateDetail = async () => {
        try {
            setLoading(true);

            // Fetch update by ID
            const response = await updateAPI.getById(id);
            setUpdate(response.data);

            // Fetch related updates (same category, exclude current)
            const allUpdatesResponse = await updateAPI.getAll({ active: true });
            const related = allUpdatesResponse.data
                .filter(u => u._id !== id && u.category === response.data.category)
                .slice(0, 2);

            setRelatedUpdates(related);
        } catch (error) {
            console.error('Error fetching update:', error);
            setUpdate(null);
        } finally {
            setLoading(false);
        }
    };

    const handleShare = (platform) => {
        const url = window.location.href;
        const title = update?.title || '';

        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        };

        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Loading...</div>
            </div>
        );
    }

    if (!update) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Update Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-amber-600 hover:text-amber-700"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-gray-900">
                <img
                    src={update.coverImage}
                    alt={update.title}
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-8 left-8 flex items-center space-x-2 text-white hover:text-amber-400 transition-colors z-10"
                >
                    <HiArrowLeft className="h-6 w-6" />
                    <span className="text-lg font-semibold">Back</span>
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded">
                                {update.category}
                            </span>
                        </div>
                        <h1
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            style={{ fontFamily: 'Metamorphous' }}
                        >
                            {update.title}
                        </h1>
                        <div className="flex items-center space-x-6 text-white/90">
                            <div className="flex items-center space-x-2">
                                <HiCalendar className="h-5 w-5" />
                                <span>{new Date(update.date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <HiClock className="h-5 w-5" />
                                <span>{update.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Excerpt */}
                <p className="text-xl text-gray-700 font-semibold mb-8 pb-8 border-b border-gray-200">
                    {update.excerpt}
                </p>

                {/* Share Buttons */}
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                        <HiShare className="h-5 w-5 text-gray-600" />
                        <span className="text-gray-600 font-semibold">Share:</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => handleShare('facebook')}
                            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                            title="Share on Facebook"
                        >
                            <FaFacebook className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleShare('twitter')}
                            className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-colors"
                            title="Share on Twitter"
                        >
                            <FaTwitter className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleShare('linkedin')}
                            className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors"
                            title="Share on LinkedIn"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Article Content */}
                <div
                    className="prose prose-lg max-w-none mb-12"
                    style={{ fontFamily: 'Futura' }}
                    dangerouslySetInnerHTML={{ __html: update.content }}
                />

                {/* Tags */}
                {update.tags && update.tags.length > 0 && (
                    <div className="flex items-center flex-wrap gap-2 mb-12 pb-8 border-b border-gray-200">
                        <HiTag className="h-5 w-5 text-gray-600" />
                        {update.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Author */}
                <div className="flex items-center space-x-4 mb-12">
                    <img
                        src={update.author.avatar}
                        alt={update.author.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm text-gray-600">Written by</p>
                        <p className="text-lg font-semibold text-gray-900">{update.author.name}</p>
                    </div>
                </div>
            </div>

            {/* Related Updates */}
            {relatedUpdates.length > 0 && (
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2
                            className="text-3xl font-bold text-center mb-12"
                            style={{ color: '#4D341E', fontFamily: 'Metamorphous' }}
                        >
                            Related Updates
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedUpdates.map((related) => (
                                <Link
                                    key={related._id}
                                    to={`/updates/${related._id}`}
                                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={related.coverImage}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-gray-600 mb-2">
                                            {new Date(related.date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                            {related.title}
                                        </h3>
                                        <p className="text-gray-600 line-clamp-2">{related.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateDetail;
