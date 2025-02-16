import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import ScanQr from '../pages/ScanQr';
import Resources from '../pages/Resources';
import About from '../pages/About';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import CreateNewSheet from '../pages/CreateNewSheet';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsCondition from '../pages/TermsCondition';
import SingleBlog from '../pages/SingleBlog';
import Payment from '../pages/Payment';
import SuccessPage from '../pages/SuccessPage';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Routess = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-qr" element={<ScanQr />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:slug" element={<SingleBlog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/create-new-sheet" element={<CreateNewSheet />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/feedback" element={<SuccessPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routess;
