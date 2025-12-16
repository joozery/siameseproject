import React, { useState, useEffect } from 'react';
import {
    HiPlus,
    HiPencil,
    HiTrash,
    HiEye,
    HiUpload,
    HiX,
    HiPhotograph
} from 'react-icons/hi';
import { toast } from 'sonner';
import { heroSlideAPI } from '../../services/api';

const AdminHeroSlides = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingSlide, setEditingSlide] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        description: '',
        buttonText: 'Learn More',
        buttonLink: '',
        order: 0,
        active: true
    });
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchSlides();
    }, []);

    const fetchSlides = async () => {
        try {
            setLoading(true);
            const response = await heroSlideAPI.getAll();
            setSlides(response.data || []);
        } catch (err) {
            console.error('Error fetching slides:', err);
            toast.error('ไม่สามารถโหลดข้อมูลได้');
        } finally {
            setLoading(false);
        }
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error('ไฟล์ต้องมีขนาดไม่เกิน 5MB');
                return;
            }
            setSelectedFile(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile && !editingSlide) {
            toast.error('กรุณาเลือกรูปภาพ');
            return;
        }

        if (!formData.title) {
            toast.error('กรุณาใส่หัวข้อ');
            return;
        }

        try {
            setUploading(true);
            const data = new FormData();

            if (selectedFile) {
                data.append('image', selectedFile);
            }
            data.append('title', formData.title);
            data.append('subtitle', formData.subtitle);
            data.append('description', formData.description);
            data.append('buttonText', formData.buttonText);
            data.append('buttonLink', formData.buttonLink);
            data.append('order', formData.order);
            data.append('active', formData.active);

            if (editingSlide) {
                await heroSlideAPI.update(editingSlide._id, data);
                toast.success('อัปเดตข้อมูลสำเร็จ');
            } else {
                await heroSlideAPI.create(data);
                toast.success('เพิ่ม Slide สำเร็จ');
            }

            await fetchSlides();
            closeModal();
        } catch (err) {
            console.error('Error:', err);
            toast.error(err.message || 'เกิดข้อผิดพลาด');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('คุณต้องการลบ Slide นี้หรือไม่?')) return;

        try {
            await heroSlideAPI.delete(id);
            await fetchSlides();
            toast.success('ลบข้อมูลสำเร็จ');
        } catch (err) {
            console.error('Error deleting:', err);
            toast.error('ไม่สามารถลบข้อมูลได้');
        }
    };

    const openEditModal = (slide) => {
        setEditingSlide(slide);
        setFormData({
            title: slide.title,
            subtitle: slide.subtitle || '',
            description: slide.description || '',
            buttonText: slide.buttonText || 'Learn More',
            buttonLink: slide.buttonLink || '',
            order: slide.order,
            active: slide.active
        });
        setPreviewImage(slide.imageUrl);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingSlide(null);
        setSelectedFile(null);
        setPreviewImage(null);
        setFormData({
            title: '',
            subtitle: '',
            description: '',
            buttonText: 'Learn More',
            buttonLink: '',
            order: 0,
            active: true
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-gray-600">กำลังโหลดข้อมูล...</div>
            </div>
        );
    }

    return (
        <div className="space-y-4 font-prompt">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">จัดการ Hero Slides</h1>
                    <p className="text-sm text-gray-600 mt-1">จัดการภาพสไลด์หน้าแรก</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 text-sm"
                >
                    <HiPlus className="h-4 w-4" />
                    <span>เพิ่ม Slide</span>
                </button>
            </div>

            {/* Slides List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                {slides.length === 0 ? (
                    <div className="text-center py-12">
                        <HiPhotograph className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-gray-500">ไม่พบข้อมูล</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {slides.map((slide) => (
                            <div key={slide._id} className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="flex gap-4">
                                    {/* Image */}
                                    <div className="w-64 h-36 relative overflow-hidden bg-gray-100 flex-shrink-0">
                                        <img
                                            src={slide.imageUrl}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {!slide.active && (
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                <span className="text-white font-semibold text-sm">ปิดการใช้งาน</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 p-4">
                                        <h3 className="font-semibold text-gray-900 text-lg">{slide.title}</h3>
                                        {slide.subtitle && (
                                            <p className="text-sm text-gray-600 mt-1">{slide.subtitle}</p>
                                        )}
                                        {slide.description && (
                                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{slide.description}</p>
                                        )}
                                        <div className="flex items-center gap-4 mt-3">
                                            <span className="text-xs text-gray-500">ลำดับ: {slide.order}</span>
                                            {slide.buttonText && (
                                                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                                                    {slide.buttonText}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 p-4">
                                        {slide.imageUrl && (
                                            <button
                                                onClick={() => window.open(slide.imageUrl, '_blank')}
                                                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                                title="ดูรูปภาพ"
                                            >
                                                <HiEye className="h-5 w-5 text-gray-700" />
                                            </button>
                                        )}
                                        <button
                                            onClick={() => openEditModal(slide)}
                                            className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                                            title="แก้ไข"
                                        >
                                            <HiPencil className="h-5 w-5 text-blue-600" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(slide._id)}
                                            className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
                                            title="ลบ"
                                        >
                                            <HiTrash className="h-5 w-5 text-red-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-900">
                                    {editingSlide ? 'แก้ไข Slide' : 'เพิ่ม Slide'}
                                </h2>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                                    <HiX className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {/* Image Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        รูปภาพ {!editingSlide && <span className="text-red-500">*</span>}
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-amber-500 transition-colors">
                                        {previewImage ? (
                                            <div className="relative">
                                                <img
                                                    src={previewImage}
                                                    alt="Preview"
                                                    className="max-h-64 mx-auto rounded"
                                                />
                                                <button
                                                    onClick={() => {
                                                        setPreviewImage(null);
                                                        setSelectedFile(null);
                                                    }}
                                                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                                >
                                                    <HiX className="h-4 w-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <label className="cursor-pointer">
                                                <HiUpload className="mx-auto h-12 w-12 text-gray-400" />
                                                <p className="mt-2 text-sm text-gray-600">คลิกเพื่อเลือกรูปภาพ</p>
                                                <p className="text-xs text-gray-500">PNG, JPG (แนะนำ 1920x1080px)</p>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileSelect}
                                                    className="hidden"
                                                />
                                            </label>
                                        )}
                                    </div>
                                </div>

                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        หัวข้อ <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        placeholder="SIAMESE FILMART"
                                    />
                                </div>

                                {/* Subtitle */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        หัวข้อรอง
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.subtitle}
                                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        placeholder="Southeast Asia's Premier Film Festival"
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        คำอธิบาย
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        rows="3"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        placeholder="24-26 June 2027 at ICONSIAM Bangkok"
                                    />
                                </div>

                                {/* Button Text & Link */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ข้อความปุ่ม
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.buttonText}
                                            onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                            placeholder="Learn More"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ลิงก์ปุ่ม
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.buttonLink}
                                            onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                            placeholder="/about"
                                        />
                                    </div>
                                </div>

                                {/* Order */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        ลำดับ
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.order}
                                        onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                    />
                                </div>

                                {/* Active */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="active"
                                        checked={formData.active}
                                        onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                                    />
                                    <label htmlFor="active" className="ml-2 text-sm text-gray-700">
                                        เปิดใช้งาน
                                    </label>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-end space-x-3 mt-6">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                                    disabled={uploading}
                                >
                                    ยกเลิก
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={uploading}
                                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                                >
                                    {uploading ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>กำลังบันทึก...</span>
                                        </>
                                    ) : (
                                        <span>{editingSlide ? 'บันทึก' : 'เพิ่ม'}</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminHeroSlides;
