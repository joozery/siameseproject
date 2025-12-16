import React, { useState, useEffect } from 'react';
import {
    HiPhotograph,
    HiPlus,
    HiTrash,
    HiEye,
    HiSearch,
    HiFilter,
    HiUpload,
    HiX,
    HiStar
} from 'react-icons/hi';
import { toast } from 'sonner';
import { galleryAPI } from '../../services/api';

const AdminGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState(null);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    const categories = [
        { value: '', label: 'ทั้งหมด' },
        { value: 'festival', label: 'งานเทศกาล' },
        { value: 'exhibition', label: 'นิทรรศการ' },
        { value: 'event', label: 'กิจกรรม' },
        { value: 'behind-the-scenes', label: 'เบื้องหลัง' },
        { value: 'other', label: 'อื่นๆ' }
    ];

    useEffect(() => {
        fetchImages();
        fetchStats();
    }, [filterCategory]);

    const fetchImages = async () => {
        try {
            setLoading(true);
            const params = {};
            if (filterCategory) params.category = filterCategory;

            const response = await galleryAPI.getAll(params);
            setImages(response.data || []);
        } catch (err) {
            console.error('Error fetching images:', err);
            toast.error('ไม่สามารถโหลดรูปภาพได้');
        } finally {
            setLoading(false);
        }
    };

    const fetchStats = async () => {
        try {
            const response = await galleryAPI.getStats();
            setStats(response.data);
        } catch (err) {
            console.error('Error fetching stats:', err);
        }
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);

        // Validate files
        const validFiles = files.filter(file => {
            if (file.size > 5 * 1024 * 1024) {
                toast.error(`ไฟล์ ${file.name} มีขนาดใหญ่เกิน 5MB`);
                return false;
            }
            return true;
        });

        setSelectedFiles(prev => [...prev, ...validFiles]);

        // Generate previews
        const newPreviews = validFiles.map(file => URL.createObjectURL(file));
        setPreviewImages(prev => [...prev, ...newPreviews]);
    };

    const removeSelectedFile = (index) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
        setPreviewImages(prev => {
            const newPreviews = prev.filter((_, i) => i !== index);
            // Cleanup old preview URL
            URL.revokeObjectURL(prev[index]);
            return newPreviews;
        });
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) {
            toast.error('กรุณาเลือกรูปภาพอย่างน้อย 1 รูป');
            return;
        }

        try {
            setUploading(true);
            const formData = new FormData();
            selectedFiles.forEach(file => {
                formData.append('images', file);
            });
            // Default values
            formData.append('category', 'other');
            formData.append('featured', 'false');

            await galleryAPI.create(formData);
            toast.success(`อัปโหลด ${selectedFiles.length} รูปสำเร็จ`);

            // Reset and refresh
            setSelectedFiles([]);
            setPreviewImages([]);
            setShowUploadModal(false);
            fetchImages();
            fetchStats();
        } catch (err) {
            console.error('Error uploading:', err);
            toast.error('อัปโหลดล้มเหลว');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('คุณต้องการลบรูปภาพนี้หรือไม่?')) return;

        try {
            await galleryAPI.delete(id);
            toast.success('ลบรูปภาพสำเร็จ');
            fetchImages();
            fetchStats();
        } catch (err) {
            console.error('Error deleting:', err);
            toast.error('ลบรูปภาพล้มเหลว');
        }
    };

    const handleToggleFeatured = async (image) => {
        try {
            const formData = new FormData();
            formData.append('featured', !image.featured);

            await galleryAPI.update(image._id, formData);

            // Optimistic update
            setImages(images.map(img =>
                img._id === image._id ? { ...img, featured: !img.featured } : img
            ));

            toast.success(image.featured ? 'นำออกจากรายการแนะนำ' : 'เพิ่มในรายการแนะนำ');
            fetchStats();
        } catch (err) {
            console.error('Error toggling featured:', err);
            toast.error('ไม่สามารถเปลี่ยนสถานะได้');
        }
    };

    const filteredImages = images.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (image.tags && image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-gray-600">กำลังโหลดรูปภาพ...</div>
            </div>
        );
    }

    return (
        <div className="space-y-4 font-prompt">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">จัดการ Gallery</h1>
                    <p className="text-sm text-gray-600 mt-1">จัดการรูปภาพของ SIAMESE FILMART</p>
                </div>
                <button
                    onClick={() => setShowUploadModal(true)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 text-sm"
                >
                    <HiPlus className="h-4 w-4" />
                    <span>อัปโหลดรูปภาพ</span>
                </button>
            </div>

            {/* Stats Cards */}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600">รูปภาพทั้งหมด</p>
                                <p className="text-xl font-bold text-gray-900">{stats.totalImages}</p>
                            </div>
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <HiPhotograph className="h-5 w-5 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600">รูปภาพแนะนำ</p>
                                <p className="text-xl font-bold text-gray-900">{stats.featuredImages}</p>
                            </div>
                            <div className="p-2 bg-amber-100 rounded-lg">
                                <HiStar className="h-5 w-5 text-amber-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600">หมวดหมู่</p>
                                <p className="text-xl font-bold text-gray-900">{stats.categoryCounts?.length || 0}</p>
                            </div>
                            <div className="p-2 bg-green-100 rounded-lg">
                                <HiFilter className="h-5 w-5 text-green-600" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex items-center gap-4">
                    <div className="flex-1 relative">
                        <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="ค้นหารูปภาพ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                        />
                    </div>
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    >
                        {categories.map(cat => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                {filteredImages.length === 0 ? (
                    <div className="text-center py-12">
                        <HiPhotograph className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-gray-500">ไม่พบรูปภาพ</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredImages.map((image) => (
                            <div key={image._id} className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="aspect-video relative overflow-hidden bg-gray-100">
                                    <img
                                        src={image.imageUrl}
                                        alt={image.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 right-2 flex space-x-1 z-10 transition-opacity">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleToggleFeatured(image);
                                            }}
                                            className={`p-1.5 rounded-full backdrop-blur-sm transition-all duration-200 ${image.featured
                                                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                                                    : 'bg-black/30 text-white hover:bg-amber-500 hover:text-white'
                                                }`}
                                            title={image.featured ? "เลิกแนะนำ" : "ตั้งเป็นแนะนำ"}
                                        >
                                            <HiStar className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => window.open(image.imageUrl, '_blank')}
                                                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                title="ดูรูปภาพ"
                                            >
                                                <HiEye className="h-5 w-5 text-gray-700" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(image._id)}
                                                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                title="ลบ"
                                            >
                                                <HiTrash className="h-5 w-5 text-red-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3">
                                    <h3 className="font-semibold text-gray-900 text-sm truncate">{image.title}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-gray-500">{image.category}</span>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <HiEye className="h-3 w-3 mr-1" />
                                            <span>{image.views}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">อัปโหลดรูปภาพ</h2>
                            <button onClick={() => setShowUploadModal(false)} className="text-gray-400 hover:text-gray-600">
                                <HiX className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto flex-1">
                            {previewImages.length === 0 ? (
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-amber-500 transition-colors">
                                    <label className="cursor-pointer block">
                                        <HiUpload className="mx-auto h-12 w-12 text-gray-400" />
                                        <p className="mt-4 text-gray-600 font-medium">คลิกเพื่อเลือกรูปภาพ</p>
                                        <p className="mt-1 text-sm text-gray-500">หรือลากไฟล์มาวางที่นี่ (Max 5MB)</p>
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={handleFileSelect}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {previewImages.map((url, idx) => (
                                        <div key={idx} className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                            <img src={url} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => removeSelectedFile(idx)}
                                                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <HiX className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                    <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-amber-500 transition-colors">
                                        <HiPlus className="h-8 w-8 text-gray-400" />
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={handleFileSelect}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            )}
                        </div>

                        <div className="p-6 border-t border-gray-200 flex justify-end gap-3 bg-gray-50">
                            <button
                                onClick={() => setShowUploadModal(false)}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                                disabled={uploading}
                            >
                                ยกเลิก
                            </button>
                            <button
                                onClick={handleUpload}
                                disabled={selectedFiles.length === 0 || uploading}
                                className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {uploading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        กำลังอัปโหลด...
                                    </>
                                ) : (
                                    <>
                                        <HiUpload className="h-5 w-5" />
                                        อัปโหลด {selectedFiles.length > 0 && `(${selectedFiles.length})`}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminGallery;
