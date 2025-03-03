import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useUserContext } from '../context/UserContext';

const Payment = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const { paymentData, updatePaymentData } = useUserContext();

  useEffect(() => {
    console.log('[Payment] Component mounted');
    console.log('[Payment] Payment data from context:', paymentData);
    
    if (!paymentData.amount || !paymentData.name || !paymentData.sheetID || !paymentData.serialNumber) {
      console.log('[Payment] Missing payment data, redirecting to create-new-sheet');
      toast.error('Missing or invalid payment details!');
      navigate('/create-new-sheet');
      return;
    }
  }, [paymentData, navigate]);

  const handlePaymentInitiation = async () => {
    setIsLoading(true);
    setShowConfirmation(false);

    try {
      console.log('[Payment] Sending payment creation request');
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/create-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: paymentData.amount,
          name: paymentData.name,
          sheetID: paymentData.sheetID,
          serialNumber: paymentData.serialNumber, 
          redirectUrl : `${window.location.origin}/payment-callback`
        })
      });

      const data = await response.json();
      console.log('[Payment] Payment API Response:', data);

      const { paymentUrl, merchantOrderId } = data;
      if (paymentUrl) {
        console.log('[Payment] Payment URL received:', paymentUrl);
        console.log('[Payment] Updating payment data with merchantOrderId:', merchantOrderId);
        updatePaymentData({ ...paymentData, merchantOrderId });
        
        console.log('[Payment] Redirecting to payment URL');
        window.location.href = paymentUrl;
      } else {
        console.error('[Payment] No payment URL in response');
        throw new Error('No payment URL received');
      }
    } catch (error) {
      console.error('[Payment] Payment initiation error:', error);
      toast.error('Failed to initiate payment. Please try again.');
      setShowConfirmation(true);
    } finally {
      setIsLoading(false);
    }
  };

  const PaymentConfirmation = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-800 text-center mb-8"
      >
        Payment Details
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Main Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-gray-50/80 backdrop-blur p-4 rounded-lg hover:bg-gray-100/80 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="text-lg font-medium text-gray-800">{paymentData.name}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50/80 backdrop-blur p-4 rounded-lg hover:bg-gray-100/80 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Amount</p>
                <p className="text-lg font-medium text-gray-800">₹{paymentData.amount}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50/80 backdrop-blur p-4 rounded-lg hover:bg-gray-100/80 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Sheet ID</p>
                <p className="text-lg font-medium text-gray-800">{paymentData.sheetID}</p>
              </div>
            </div>
          </div>
        </motion.div>
 
        {/* Right Column - Serial Numbers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50/80 backdrop-blur p-6 rounded-xl"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Serial Numbers</h3>
          </div>

          <div className="space-y-3">
            {Array.isArray(paymentData.serialNumber) && paymentData.serialNumber.length > 0 ? (
              paymentData.serialNumber.map((num, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 p-2 bg-white/50 rounded-lg shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0112.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-700">{num}</span>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500">No serial numbers available</p>
            )}
          </div>
        </motion.div>

      </div>

      <motion.div
        className="mt-8 max-w-lg mx-auto flex md:flex-row flex-col items-center justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          onClick={handlePaymentInitiation}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="md:w-1/2 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
        >
          <img src="/assets/phonepay.png" alt="PhonePe" className="w-6 h-6" />
          <span>Pay with PhonePe</span>
        </motion.button>
        <motion.button
          onClick={() => navigate('/create-new-sheet')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="md:w-1/2 w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
        >
          <X className="w-6 h-6" /> <span>Cancel </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );

  const LoadingState = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-6"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
        />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold text-gray-800"
        >
          Processing Payment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-center"
        >
          Please wait while we redirect you to PhonePe...
        </motion.p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:p-4 p-1 py-24 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full blur-xl" />
          <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full blur-xl" />
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-indigo-200 rounded-full blur-xl" />
          <div className="absolute -bottom-10 right-1/3 w-36 h-36 bg-pink-200 rounded-full blur-xl" />
        </motion.div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {showConfirmation ? <PaymentConfirmation /> : <LoadingState />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Payment;
