import React from 'react';
import { HiSearch, HiBell, HiUser, HiChevronDown, HiLogout, HiCog } from 'react-icons/hi';

const AdminHeader = () => {
  const onLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    window.location.href = '/login';
  };

  return (
    <header className="bg-white/80 backdrop-blur border-b h-16 flex items-center justify-between px-6 font-prompt">
      {/* Brand + Search */}
      <div className="flex items-center gap-4 flex-1">
        <div className="hidden md:flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-sm text-gray-600">SIAMESE FILMART</span>
        </div>
        
        <div className="flex-1 max-w-md">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <HiSearch className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="ค้นหา..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent font-prompt transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <HiBell className="h-5 w-5" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <details className="group">
            <summary className="list-none">
              <div className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center">
                  <HiUser className="h-4 w-4 text-white" />
                </div>
                <span className="hidden md:inline text-sm text-gray-700 font-prompt">ผู้ดูแล</span>
                <HiChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
              </div>
            </summary>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-20">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 font-prompt">
                <HiCog className="h-4 w-4 text-gray-500" /> ตั้งค่าโปรไฟล์
              </button>
              <button onClick={onLogout} className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-red-600 font-prompt">
                <HiLogout className="h-4 w-4" /> ออกจากระบบ
              </button>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
