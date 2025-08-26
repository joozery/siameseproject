import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HiHome, 
  HiCalendar, 
  HiMicrophone, 
  HiLightningBolt, 
  HiEye, 
  HiUsers, 
  HiChartBar, 
  HiVideoCamera, 
  HiBookOpen,
  HiTicket,
  HiChevronLeft,
  HiChevronRight
} from 'react-icons/hi';

const AdminSidebar = ({ collapsed = false, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      id: 'dashboard',
      title: 'หน้าหลัก',
      description: 'ภาพรวมและสถิติ',
      path: '/admin',
      icon: HiHome
    },
    {
      id: 'agenda',
      title: 'กำหนดการ',
      description: 'จัดการกำหนดการ SIAMESE FILMART',
      path: '/admin/agenda',
      icon: HiCalendar
    },
    {
      id: 'speakers',
      title: 'ผู้บรรยาย',
      description: 'จัดการข้อมูลผู้บรรยาย',
      path: '/admin/speakers',
      icon: HiMicrophone
    },
    {
      id: 'creative-works',
      title: 'ผลงานสร้างสรรค์',
      description: 'จัดการผลงานสร้างสรรค์ SIAMESE FILMART',
      path: '/admin/creative-works',
      icon: HiLightningBolt
    },
    {
      id: 'exhibition',
      title: 'นิทรรศการ',
      description: 'จัดการ Live Exhibition และพื้นที่สาธิต',
      path: '/admin/exhibition',
      icon: HiEye
    },
    {
      id: 'participants',
      title: 'ผู้เข้าร่วม',
      description: 'เช็ครายชื่อผู้เข้าร่วมงาน',
      path: '/admin/participants',
      icon: HiUsers
    },
    {
      id: 'analytics',
      title: 'สถิติเว็บไซต์',
      description: 'สถิติการเข้าชมเว็บ SIAMESE FILMART',
      path: '/admin/analytics',
      icon: HiChartBar
    },
    {
      id: 'multimedia',
      title: 'สื่อมัลติมีเดีย',
      description: 'จัดการวิดีโอและภาพถ่าย',
      path: '/admin/multimedia',
      icon: HiVideoCamera
    },
    {
      id: 'ebook',
      title: 'E-Book',
      description: 'จัดการผลงาน E-Book SIAMESE FILMART',
      path: '/admin/ebook',
      icon: HiBookOpen
    },
    {
      id: 'eticket',
      title: 'E-Ticket',
      description: 'จัดการตั๋วอิเล็กทรอนิกส์',
      path: '/admin/eticket',
      icon: HiTicket
    }
  ];

  const handleMenuClick = (item) => {
    navigate(item.path);
  };

  const isActivePage = (item) => {
    return location.pathname === item.path;
  };

  return (
    <aside className={`bg-white shadow-lg h-screen flex flex-col font-prompt relative ${
      collapsed ? 'w-20' : 'w-80'
    }`}>
      {/* Toggle Button */}
      <div className="absolute -right-3 top-6 z-10">
        <button
          onClick={onToggle}
          className="w-6 h-6 bg-amber-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-800 transition-colors duration-200"
        >
          {collapsed ? (
            <HiChevronRight className="h-3 w-3" />
          ) : (
            <HiChevronLeft className="h-3 w-3" />
          )}
        </button>
      </div>

      {/* Logo Section */}
      <div className={`border-b flex-shrink-0 ${collapsed ? 'p-4' : 'p-6'}`}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className={`bg-amber-700 rounded-lg flex items-center justify-center ${
            collapsed ? 'w-12 h-12' : 'w-10 h-10'
          }`}>
            <span className="text-white font-bold text-lg">S</span>
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-prompt">SIAMESE FILMART</h1>
              <p className="text-sm text-gray-500 font-prompt">ระบบจัดการข้อมูล</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto sidebar-scrollbar">
        <nav className={`space-y-2 ${collapsed ? 'p-3' : 'p-4'}`}>
          {Array.isArray(menuItems) && menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActivePage(item);
            
            return (
              <button
                key={item.id}
                className={`w-full justify-start h-auto font-prompt transition-all duration-200 ${
                  collapsed 
                    ? 'p-2 h-10 w-10 rounded-lg mx-auto' 
                    : 'p-3 text-sm h-auto'
                } ${
                  isActive 
                    ? "bg-amber-50 text-amber-700 border-amber-200 shadow-md border" 
                    : "hover:bg-gray-50 hover:shadow-sm"
                }`}
                onClick={() => handleMenuClick(item)}
                title={collapsed ? item.title : ''}
              >
                <div className={`flex items-start ${collapsed ? 'justify-center' : 'space-x-3'}`}>
                  <Icon className={`${
                    collapsed ? 'h-5 w-5' : 'h-4 w-4 mt-0.5 flex-shrink-0'
                  } ${
                    isActive ? "text-amber-600" : "text-gray-500"
                  }`} />
                  {!collapsed && (
                    <div className="text-left flex-1 min-w-0">
                      <div className={`font-medium font-prompt ${
                        isActive ? "text-amber-700" : "text-gray-900"
                      }`}>
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-500 font-prompt mt-0.5 leading-tight">
                        {item.description}
                      </div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Admin User Section */}
      <div className={`border-t bg-gray-50 flex-shrink-0 ${collapsed ? 'p-4' : 'p-4'}`}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className={`bg-amber-700 rounded-full flex items-center justify-center ${
            collapsed ? 'w-12 h-12' : 'w-10 h-10'
          }`}>
            <HiUsers className={`${collapsed ? 'h-6 w-6' : 'h-5 w-5'} text-white`} />
          </div>
          {!collapsed && (
            <div>
              <div className="font-medium text-gray-900 font-prompt">ผู้ดูแลระบบ</div>
              <div className="text-sm text-gray-500 font-prompt">SIAMESE FILMART Manager</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
