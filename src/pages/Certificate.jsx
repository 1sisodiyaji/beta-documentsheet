import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Calendar, MapPin, Tag, DollarSign, Hash } from 'lucide-react';
import TimeConverter from '../utils/TimeConverter';

const Certificate = () => {
  const { serialNumber } = useParams();
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/user/get-certificate/${serialNumber}`
        );
        const data = await response.json();

        if (data.success) {
          setCertificateData(data.data);
        } else {
          setError(data.message || 'Failed to fetch certificate');
        }
      } catch (error) {
        console.error('[Certificate] Error fetching certificate:', error);
        setError('Failed to fetch certificate details');
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [serialNumber]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 text-sm sm:text-base">Loading certificate details...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg max-w-md mx-4"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Error</h2>
          <p className="text-gray-600 text-sm sm:text-base">{error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {certificateData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-6 sm:p-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-center"
              >
                Certificate Details
              </motion.h1>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {/* Basic Details */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Name</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900">{certificateData.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Place</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900">{certificateData.place}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Reason</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900">{certificateData.reason}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Amount</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900">
                        ₹{certificateData.amount?.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Date</p>
                      <p className="text-sm sm:text-base font-medium text-gray-900">
                        <TimeConverter date={certificateData.date} />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Serial Numbers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 sm:mt-8"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                  <Hash className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  Serial Numbers
                </h3>
                <div className="grid gap-2 sm:gap-3">
                  {certificateData.serialNumbers?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <span className="text-sm sm:text-base font-medium text-gray-700">{item.serialNumber}</span>
                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${item.status === 'cancelled'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                          }`}
                      >
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 sm:mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.print()}
                  className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Download Certificate</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
