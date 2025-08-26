import React, { useState } from 'react';
import { HiVideoCamera, HiPhotograph, HiPlus, HiPencil, HiTrash, HiEye, HiDownload, HiPlay } from 'react-icons/hi';

const AdminMultimedia = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'เปิดงาน SIAMESE FILMART 2024',
      description: 'วิดีโอพิธีเปิดงาน SIAMESE FILMART 2024',
      thumbnail: 'https://via.placeholder.com/300x200',
      duration: '05:32',
      views: 1234,
      uploadDate: '2024-03-15',
      status: 'published'
    },
    {
      id: 2,
      title: 'Behind the Scenes - การถ่ายทำ',
      description: 'เบื้องหลังการถ่ายทำภาพยนตร์สั้น',
      thumbnail: 'https://via.placeholder.com/300x200',
      duration: '08:15',
      views: 856,
      uploadDate: '2024-03-14',
      status: 'published'
    },
    {
      id: 3,
      title: 'สัมภาษณ์ผู้กำกับภาพยนตร์',
      description: 'สัมภาษณ์ผู้กำกับภาพยนตร์ที่ได้รับรางวัล',
      thumbnail: 'https://via.placeholder.com/300x200',
      duration: '12:45',
      views: 2341,
      uploadDate: '2024-03-13',
      status: 'draft'
    }
  ];

  const photos = [
    {
      id: 1,
      title: 'พิธีเปิดงาน',
      description: 'ภาพพิธีเปิดงาน SIAMESE FILMART 2024',
      image: 'https://via.placeholder.com/300x200',
      size: '2.4 MB',
      dimensions: '1920x1080',
      uploadDate: '2024-03-15',
      status: 'published'
    },
    {
      id: 2,
      title: 'นิทรรศการผลงาน',
      description: 'ภาพนิทรรศการผลงานสร้างสรรค์',
      image: 'https://via.placeholder.com/300x200',
      size: '1.8 MB',
      dimensions: '1920x1080',
      uploadDate: '2024-03-14',
      status: 'published'
    },
    {
      id: 3,
      title: 'เวิร์กช็อปการถ่ายทำ',
      description: 'ภาพกิจกรรมเวิร์กช็อปการถ่ายทำภาพยนตร์',
      image: 'https://via.placeholder.com/300x200',
      size: '3.2 MB',
      dimensions: '1920x1080',
      uploadDate: '2024-03-13',
      status: 'draft'
    }
  ];

  const getStatusColor = (status) => {
    return status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getStatusText = (status) => {
    return status === 'published' ? 'เผยแพร่แล้ว' : 'ฉบับร่าง';
  };

  return (
    <div className="space-y-6 font-prompt">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการสื่อมัลติมีเดีย</h1>
          <p className="text-gray-600 mt-2">จัดการวิดีโอและภาพถ่ายของ SIAMESE FILMART</p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <HiPlus className="h-5 w-5" />
          <span>อัปโหลดไฟล์</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">วิดีโอทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">{videos.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <HiVideoCamera className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ภาพถ่ายทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">{photos.length}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <HiPhotograph className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">เผยแพร่แล้ว</p>
              <p className="text-2xl font-bold text-gray-900">
                {videos.filter(v => v.status === 'published').length + photos.filter(p => p.status === 'published').length}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <HiEye className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ฉบับร่าง</p>
              <p className="text-2xl font-bold text-gray-900">
                {videos.filter(v => v.status === 'draft').length + photos.filter(p => p.status === 'draft').length}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <HiPencil className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('videos')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'videos'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <HiVideoCamera className="h-5 w-5" />
                <span>วิดีโอ ({videos.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'photos'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <HiPhotograph className="h-5 w-5" />
                <span>ภาพถ่าย ({photos.length})</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <button className="bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-all duration-200">
                        <HiPlay className="h-6 w-6 text-gray-800" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                        {getStatusText(video.status)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>ดู {video.views.toLocaleString()} ครั้ง</span>
                      <span>{video.uploadDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-3 rounded-lg text-sm transition-colors duration-200">
                        แก้ไข
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

          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div key={photo.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="relative">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                      {photo.dimensions}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{photo.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(photo.status)}`}>
                        {getStatusText(photo.status)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{photo.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{photo.size}</span>
                      <span>{photo.uploadDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-3 rounded-lg text-sm transition-colors duration-200">
                        แก้ไข
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
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">อัปโหลดไฟล์ใหม่</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ประเภทไฟล์</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="video">วิดีโอ</option>
                  <option value="photo">ภาพถ่าย</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อไฟล์</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="ชื่อไฟล์"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">คำอธิบาย</label>
                <textarea
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="คำอธิบายไฟล์"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">เลือกไฟล์</label>
                <input
                  type="file"
                  accept="video/*,image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">สถานะ</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="published">เผยแพร่</option>
                  <option value="draft">ฉบับร่าง</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200"
              >
                อัปโหลด
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMultimedia;
