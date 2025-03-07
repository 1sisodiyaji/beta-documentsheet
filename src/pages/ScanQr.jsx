import { Helmet } from 'react-helmet';
import CardGrid from '../components/scan-qr/CardGrid';
import ScanHero from '../components/scan-qr/ScanHero';
import ScanTabs from '../components/scan-qr/ScanTab';
import Banner from '../components/common/Banner';
import HowItWorks from '../components/scan-qr/HowItWork';
import Features from '../components/scan-qr/Features';
import FAQ from '../components/scan-qr/FAQ';

const ScanQr = () => {
  return (
    <>
      <Helmet>
        <title>Scan QR Code - Document Sheet | Quick Document Access</title>
        <meta
          name="description"
          content="Access your documents instantly by scanning QR codes. Our secure QR code system provides quick and easy access to your important documents anytime, anywhere."
        />
        <meta
          name="keywords"
          content="QR code scanner, document access, secure documents, quick document retrieval, QR code documents, digital document access, document management"
        />
        <meta
          property="og:title"
          content="Scan QR Code - Quick Document Access with Document Sheet"
        />
        <meta
          property="og:description"
          content="Access your documents instantly with our QR code scanning feature. Secure, quick, and convenient document retrieval system."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com/scan-qr" />
      </Helmet>

      <Banner title={'Scan QR'} text={'Access Your Documents Instantly'} />
     <ScanHero />
   <HowItWorks />
      <Features />
      <ScanTabs />
      <CardGrid /> 
      <FAQ />
    </>
  );
};

export default ScanQr;
