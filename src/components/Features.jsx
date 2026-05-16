import { featuresList } from '../data';

export default function Features() {
  return (
    <section className="section" id="features" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header">
        <span className="tag">Amenities</span>
        <h2>สิ่งอำนวยความสะดวก</h2>
        <p>ครบครันทุกความต้องการ ให้คุณโฟกัสกับงานได้เต็มที่</p>
      </div>
      <div className="features-grid">
        {featuresList.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">
              <f.Icon size={24} />
            </div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
