import React from 'react';
import { HiHome, HiUsers, HiChartBar, HiCalendar, HiLightningBolt, HiEye, HiVideoCamera, HiBookOpen } from 'react-icons/hi';

const AdminDashboard = () => {
  const metricCards = [
    {
      title: 'ผู้เข้าร่วมทั้งหมด',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: HiUsers,
      description: 'จากเดือนที่แล้ว'
    },
    {
      title: 'ผลงานที่ส่งมา',
      value: '567',
      change: '+8%',
      changeType: 'positive',
      icon: HiLightningBolt,
      description: 'เพิ่มขึ้นจากเดือนที่แล้ว'
    },
    {
      title: 'การเข้าชมเว็บไซต์',
      value: '89.2K',
      change: '+23%',
      changeType: 'positive',
      icon: HiChartBar,
      description: 'เพิ่มขึ้นจากเดือนที่แล้ว'
    },
    {
      title: 'กิจกรรมที่จัด',
      value: '15',
      change: '+3',
      changeType: 'positive',
      icon: HiCalendar,
      description: 'กิจกรรมในเดือนนี้'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user',
      message: 'ผู้ใช้ใหม่ลงทะเบียน: สมชาย ใจดี',
      time: '2 นาทีที่แล้ว',
      icon: HiUsers
    },
    {
      id: 2,
      type: 'work',
      message: 'ผลงานใหม่ถูกส่งมา: "นวัตกรรมแห่งอนาคต"',
      time: '15 นาทีที่แล้ว',
      icon: HiLightningBolt
    },
    {
      id: 3,
      type: 'exhibition',
      message: 'นิทรรศการใหม่ถูกสร้าง: "เทคโนโลยีล้ำสมัย"',
      time: '1 ชั่วโมงที่แล้ว',
      icon: HiEye
    },
    {
      id: 4,
      type: 'media',
      message: 'วิดีโอใหม่ถูกอัปโหลด: "การนำเสนอผลงาน"',
      time: '2 ชั่วโมงที่แล้ว',
      icon: HiVideoCamera
    }
  ];

  return (
    <div className="space-y-6 font-prompt">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">ยินดีต้อนรับสู่ SIAMESE FILMART</h1>
            <p className="text-amber-100 text-lg">จัดการข้อมูลและติดตามสถิติของระบบ SIAMESE FILMART</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
              <HiUsers className="h-5 w-5" />
              <span>จัดการผู้ใช้</span>
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
              <HiChartBar className="h-5 w-5" />
              <span>ดูสถิติ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  <p className="text-sm text-gray-500">{card.description}</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  card.changeType === 'positive' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {card.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">กิจกรรมล่าสุด</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                              <div className="p-2 bg-amber-100 rounded-lg">
                <Icon className="h-5 w-5 text-amber-600" />
              </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <HiCalendar className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">จัดการกำหนดการ</h3>
          </div>
          <p className="text-gray-600 mb-4">สร้างและจัดการกำหนดการของ SACIT Symposium</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
            ไปที่กำหนดการ
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <HiUsers className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">จัดการผู้เข้าร่วม</h3>
          </div>
          <p className="text-gray-600 mb-4">ดูรายชื่อและจัดการข้อมูลผู้เข้าร่วมงาน</p>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
            ไปที่ผู้เข้าร่วม
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <HiChartBar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">ดูสถิติ</h3>
          </div>
          <p className="text-gray-600 mb-4">ติดตามสถิติการใช้งานและประสิทธิภาพของระบบ</p>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
            ดูสถิติ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
