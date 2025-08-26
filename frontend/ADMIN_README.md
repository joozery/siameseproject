# SACIT Admin System

ระบบหลังบ้านสำหรับจัดการงาน SACIT Symposium 2025

## 🏗️ โครงสร้างไฟล์

```
frontend/src/
├── components/admin/
│   ├── AdminLayout.jsx      # Layout หลักของ Admin (แบบใหม่)
│   ├── AdminSidebar.jsx     # Sidebar เมนูนำทาง (แบบใหม่)
│   ├── AdminHeader.jsx      # Header พร้อมช่องค้นหา (แบบใหม่)
│   └── AdminBreadcrumb.jsx  # Breadcrumb นำทาง (ใหม่)
├── pages/admin/
│   └── AdminDashboard.jsx   # หน้า Dashboard หลัก (แบบใหม่)
├── styles/
│   ├── fonts.css           # ฟอนต์ Prompt และ Typography
│   └── frontend.css        # ฟอนต์ Metamorphous และ Typography สำหรับ Frontend
├── App.jsx                  # Routes สำหรับ Admin
└── main.jsx                 # Import ฟอนต์
```

## 🚀 การใช้งาน

### 1. เข้าสู่ระบบ Admin
- ไปที่ URL: `/admin`
- ระบบจะแสดง Admin Dashboard

### 2. เมนูนำทาง (Sidebar)
- **หน้าหลัก**: ภาพรวมและสถิติ
- **กำหนดการ**: จัดการกำหนดการ SIAMESE FILMART
- **ผู้บรรยาย**: จัดการข้อมูลผู้บรรยาย
- **ผลงานสร้างสรรค์**: จัดการผลงานสร้างสรรค์ SIAMESE FILMART
- **นิทรรศการ**: จัดการ Live Exhibition และพื้นที่สาธิต
- **ผู้เข้าร่วม**: เช็ครายชื่อผู้เข้าร่วมงาน
- **สถิติเว็บไซต์**: สถิติการเข้าชมเว็บ SIAMESE FILMART
- **สื่อมัลติมีเดีย**: จัดการวิดีโอและภาพถ่าย
- **E-Book**: จัดการผลงาน E-Book SIAMESE FILMART

### 3. ฟีเจอร์หลัก
- **Welcome Banner**: แบนเนอร์ต้อนรับพร้อมปุ่มดำเนินการ
- **Key Metrics**: การ์ดแสดงสถิติสำคัญ 4 รายการ
- **Charts**: แผนภูมิการลงทะเบียนรายเดือนและสัดส่วนประเภทผลงาน
- **Latest Activities**: กิจกรรมล่าสุด

## 🎨 การออกแบบ

### สีหลัก
- **Amber/Brown**: #B45309 (สีหลักของ Admin)
- **Blue**: #3B82F6 (สถิติผู้ลงทะเบียน)
- **Green**: #10B981 (สถิติผลงาน)
- **Orange**: #F59E0B (สถิติกิจกรรม)

### ฟอนต์
- **Frontend (หน้าบ้าน)**: Metamorphous (สำหรับหน้า Festival, Market และส่วนอื่นๆ)
- **Admin (หลังบ้าน)**: Prompt (สำหรับระบบ Admin ทั้งหมด)
- **น้ำหนัก Prompt**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **ภาษา**: รองรับภาษาไทยและภาษาอังกฤษ

### Responsive Design
- **Desktop**: แสดงเมนูเต็มรูปแบบ
- **Tablet**: ปรับขนาดเมนู
- **Mobile**: ซ่อนเมนูและแสดงเป็น hamburger menu

## 🔧 การพัฒนาเพิ่มเติม

### เพิ่มหน้าใหม่
1. สร้างไฟล์ใน `pages/admin/`
2. เพิ่ม Route ใน `App.jsx`
3. เพิ่มเมนูใน `AdminSidebar.jsx`

### เพิ่ม Component ใหม่
1. สร้างไฟล์ใน `components/admin/`
2. Import และใช้งานในหน้าที่ต้องการ

### การเชื่อมต่อ API
- ใช้ React Query หรือ SWR สำหรับ data fetching
- สร้าง custom hooks สำหรับ API calls
- จัดการ state ด้วย React Context หรือ Redux

## 📱 การทดสอบ

### เริ่มต้น Development Server
```bash
cd frontend
npm run dev
```

### เข้าสู่ Admin
- เปิดเบราว์เซอร์ไปที่ `http://localhost:5173/admin`

## 🚀 การ Deploy

### Build Production
```bash
cd frontend
npm run build
```

### Deploy
- อัปโหลดไฟล์จาก `dist/` ไปยัง web server
- ตั้งค่า routing ให้ `/admin/*` ไปยัง index.html

## 📋 TODO

- [ ] เพิ่มระบบ Authentication/Authorization
- [ ] เชื่อมต่อกับ Backend API
- [ ] เพิ่มหน้า CRUD สำหรับแต่ละเมนู
- [ ] เพิ่มระบบ Upload ไฟล์
- [ ] เพิ่มระบบ Export ข้อมูล
- [ ] เพิ่มระบบ Notification
- [ ] เพิ่ม Dark Mode
- [ ] เพิ่มระบบ Multi-language

## 🤝 การสนับสนุน

หากมีปัญหาหรือต้องการความช่วยเหลือ กรุณาติดต่อทีมพัฒนา
