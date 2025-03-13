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
import NotFoundPage from '../pages/NotFoundPage';
import RefundPolicy from '../pages/RefundPolicy';
import PaymentCallback from '../pages/PaymentCallback';
import Certificate from '../pages/Certificate';
import CertificateCallback from '../pages/CertificateCallback';

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
        <Route path="/payment-callback" element={<PaymentCallback />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/feedback" element={<SuccessPage />} />
        <Route path="/certificate/:serialNumber" element={<Certificate />} />
        <Route path="/certificate-callback" element={<CertificateCallback />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

    </>
  );
};

export default Routess;
