import React, { useState } from 'react';
import { HiChartBar, HiUsers, HiEye, HiClock, HiCalendar, HiTrendingUp, HiTrendingDown } from 'react-icons/hi';

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('visitors');

  const statsData = {
    visitors: {
      total: '45,678',
      change: '+12.5%',
      trend: 'up',
      daily: [1200, 1350, 1100, 1400, 1600, 1800, 2000]
    },
    pageViews: {
      total: '89,234',
      change: '+8.3%',
      trend: 'up',
      daily: [2400, 2600, 2200, 2800, 3200, 3600, 4000]
    },
    sessions: {
      total: '23,456',
      change: '+15.2%',
      trend: 'up',
      daily: [600, 700, 550, 750, 850, 950, 1100]
    },
    bounceRate: {
      total: '32.4%',
      change: '-5.1%',
      trend: 'down',
      daily: [35, 33, 34, 31, 30, 29, 28]
    }
  };

  const topPages = [
    { page: '/', views: 15420, change: '+12%' },
    { page: '/festival', views: 12340, change: '+8%' },
    { page: '/market', views: 9870, change: '+15%' },
    { page: '/programs', views: 7650, change: '+5%' },
    { page: '/conference', views: 6540, change: '+10%' }
  ];

  const topReferrers = [
    { source: 'Google', visitors: 23450, change: '+18%' },
    { source: 'Facebook', visitors: 12340, change: '+12%' },
    { source: 'Direct', visitors: 9870, change: '+5%' },
    { source: 'Twitter', visitors: 6540, change: '+8%' },
    { source: 'Instagram', visitors: 4320, change: '+15%' }
  ];

  const getTrendIcon = (trend) => {
    return trend === 'up' ? (
      <HiTrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <HiTrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  const getChangeColor = (trend) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6 font-prompt">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">สถิติเว็บไซต์</h1>
          <p className="text-gray-600 mt-2">ติดตามและวิเคราะห์การใช้งานเว็บไซต์ SIAMESE FILMART</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="7d">7 วันล่าสุด</option>
            <option value="30d">30 วันล่าสุด</option>
            <option value="90d">90 วันล่าสุด</option>
            <option value="1y">1 ปีล่าสุด</option>
          </select>
          
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="visitors">ผู้เข้าชม</option>
            <option value="pageViews">การดูหน้า</option>
            <option value="sessions">เซสชัน</option>
            <option value="bounceRate">อัตราการออก</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ผู้เข้าชมทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">{statsData.visitors.total}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <HiUsers className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {getTrendIcon(statsData.visitors.trend)}
            <span className={`ml-2 text-sm font-medium ${getChangeColor(statsData.visitors.trend)}`}>
              {statsData.visitors.change}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">การดูหน้า</p>
              <p className="text-2xl font-bold text-gray-900">{statsData.pageViews.total}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <HiEye className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {getTrendIcon(statsData.pageViews.trend)}
            <span className={`ml-2 text-sm font-medium ${getChangeColor(statsData.pageViews.trend)}`}>
              {statsData.pageViews.change}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">เซสชัน</p>
              <p className="text-2xl font-bold text-gray-900">{statsData.sessions.total}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <HiClock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {getTrendIcon(statsData.sessions.trend)}
            <span className={`ml-2 text-sm font-medium ${getChangeColor(statsData.sessions.trend)}`}>
              {statsData.sessions.change}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">อัตราการออก</p>
              <p className="text-2xl font-bold text-gray-900">{statsData.bounceRate.total}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <HiChartBar className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {getTrendIcon(statsData.bounceRate.trend)}
            <span className={`ml-2 text-sm font-medium ${getChangeColor(statsData.bounceRate.trend)}`}>
              {statsData.bounceRate.change}
            </span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">แนวโน้ม {timeRange === '7d' ? '7 วันล่าสุด' : '30 วันล่าสุด'}</h3>
            <div className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center">
              <HiChartBar className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-lg font-medium">แผนภูมิแนวโน้ม</div>
              <div className="text-sm">กำลังพัฒนา</div>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">แหล่งที่มาของผู้เข้าชม</h3>
            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
              <HiUsers className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-lg font-medium">แผนภูมิวงกลม</div>
              <div className="text-sm">กำลังพัฒนา</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Pages & Referrers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">หน้าเว็บที่ได้รับความนิยม</h3>
          <div className="space-y-3">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{page.page}</div>
                    <div className="text-xs text-gray-500">{page.views.toLocaleString()} ครั้ง</div>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-600">{page.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Referrers */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">แหล่งที่มาของผู้เข้าชม</h3>
          <div className="space-y-3">
            {topReferrers.map((referrer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{referrer.source}</div>
                    <div className="text-xs text-gray-500">{referrer.visitors.toLocaleString()} คน</div>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-600">{referrer.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">สถิติแบบ Real-time</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600">Live</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">23</div>
            <div className="text-sm text-gray-600">ผู้เข้าชมออนไลน์</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">156</div>
            <div className="text-sm text-gray-600">การดูหน้าวันนี้</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">เซสชันใหม่</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
