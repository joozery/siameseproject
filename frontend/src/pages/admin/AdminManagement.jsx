import React, { useState, useEffect } from 'react';
import {
    HiUsers,
    HiPlus,
    HiPencil,
    HiTrash,
    HiMail,
    HiShieldCheck,
    HiSearch,
    HiFilter,
    HiDotsVertical
} from 'react-icons/hi';
import { toast } from 'sonner';
import { adminAPI } from '../../services/api';

const AdminManagement = () => {
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Admin',
        status: 'active'
    });

    // Fetch admins on component mount
    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            setLoading(true);
            const response = await adminAPI.getAll();
            setAdmins(response.data || []);
            setError(null);
        } catch (err) {
            console.error('Error fetching admins:', err);
            setError('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateAdmin = async () => {
        try {
            await adminAPI.create(formData);
            await fetchAdmins();
            setShowAddModal(false);
            resetForm();
            toast.success('เพิ่มผู้ดูแลสำเร็จ');
        } catch (err) {
            console.error('Error creating admin:', err);
            toast.error('ไม่สามารถเพิ่มผู้ดูแลได้: ' + (err.message || 'เกิดข้อผิดพลาด'));
        }
    };

    const handleUpdateAdmin = async () => {
        try {
            const updateData = { ...formData };
            delete updateData.password;

            await adminAPI.update(editingAdmin._id, updateData);
            await fetchAdmins();
            setEditingAdmin(null);
            setShowAddModal(false);
            resetForm();
            toast.success('อัปเดตข้อมูลสำเร็จ');
        } catch (err) {
            console.error('Error updating admin:', err);
            toast.error('ไม่สามารถอัปเดตข้อมูลได้: ' + (err.message || 'เกิดข้อผิดพลาด'));
        }
    };

    const handleDeleteAdmin = async (id) => {
        if (!window.confirm('คุณต้องการลบผู้ดูแลนี้หรือไม่?')) return;

        try {
            await adminAPI.delete(id);
            await fetchAdmins();
            toast.success('ลบผู้ดูแลสำเร็จ');
        } catch (err) {
            console.error('Error deleting admin:', err);
            toast.error('ไม่สามารถลบผู้ดูแลได้: ' + (err.message || 'เกิดข้อผิดพลาด'));
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            role: 'Admin',
            status: 'active'
        });
    };

    const openEditModal = (admin) => {
        setEditingAdmin(admin);
        setFormData({
            name: admin.name,
            email: admin.email,
            role: admin.role,
            status: admin.status
        });
        setShowAddModal(true);
    };

    const handleSubmit = () => {
        if (editingAdmin) {
            handleUpdateAdmin();
        } else {
            handleCreateAdmin();
        }
    };

    const getRoleColor = (role) => {
        switch (role) {
            case 'Super Admin': return 'bg-purple-100 text-purple-800';
            case 'Admin': return 'bg-blue-100 text-blue-800';
            case 'Editor': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusColor = (status) => {
        return status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800';
    };

    const getStatusText = (status) => {
        return status === 'active' ? 'ใช้งาน' : 'ไม่ใช้งาน';
    };

    const filteredAdmins = admins.filter(admin =>
        admin.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-gray-600">กำลังโหลดข้อมูล...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <div className="text-red-600 mb-4">{error}</div>
                <button
                    onClick={fetchAdmins}
                    className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
                >
                    ลองใหม่อีกครั้ง
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-4 font-prompt">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">จัดการผู้ดูแลระบบ</h1>
                    <p className="text-sm text-gray-600 mt-1">จัดการบัญชีผู้ดูแลระบบ SIAMESE FILMART</p>
                </div>
                <button
                    onClick={() => {
                        resetForm();
                        setEditingAdmin(null);
                        setShowAddModal(true);
                    }}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 text-sm"
                >
                    <HiPlus className="h-4 w-4" />
                    <span>เพิ่มผู้ดูแล</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">ผู้ดูแลทั้งหมด</p>
                            <p className="text-xl font-bold text-gray-900">{admins.length}</p>
                        </div>
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <HiUsers className="h-5 w-5 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">ใช้งานอยู่</p>
                            <p className="text-xl font-bold text-gray-900">
                                {admins.filter(a => a.status === 'active').length}
                            </p>
                        </div>
                        <div className="p-2 bg-green-100 rounded-lg">
                            <HiShieldCheck className="h-5 w-5 text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">Super Admin</p>
                            <p className="text-xl font-bold text-gray-900">
                                {admins.filter(a => a.role === 'Super Admin').length}
                            </p>
                        </div>
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <HiShieldCheck className="h-5 w-5 text-purple-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">ไม่ใช้งาน</p>
                            <p className="text-xl font-bold text-gray-900">
                                {admins.filter(a => a.status === 'inactive').length}
                            </p>
                        </div>
                        <div className="p-2 bg-gray-100 rounded-lg">
                            <HiUsers className="h-5 w-5 text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 relative">
                        <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="ค้นหาชื่อหรืออีเมล..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                        />
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <HiFilter className="h-4 w-4" />
                        <span>ตัวกรอง</span>
                    </button>
                </div>
            </div>

            {/* Admins Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">ชื่อ-นามสกุล</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">อีเมล</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">บทบาท</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">สถานะ</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">เข้าสู่ระบบล่าสุด</th>
                                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredAdmins.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                                        ไม่พบข้อมูลผู้ดูแล
                                    </td>
                                </tr>
                            ) : (
                                filteredAdmins.map((admin) => (
                                    <tr key={admin._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                                                    {admin.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900 text-sm">{admin.name}</div>
                                                    <div className="text-xs text-gray-500">ID: {admin._id.slice(-6)}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                <HiMail className="h-4 w-4" />
                                                <span>{admin.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`px - 2 py - 1 rounded - full text - xs font - medium ${getRoleColor(admin.role)} `}>
                                                {admin.role}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`px - 2 py - 1 rounded - full text - xs font - medium ${getStatusColor(admin.status)} `}>
                                                {getStatusText(admin.status)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600">
                                            {admin.lastLogin ? new Date(admin.lastLogin).toLocaleString('th-TH') : '-'}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button
                                                    onClick={() => openEditModal(admin)}
                                                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    title="แก้ไข"
                                                >
                                                    <HiPencil className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteAdmin(admin._id)}
                                                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="ลบ"
                                                >
                                                    <HiTrash className="h-4 w-4" />
                                                </button>
                                                <button
                                                    className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                                                    title="เพิ่มเติม"
                                                >
                                                    <HiDotsVertical className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            {editingAdmin ? 'แก้ไขผู้ดูแล' : 'เพิ่มผู้ดูแลใหม่'}
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อ-นามสกุล</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                    placeholder="ชื่อ-นามสกุล"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">อีเมล</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                    placeholder="email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">บทบาท</label>
                                <select
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                >
                                    <option value="Super Admin">Super Admin</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Editor">Editor</option>
                                </select>
                            </div>

                            {!editingAdmin && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">รหัสผ่าน</label>
                                    <input
                                        type="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                        placeholder="รหัสผ่าน"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">สถานะ</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                >
                                    <option value="active">ใช้งาน</option>
                                    <option value="inactive">ไม่ใช้งาน</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-end space-x-3 mt-6">
                            <button
                                onClick={() => {
                                    setShowAddModal(false);
                                    setEditingAdmin(null);
                                    resetForm();
                                }}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                            >
                                ยกเลิก
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors text-sm"
                            >
                                {editingAdmin ? 'บันทึก' : 'เพิ่มผู้ดูแล'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminManagement;
