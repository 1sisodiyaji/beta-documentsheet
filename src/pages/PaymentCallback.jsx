import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { CheckCircle, SplineIcon, TimerIcon } from 'lucide-react';
import { useUserContext } from '../context/UserContext';

const PaymentCallback = () => {
  const [status, setStatus] = useState('loading');
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { paymentData } = useUserContext();
  const { merchantOrderId } = paymentData;

  console.log('merchantOrderId:', merchantOrderId); 

  useEffect(() => {
    const checkPaymentStatus = async () => {
      console.log('Checking payment status...'); 

      try {
        if(!merchantOrderId) {
          console.error('Merchant Order ID is missing');
          throw new Error('Merchant Order ID is missing');
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/user/verify_payment/${merchantOrderId}`
        );
        console.log('API Response:', response.data); 

        const { data } = response;

        if (data.success) {
          setPaymentDetails(data);
          setStatus(data.code);

          if (data.code === 'SUCCESS') {
            console.log('Payment Successful! Redirecting to feedback page.');
            navigate('/feedback');
          }
        } else {
          throw new Error(data.message || 'Payment verification failed');
        }
      } catch (error) {
        console.error('Error checking payment status:', error); // ✅ Debug: Log error details
        setStatus('error');
        setError(error.response?.data?.error || error.message || 'Failed to verify payment status');
      }
    };

    const checkInterval = setInterval(async () => {
      console.log(`Interval running: Current status = ${status}`); // ✅ Debug: Interval execution

      if (status === 'SUCCESS' || status === 'FAILED') {
        console.log('Clearing interval as payment status is final.');
        clearInterval(checkInterval);
        return;
      }

      await checkPaymentStatus();
    }, 3000);

    checkPaymentStatus(); // Initial API call

    return () => {
      console.log('Clearing interval on unmount.');
      clearInterval(checkInterval);
    };
  }, [status]);

  const getStatusContent = () => {
    switch (status) {
      case 'SUCCESS':
        return {
          icon: <CheckCircle className="text-green-500 text-6xl mb-4" />,
          title: 'Payment Successful',
          message: 'Thank you! Your payment has been processed successfully.',
          color: 'text-green-500',
        };
      case 'FAILED':
        return {
          icon: <TimerIcon className="text-red-500 text-6xl mb-4" />,
          title: 'Payment Failed',
          message: 'Sorry, your payment could not be processed. Please try again.',
          color: 'text-red-500',
        };
      case 'error':
        return {
          icon: <TimerIcon className="text-red-500 text-6xl mb-4" />,
          title: 'Error',
          message: error || 'An error occurred while processing your payment.',
          color: 'text-red-500',
        };
      default:
        return {
          icon: <SplineIcon className="text-blue-500 text-6xl mb-4 animate-spin" />,
          title: 'Processing Payment',
          message: 'Please wait while we verify your payment...',
          color: 'text-blue-500',
        };
    }
  };

  const content = getStatusContent();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center"
      >
        {content.icon}
        <h2 className={`text-2xl font-bold mb-2 ${content.color}`}>{content.title}</h2>
        <p className="text-gray-600 mb-6">{content.message}</p>

        {(status === 'SUCCESS' || status === 'FAILED' || status === 'error') && (
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        )}

        {paymentDetails && status === 'SUCCESS' && (
          <div className="mt-6 text-left bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Payment Details:</h3>
            <p className="text-sm text-gray-600">
              Transaction ID: {paymentDetails.merchantTransactionId}
            </p>
            <p className="text-sm text-gray-600">Amount: ₹{paymentDetails.amount / 100}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentCallback;
