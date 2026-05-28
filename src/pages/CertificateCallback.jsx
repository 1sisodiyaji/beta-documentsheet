import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { CheckCircle, SplineIcon, TimerIcon } from 'lucide-react';
import { useUserContext } from '../context/useUserContext';
import { toast } from 'react-hot-toast';

const CertificateCallback = () => {
  const [status, setStatus] = useState('loading');
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(25);
  const [isDownloading, setIsDownloading] = useState(false);
  const navigate = useNavigate();
  const { certificateData, clearCertificateData } = useUserContext();
  const { merchantOrderId } = certificateData;

  // Timer Animation
  useEffect(() => {
    if (isDownloading && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      navigate('/scan-qr');
    }
  }, [timeLeft, isDownloading, navigate]);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        if (!merchantOrderId) {
          throw new Error('Merchant Order ID is missing');
        }

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/verify_payment-for-certificate/${merchantOrderId}?serialNumber=${certificateData.serialNumber[0]}`);
        const { data } = response;
        if (data.success === true) {
          setPaymentDetails(data);
          setStatus(data.status);

          if (data.status === 'COMPLETED') {
            clearInterval(checkInterval);
            GenerateCertificate(certificateData.serialNumber[0]);
          }
        } else {
          throw new Error(data.message || 'Payment verification failed');
        }
      } catch (error) {
        setStatus('error');
        setError(error.response?.data?.error || error.message || 'Failed to verify payment status');
      }
    };

    const checkInterval = setInterval(async () => {
      if (status === 'COMPLETED' || status === 'FAILED') {
        clearInterval(checkInterval);
        return;
      }
      await checkPaymentStatus();
    }, 3000);

    checkPaymentStatus();
    return () => clearInterval(checkInterval);
    // GenerateCertificate is stable enough for polling; serialNumber is read when payment completes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, merchantOrderId, navigate]);

  const GenerateCertificate = async (serialNumber) => {
    if (isDownloading) return;
    try {
      setIsDownloading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/get-certificate/${serialNumber}`, {
        responseType: 'blob',
      });
      if (response.status === 200) {
        const fileBlob = new Blob([response.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(fileBlob);
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = `Certificate-${serialNumber}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(fileURL);
        setIsDownloading(false);
        toast.success('Your Sheet has been downloaded');
        navigate('/scan-qr');
        clearCertificateData();
      } else {
        console.error('[SuccessPage] Sheet download failed with status:', response.status);
        setIsDownloading(false);
        toast.error('Failed to Download Sheet');
      }
    } catch (error) {
      console.error('Error generating certificate:', error);
      setError('Failed to generate certificate');
      setIsDownloading(false);
    }
  };

  const getStatusContent = () => {
    if (isDownloading) {
      return {
        icon: (
          <div className="relative">
            <motion.div className="w-20 h-20 rounded-full border-4 border-blue-500" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">{timeLeft}</div>
          </div>
        ),
        title: 'Downloading Certificate',
        message: 'Please wait while your certificate is being prepared.',
        color: 'text-blue-500',
      };
    }

    switch (status) {
      case 'COMPLETED':
        return {
          icon: <CheckCircle className="text-green-500 w-16 h-16" />,
          title: 'Payment Successful',
          message: 'Thank you! Your Certificate has been processed successfully.',
          color: 'text-green-500',
        };
      case 'FAILED':
        return {
          icon: <TimerIcon className="text-red-500 w-16 h-16" />,
          title: 'Payment Failed',
          message: 'Sorry, your Certificate could not be processed. Please try again.',
          color: 'text-red-500',
        };
      case 'error':
        return {
          icon: <TimerIcon className="text-red-500 w-16 h-16" />,
          title: 'Error',
          message: error || 'An error occurred while processing your Certificate.',
          color: 'text-red-500',
        };
      default:
        return {
          icon: <SplineIcon className="text-blue-500 w-16 h-16 animate-spin" />,
          title: 'Processing Payment',
          message: 'Please wait while your certificate is being prepared. Kindly do not leave the page or turn off your screen',
          color: 'text-blue-500',
        };
    }
  };

  const content = getStatusContent();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 py-8 md:px-6 md:py-16">
      <motion.div className="max-w-3xl mx-auto w-full bg-white rounded-lg shadow-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="p-8 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div key={isDownloading ? 'downloading' : status} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center gap-6">
              {content.icon}
              <h2 className={`text-2xl font-bold ${content.color} text-center`}>{content.title}</h2>
              <p className="text-gray-600 text-center">{content.message}</p>

              {isDownloading && (
                <motion.div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <motion.div className="h-full bg-blue-500" initial={{ width: '0%' }} animate={{ width: `${((10 - timeLeft) / 10) * 100}%` }} transition={{ duration: 0.5 }} />
                </motion.div>
              )}

              {paymentDetails && status === 'COMPLETED' && !isDownloading && (
                <motion.div className="w-full space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <h3 className="font-semibold">Payment Details</h3>
                    <p className="text-sm text-gray-600">Transaction ID: {merchantOrderId}</p>
                    <p className="text-sm text-gray-600">Amount: ₹25</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificateCallback;
