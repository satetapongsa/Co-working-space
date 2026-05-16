import { useState, useMemo } from 'react';
import { ClipboardList, X, Calendar, CalendarDays, Minus, Plus, Info, CheckCircle } from 'lucide-react';

export default function BookingModal({ item, type, onClose, onConfirm }) {
  const isStay = type === 'stay';
  const [plan, setPlan] = useState('daily');
  const [duration, setDuration] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const pricePerUnit = useMemo(() => {
    if (plan === 'monthly') return item.priceMonthly;
    return isStay ? item.priceNightly : item.priceDaily;
  }, [plan, item, isStay]);

  const total = pricePerUnit * duration;
  const periodLabel = plan === 'monthly' ? 'เดือน' : isStay ? 'คืน' : 'วัน';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !date) return;
    onConfirm();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3><ClipboardList size={18} style={{ verticalAlign: 'middle', marginRight: 6 }} /> จอง {item.title}</h3>
          <button className="modal-close" onClick={onClose}><X size={16} /></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {/* Plan selection */}
            <div className="form-group">
              <label>แผนการเช่า</label>
              <div style={{ display: 'flex', gap: '.5rem' }}>
                <button
                  type="button"
                  className={`tab-btn ${plan === 'daily' ? 'active' : ''}`}
                  onClick={() => setPlan('daily')}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                >
                  <Calendar size={15} />
                  {isStay ? 'รายคืน' : 'รายวัน'}
                </button>
                <button
                  type="button"
                  className={`tab-btn ${plan === 'monthly' ? 'active' : ''}`}
                  onClick={() => setPlan('monthly')}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                >
                  <CalendarDays size={15} />
                  รายเดือน
                </button>
              </div>
            </div>

            {plan === 'monthly' && isStay && (
              <div className="info-box">
                <Info size={15} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                เช่ารายเดือน — เข้าพักตอนไหนก็ได้ภายในเดือนที่เช่า
              </div>
            )}

            {/* Duration */}
            <div className="form-group">
              <label>จำนวน{periodLabel}</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button type="button" onClick={() => setDuration(Math.max(1, duration - 1))} className="stepper-btn"><Minus size={16} /></button>
                <span style={{ fontSize: '1.3rem', fontWeight: 700, minWidth: 40, textAlign: 'center' }}>{duration}</span>
                <button type="button" onClick={() => setDuration(duration + 1)} className="stepper-btn"><Plus size={16} /></button>
                <span style={{ color: 'var(--text-muted)', fontSize: '.9rem' }}>{periodLabel}</span>
              </div>
            </div>

            {/* Date */}
            <div className="form-group">
              <label>{isStay ? 'วันเข้าพัก' : 'วันเริ่มใช้งาน'}</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} required id="booking-date" />
            </div>

            {/* Contact info */}
            <div className="form-group">
              <label>ชื่อ-นามสกุล</label>
              <input type="text" placeholder="กรอกชื่อ-นามสกุล" value={name} onChange={e => setName(e.target.value)} required id="booking-name" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>อีเมล</label>
                <input type="email" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)} required id="booking-email" />
              </div>
              <div className="form-group">
                <label>เบอร์โทร</label>
                <input type="tel" placeholder="0xx-xxx-xxxx" value={phone} onChange={e => setPhone(e.target.value)} required id="booking-phone" />
              </div>
            </div>

            <div className="form-group">
              <label>หมายเหตุ (ถ้ามี)</label>
              <textarea rows={2} placeholder="ข้อความเพิ่มเติม..." value={note} onChange={e => setNote(e.target.value)} id="booking-note" />
            </div>

            {/* Summary */}
            <div className="summary-box">
              <div className="summary-row">
                <span>{item.title}</span>
                <span>฿{pricePerUnit.toLocaleString()}/{periodLabel}</span>
              </div>
              <div className="summary-row">
                <span>จำนวน</span>
                <span>{duration} {periodLabel}</span>
              </div>
              <div className="summary-row total">
                <span>รวมทั้งสิ้น</span>
                <span style={{ color: 'var(--accent)' }}>฿{total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>ยกเลิก</button>
            <button type="submit" className="btn-primary" id="confirm-booking">
              <CheckCircle size={16} /> ยืนยันการจอง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
