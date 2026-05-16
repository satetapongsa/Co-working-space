import { CheckCircle } from 'lucide-react';

export default function SuccessModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 420 }}>
        <div className="success-content">
          <div className="success-icon">
            <CheckCircle size={32} />
          </div>
          <h3>จองสำเร็จ!</h3>
          <p>ขอบคุณสำหรับการจอง เราจะส่งรายละเอียดไปยังอีเมลของคุณ</p>
          <button className="btn-primary" onClick={onClose}>ตกลง</button>
        </div>
      </div>
    </div>
  );
}
