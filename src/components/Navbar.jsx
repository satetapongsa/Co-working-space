import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <a href="#" className="nav-logo" onClick={() => scrollTo('hero')}>
        <span className="logo-icon">F</span>FlexSpace
      </a>
      <div className="nav-links" style={open ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(255,255,255,.97)', padding: '1.5rem', gap: '1rem', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(16px)' } : {}}>
        <a onClick={() => scrollTo('coworking')} className={activeSection === 'coworking' ? 'active' : ''} style={{ cursor: 'pointer' }}>Co-Working</a>
        <a onClick={() => scrollTo('stay')} className={activeSection === 'stay' ? 'active' : ''} style={{ cursor: 'pointer' }}>ที่พัก</a>
        <a onClick={() => scrollTo('features')} className={activeSection === 'features' ? 'active' : ''} style={{ cursor: 'pointer' }}>สิ่งอำนวยความสะดวก</a>
        <a onClick={() => scrollTo('coworking')} className="nav-cta">จองเลย</a>
      </div>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
}
