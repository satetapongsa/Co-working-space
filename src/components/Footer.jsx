import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="nav-logo" style={{ fontSize: '1.5rem' }}>
            <span className="logo-icon">F</span>FlexSpace
          </span>
          <p>บริการเช่าพื้นที่ทำงานและที่พักครบวงจร เปิดให้บริการ 24 ชั่วโมง ทุกวัน</p>
        </div>
        <div className="footer-col">
          <h4>Co-Working</h4>
          <a href="#coworking">โต๊ะเดี่ยว</a>
          <a href="#coworking">โซนกลุ่ม</a>
          <a href="#coworking">ออฟฟิศส่วนตัว</a>
          <a href="#coworking">เช่าทั้งชั้น</a>
          <a href="#coworking">เช่าทั้งตึก</a>
        </div>
        <div className="footer-col">
          <h4>ที่พัก</h4>
          <a href="#stay">แคปซูลนอน</a>
          <a href="#stay">ห้องเดี่ยว</a>
          <a href="#stay">ห้องสวีท</a>
        </div>
        <div className="footer-col">
          <h4>ติดต่อเรา</h4>
          <a href="#"><MapPin size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />กรุงเทพมหานคร</a>
          <a href="#"><Phone size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />02-xxx-xxxx</a>
          <a href="#"><Mail size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />info@flexspace.co.th</a>
          <a href="#"><MessageSquare size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />LINE: @flexspace</a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 FlexSpace. All rights reserved.
      </div>
    </footer>
  );
}
