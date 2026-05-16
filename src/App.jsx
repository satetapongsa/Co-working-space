import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpaceSection from './components/SpaceSection';
import StaySection from './components/StaySection';
import Features from './components/Features';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SuccessModal from './components/SuccessModal';

export default function App() {
  const [bookingModal, setBookingModal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState('coworking');

  useEffect(() => {
    const onScroll = () => {
      document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBook = (item, type) => setBookingModal({ item, type });
  const handleConfirm = () => { setBookingModal(null); setShowSuccess(true); setTimeout(() => setShowSuccess(false), 3000); };

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <SpaceSection onBook={handleBook} />
      <StaySection onBook={handleBook} />
      <Features />
      <Footer />
      {bookingModal && (
        <BookingModal
          item={bookingModal.item}
          type={bookingModal.type}
          onClose={() => setBookingModal(null)}
          onConfirm={handleConfirm}
        />
      )}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  );
}
