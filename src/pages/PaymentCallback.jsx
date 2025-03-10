import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import { useUserContext } from '../context/UserContext';

const PaymentCallback = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('PENDING');
  const [error, setError] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const { paymentData, clearPaymentData } = useUserContext();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const merchantTransactionId = urlParams.get('merchantTransactionId');
    const status = urlParams.get('status');

    if (!merchantTransactionId || !status) {
      setError('Invalid payment callback');
      setStatus('error');
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/user/verify-payment/${merchantTransactionId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              status,
              merchantOrderId: paymentData.merchantOrderId,
            }),
          }
        );

        const data = await response.json();

        if (data.success) {
          setStatus('COMPLETED');
          setPaymentDetails({
            merchantTransactionId,
            amount: data.amount,
          });
        } else {
          setStatus('FAILED');
          setError(data.message || 'Payment verification failed');
        }
      } catch (error) {
        console.error('[PaymentCallback] Payment verification error:', error);
        setStatus('error');
        setError('Failed to verify payment');
      }
    };

    verifyPayment();
  }, [paymentData.merchantOrderId]);

  const ClearCookieAndData = () => {
    clearPaymentData();
    navigate('/create-new-sheet');
  };

  const getStatusContent = () => {
    switch (status) {
      case 'COMPLETED':
        return {
          icon: (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500" />
            </motion.div>
          ),
          title: 'Payment Successful',
          message: 'Thank you! Your payment has been processed successfully.',
          color: 'text-green-500',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-100',
        };
      case 'FAILED':
        return {
          icon: (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <XCircle className="w-16 h-16 sm:w-20 sm:h-20 text-red-500" />
            </motion.div>
          ),
          title: 'Payment Failed',
          message: 'Sorry, your payment could not be processed. Please try again.',
          color: 'text-red-500',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-100',
        };
      case 'error':
        return {
          icon: (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <XCircle className="w-16 h-16 sm:w-20 sm:h-20 text-red-500" />
            </motion.div>
          ),
          title: 'Error',
          message: error || 'An error occurred while processing your payment.',
          color: 'text-red-500',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-100',
        };
      default:
        return {
          icon: (
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity }
              }}
            >
              <Loader className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500" />
            </motion.div>
          ),
          title: 'Processing Payment',
          message: 'Please wait while we verify your payment...',
          color: 'text-blue-500',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-100',
        };
    }
  };

  const content = getStatusContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <motion.div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden ${content.bgColor} border ${content.borderColor}`}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Status Icon */}
          <motion.div
            className="flex justify-center pt-6 sm:pt-8"
          >
            {content.icon}
          </motion.div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xl sm:text-2xl font-bold text-center mb-2 ${content.color}`}
            >
              {content.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-center text-sm sm:text-base mb-6 sm:mb-8"
            >
              {content.message}
            </motion.p>

            {/* Payment Details */}
            {paymentDetails && status === 'COMPLETED' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="bg-white rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-green-100 shadow-sm"
              >
                <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4">Payment Details</h3>
                <div className="space-y-2 sm:space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-between items-center text-sm sm:text-base"
                  >
                    <span className="text-gray-600">Transaction ID:</span>
                    <span className="font-medium text-gray-800">
                      {paymentDetails.merchantTransactionId}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-between items-center text-sm sm:text-base"
                  >
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium text-gray-800">
                      ₹{paymentDetails.amount / 100}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Action Button */}
            {(status === 'COMPLETED' || status === 'FAILED' || status === 'error') && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={ClearCookieAndData}
                className={`w-full py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 ${status === 'COMPLETED'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {status === 'COMPLETED' ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        Continue to Dashboard
                      </motion.span>
                    </>
                  ) : (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        Try Again
                      </motion.span>
                    </>
                  )}
                </span>
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentCallback;
