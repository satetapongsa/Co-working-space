import { useState } from 'react';
import { stayRooms } from '../data';
import SpaceCard from './SpaceCard';

export default function StaySection({ onBook }) {
  const [monthly, setMonthly] = useState(false);

  return (
    <section className="section" id="stay">
      <div className="section-header">
        <span className="tag">Stay & Sleep</span>
        <h2>ที่พักสะดวกสบาย</h2>
        <p>เช่าห้องนอนรายคืน หรือรายเดือน เข้าพักตอนไหนก็ได้ภายในเดือนที่เช่า</p>
      </div>

      <div className="pricing-toggle">
        <span className={!monthly ? 'active-label' : ''}>รายคืน</span>
        <div
          className={`toggle-switch ${monthly ? 'active' : ''}`}
          onClick={() => setMonthly(!monthly)}
          role="button"
          tabIndex={0}
          id="pricing-toggle-stay"
        />
        <span className={monthly ? 'active-label' : ''}>รายเดือน <span className="save-badge">เข้าพักได้ตลอด</span></span>
      </div>

      <div className="cards-grid">
        {stayRooms.map(room => (
          <SpaceCard
            key={room.id}
            item={room}
            monthly={monthly}
            priceKey={monthly ? 'priceMonthly' : 'priceNightly'}
            periodLabel={monthly ? '/เดือน' : '/คืน'}
            onBook={() => onBook(room, 'stay')}
          />
        ))}
      </div>
    </section>
  );
}
