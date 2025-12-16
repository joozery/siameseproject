import React from 'react';
import { 
  HiUsers, 
  HiDocumentText, 
  HiChartBar, 
  HiCalendar,
  HiChartPie,
  HiClock,
  HiEye,
  HiDownload,
  HiTrendingUp,
  HiArrowRight,
  HiCheckCircle
} from 'react-icons/hi';

const AdminDashboard = () => {
  const metricCards = [
    {
      title: 'ผู้ลงทะเบียน',
      value: '1,247',
      subtitle: 'เพิ่มขึ้นจากเดือนที่แล้ว',
      change: '+12%',
      icon: HiUsers,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      title: 'ผลงานที่ส่ง',
      value: '89',
      subtitle: 'งานวิจัยและสร้างสรรค์',
      change: '+8%',
      icon: HiDocumentText,
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100',
      iconBg: 'bg-emerald-500',
      textColor: 'text-emerald-600'
    },
    {
      title: 'อัตราการเข้าร่วม',
      value: '94.2%',
      subtitle: 'สูงกว่าเป้าหมาย',
      change: '+2.1%',
      icon: HiChartBar,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      title: 'กิจกรรมทั้งหมด',
      value: '24',
      subtitle: 'กิจกรรมในงาน Symposium',
      status: 'ตามแผน',
      icon: HiCalendar,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      iconBg: 'bg-orange-500',
      textColor: 'text-orange-600'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'ผู้ใช้ใหม่ลงทะเบียน', user: 'สมชาย ใจดี', time: '5 นาทีที่แล้ว', type: 'user' },
    { id: 2, action: 'ส่งผลงานใหม่', user: 'สมหญิง รักงาน', time: '15 นาทีที่แล้ว', type: 'work' },
    { id: 3, action: 'อัปเดตข้อมูลกิจกรรม', user: 'ผู้ดูแลระบบ', time: '1 ชั่วโมงที่แล้ว', type: 'update' },
    { id: 4, action: 'เพิ่มผู้บรรยาย', user: 'ผู้ดูแลระบบ', time: '2 ชั่วโมงที่แล้ว', type: 'speaker' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Welcome Banner - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-2xl p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center space-x-2 mb-3">
            <HiCheckCircle className="h-6 w-6 text-amber-200" />
            <span className="text-amber-200 text-sm font-medium" style={{ fontFamily: 'Prompt, sans-serif' }}>ระบบพร้อมใช้งาน</span>
          </div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Prompt, sans-serif' }}>
            ยินดีต้อนรับสู่ SIAMESE FILMART Admin
          </h1>
          <p className="text-amber-100 text-lg mb-8" style={{ fontFamily: 'Prompt, sans-serif' }}>
            จัดการงาน SIAMESE FILMART 2025 อย่างมีประสิทธิภาพ
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group bg-white text-amber-700 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2 hover:-translate-y-0.5">
              <HiChartBar className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span style={{ fontFamily: 'Prompt, sans-serif' }}>ดูรายงานสรุป</span>
              <HiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 border border-white/20">
              <HiDownload className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span style={{ fontFamily: 'Prompt, sans-serif' }}>ส่งออกข้อมูล</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards - Enhanced */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="text-2xl text-white" />
                </div>
                {card.change && (
                  <div className="flex items-center space-x-1 bg-green-50 px-3 py-1 rounded-full">
                    <HiTrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">{card.change}</span>
                  </div>
                )}
                {card.status && (
                  <span className="text-sm font-medium bg-green-50 text-green-600 px-3 py-1 rounded-full">{card.status}</span>
                )}
              </div>
              <div className="mb-2">
                <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Prompt, sans-serif' }}>{card.value}</div>
                <div className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Prompt, sans-serif' }}>{card.title}</div>
              </div>
              <div className="text-xs text-gray-500" style={{ fontFamily: 'Prompt, sans-serif' }}>{card.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Widgets - Enhanced */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Registration Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Prompt, sans-serif' }}>การลงทะเบียนรายเดือน</h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'Prompt, sans-serif' }}>SIAMESE FILMART 2025</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <HiChartBar className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="h-64 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
            <div className="text-center text-gray-500">
              <HiChartBar className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <div className="text-lg font-semibold text-gray-600" style={{ fontFamily: 'Prompt, sans-serif' }}>แผนภูมิจะแสดงที่นี่</div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Prompt, sans-serif' }}>กำลังพัฒนา</div>
            </div>
          </div>
        </div>

        {/* Work Types Proportion */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1" style={{ fontFamily: 'Prompt, sans-serif' }}>สัดส่วนประเภทผลงาน</h3>
              <p className="text-xs text-gray-500" style={{ fontFamily: 'Prompt, sans-serif' }}>SIAMESE FILMART</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <HiChartPie className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="h-64 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
            <div className="text-center text-gray-500">
              <HiChartPie className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <div className="text-lg font-semibold text-gray-600" style={{ fontFamily: 'Prompt, sans-serif' }}>แผนภูมิวงกลม</div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Prompt, sans-serif' }}>กำลังพัฒนา</div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Activities - Enhanced */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Prompt, sans-serif' }}>กิจกรรมล่าสุด</h3>
            <p className="text-sm text-gray-500" style={{ fontFamily: 'Prompt, sans-serif' }}>SIAMESE FILMART 2025</p>
          </div>
          <button className="group text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-amber-50 transition-all" style={{ fontFamily: 'Prompt, sans-serif' }}>
            <span>ดูทั้งหมด</span>
            <HiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-gray-100 hover:border-amber-200 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-110 transition-transform">
                  {activity.user.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-gray-900" style={{ fontFamily: 'Prompt, sans-serif' }}>{activity.action}</div>
                  <div className="text-sm text-gray-500" style={{ fontFamily: 'Prompt, sans-serif' }}>{activity.user}</div>
                </div>
              </div>
              <div className="text-xs text-gray-400" style={{ fontFamily: 'Prompt, sans-serif' }}>{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
