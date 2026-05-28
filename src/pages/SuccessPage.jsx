import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useUserContext } from '../context/useUserContext';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasFetched = useRef(false);
  const [loading, setLoading] = useState(false);
  const [isDownladoing, setIsDownloading] = useState(false);
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
          name,
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

    try {
      setIsDownloading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/genrate-Sheet/${sheetID}`, {
        responseType: 'blob',
      });

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
        setIsDownloading(false);
        toast.success('Your Sheet has been downloaded');
      } else {
        console.error('[SuccessPage] Sheet download failed with status:', response.status);
        setIsDownloading(false);
        toast.error('Failed to Download Sheet');
      }
    } catch (error) {
      console.error('[SuccessPage] Sheet download error:', error);
      setIsDownloading(false);
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
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/genrate-bill/${sheetID}`, {
        responseType: 'blob',
      });

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
        setLoading(false);
        toast.success('Your Invoice has been downloaded');
      } else {
        console.error('[SuccessPage] Bill download failed with status:', response.status);
        setLoading(false);
        toast.error('Failed to Download Invoice');
      }
    } catch (error) {
      console.error('[SuccessPage] Bill download error:', error);
      setLoading(false);
      toast.error('Failed to Download Invoice');
    } finally {
      setLoading(false);
    }
  };

  const ShiftToHome = (route) => {
    clearPaymentData();
    navigate(route);
  };
  const [seconds, setSeconds] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    <>
      <div className="py-24 min-h-screen bg-[url('https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734580950/Checker_euvc9v.png')] bg-no-repeat bg-cover bg-center mx-auto">
        {isDownladoing ? (
          <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
              <div className="flex flex-col items-center p-6 bg-white shadow-xl rounded-xl">
                {/* Animated Spinner */}
                <div className="relative flex items-center justify-center mb-6">
                  <div className="w-16 h-16 border-4 border-t-green-500 border-gray-300 rounded-full animate-spin mb-2"></div>
                  <div className="absolute flex space-x-1 bottom-[-10px]">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>

                {/* Countdown Timer */}
                <h1 className="text-center text-xl font-semibold text-gray-900 animate-fade-in">
                  {' '}
                  Please wait for <span className="text-green-500 font-bold">{seconds}</span> seconds.{' '}
                </h1>
                <p className="text-md text-gray-600 mt-2 text-center animate-fade-in"> Kindly do not leave the page or turn off your screen</p>
                <h3 className="text-lg text-gray-800 mt-2 text-center animate-fade-in">
                  {' '}
                  <strong>Note:</strong> To ensure the document&apos;s durability and quality, please use 100 GSM paper for printing.
                </h3>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Get Invoice Button */}
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-end pr-8">
                <button onClick={() => DownloadBill(sheetID)} className={`px-6 py-2 rounded-md bg-green-200 text-green-800 font-medium hover:bg-green-300 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
                  {loading ? 'Downloading...' : 'Get Invoice'}
                </button>
              </div>

              {/* Thank You Message */}
              <h1 className="text-center text-lg md:text-xl font-medium text-gray-800 mt-8 mx-2">Thank you for connecting with us. Please share your journey.</h1>

              <div className="flex justify-center items-center mt-8">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
                  {/* Star Rating */}
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`fi fi-sr-star cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} text-2xl`}
                        onClick={() => handleRatingClick(star)} // Set rating on click
                      ></i>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="p-1">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      placeholder="Share your feedback..."
                      className="w-full px-4  py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none resize-none"
                      value={description} // Controlled input
                      onChange={(e) => setDescription(e.target.value)} // Update state on input
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      className={`px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handleSubmit}
                      disabled={isSubmitting} // Disable while submitting
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex justify-center mt-12 space-x-6">
                <div onClick={() => ShiftToHome('/create-new-sheet')} className="flex flex-col justify-center items-center bg-yellow-100 p-6 rounded-xl shadow-md hover:bg-yellow-200 transition w-1/2 h-64 cursor-pointer">
                  <img src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1733941760/image_19_gsh3ic.png" alt="new sheet" loading="lazy" />
                  <h1 className="text-gray-800 font-medium md:text-3xl  overflow-hidden mt-4">Create New Sheet</h1>
                </div>
                <div onClick={() => ShiftToHome('/')} className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-xl shadow-md hover:bg-gray-200 transition w-1/2 h-64 cursor-pointer">
                  <img src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1733940865/Simplification_1_hkqulx.png" alt="home" loading="lazy" />
                  <h1 className="text-gray-800 font-medium md:text-3xl overflow-hidden mt-4">Back To Home</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SuccessPage;
