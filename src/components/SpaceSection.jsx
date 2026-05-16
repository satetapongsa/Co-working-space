import { useState } from 'react';
import { coworkingSpaces } from '../data';
import SpaceCard from './SpaceCard';

export default function SpaceSection({ onBook }) {
  const [monthly, setMonthly] = useState(false);

  return (
    <section className="section" id="coworking" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header">
        <span className="tag">Co-Working Space</span>
        <h2>เลือกพื้นที่ทำงานที่ใช่</h2>
        <p>ตั้งแต่โต๊ะเดี่ยวสำหรับฟรีแลนซ์ ไปจนถึงเช่าทั้งตึกเปิดบริษัท</p>
      </div>

      <div className="pricing-toggle">
        <span className={!monthly ? 'active-label' : ''}>รายวัน</span>
        <div
          className={`toggle-switch ${monthly ? 'active' : ''}`}
          onClick={() => setMonthly(!monthly)}
          role="button"
          tabIndex={0}
          id="pricing-toggle-cowork"
        />
        <span className={monthly ? 'active-label' : ''}>รายเดือน <span className="save-badge">ประหยัด 15%</span></span>
      </div>

      <div className="cards-grid">
        {coworkingSpaces.map(space => (
          <SpaceCard
            key={space.id}
            item={space}
            monthly={monthly}
            priceKey={monthly ? 'priceMonthly' : 'priceDaily'}
            periodLabel={monthly ? '/เดือน' : '/วัน'}
            onBook={() => onBook(space, 'coworking')}
          />
        ))}
      </div>
    </section>
  );
}
