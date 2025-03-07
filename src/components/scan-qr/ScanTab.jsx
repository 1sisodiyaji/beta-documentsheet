import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import QRCODEANIMATION from '../../data/QR_Code_Animation.json';
import AuthAnimation from '../../data/Auth_Animation.json';
import QrCodeScanner from './QrCodeScanner';

const ScanTabs = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sheetDetails, setSheetDetails] = useState(null);
  const [activeTab, setActiveTab] = useState('scanner');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serialNumber) {
      toast.error('Please enter a serial number!');
      return;
    }

    setLoading(true);
    setError(null);
    setSheetDetails(null);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/user/search-sheet/${serialNumber}`
      );
      const data = response.data;
      setSheetDetails(data.SheetDetails);
      toast.success('Data fetched successfully!');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again.');
      toast.error('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 p-1">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-2xl max-w-2xl mx-auto mb-8 ">
        <div className="flex space-x-4 justify-center">
          <motion.button
            type="button"
            className={`tab relative md:px-6 md:py-3 px-3 py-1 rounded-lg font-medium transition-all ${
              activeTab === 'scanner'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-orange-100'
            }`}
            onClick={() => setActiveTab('scanner')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
              QR Code Scanner
            </span>
          </motion.button>
          <motion.button
            type="button"
            className={`tab relative md:px-6 md:py-3 px-3 py-1 rounded-lg font-medium transition-all ${
              activeTab === 'serialSearch'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-orange-100'
            }`}
            onClick={() => setActiveTab('serialSearch')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search by Serial
            </span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'scanner' && (
          <motion.div
            key="scanner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-8 "
          >
            <div className="max-w-7xl mx-auto rounded-xl p-6 bg-white shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <QrCodeScanner />
                </div>
                <div className="md:w-1/3 hidden md:block">
                  <Player
                    autoplay
                    loop
                    src={AuthAnimation}
                    style={{ height: 'auto', width: '100%' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'serialSearch' && (
          <motion.div
            key="serialSearch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-8"
          >
            <div className="max-w-7xl mx-auto rounded-xl p-6 bg-white shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 hidden md:block">
                  <Player
                    autoplay
                    loop
                    src={QRCODEANIMATION}
                    style={{ height: 'auto', width: '100%' }}
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="max-w-lg mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Search by Serial Number
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Enter the serial number associated with your document to retrieve the relevant
                      data.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Enter Serial Number"
                          value={serialNumber}
                          onChange={(e) => setSerialNumber(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        />
                        <motion.button
                          type="submit"
                          className="absolute right-2 top-2 px-4 py-1 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={loading}
                        >
                          {loading ? 'Searching...' : 'Search'}
                        </motion.button>
                      </div>
                    </form>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg"
                      >
                        {error}
                      </motion.div>
                    )}

                    {sheetDetails && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 p-6 bg-white rounded-xl shadow-lg border-2 border-orange-100"
                      >
                        <h4 className="text-xl font-bold text-gray-800 mb-4">Sheet Details</h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <span className="w-24 text-gray-600 font-medium">Name:</span>
                            <span className="text-gray-800">{sheetDetails.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-24 text-gray-600 font-medium">Place:</span>
                            <span className="text-gray-800">{sheetDetails.place}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-24 text-gray-600 font-medium">Reason:</span>
                            <span className="text-gray-800">{sheetDetails.reason}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-24 text-gray-600 font-medium">Amount:</span>
                            <span className="text-gray-800">₹{sheetDetails.amount}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-24 text-gray-600 font-medium">Date:</span>
                            <span className="text-gray-800">
                              {new Date(sheetDetails.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h5 className="text-lg font-semibold text-gray-800 mb-3">
                            Serial Numbers
                          </h5>
                          <div className="space-y-2">
                            {sheetDetails.serialNumbers.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                              >
                                <span className="font-medium">{item.serialNumber}</span>
                                <span
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    item.status === 'cancelled'
                                      ? 'bg-red-100 text-red-700'
                                      : 'bg-green-100 text-green-700'
                                  }`}
                                >
                                  {item.status}
                                </span>
                              </div>
                            ))}

                           <div className="hover:underline"> Get Certificate of your Sheet </div> 

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScanTabs;
