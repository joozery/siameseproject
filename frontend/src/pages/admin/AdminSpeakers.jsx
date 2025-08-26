import React, { useState } from 'react';
import { HiMicrophone, HiPlus, HiPencil, HiTrash, HiMail, HiPhone, HiAcademicCap, HiGlobeAlt } from 'react-icons/hi';

const AdminSpeakers = () => {
  const [speakers, setSpeakers] = useState([
    {
      id: 1,
      name: 'ดร.สมชาย ใจดี',
      title: 'ผู้อำนวยการ SIAMESE FILMART',
      email: 'somchai@siamese.com',
      phone: '081-234-5678',
      expertise: 'ภาพยนตร์ไทย, การผลิตภาพยนตร์',
      bio: 'ผู้เชี่ยวชาญด้านภาพยนตร์ไทยที่มีประสบการณ์มากกว่า 20 ปี',
      image: 'https://via.placeholder.com/150',
      status: 'active'
    },
    {
      id: 2,
      name: 'คุณหญิงสมศรี ใจดี',
      title: 'นักวิจารณ์ภาพยนตร์',
      email: 'somsri@filmcritic.com',
      phone: '082-345-6789',
      expertise: 'การวิจารณ์ภาพยนตร์, ประวัติศาสตร์ภาพยนตร์',
      bio: 'นักวิจารณ์ภาพยนตร์ที่มีชื่อเสียงและมีผลงานวิจารณ์มากกว่า 100 เรื่อง',
      image: 'https://via.placeholder.com/150',
      status: 'active'
    },
    {
      id: 3,
      name: 'คุณชายสมชาย ใจดี',
      title: 'ผู้กำกับภาพยนตร์',
      email: 'somchai@director.com',
      phone: '083-456-7890',
      expertise: 'การกำกับภาพยนตร์, การเขียนบท',
      bio: 'ผู้กำกับภาพยนตร์รุ่นใหม่ที่มีผลงานได้รับรางวัลหลายเรื่อง',
      image: 'https://via.placeholder.com/150',
      status: 'active'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingSpeaker, setEditingSpeaker] = useState(null);

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status) => {
    return status === 'active' ? 'ใช้งาน' : 'ไม่ใช้งาน';
  };

  return (
    <div className="space-y-6 font-prompt">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการผู้บรรยาย</h1>
          <p className="text-gray-600 mt-2">จัดการข้อมูลผู้บรรยายและวิทยากรของ SIAMESE FILMART</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <HiPlus className="h-5 w-5" />
          <span>เพิ่มผู้บรรยาย</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ผู้บรรยายทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">{speakers.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <HiMicrophone className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">กำลังใช้งาน</p>
              <p className="text-2xl font-bold text-gray-900">
                {speakers.filter(s => s.status === 'active').length}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <HiMicrophone className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ผู้บรรยายหลัก</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <HiAcademicCap className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ผู้บรรยายพิเศษ</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <HiGlobeAlt className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{speaker.name}</h3>
                    <p className="text-sm text-gray-600">{speaker.title}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(speaker.status)}`}>
                  {getStatusText(speaker.status)}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <HiMail className="h-4 w-4" />
                  <span className="text-sm">{speaker.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <HiPhone className="h-4 w-4" />
                  <span className="text-sm">{speaker.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <HiAcademicCap className="h-4 w-4" />
                  <span className="text-sm">{speaker.expertise}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{speaker.bio}</p>

              <div className="flex items-center justify-end space-x-2">
                <button
                  onClick={() => setEditingSpeaker(speaker)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  <HiPencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('คุณต้องการลบผู้บรรยายนี้หรือไม่?')) {
                      setSpeakers(speakers.filter(s => s.id !== speaker.id));
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

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {editingSpeaker ? 'แก้ไขผู้บรรยาย' : 'เพิ่มผู้บรรยายใหม่'}
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อ-นามสกุล</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="ชื่อ-นามสกุล"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ตำแหน่ง</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="ตำแหน่ง"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">อีเมล</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="อีเมล"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">เบอร์โทร</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="เบอร์โทร"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ความเชี่ยวชาญ</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="ความเชี่ยวชาญ"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ประวัติย่อ</label>
                <textarea
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="ประวัติย่อ"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">รูปภาพ</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingSpeaker(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingSpeaker(null);
                }}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200"
              >
                {editingSpeaker ? 'บันทึก' : 'เพิ่มผู้บรรยาย'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSpeakers;
