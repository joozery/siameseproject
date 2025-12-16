import React, { useState, useEffect } from 'react';
import {
    HiInbox,
    HiSearch,
    HiFilter,
    HiTrash,
    HiEye,
    HiCheckCircle,
    HiX,
    HiMail
} from 'react-icons/hi';
import { toast } from 'sonner';
import { inquiryAPI } from '../../services/api';

const AdminInquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedInquiry, setSelectedInquiry] = useState(null);

    useEffect(() => {
        fetchInquiries();
    }, [filterStatus]);

    const fetchInquiries = async () => {
        try {
            setLoading(true);
            const params = {};

            if (filterStatus !== 'all') params.status = filterStatus;
            if (searchTerm) params.search = searchTerm;

            const response = await inquiryAPI.getAll(params);
            setInquiries(response.data || []);
        } catch (err) {
            console.error('Error fetching inquiries:', err);
            toast.error('ไม่สามารถโหลดข้อมูลได้');
        } finally {
            setLoading(false);
        }
    };

    // Debounce search
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchInquiries();
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    const handleDelete = async (id, e) => {
        e.stopPropagation(); // Prevent row click
        if (!window.confirm('คุณต้องการลบข้อความนี้หรือไม่?')) return;

        try {
            await inquiryAPI.delete(id);
            toast.success('ลบข้อความสำเร็จ');
            fetchInquiries();
            if (selectedInquiry?._id === id) setSelectedInquiry(null);
        } catch (err) {
            console.error('Error deleting:', err);
            toast.error('ลบข้อความล้มเหลว');
        }
    };

    const handleView = async (inquiry) => {
        setSelectedInquiry(inquiry);

        // If status is pending, mark as read
        if (inquiry.status === 'pending') {
            try {
                await inquiryAPI.updateStatus(inquiry._id, 'read');
                // Update local state without refetching all
                setInquiries(prev => prev.map(item =>
                    item._id === inquiry._id ? { ...item, status: 'read' } : item
                ));
            } catch (err) {
                console.error('Error updating status:', err);
            }
        }
    };

    const handleUpdateStatus = async (id, newStatus) => {
        try {
            await inquiryAPI.updateStatus(id, newStatus);
            setInquiries(prev => prev.map(item =>
                item._id === id ? { ...item, status: newStatus } : item
            ));
            if (selectedInquiry?._id === id) {
                setSelectedInquiry(prev => ({ ...prev, status: newStatus }));
            }
            toast.success('อัปเดตสถานะสำเร็จ');
        } catch (err) {
            toast.error('อัปเดตสถานะล้มเหลว');
        }
    };

    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800',
        read: 'bg-blue-100 text-blue-800',
        replied: 'bg-green-100 text-green-800'
    };

    const statusLabels = {
        pending: 'รอตรวจสอบ',
        read: 'อ่านแล้ว',
        replied: 'ตอบกลับแล้ว'
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="space-y-4 font-prompt h-[calc(100vh-100px)] flex flex-col">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">จัดการข้อความติดต่อ (Inquiries)</h1>
                <p className="text-sm text-gray-600 mt-1">ดูและจัดการข้อความจากแบบฟอร์ม General Inquiry</p>
            </div>

            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                    <div className="relative flex-1 max-w-md">
                        <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="ค้นหาตามชื่อ, อีเมล, หัวข้อ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <HiFilter className="text-gray-400 h-5 w-5" />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                        >
                            <option value="all">ทุกสถานะ</option>
                            <option value="pending">รอตรวจสอบ</option>
                            <option value="read">อ่านแล้ว</option>
                            <option value="replied">ตอบกลับแล้ว</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex gap-6 flex-1 overflow-hidden">
                {/* Inbox List */}
                <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <span className="font-semibold text-gray-700">รายการข้อความ ({inquiries.length})</span>
                    </div>

                    <div className="overflow-y-auto flex-1 p-2">
                        {loading ? (
                            <div className="flex justify-center items-center h-32 text-gray-400">Loading...</div>
                        ) : inquiries.length === 0 ? (
                            <div className="text-center py-12 text-gray-500">
                                <HiInbox className="mx-auto h-12 w-12 text-gray-300 mb-2" />
                                ไม่มีข้อความ
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {inquiries.map((inquiry) => (
                                    <div
                                        key={inquiry._id}
                                        onClick={() => handleView(inquiry)}
                                        className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${selectedInquiry?._id === inquiry._id
                                                ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500'
                                                : inquiry.status === 'pending'
                                                    ? 'border-gray-200 bg-white font-medium' // Unread style
                                                    : 'border-gray-100 bg-gray-50 text-gray-600' // Read style
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <div className="flex items-center gap-2">
                                                {inquiry.status === 'pending' && (
                                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                                )}
                                                <h3 className="text-sm font-bold truncate">{inquiry.name}</h3>
                                            </div>
                                            <span className="text-xs text-gray-500 whitespace-nowrap">{formatDate(inquiry.createdAt)}</span>
                                        </div>
                                        <p className={`text-sm truncate mb-2 ${inquiry.status === 'pending' ? 'text-gray-900' : 'text-gray-600'}`}>
                                            {inquiry.title}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className={`px-2 py-0.5 rounded text-xs ${statusColors[inquiry.status]}`}>
                                                {statusLabels[inquiry.status]}
                                            </span>
                                            <button
                                                onClick={(e) => handleDelete(inquiry._id, e)}
                                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                                title="ลบ"
                                            >
                                                <HiTrash className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Detail View */}
                {selectedInquiry ? (
                    <div className="w-[500px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-y-auto flex flex-col">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-start sticky top-0 bg-white z-10">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">{selectedInquiry.title}</h2>
                                <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <HiMail className="h-4 w-4" />
                                        {selectedInquiry.email}
                                    </span>
                                    <span>•</span>
                                    <span>{formatDate(selectedInquiry.createdAt)}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedInquiry(null)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <HiX className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6 flex-1">
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">ผู้ติดต่อ</label>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-lg">
                                        {selectedInquiry.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{selectedInquiry.name}</p>
                                        <p className="text-sm text-gray-500">{selectedInquiry.phone || 'No phone number'}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">ข้อความ</label>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-gray-800 whitespace-pre-wrap leading-relaxed">
                                    {selectedInquiry.message}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">การดำเนินการ</label>
                                <div className="flex gap-3">
                                    {selectedInquiry.status !== 'replied' && (
                                        <button
                                            onClick={() => handleUpdateStatus(selectedInquiry._id, 'replied')}
                                            className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors sm:text-sm"
                                        >
                                            <HiCheckCircle className="h-5 w-5" />
                                            ทำเครื่องหมายว่าตอบแล้ว
                                        </button>
                                    )}
                                    <a
                                        href={`mailto:${selectedInquiry.email}?subject=Re: ${selectedInquiry.title}`}
                                        className="flex-1 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors sm:text-sm text-center decoration-0"
                                    >
                                        <HiMail className="h-5 w-5" />
                                        ตอบกลับทางเมล
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-[500px] bg-gray-50 rounded-lg border border-gray-200 border-dashed flex items-center justify-center text-gray-400">
                        <div className="text-center">
                            <HiInbox className="h-16 w-16 mx-auto mb-2 opacity-20" />
                            <p>เลือกข้อความเพื่อดูรายละเอียด</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminInquiries;
