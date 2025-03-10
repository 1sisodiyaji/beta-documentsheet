import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { CheckCircle, TimerIcon } from 'lucide-react';
import { useUserContext } from '../../context/UserContext';

const CertificateCallback = () => {
  const [status, setStatus] = useState('loading');
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { certificateData, clearCertificateData } = useUserContext();
  const { merchantOrderId, serialNumber } = certificateData;

  useEffect(() => {
    if (!merchantOrderId || !serialNumber) {
      setError('Invalid request. Please start the payment process again.');
      setStatus('error');
      return;
    }

    const verifyPaymentAndGenerateCertificate = async () => {
      try {
        // ✅ Step 1: Verify Payment Status
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/user/verify_payment-for-certificate/${merchantOrderId}/${serialNumber}`
        );

        const { data } = response;
        if (data.success) {
          setPaymentDetails(data);
          setStatus(data.status);

          if (data.status === 'COMPLETED') {
            // ✅ Step 2: Generate Certificate
            await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/generate-certificate`, { serialNumber });

            // ✅ Step 3: Redirect to Scan QR Page
            setTimeout(() => {
              clearCertificateData();
              navigate('/scan-qr');
            }, 2000);
          }
        } else {
          throw new Error(data.message || 'Payment verification failed');
        }
      } catch (error) {
        setStatus('error');
        setError(error.response?.data?.error || error.message || 'Failed to verify payment status');
      }
    };

    verifyPaymentAndGenerateCertificate();
  }, [merchantOrderId, serialNumber, navigate, clearCertificateData]);

  const getStatusContent = () => {
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
          icon: <TimerIcon className="text-blue-500 w-16 h-16 animate-spin" />,
          title: 'Processing Payment',
          message: 'Please wait while we verify your payment...',
          color: 'text-blue-500',
        };
    }
  };

  const handleBackToHome = () => {
    clearCertificateData();
    navigate('/scan-qr');
  };

  const content = getStatusContent();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 py-8 md:px-6 md:py-16">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-md"
        >
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex flex-col items-center gap-4">
              {content.icon}
              <h2 className={`text-2xl font-bold ${content.color}`}>
                {content.title}
              </h2>
              <p className="text-gray-600 text-center">
                {content.message}
              </p>
            </div>

            {(status === 'COMPLETED' || status === 'FAILED' || status === 'error') && (
              <button
                onClick={handleBackToHome}
                className="w-full bg-green-500 text-white px-6 py-3 rounded-md 
                         hover:bg-green-600 transition-colors duration-200"
              >
                Back to Home
              </button>
            )}

            {paymentDetails && status === 'COMPLETED' && (
              <div className="mt-6 bg-gray-50 rounded-md p-4 space-y-2">
                <h3 className="font-semibold">Payment Details:</h3>
                <p className="text-sm text-gray-600">
                  Transaction ID: {paymentDetails.merchantTransactionId}
                </p>
                <p className="text-sm text-gray-600">
                  Amount: ₹{paymentDetails.amount / 100}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificateCallback;
5