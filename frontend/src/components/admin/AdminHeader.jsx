import React from 'react';
import { HiSearch, HiBell, HiUser, HiChevronDown, HiLogout, HiCog } from 'react-icons/hi';

const AdminHeader = () => {
  const onLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    window.location.href = '/login';
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-200 h-16 flex items-center justify-between px-6 font-prompt shadow-sm sticky top-0 z-20">
      {/* Brand + Search */}
      <div className="flex items-center gap-4 flex-1">
        <div className="hidden md:flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-sm font-semibold text-gray-700">SIAMESE FILMART</span>
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-amber-600 transition-colors">
              <HiSearch className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="ค้นหา..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-white font-prompt transition-all duration-200 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <button className="relative p-2.5 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all duration-200 group">
          <HiBell className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <details className="group">
            <summary className="list-none">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-md">
                  <HiUser className="h-4 w-4 text-white" />
                </div>
                <span className="hidden md:inline text-sm font-medium text-gray-700">ผู้ดูแล</span>
                <HiChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180 duration-200" />
              </div>
            </summary>
            <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-20 animate-fadeIn">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 font-prompt text-gray-700 hover:text-amber-600 transition-colors">
                <HiCog className="h-4 w-4" /> ตั้งค่าโปรไฟล์
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-red-50 text-red-600 font-prompt transition-colors">
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
