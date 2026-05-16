<p align="center">
  <img src="https://img.shields.io/badge/FlexSpace-Co--Working%20%26%20Stay-2563eb?style=for-the-badge&logoColor=white" alt="FlexSpace" />
</p>

<h1 align="center">🏢 FlexSpace — Co-Working & Stay</h1>

<p align="center">
  <strong>ระบบจองพื้นที่ทำงานและที่พักครบวงจร</strong><br/>
  เว็บแอปพลิเคชันสำหรับบริการเช่าพื้นที่ Co-Working Space และห้องพัก<br/>
  รองรับการจองรายวัน รายคืน และรายเดือน
</p>

<p align="center">
  <a href="https://co-working-space-lilac-omega.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Vercel-000?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>

---

## 📋 สารบัญ

- [เกี่ยวกับโปรเจค](#-เกี่ยวกับโปรเจค)
- [ฟีเจอร์หลัก](#-ฟีเจอร์หลัก)
- [Tech Stack](#-tech-stack)
- [โครงสร้างโปรเจค](#-โครงสร้างโปรเจค)
- [การติดตั้งและรันโปรเจค](#-การติดตั้งและรันโปรเจค)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [ผู้พัฒนา](#-ผู้พัฒนา)

---

## 📖 เกี่ยวกับโปรเจค

**FlexSpace** เป็นเว็บแอปพลิเคชันสำหรับให้บริการเช่าพื้นที่ทำงาน (Co-Working Space) และที่พัก โดยออกแบบด้วยแนวคิด **Light Minimal & Professional** เหมาะสำหรับธุรกิจที่ต้องการนำเสนอบริการเช่าพื้นที่อย่างมืออาชีพ

ระบบรองรับการจองพื้นที่ทำงานหลากหลายรูปแบบ ตั้งแต่โต๊ะเดี่ยวสำหรับฟรีแลนซ์ไปจนถึงเช่าทั้งตึกสำหรับเปิดบริษัท พร้อมบริการที่พักสำหรับผู้ที่ต้องการเข้าพักระหว่างทำงาน

---

## ✨ ฟีเจอร์หลัก

### 🖥️ Co-Working Space (พื้นที่ทำงาน)
| ประเภท | รายละเอียด | ราคาเริ่มต้น |
|--------|-----------|-------------|
| **Solo Desk** | โต๊ะเดี่ยว สำหรับฟรีแลนซ์ 1 คน | ฿350/วัน |
| **Group Zone** | โซนกลุ่ม 4-8 คน พร้อมจอ TV | ฿1,200/วัน |
| **Private Office** | ห้องออฟฟิศส่วนตัว 5-15 คน | ฿3,500/วัน |
| **Full Floor** | เช่าทั้งชั้น 30-80 คน | ฿15,000/วัน |
| **Entire Building** | เช่าทั้งตึก เปิดบริษัท 100+ คน | ฿45,000/วัน |

### 🛏️ Stay & Sleep (ที่พัก)
| ประเภท | รายละเอียด | ราคาเริ่มต้น |
|--------|-----------|-------------|
| **Capsule Pod** | แคปซูลนอนส่วนตัว | ฿450/คืน |
| **Single Room** | ห้องเดี่ยวพร้อมห้องน้ำในตัว | ฿890/คืน |
| **Suite Room** | ห้องสวีทพร้อมห้องนั่งเล่น | ฿1,800/คืน |

### 🔧 ฟีเจอร์ระบบ
- ✅ สลับดูราคา **รายวัน / รายเดือน** ได้ทันที
- ✅ ระบบจองพร้อม **ฟอร์มกรอกข้อมูล** ครบถ้วน
- ✅ **สรุปราคา** อัตโนมัติก่อนยืนยันการจอง
- ✅ รองรับการเลือก **จำนวนวัน/เดือน** ที่ต้องการ
- ✅ ดีไซน์ **Responsive** รองรับทุกหน้าจอ
- ✅ ธีม **Light Minimal** สวยงาม เป็นทางการ

---

## 🛠 Tech Stack

| เทคโนโลยี | เวอร์ชัน | คำอธิบาย |
|-----------|---------|----------|
| **React** | 19.1 | JavaScript library สำหรับสร้าง UI |
| **Vite** | 7.x | Build tool ที่เร็วและทันสมัย |
| **React Router DOM** | 7.x | จัดการ routing ของแอป |
| **Lucide React** | 1.x | ชุดไอคอน SVG สำหรับ React |
| **Vanilla CSS** | — | Custom CSS พร้อม CSS Variables |
| **Google Fonts** | — | Inter + Noto Sans Thai |
| **Vercel** | — | แพลตฟอร์ม deployment |

---

## 📂 โครงสร้างโปรเจค

```
co-workingspace/
├── public/
│   └── images/             # รูปภาพสำหรับการ์ดและ Hero
│       ├── hero.png
│       ├── solo.png
│       ├── group.png
│       ├── office.png
│       ├── floor.png
│       ├── building.png
│       ├── capsule.png
│       ├── single-room.png
│       └── suite.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # แถบนำทาง
│   │   ├── Hero.jsx         # ส่วนหัวหน้าแรก
│   │   ├── SpaceSection.jsx # ส่วน Co-Working Space
│   │   ├── StaySection.jsx  # ส่วนที่พัก
│   │   ├── SpaceCard.jsx    # การ์ดแสดงพื้นที่/ห้องพัก
│   │   ├── Features.jsx     # สิ่งอำนวยความสะดวก
│   │   ├── BookingModal.jsx # หน้าต่างจองพื้นที่
│   │   ├── SuccessModal.jsx # หน้าต่างจองสำเร็จ
│   │   └── Footer.jsx       # ส่วนท้ายเว็บ
│   ├── App.jsx              # คอมโพเนนต์หลัก
│   ├── data.js              # ข้อมูลพื้นที่และราคา
│   ├── index.css            # ธีมและสไตล์ทั้งหมด
│   └── main.jsx             # จุดเริ่มต้นแอป
├── index.html
├── package.json
├── vite.config.js
└── .npmrc
```

---

## 🚀 การติดตั้งและรันโปรเจค

### ความต้องการเบื้องต้น
- **Node.js** เวอร์ชัน 18 ขึ้นไป
- **npm** เวอร์ชัน 9 ขึ้นไป

### ขั้นตอนการติดตั้ง

```bash
# 1. Clone โปรเจค
git clone https://github.com/satetapongsa/Co-working-space.git

# 2. เข้าไปในโฟลเดอร์โปรเจค
cd Co-working-space

# 3. ติดตั้ง dependencies
npm install

# 4. รันโปรเจคในโหมด development
npm run dev
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:5173` เพื่อดูเว็บไซต์

### คำสั่งอื่น ๆ

```bash
# Build สำหรับ production
npm run build

# Preview production build
npm run preview
```

---

## 🖼 Screenshots

### หน้าแรก (Hero Section)
> ธีมสว่าง มินิมอล ขาว-ฟ้า พร้อมรูปภาพ Co-Working Space

### Co-Working Space Cards
> การ์ดแสดงพื้นที่ทำงาน 5 ประเภท พร้อมสลับราคารายวัน/รายเดือน

### ระบบจอง (Booking Modal)
> ฟอร์มจองพร้อมเลือกแผนการเช่า จำนวนวัน และสรุปราคาอัตโนมัติ

---

## 🌐 Deployment

โปรเจคนี้ deploy บน **Vercel** โดยเชื่อมต่อกับ GitHub repository

**Live URL:** [https://co-working-space-lilac-omega.vercel.app](https://co-working-space-lilac-omega.vercel.app/)

ทุกครั้งที่ push โค้ดไปยัง branch `main` ระบบจะ build และ deploy ใหม่อัตโนมัติ

---

## 👨‍💻 ผู้พัฒนา

**satetapongsa** — [GitHub Profile](https://github.com/satetapongsa)

---

<p align="center">
  <sub>สร้างด้วย ❤️ โดยใช้ React + Vite</sub>
</p>
