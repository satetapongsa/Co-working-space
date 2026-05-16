import { User, ArrowRight } from 'lucide-react';

export default function SpaceCard({ item, monthly, priceKey, periodLabel, onBook }) {
  const price = item[priceKey];
  const badgeClass = item.badgeType === 'popular' ? 'card-badge popular'
    : item.badgeType === 'premium' ? 'card-badge premium'
    : 'card-badge';

  return (
    <div className="space-card" id={`card-${item.id}`}>
      <div className="card-image">
        <img src={item.image} alt={item.title} loading="lazy" />
        {item.badge && <span className={badgeClass}>{item.badge}</span>}
      </div>
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.desc}</p>
        <div className="card-features">
          {item.features.map((f, i) => (
            <span className="feature-tag" key={i}>{f}</span>
          ))}
          <span className="feature-tag"><User size={12} /> {item.capacity}</span>
        </div>
        <div className="card-pricing">
          <div className="price">
            ฿{price.toLocaleString()} <span>{periodLabel}</span>
          </div>
          <button className="book-btn" onClick={onBook} id={`book-${item.id}`}>
            จองเลย <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
