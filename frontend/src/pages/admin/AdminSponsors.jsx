import React, { useState, useEffect } from 'react';
import {
    HiPlus,
    HiPencil,
    HiTrash,
    HiEye,
    HiSearch,
    HiUpload,
    HiX,
    HiStar,
    HiGlobe
} from 'react-icons/hi';
import { toast } from 'sonner';
import { sponsorAPI } from '../../services/api';

const AdminSponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingSponsor, setEditingSponsor] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTier, setFilterTier] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        website: '',
        tier: 'partner',
        order: 0,
        active: true,
        description: ''
    });
    const [uploading, setUploading] = useState(false);

    const tiers = [
        { value: '', label: 'ทั้งหมด' },
        { value: 'platinum', label: 'Platinum' },
        { value: 'gold', label: 'Gold' },
        { value: 'silver', label: 'Silver' },
        { value: 'bronze', label: 'Bronze' },
        { value: 'partner', label: 'Partner' }
    ];

    useEffect(() => {
        fetchSponsors();
    }, [filterTier]);

    const fetchSponsors = async () => {
        try {
            setLoading(true);
            const params = {};
            if (filterTier) params.tier = filterTier;

            const response = await sponsorAPI.getAll(params);
            setSponsors(response.data || []);
        } catch (err) {
            console.error('Error fetching sponsors:', err);
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
        if (!selectedFile && !editingSponsor) {
            toast.error('กรุณาเลือกโลโก้');
            return;
        }

        if (!formData.name) {
            toast.error('กรุณาใส่ชื่อผู้สนับสนุน');
            return;
        }

        try {
            setUploading(true);
            const data = new FormData();

            if (selectedFile) {
                data.append('logo', selectedFile);
            }
            data.append('name', formData.name);
            data.append('website', formData.website);
            data.append('tier', formData.tier);
            data.append('order', formData.order);
            data.append('active', formData.active);
            data.append('description', formData.description);

            if (editingSponsor) {
                await sponsorAPI.update(editingSponsor._id, data);
                toast.success('อัปเดตข้อมูลสำเร็จ');
            } else {
                await sponsorAPI.create(data);
                toast.success('เพิ่มผู้สนับสนุนสำเร็จ');
            }

            await fetchSponsors();
            closeModal();
        } catch (err) {
            console.error('Error:', err);
            toast.error(err.message || 'เกิดข้อผิดพลาด');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('คุณต้องการลบผู้สนับสนุนนี้หรือไม่?')) return;

        try {
            await sponsorAPI.delete(id);
            await fetchSponsors();
            toast.success('ลบข้อมูลสำเร็จ');
        } catch (err) {
            console.error('Error deleting:', err);
            toast.error('ไม่สามารถลบข้อมูลได้');
        }
    };

    const openEditModal = (sponsor) => {
        setEditingSponsor(sponsor);
        setFormData({
            name: sponsor.name,
            website: sponsor.website || '',
            tier: sponsor.tier,
            order: sponsor.order,
            active: sponsor.active,
            description: sponsor.description || ''
        });
        setPreviewImage(sponsor.logoUrl);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingSponsor(null);
        setSelectedFile(null);
        setPreviewImage(null);
        setFormData({
            name: '',
            website: '',
            tier: 'partner',
            order: 0,
            active: true,
            description: ''
        });
    };

    const filteredSponsors = sponsors.filter(sponsor =>
        sponsor.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getTierBadgeColor = (tier) => {
        const colors = {
            platinum: 'bg-gray-800 text-white',
            gold: 'bg-yellow-500 text-white',
            silver: 'bg-gray-400 text-white',
            bronze: 'bg-orange-700 text-white',
            partner: 'bg-blue-500 text-white'
        };
        return colors[tier] || 'bg-gray-500 text-white';
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
                    <h1 className="text-2xl font-bold text-gray-900">จัดการผู้สนับสนุน</h1>
                    <p className="text-sm text-gray-600 mt-1">จัดการข้อมูลผู้สนับสนุน SIAMESE FILMART</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 text-sm"
                >
                    <HiPlus className="h-4 w-4" />
                    <span>เพิ่มผู้สนับสนุน</span>
                </button>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex items-center gap-4">
                    <div className="flex-1 relative">
                        <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="ค้นหาผู้สนับสนุน..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                        />
                    </div>
                    <select
                        value={filterTier}
                        onChange={(e) => setFilterTier(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    >
                        {tiers.map(tier => (
                            <option key={tier.value} value={tier.value}>{tier.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Sponsors Grid */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                {filteredSponsors.length === 0 ? (
                    <div className="text-center py-12">
                        <HiStar className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-gray-500">ไม่พบข้อมูล</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredSponsors.map((sponsor) => (
                            <div key={sponsor._id} className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                                {/* Logo */}
                                <div className="aspect-square relative overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                                    <img
                                        src={sponsor.logoUrl}
                                        alt={sponsor.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                    {!sponsor.active && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <span className="text-white font-semibold">ปิดการใช้งาน</span>
                                        </div>
                                    )}
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="flex space-x-2">
                                            {sponsor.website && (
                                                <button
                                                    onClick={() => window.open(sponsor.website, '_blank')}
                                                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                    title="เว็บไซต์"
                                                >
                                                    <HiGlobe className="h-5 w-5 text-gray-700" />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => openEditModal(sponsor)}
                                                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                title="แก้ไข"
                                            >
                                                <HiPencil className="h-5 w-5 text-blue-600" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(sponsor._id)}
                                                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                title="ลบ"
                                            >
                                                <HiTrash className="h-5 w-5 text-red-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-3">
                                    <h3 className="font-semibold text-gray-900 text-sm truncate">{sponsor.name}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className={`text-xs px-2 py-1 rounded ${getTierBadgeColor(sponsor.tier)}`}>
                                            {sponsor.tier}
                                        </span>
                                        <span className="text-xs text-gray-500">ลำดับ: {sponsor.order}</span>
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
                                    {editingSponsor ? 'แก้ไขผู้สนับสนุน' : 'เพิ่มผู้สนับสนุน'}
                                </h2>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                                    <HiX className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {/* Logo Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        โลโก้ {!editingSponsor && <span className="text-red-500">*</span>}
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-amber-500 transition-colors">
                                        {previewImage ? (
                                            <div className="relative">
                                                <img
                                                    src={previewImage}
                                                    alt="Preview"
                                                    className="max-h-48 mx-auto"
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
                                                <p className="mt-2 text-sm text-gray-600">คลิกเพื่อเลือกโลโก้</p>
                                                <p className="text-xs text-gray-500">PNG, JPG, SVG (สูงสุด 5MB)</p>
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

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        ชื่อผู้สนับสนุน <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        placeholder="เช่น Netflix, Disney+"
                                    />
                                </div>

                                {/* Website */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        เว็บไซต์
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        placeholder="https://example.com"
                                    />
                                </div>

                                {/* Tier & Order */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ระดับ
                                        </label>
                                        <select
                                            value={formData.tier}
                                            onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        >
                                            {tiers.filter(t => t.value).map(tier => (
                                                <option key={tier.value} value={tier.value}>{tier.label}</option>
                                            ))}
                                        </select>
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
                                        placeholder="คำอธิบายเกี่ยวกับผู้สนับสนุน"
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
                                        <span>{editingSponsor ? 'บันทึก' : 'เพิ่ม'}</span>
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

export default AdminSponsors;
