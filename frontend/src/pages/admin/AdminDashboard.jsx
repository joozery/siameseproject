import React from 'react';
import { 
  HiUsers, 
  HiDocumentText, 
  HiChartBar, 
  HiCalendar,
  HiChartPie,
  HiClock,
  HiEye,
  HiDownload
} from 'react-icons/hi';

const AdminDashboard = () => {
  const metricCards = [
    {
      title: 'ผู้ลงทะเบียน',
      value: '1,247',
      subtitle: 'เพิ่มขึ้นจากเดือนที่แล้ว',
      change: '+12%',
      icon: HiUsers,
      color: 'bg-blue-500',
      textColor: 'text-blue-500'
    },
    {
      title: 'ผลงานที่ส่ง',
      value: '89',
      subtitle: 'งานวิจัยและสร้างสรรค์ SACIT',
      change: '+8%',
      icon: HiDocumentText,
      color: 'bg-green-500',
      textColor: 'text-green-500'
    },
    {
      title: 'อัตราการเข้าร่วม',
      value: '94.2%',
      subtitle: 'สูงกว่าเป้าหมาย',
      change: '+2.1%',
      icon: HiChartBar,
      color: 'bg-purple-500',
      textColor: 'text-purple-500'
    },
    {
      title: 'กิจกรรมทั้งหมด',
      value: '24',
      subtitle: 'กิจกรรมในงาน SACIT Symposium',
      status: 'ตามแผน',
      icon: HiCalendar,
      color: 'bg-orange-500',
      textColor: 'text-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Prompt, sans-serif' }}>ยินดีต้อนรับสู่ SIAMESE FILMART Admin</h1>
          <p className="text-amber-100 text-lg mb-6" style={{ fontFamily: 'Prompt, sans-serif' }}>
            จัดการงาน SIAMESE FILMART 2025 อย่างมีประสิทธิภาพ
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors duration-200 flex items-center space-x-2">
              <HiChartBar className="h-5 w-5" />
              <span style={{ fontFamily: 'Prompt, sans-serif' }}>ดูรายงานสรุป</span>
            </button>
            <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors duration-200 flex items-center space-x-2">
              <HiDownload className="h-5 w-5" />
              <span style={{ fontFamily: 'Prompt, sans-serif' }}>ส่งออกข้อมูล</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                <card.icon className="text-2xl text-white" />
              </div>
              {card.change && (
                <span className={`text-sm font-medium ${card.textColor}`}>{card.change}</span>
              )}
              {card.status && (
                <span className="text-sm font-medium text-green-600">{card.status}</span>
              )}
            </div>
            <div className="mb-2">
              <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Prompt, sans-serif' }}>{card.value}</div>
              <div className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Prompt, sans-serif' }}>{card.title}</div>
            </div>
            <div className="text-xs text-gray-500" style={{ fontFamily: 'Prompt, sans-serif' }}>{card.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Charts and Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Registration Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Prompt, sans-serif' }}>การลงทะเบียนรายเดือน SIAMESE FILMART</h3>
            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
              <HiChartBar className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-lg font-medium" style={{ fontFamily: 'Prompt, sans-serif' }}>แผนภูมิจะแสดงที่นี่</div>
              <div className="text-sm" style={{ fontFamily: 'Prompt, sans-serif' }}>กำลังพัฒนา</div>
            </div>
          </div>
        </div>

        {/* Work Types Proportion */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Prompt, sans-serif' }}>สัดส่วนประเภทผลงาน SIAMESE FILMART</h3>
            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
              <HiChartPie className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-lg font-medium" style={{ fontFamily: 'Prompt, sans-serif' }}>แผนภูมิวงกลมจะแสดงที่นี่</div>
              <div className="text-sm" style={{ fontFamily: 'Prompt, sans-serif' }}>กำลังพัฒนา</div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Activities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Prompt, sans-serif' }}>กิจกรรมล่าสุด SIAMESE FILMART</h3>
          <button className="text-amber-600 hover:text-amber-700 font-medium text-sm" style={{ fontFamily: 'Prompt, sans-serif' }}>
            ดูทั้งหมด
          </button>
        </div>
        <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-lg font-medium" style={{ fontFamily: 'Prompt, sans-serif' }}>ไม่มีกิจกรรมล่าสุด</div>
            <div className="text-sm" style={{ fontFamily: 'Prompt, sans-serif' }}>กิจกรรมจะแสดงที่นี่</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
