import { useState } from 'react';
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
  const [sheetDetails, setSheetDetails] = useState(null); // State for fetched data
  const [activeTab, setActiveTab] = useState('scanner'); // Default tab

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serialNumber) {
      toast.error('Please enter a serial number!');
      return;
    }

    setLoading(true);
    setError(null);
    setSheetDetails(null); // Reset previous data before a new request

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/user/search-sheet/${serialNumber}`
      );

      const data = response.data;

      // Set the fetched sheet details
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
    <section className="md:my-24 p-1">
      <div className="border-dashed border-4 p-2 rounded-2xl max-w-2xl border-orange-200 mx-auto flex space-x-4 justify-center mb-8">
        <button
          className={`tab ${activeTab === 'scanner' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'} px-6 py-2 rounded-lg`}
          onClick={() => setActiveTab('scanner')}
        >
          QR Code Scanner
        </button>
        <button
          className={`tab ${activeTab === 'serialSearch' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'} px-6 py-2 rounded-lg`}
          onClick={() => setActiveTab('serialSearch')}
        >
          Search by Serial Number
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'scanner' && (
          <div className="md:py-16 py-12 p-1 flex justify-center">
            <div className="max-w-7xl mx-auto rounded-lg md:p-8 p-2 flex justify-center border-dashed border-2 border-orange-300">
              <div className="flex flex-col items-center md:w-2/3">
                <QrCodeScanner />
              </div>
              <div className="w-1/3 hidden md:block">
                <Player
                  autoplay
                  loop
                  src={AuthAnimation}
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'serialSearch' && (
          <div className="md:py-16 py-12 p-1">
            <div className="max-w-7xl mx-auto rounded-lg md:p-8 p-2 flex justify-center border-dashed border-2 border-orange-300">
              <div className="w-1/3 hidden md:block">
                <Player
                  autoplay
                  loop
                  src={QRCODEANIMATION}
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
              <div className="flex flex-col items-center md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Search by Serial Number</h3>
                <p className="text-gray-600 mb-8">
                  Enter the serial number associated with your document to retrieve the relevant
                  data.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md flex flex-col space-y-4 p-1"
                >
                  <input
                    type="text"
                    placeholder="Enter Serial Number"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all"
                  >
                    Fetch Data
                  </button>
                </form>

                {loading && <p className="text-orange-500 mt-4">Searching...</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}

                {/* Display the sheet details if available */}
                {sheetDetails && (
                  <div className="mt-8 p-4 w-full max-w-md bg-white shadow rounded-lg border-2 border-orange-200">
                    <h4 className="text-lg font-bold text-gray-700">Sheet Detail</h4>
                    <p className="text-sm text-gray-600">
                      <strong>Name :</strong> {sheetDetails.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Place :</strong> {sheetDetails.place}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Reason :</strong> {sheetDetails.reason}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Amount :</strong> ₹ {sheetDetails.amount}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Date :</strong> {new Date(sheetDetails.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600 mt-4">
                      <strong>Serial Numbers :</strong>
                    </p>
                    <ul className="pl-5 text-gray-600">
                      {sheetDetails.serialNumbers.map((item, index) => (
                        <li key={index}>
                          {item.serialNumber}{' '}
                          <span
                            className={`${
                              item.status === 'cancelled'
                                ? 'text-red-400 underline'
                                : 'text-green-400'
                            }`}
                          >
                            {' '}
                            {item.status}{' '}
                          </span>{' '}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScanTabs;
