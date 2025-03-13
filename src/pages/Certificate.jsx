import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag, Lock, User2Icon, IndianRupeeIcon } from 'lucide-react';
import TimeConverter from '../utils/TimeConverter';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useUserContext } from '../context/UserContext';

const Certificate = () => {
  const { serialNumber } = useParams();
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { updateCertificateDetails } = useUserContext();

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/user/search-sheet/${serialNumber}`
        );
        if (response.data.success) {
          setCertificateData(response.data.SheetDetails);
        } else {
          setError(response.data.message || 'Failed to fetch certificate');
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

  const handleDownloadCertificate = async (serialNum) => {
    try {
      const redirectUrl = `${window.location.origin}/certificate-callback`
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/create-payment-for-certificate`, {
        serialNumber: serialNum, redirectUrl
      });

      const data = response.data;
      console.log('[Payment] Payment API Response:', data);

      const { paymentUrl, merchantOrderId } = data;
      if (paymentUrl) {
        updateCertificateDetails({ serialNumber: serialNum, merchantOrderId });
        window.location.href = paymentUrl;
      } else {
        console.error('[Payment] No payment URL in response');
        throw new Error('No payment URL received');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast.error('Failed to initiate payment');
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
          <motion.div
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
          />
          <p className="text-gray-700 text-sm">Loading certificate details...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50">
        <motion.div className="text-center bg-white p-6 rounded-lg shadow-md">
          <p className="text-red-600 font-semibold">Error: {error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-xl font-semibold text-center mb-6">Certificate Details</h1>
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <User2Icon className="text-green-600" />
            <p className="text-gray-800">{certificateData.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-blue-600" />
            <p className="text-gray-800">{certificateData.place}</p>
          </div>
          <div className="flex items-center gap-3">
            <Tag className="text-gray-600" />
            <p className="text-gray-800">{certificateData.reason}</p>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-green-600" />
            <p className="text-gray-800"><TimeConverter date={certificateData.date} /></p>
          </div>
          <div className="flex items-center gap-3">
            <IndianRupeeIcon className="text-yellow-600" />
            <p className="text-gray-800">₹{certificateData.amount}</p>
          </div>
        </div>

        {/* Serial Numbers with Download Button */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Serial Numbers</h2>
          {certificateData.serialNumbers.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded-md mb-2">
              <span className="text-gray-700 font-medium md:text-lg text-xs">{item.serialNumber}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDownloadCertificate(item.serialNumber)}
                className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 md:text-lg text-xs"
              >
               <Lock className="w-4 h-4" /> Download Certificate
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
