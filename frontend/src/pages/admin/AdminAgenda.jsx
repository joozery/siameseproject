import React, { useState } from 'react';
import { HiCalendar, HiPlus, HiPencil, HiTrash, HiClock, HiLocationMarker, HiUser } from 'react-icons/hi';

const AdminAgenda = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'เปิดงาน SIAMESE FILMART 2024',
      date: '2024-03-15',
      time: '09:00',
      location: 'หอประชุมใหญ่ มหาวิทยาลัย',
      speaker: 'ดร.สมชาย ใจดี',
      status: 'upcoming',
      description: 'พิธีเปิดงาน SIAMESE FILMART 2024 พร้อมการแสดงผลงานสร้างสรรค์'
    },
    {
      id: 2,
      title: 'เสวนา "อนาคตของภาพยนตร์ไทย"',
      date: '2024-03-15',
      time: '14:00',
      location: 'ห้องประชุม A',
      speaker: 'คุณหญิงสมศรี ใจดี',
      status: 'upcoming',
      description: 'เสวนาเกี่ยวกับทิศทางและอนาคตของภาพยนตร์ไทยในยุคดิจิทัล'
    },
    {
      id: 3,
      title: 'Workshop การถ่ายทำภาพยนตร์',
      date: '2024-03-16',
      time: '10:00',
      location: 'สตูดิโอถ่ายทำ',
      speaker: 'คุณชายสมชาย ใจดี',
      status: 'upcoming',
      description: 'เวิร์กช็อปการถ่ายทำภาพยนตร์สำหรับผู้เริ่มต้น'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming': return 'กำลังจะมาถึง';
      case 'ongoing': return 'กำลังดำเนินการ';
      case 'completed': return 'เสร็จสิ้น';
      default: return 'ไม่ระบุ';
    }
  };

  return (
    <div className="space-y-6 font-prompt">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการกำหนดการ</h1>
          <p className="text-gray-600 mt-2">จัดการกำหนดการและกิจกรรมของ SIAMESE FILMART</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <HiPlus className="h-5 w-5" />
          <span>เพิ่มกิจกรรม</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">กิจกรรมทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">{events.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <HiCalendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">กำลังจะมาถึง</p>
              <p className="text-2xl font-bold text-gray-900">
                {events.filter(e => e.status === 'upcoming').length}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <HiClock className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">กำลังดำเนินการ</p>
              <p className="text-2xl font-bold text-gray-900">
                {events.filter(e => e.status === 'ongoing').length}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <HiClock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">เสร็จสิ้น</p>
              <p className="text-2xl font-bold text-gray-900">
                {events.filter(e => e.status === 'completed').length}
              </p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <HiCalendar className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">รายการกิจกรรม</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {events.map((event) => (
            <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                      {getStatusText(event.status)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <HiCalendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString('th-TH')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <HiClock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                                         <div className="flex items-center space-x-2 text-gray-600">
                       <HiLocationMarker className="h-4 w-4" />
                       <span>{event.location}</span>
                     </div>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <HiUser className="h-4 w-4" />
                    <span>ผู้บรรยาย: {event.speaker}</span>
                  </div>

                  <p className="text-gray-600">{event.description}</p>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setEditingEvent(event)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    <HiPencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('คุณต้องการลบกิจกรรมนี้หรือไม่?')) {
                        setEvents(events.filter(e => e.id !== event.id));
                      }
                    }}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  >
                    <HiTrash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {editingEvent ? 'แก้ไขกิจกรรม' : 'เพิ่มกิจกรรมใหม่'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อกิจกรรม</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="ชื่อกิจกรรม"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วันที่</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">เวลา</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">สถานที่</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="สถานที่จัดงาน"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ผู้บรรยาย</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="ชื่อผู้บรรยาย"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">รายละเอียด</label>
                <textarea
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="รายละเอียดกิจกรรม"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingEvent(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingEvent(null);
                }}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200"
              >
                {editingEvent ? 'บันทึก' : 'เพิ่มกิจกรรม'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAgenda;
