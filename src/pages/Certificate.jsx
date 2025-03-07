import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import axios from "axios";
import TimeConverter from "../utils/TimeConverter";

const Certificate = () => {
  const { serialNumber } = useParams(); 
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchCertificate = async (serial) => {
    if (!serial?.trim()) {
      setError("Please enter a valid serial number");
      return;
    }

    setLoading(true);
    setError(null);
    setCertificateData(null);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/user/search-sheet/${serial}`);
      console.log(response.data);
      if (!response.data?.SheetDetails) {
        throw new Error("Certificate not found");
      }

      setCertificateData(response.data.SheetDetails);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to fetch certificate");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (serialNumber) {
      fetchCertificate(serialNumber);
    }
  }, [serialNumber]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchCertificate(searchInput.trim());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        {
          certificateData ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-white rounded-xl shadow-lg border-2 border-orange-100"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-4">Sheet Details</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">Name:</span>
                  <span className="text-gray-800">{certificateData.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">Place:</span>
                  <span className="text-gray-800">{certificateData.place}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">Reason:</span>
                  <span className="text-gray-800">{certificateData.reason}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">Amount:</span>
                  <span className="text-gray-800">₹{certificateData.amount?.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">Date:</span>
                  <span className="text-gray-800"><TimeConverter date ={certificateData.date}/></span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Serial Numbers</h5>
                <div className="space-y-2">
                  {certificateData.serialNumbers?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium">{item.serialNumber}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${item.status === 'cancelled'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                          }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => window.print()}
                  className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Download Certificate
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mb-4">Certificate Lookup</h2>

              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Serial Number"
                    value={searchInput}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Serial Number Input"
                  />
                  <button
                    type="submit"
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    disabled={loading || !searchInput.trim()}
                  >
                    {loading ? 'Searching...' : 'Search Certificate'}
                  </button>
                </div>
              </form>

              {loading && (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-red-50 text-red-700 rounded-lg mt-4"
                >
                  {error}
                </motion.div>
              )}
            </>
          )
        } 
      </div>
    </div>
  );
};

export default Certificate;
