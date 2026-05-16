import { Monitor, BedDouble, ArrowRight, CircleDot } from 'lucide-react';

export default function Hero({ setActiveSection }) {
  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <CircleDot size={14} className="badge-dot" />
            เปิดให้บริการ 24 ชั่วโมง
          </div>
          <h1>
            พื้นที่ทำงาน & ที่พัก
            <br />
            <span className="highlight">ครบจบในที่เดียว</span>
          </h1>
          <p>
            FlexSpace — บริการเช่าพื้นที่ทำงานตั้งแต่โต๊ะเดี่ยวจนถึงทั้งตึก
            พร้อมที่พักสะดวกสบาย เช่ารายวันหรือรายเดือน จองง่ายใน 30 วินาที
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('coworking')}>
              <Monitor size={18} />
              จองพื้นที่ทำงาน
              <ArrowRight size={16} />
            </button>
            <button className="btn-outline" onClick={() => scrollTo('stay')}>
              <BedDouble size={18} />
              จองที่พัก
            </button>
          </div>
          <div className="stats-row">
            <div className="stat">
              <div className="num">2,500+</div>
              <div className="label">ลูกค้าที่ไว้ใจ</div>
            </div>
            <div className="stat">
              <div className="num">15</div>
              <div className="label">สาขาทั่วกรุงเทพ</div>
            </div>
            <div className="stat">
              <div className="num">4.9</div>
              <div className="label">คะแนนรีวิว</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero.png" alt="FlexSpace Co-Working Space" />
        </div>
      </div>
    </section>
  );
}
