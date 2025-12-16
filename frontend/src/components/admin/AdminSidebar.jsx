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
  HiPhotograph,
  HiStar,
  HiViewGrid,
  HiNewspaper,
  HiChevronLeft,
  HiChevronRight,
  HiInbox
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
      id: 'hero-slides',
      title: 'Hero Slides',
      description: 'จัดการสไลด์หน้าแรก',
      path: '/admin/hero-slides',
      icon: HiViewGrid
    },
    {
      id: 'updates',
      title: 'Latest Updates',
      description: 'จัดการบทความและข่าวสาร',
      path: '/admin/updates',
      icon: HiNewspaper
    },
    {
      id: 'gallery',
      title: 'Gallery',
      description: 'จัดการรูปภาพ',
      path: '/admin/gallery',
      icon: HiPhotograph
    },
    {
      id: 'sponsors',
      title: 'ผู้สนับสนุน',
      description: 'จัดการผู้สนับสนุน',
      path: '/admin/sponsors',
      icon: HiStar
    },
    {
      id: 'inquiries',
      title: 'Inquiries',
      description: 'จัดการข้อความติดต่อ',
      path: '/admin/inquiries',
      icon: HiInbox
    },
    {
      id: 'management',
      title: 'จัดการผู้ดูแล',
      description: 'จัดการบัญชีผู้ดูแลระบบ',
      path: '/admin/management',
      icon: HiUsers
    }
  ];

  const handleMenuClick = (item) => {
    navigate(item.path);
  };

  const isActivePage = (item) => {
    return location.pathname === item.path;
  };

  return (
    <aside className={`bg-gradient-to-b from-white to-gray-50 shadow-xl h-screen flex flex-col font-prompt relative transition-all duration-300 border-r border-gray-200 ${collapsed ? 'w-20' : 'w-80'
      }`}>
      {/* Toggle Button */}
      <div className="absolute -right-3 top-6 z-50">
        <button
          onClick={onToggle}
          className="w-7 h-7 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 ring-2 ring-white"
        >
          {collapsed ? (
            <HiChevronRight className="h-4 w-4" />
          ) : (
            <HiChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Logo Section */}
      <div className={`border-b border-gray-200 flex-shrink-0 bg-white ${collapsed ? 'p-4' : 'p-6'}`}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className={`bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg ${collapsed ? 'w-12 h-12' : 'w-12 h-12'
            }`}>
            <span className="text-white font-bold text-xl">S</span>
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-gray-900 font-prompt">SIAMESE FILMART</h1>
              <p className="text-xs text-gray-500 font-prompt">ระบบจัดการข้อมูล</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto sidebar-scrollbar">
        <nav className={`space-y-1 ${collapsed ? 'p-2' : 'p-3'}`}>
          {Array.isArray(menuItems) && menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActivePage(item);

            return (
              <button
                key={item.id}
                className={`group w-full justify-start font-prompt transition-all duration-200 ${collapsed
                  ? 'p-3 rounded-xl mx-auto flex justify-center'
                  : 'p-3.5 rounded-xl'
                  } ${isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-200"
                    : "hover:bg-white hover:shadow-md text-gray-700"
                  }`}
                onClick={() => handleMenuClick(item)}
                title={collapsed ? item.title : ''}
              >
                <div className={`flex items-start ${collapsed ? 'justify-center' : 'space-x-3'}`}>
                  <Icon className={`${collapsed ? 'h-6 w-6' : 'h-5 w-5 mt-0.5 flex-shrink-0'
                    } ${isActive ? "text-white" : "text-gray-600 group-hover:text-amber-600"
                    } transition-all duration-200 ${!isActive && 'group-hover:scale-110'}`} />
                  {!collapsed && (
                    <div className="text-left flex-1 min-w-0">
                      <div className={`font-semibold font-prompt text-sm ${isActive ? "text-white" : "text-gray-900 group-hover:text-amber-700"
                        }`}>
                        {item.title}
                      </div>
                      <div className={`text-xs font-prompt mt-0.5 leading-tight ${isActive ? "text-amber-100" : "text-gray-500 group-hover:text-amber-600"
                        }`}>
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
      <div className={`border-t border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50 flex-shrink-0 ${collapsed ? 'p-3' : 'p-4'}`}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className={`bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg ${collapsed ? 'w-12 h-12' : 'w-10 h-10'
            }`}>
            <HiUsers className={`${collapsed ? 'h-6 w-6' : 'h-5 w-5'} text-white`} />
          </div>
          {!collapsed && (
            <div>
              <div className="font-semibold text-gray-900 font-prompt text-sm">ผู้ดูแลระบบ</div>
              <div className="text-xs text-gray-600 font-prompt">SIAMESE Manager</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
