import React, { useState, useEffect } from 'react';
import {
    HiPlus,
    HiPencil,
    HiTrash,
    HiEye,
    HiUpload,
    HiX,
    HiNewspaper,
    HiStar
} from 'react-icons/hi';
import { toast } from 'sonner';
import { updateAPI } from '../../services/api';
import { Link } from 'react-router-dom';

const AdminUpdates = () => {
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingUpdate, setEditingUpdate] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'Other',
        date: new Date().toISOString().split('T')[0],
        readTime: '5 min read',
        tags: '',
        authorName: 'Siamese FilmArt Team',
        active: true,
        featured: false,
        order: 0
    });
    const [uploading, setUploading] = useState(false);

    const categories = [
        'Festival Announcement',
        'Film Submission',
        'Industry News',
        'Partnership',
        'Event',
        'Other'
    ];

    useEffect(() => {
        fetchUpdates();
    }, []);

    const fetchUpdates = async () => {
        try {
            setLoading(true);
            const response = await updateAPI.getAll();
            setUpdates(response.data || []);
        } catch (err) {
            console.error('Error fetching updates:', err);
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
        if (!selectedFile && !editingUpdate) {
            toast.error('กรุณาเลือกรูปภาพ Cover');
            return;
        }

        if (!formData.title || !formData.excerpt || !formData.content) {
            toast.error('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        try {
            setUploading(true);
            const data = new FormData();

            if (selectedFile) {
                data.append('coverImage', selectedFile);
            }
            data.append('title', formData.title);
            data.append('excerpt', formData.excerpt);
            data.append('content', formData.content);
            data.append('category', formData.category);
            data.append('date', formData.date);
            data.append('readTime', formData.readTime);
            data.append('tags', formData.tags);
            data.append('authorName', formData.authorName);
            data.append('active', formData.active);
            data.append('featured', formData.featured);
            data.append('order', formData.order);

            if (editingUpdate) {
                await updateAPI.update(editingUpdate._id, data);
                toast.success('อัปเดตข้อมูลสำเร็จ');
            } else {
                await updateAPI.create(data);
                toast.success('เพิ่มบทความสำเร็จ');
            }

            await fetchUpdates();
            closeModal();
        } catch (err) {
            console.error('Error:', err);
            toast.error(err.message || 'เกิดข้อผิดพลาด');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('คุณต้องการลบบทความนี้หรือไม่?')) return;

        try {
            await updateAPI.delete(id);
            await fetchUpdates();
            toast.success('ลบข้อมูลสำเร็จ');
        } catch (err) {
            console.error('Error deleting:', err);
            toast.error('ไม่สามารถลบข้อมูลได้');
        }
    };

    const openEditModal = (update) => {
        setEditingUpdate(update);
        setFormData({
            title: update.title,
            excerpt: update.excerpt,
            content: update.content,
            category: update.category,
            date: new Date(update.date).toISOString().split('T')[0],
            readTime: update.readTime,
            tags: update.tags.join(', '),
            authorName: update.author.name,
            active: update.active,
            featured: update.featured,
            order: update.order
        });
        setPreviewImage(update.coverImage);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingUpdate(null);
        setSelectedFile(null);
        setPreviewImage(null);
        setFormData({
            title: '',
            excerpt: '',
            content: '',
            category: 'Other',
            date: new Date().toISOString().split('T')[0],
            readTime: '5 min read',
            tags: '',
            authorName: 'Siamese FilmArt Team',
            active: true,
            featured: false,
            order: 0
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
                    <h1 className="text-2xl font-bold text-gray-900">จัดการ Latest Updates</h1>
                    <p className="text-sm text-gray-600 mt-1">จัดการบทความและข่าวสาร</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 text-sm"
                >
                    <HiPlus className="h-4 w-4" />
                    <span>เพิ่มบทความ</span>
                </button>
            </div>

            {/* Updates List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                {updates.length === 0 ? (
                    <div className="text-center py-12">
                        <HiNewspaper className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-gray-500">ไม่พบข้อมูล</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {updates.map((update) => (
                            <div key={update._id} className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="flex gap-4">
                                    {/* Image */}
                                    <div className="w-64 h-36 relative overflow-hidden bg-gray-100 flex-shrink-0">
                                        <img
                                            src={update.coverImage}
                                            alt={update.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {!update.active && (
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                <span className="text-white font-semibold text-sm">ปิดการใช้งาน</span>
                                            </div>
                                        )}
                                        {update.featured && (
                                            <div className="absolute top-2 left-2">
                                                <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                                                    <HiStar className="h-3 w-3" />
                                                    Featured
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                {update.category}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {new Date(update.date).toLocaleDateString('th-TH')}
                                            </span>
                                            <span className="text-xs text-gray-500">• {update.readTime}</span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 text-lg mb-2">{update.title}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{update.excerpt}</p>
                                        {update.tags && update.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-1">
                                                {update.tags.map((tag, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 p-4">
                                        <Link
                                            to={`/updates/${update._id}`}
                                            target="_blank"
                                            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                            title="ดูบทความ"
                                        >
                                            <HiEye className="h-5 w-5 text-gray-700" />
                                        </Link>
                                        <button
                                            onClick={() => openEditModal(update)}
                                            className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                                            title="แก้ไข"
                                        >
                                            <HiPencil className="h-5 w-5 text-blue-600" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(update._id)}
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-8">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-900">
                                    {editingUpdate ? 'แก้ไขบทความ' : 'เพิ่มบทความ'}
                                </h2>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                                    <HiX className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {/* Cover Image */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        รูปภาพ Cover {!editingUpdate && <span className="text-red-500">*</span>}
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
                                        placeholder="Siamese FilmArt 2027 Official Launch"
                                    />
                                </div>

                                {/* Category & Date */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            หมวดหมู่
                                        </label>
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        >
                                            {categories.map((cat) => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            วันที่
                                        </label>
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        บทนำ (Excerpt) <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        rows="2"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        placeholder="Southeast Asia's premier film festival announces its biggest edition yet."
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        เนื้อหา (HTML) <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        rows="10"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm font-mono"
                                        placeholder="<p>เนื้อหาบทความ...</p>"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">รองรับ HTML tags</p>
                                </div>

                                {/* Read Time & Tags */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            เวลาอ่าน
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.readTime}
                                            onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                            placeholder="5 min read"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tags (คั่นด้วย ,)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.tags}
                                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                            placeholder="Festival, Announcement, Film Market"
                                        />
                                    </div>
                                </div>

                                {/* Author & Order */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ผู้เขียน
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.authorName}
                                            onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                            placeholder="Siamese FilmArt Team"
                                        />
                                    </div>
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
                                </div>

                                {/* Active & Featured */}
                                <div className="flex items-center space-x-6">
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
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="featured"
                                            checked={formData.featured}
                                            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                            className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                                        />
                                        <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                                            Featured
                                        </label>
                                    </div>
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
                                        <span>{editingUpdate ? 'บันทึก' : 'เพิ่ม'}</span>
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

export default AdminUpdates;
