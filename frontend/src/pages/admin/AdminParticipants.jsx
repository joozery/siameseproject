import React, { useState } from 'react';
import { HiUsers, HiPlus, HiPencil, HiTrash, HiMail, HiPhone, HiAcademicCap, HiCheck, HiX } from 'react-icons/hi';

const AdminParticipants = () => {
  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: 'สมชาย ใจดี',
      email: 'somchai@email.com',
      phone: '081-234-5678',
      organization: 'มหาวิทยาลัยธรรมศาสตร์',
      position: 'นักศึกษา',
      registrationDate: '2024-02-15',
      checkInStatus: 'checked-in',
      checkInTime: '2024-03-15 08:30',
      ticketType: 'student'
    },
    {
      id: 2,
      name: 'สมศรี ใจดี',
      email: 'somsri@email.com',
      phone: '082-345-6789',
      organization: 'บริษัท ภาพยนตร์ไทย จำกัด',
      position: 'ผู้กำกับภาพยนตร์',
      registrationDate: '2024-02-10',
      checkInStatus: 'checked-in',
      checkInTime: '2024-03-15 09:15',
      ticketType: 'professional'
    },
    {
      id: 3,
      name: 'สมชาย ใจดี',
      email: 'somchai2@email.com',
      phone: '083-456-7890',
      organization: 'โรงเรียนมัธยมศึกษา',
      position: 'ครู',
      registrationDate: '2024-02-20',
      checkInStatus: 'not-checked-in',
      checkInTime: null,
      ticketType: 'general'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingParticipant, setEditingParticipant] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const getCheckInStatusColor = (status) => {
    return status === 'checked-in' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getCheckInStatusText = (status) => {
    return status === 'checked-in' ? 'เช็คอินแล้ว' : 'ยังไม่เช็คอิน';
  };

  const getTicketTypeColor = (type) => {
    switch (type) {
      case 'student': return 'bg-blue-100 text-blue-800';
      case 'professional': return 'bg-purple-100 text-purple-800';
      case 'general': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTicketTypeText = (type) => {
    switch (type) {
      case 'student': return 'นักศึกษา';
      case 'professional': return 'มืออาชีพ';
      case 'general': return 'ทั่วไป';
      default: return 'ไม่ระบุ';
    }
  };

  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckIn = (participantId) => {
    setParticipants(participants.map(p => 
      p.id === participantId 
        ? { ...p, checkInStatus: 'checked-in', checkInTime: new Date().toLocaleString('th-TH') }
        : p
    ));
  };

  return (
    <div className="space-y-6 font-prompt">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการผู้เข้าร่วม</h1>
          <p className="text-gray-600 mt-2">จัดการข้อมูลผู้เข้าร่วมงาน SIAMESE FILMART</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <HiPlus className="h-5 w-5" />
          <span>เพิ่มผู้เข้าร่วม</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ผู้เข้าร่วมทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">{participants.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <HiUsers className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">เช็คอินแล้ว</p>
              <p className="text-2xl font-bold text-gray-900">
                {participants.filter(p => p.checkInStatus === 'checked-in').length}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <HiCheck className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ยังไม่เช็คอิน</p>
              <p className="text-2xl font-bold text-gray-900">
                {participants.filter(p => p.checkInStatus === 'not-checked-in').length}
              </p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <HiX className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">อัตราการเข้าร่วม</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round((participants.filter(p => p.checkInStatus === 'checked-in').length / participants.length) * 100)}%
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <HiUsers className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="ค้นหาผู้เข้าร่วม..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200">
            ค้นหา
          </button>
        </div>
      </div>

      {/* Participants Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ผู้เข้าร่วม
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  องค์กร
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ประเภท
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  สถานะเช็คอิน
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  การดำเนินการ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredParticipants.map((participant) => (
                <tr key={participant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{participant.name}</div>
                      <div className="text-sm text-gray-500">{participant.email}</div>
                      <div className="text-sm text-gray-500">{participant.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">{participant.organization}</div>
                      <div className="text-sm text-gray-500">{participant.position}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTicketTypeColor(participant.ticketType)}`}>
                      {getTicketTypeText(participant.ticketType)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCheckInStatusColor(participant.checkInStatus)}`}>
                        {getCheckInStatusText(participant.checkInStatus)}
                      </span>
                      {participant.checkInTime && (
                        <div className="text-xs text-gray-500 mt-1">{participant.checkInTime}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {participant.checkInStatus === 'not-checked-in' && (
                        <button
                          onClick={() => handleCheckIn(participant.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          เช็คอิน
                        </button>
                      )}
                      <button
                        onClick={() => setEditingParticipant(participant)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        แก้ไข
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('คุณต้องการลบผู้เข้าร่วมนี้หรือไม่?')) {
                            setParticipants(participants.filter(p => p.id !== participant.id));
                          }
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        ลบ
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {editingParticipant ? 'แก้ไขผู้เข้าร่วม' : 'เพิ่มผู้เข้าร่วมใหม่'}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">อีเมล</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="อีเมล"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">เบอร์โทร</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="เบอร์โทร"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ประเภท</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="student">นักศึกษา</option>
                    <option value="professional">มืออาชีพ</option>
                    <option value="general">ทั่วไป</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">องค์กร</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="องค์กร"
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
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingParticipant(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingParticipant(null);
                }}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200"
              >
                {editingParticipant ? 'บันทึก' : 'เพิ่มผู้เข้าร่วม'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminParticipants;
