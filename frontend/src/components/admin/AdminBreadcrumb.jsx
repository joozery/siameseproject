import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiChevronRight, HiHome } from 'react-icons/hi';

const AdminBreadcrumb = ({ className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getBreadcrumbItems = (pathname) => {
    const pathMap = {
      '/admin': ['หน้าหลัก'],
      '/admin/agenda': ['หน้าหลัก', 'กำหนดการ'],
      '/admin/speakers': ['หน้าหลัก', 'ผู้บรรยาย'],
      '/admin/creative-works': ['หน้าหลัก', 'ผลงานสร้างสรรค์'],
      '/admin/exhibition': ['หน้าหลัก', 'นิทรรศการ'],
      '/admin/participants': ['หน้าหลัก', 'ผู้เข้าร่วม'],
      '/admin/analytics': ['หน้าหลัก', 'สถิติเว็บไซต์'],
      '/admin/multimedia': ['หน้าหลัก', 'สื่อมัลติมีเดีย'],
      '/admin/ebook': ['หน้าหลัก', 'E-Book']
    };
    
    return pathMap[pathname] || ['หน้าหลัก'];
  };
  
  const breadcrumbItems = getBreadcrumbItems(location.pathname);
  
  const handleBreadcrumbClick = (index) => {
    if (index === 0) {
      // Click on first item (home) - navigate to dashboard
      navigate('/admin');
    } else {
      // For other items, we could implement navigation logic
      // For now, just log the click
      console.log(`Clicked on breadcrumb item: ${breadcrumbItems[index]}`);
    }
  };

  return (
    <nav className={`flex items-center space-x-2 text-sm font-medium text-gray-600 font-prompt ${className}`}>
      {/* Home Icon */}
      <button
        onClick={() => handleBreadcrumbClick(0)}
        className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors duration-200"
        title="หน้าหลัก"
      >
        <HiHome className="w-4 h-4" />
      </button>
      
      {/* Breadcrumb Items */}
      {Array.isArray(breadcrumbItems) && breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          <div>
            <HiChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          
          <button
            onClick={() => handleBreadcrumbClick(index)}
            className={`px-3 py-1 rounded-md transition-all duration-200 ${
              index === breadcrumbItems.length - 1
                ? 'bg-amber-100 text-amber-700 font-semibold'
                : 'text-gray-600 hover:text-amber-600 hover:bg-gray-50'
            }`}
            disabled={index === breadcrumbItems.length - 1}
          >
            {item}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default AdminBreadcrumb;
