import React, { useState } from 'react';
import { HiTicket, HiPlus, HiPencil, HiTrash, HiEye, HiDownload, HiUser, HiCalendar, HiClock, HiTrendingUp } from 'react-icons/hi';

const AdminETicket = () => {
  const [activeTab, setActiveTab] = useState('tickets');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);

  const tickets = [
    {
      id: 'T001',
      eventName: 'SIAMESE FILMART 2024',
      ticketType: 'VIP',
      price: 2500,
      quantity: 100,
      sold: 78,
      status: 'active',
      validFrom: '2024-03-15',
      validTo: '2024-03-20',
      description: 'ตั๋ว VIP สำหรับงาน SIAMESE FILMART 2024 พร้อมสิทธิพิเศษ'
    },
    {
      id: 'T002',
      eventName: 'SIAMESE FILMART 2024',
      ticketType: 'General',
      price: 1500,
      quantity: 500,
      sold: 423,
      status: 'active',
      validFrom: '2024-03-15',
      validTo: '2024-03-20',
      description: 'ตั๋วทั่วไปสำหรับงาน SIAMESE FILMART 2024'
    },
    {
      id: 'T003',
      eventName: 'SIAMESE FILMART 2024',
      ticketType: 'Student',
      price: 800,
      quantity: 200,
      sold: 156,
      status: 'active',
      validFrom: '2024-03-15',
      validTo: '2024-03-20',
      description: 'ตั๋วสำหรับนักเรียน/นักศึกษา (ต้องแสดงบัตรนักเรียน)'
    }
  ];

  const ticketSales = [
    {
      id: 'TS001',
      ticketId: 'T001',
      customerName: 'สมชาย ใจดี',
      email: 'somchai@email.com',
      phone: '081-234-5678',
      quantity: 2,
      totalPrice: 5000,
      purchaseDate: '2024-03-10 14:30',
      status: 'confirmed',
      qrCode: 'QR001'
    },
    {
      id: 'TS002',
      ticketId: 'T002',
      customerName: 'สมศรี ใจดี',
      email: 'somsri@email.com',
      phone: '082-345-6789',
      quantity: 1,
      totalPrice: 1500,
      purchaseDate: '2024-03-11 09:15',
      status: 'confirmed',
      qrCode: 'QR002'
    },
    {
      id: 'TS003',
      ticketId: 'T003',
      customerName: 'สมชาย ใจดี',
      email: 'somchai2@email.com',
      phone: '083-456-7890',
      quantity: 3,
      totalPrice: 2400,
      purchaseDate: '2024-03-12 16:45',
      status: 'pending',
      qrCode: 'QR003'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'sold_out': return 'bg-red-100 text-red-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'เปิดขาย';
      case 'inactive': return 'ปิดขาย';
      case 'sold_out': return 'หมดแล้ว';
      case 'confirmed': return 'ยืนยันแล้ว';
      case 'pending': return 'รอยืนยัน';
      default: return 'ไม่ระบุ';
    }
  };

  const getSalesPercentage = (sold, quantity) => {
    return Math.round((sold / quantity) * 100);
  };

  return (
    <div className="space-y-6 font-prompt">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการ E-Ticket</h1>
          <p className="text-gray-600 mt-2">จัดการตั๋วอิเล็กทรอนิกส์สำหรับงาน SIAMESE FILMART</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <HiPlus className="h-5 w-5" />
          <span>สร้างตั๋วใหม่</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ตั๋วทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">{tickets.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <HiTicket className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ยอดขายรวม</p>
              <p className="text-2xl font-bold text-gray-900">
                {tickets.reduce((sum, ticket) => sum + (ticket.sold * ticket.price), 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">บาท</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <HiDownload className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ตั๋วที่ขายแล้ว</p>
              <p className="text-2xl font-bold text-gray-900">
                {tickets.reduce((sum, ticket) => sum + ticket.sold, 0)}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <HiUser className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">อัตราการขาย</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round((tickets.reduce((sum, ticket) => sum + ticket.sold, 0) / tickets.reduce((sum, ticket) => sum + ticket.quantity, 0)) * 100)}%
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <HiTrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tickets'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <HiTicket className="h-5 w-5" />
                <span>ประเภทตั๋ว ({tickets.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('sales')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'sales'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <HiDownload className="h-5 w-5" />
                <span>การขายตั๋ว ({ticketSales.length})</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'tickets' && (
            <div className="space-y-6">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{ticket.ticketType}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(ticket.status)}`}>
                          {getStatusText(ticket.status)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{ticket.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{ticket.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">บาท</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{ticket.quantity}</div>
                          <div className="text-sm text-gray-500">จำนวนทั้งหมด</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{ticket.sold}</div>
                          <div className="text-sm text-gray-500">ขายแล้ว</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{ticket.quantity - ticket.sold}</div>
                          <div className="text-sm text-gray-500">เหลือ</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>อัตราการขาย</span>
                          <span>{getSalesPercentage(ticket.sold, ticket.quantity)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${getSalesPercentage(ticket.sold, ticket.quantity)}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <HiCalendar className="h-4 w-4" />
                          <span>เริ่ม: {ticket.validFrom}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <HiClock className="h-4 w-4" />
                          <span>สิ้นสุด: {ticket.validTo}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                        <HiPencil className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                        <HiTrash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sales' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      รายละเอียด
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      จำนวน
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ราคารวม
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      วันที่ซื้อ
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      สถานะ
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      การดำเนินการ
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ticketSales.map((sale) => (
                    <tr key={sale.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{sale.customerName}</div>
                          <div className="text-sm text-gray-500">{sale.email}</div>
                          <div className="text-sm text-gray-500">{sale.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sale.quantity} ใบ</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{sale.totalPrice.toLocaleString()} บาท</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{sale.purchaseDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sale.status)}`}>
                          {getStatusText(sale.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <HiEye className="h-4 w-4" />
                          </button>
                                                     <button className="text-green-600 hover:text-green-900">
                             <HiEye className="h-4 w-4" />
                           </button>
                          <button className="text-amber-600 hover:text-amber-900">
                            <HiDownload className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Create Ticket Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">สร้างตั๋วใหม่</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ชื่องาน</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="ชื่องาน"
                  defaultValue="SIAMESE FILMART 2024"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ประเภทตั๋ว</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="เช่น VIP, General, Student"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ราคา (บาท)</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="ราคา"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">จำนวนทั้งหมด</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="จำนวน"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">สถานะ</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="active">เปิดขาย</option>
                    <option value="inactive">ปิดขาย</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วันที่เริ่มขาย</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วันที่สิ้นสุด</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">คำอธิบาย</label>
                <textarea
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="คำอธิบายตั๋ว"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200"
              >
                สร้างตั๋ว
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminETicket;
