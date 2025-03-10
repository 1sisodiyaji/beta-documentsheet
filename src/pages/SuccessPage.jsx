import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useUserContext } from '../context/UserContext';
import { motion } from 'framer-motion';
import { Download, Star, Send, Home, FileText } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const hasFetched = useRef(false);
  const { paymentData, clearPaymentData } = useUserContext();
  const { name, sheetID } = paymentData;

  const handleRatingClick = (star) => {
    setRating(star);
  };

  const handleSubmit = async () => {
    if (!rating || !description) {
      toast.error('Please fill in both rating and description before submitting.');
      return;
    }

    setIsSubmitting(true);
    const email = 'testimonial@documentsheet.com';
    const mobile = '0000000000';

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/create-testimonial`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: paymentData.name,
          email,
          mobile,
          rating,
          message: description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      toast.success('Feedback submitted successfully!');
      setRating(0);
      setDescription('');
    } catch (error) {
      console.error('[SuccessPage] Feedback submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const DownloadSheet = async (sheetID) => {
    if (!sheetID) {
      console.log('[SuccessPage] No sheetID provided');
      toast.error('Sheet Not Found');
      return;
    }

    setIsDownloading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/user/genrate-Sheet/${sheetID}`,
        {
          responseType: 'blob',
        }
      );

      if (response.status === 200) {
        const fileBlob = new Blob([response.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(fileBlob);
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = `Document-Sheet${sheetID}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(fileURL);
        toast.success('Your Sheet has been downloaded');
      } else {
        console.error('[SuccessPage] Sheet download failed with status:', response.status);
        toast.error('Failed to Download Sheet');
      }
    } catch (error) {
      console.error('[SuccessPage] Sheet download error:', error);
      toast.error('Failed to Download Sheet');
    } finally {
      setIsDownloading(false);
    }
  };

  const DownloadBill = async (sheetID) => {
    if (!sheetID) {
      console.log('[SuccessPage] No sheetID provided');
      toast.error('Sheet Not Found');
      return;
    }

    setIsDownloading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/user/genrate-bill/${sheetID}`,
        {
          responseType: 'blob',
        }
      );

      if (response.status === 200) {
        console.log('[SuccessPage] Creating bill download link');
        const fileBlob = new Blob([response.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(fileBlob);
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = `Invoice-${sheetID}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(fileURL);
        toast.success('Your Invoice has been downloaded');
      } else {
        console.error('[SuccessPage] Bill download failed with status:', response.status);
        toast.error('Failed to Download Invoice');
      }
    } catch (error) {
      console.error('[SuccessPage] Bill download error:', error);
      toast.error('Failed to Download Invoice');
    } finally {
      setIsDownloading(false);
    }
  };

  const ShiftToHome = (route) => {
    clearPaymentData();
    navigate(route);
  };

  useEffect(() => {
    if (!paymentData.sheetID) {
      console.log('[SuccessPage] No sheetID found, redirecting to home');
      navigate('/');
      return;
    }

    if (hasFetched.current) {
      console.log('[SuccessPage] Documents already fetched');
      return;
    }

    hasFetched.current = true;
    DownloadSheet(paymentData.sheetID);
    DownloadBill(paymentData.sheetID);
  }, [paymentData.sheetID, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            Thank you for choosing DocumentSheet!
          </h1>

          {/* Download Section */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-100"
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                Your Document Sheet
              </h2>
              <motion.button
                whileHover={!isDownloading && { scale: 1.02 }}
                whileTap={!isDownloading && { scale: 0.98 }}
                onClick={() => DownloadSheet(sheetID)}
                disabled={isDownloading}
                className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg transition-all duration-200 ${isDownloading
                    ? 'opacity-75 cursor-not-allowed'
                    : 'hover:bg-blue-700 hover:shadow-lg'
                  }`}
              >
                {isDownloading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
                <span className="ml-1">{isDownloading ? 'Downloading...' : 'Download Sheet'}</span>
              </motion.button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 sm:p-6 bg-green-50 rounded-xl border border-green-100"
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                Your Invoice
              </h2>
              <motion.button
                whileHover={!isDownloading && { scale: 1.02 }}
                whileTap={!isDownloading && { scale: 0.98 }}
                onClick={() => DownloadBill(sheetID)}
                disabled={isDownloading}
                className={`w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 sm:py-3 rounded-lg transition-all duration-200 ${isDownloading
                    ? 'opacity-75 cursor-not-allowed'
                    : 'hover:bg-green-700 hover:shadow-lg'
                  }`}
              >
                {isDownloading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
                <span className="ml-1">{isDownloading ? 'Downloading...' : 'Download Invoice'}</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Feedback Section */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Share Your Experience</h2>

              {/* Rating */}
              <div className="flex justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRatingClick(star)}
                    className={`p-1 rounded-full transition-all duration-200 ${rating >= star
                        ? 'text-yellow-400 hover:text-yellow-500'
                        : 'text-gray-300 hover:text-gray-400'
                      }`}
                  >
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                  </motion.button>
                ))}
              </div>

              {/* Feedback Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us about your experience..."
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-4 resize-none"
                  rows="4"
                />

                <motion.button
                  whileHover={!isSubmitting && { scale: 1.02 }}
                  whileTap={!isSubmitting && { scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg transition-all duration-200 ${isSubmitting
                      ? 'opacity-75 cursor-not-allowed'
                      : 'hover:bg-blue-700 hover:shadow-lg'
                    }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                  <span className="ml-1">{isSubmitting ? 'Submitting...' : 'Submit Feedback'}</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => ShiftToHome('/create-new-sheet')}
              className="flex items-center justify-center gap-2 bg-yellow-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 hover:bg-yellow-600 hover:shadow-lg"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              Create New Sheet
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => ShiftToHome('/')}
              className="flex items-center justify-center gap-2 bg-gray-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Back To Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessPage;
