import { useEffect, useState } from 'react';
import CreateSheet from '../data/CreateSheet.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import StatesData from '../data/AddressData.json';
import Banner from '../components/common/Banner';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useUserContext } from '../context/UserContext';

const CreateNewSheet = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { paymentData, updatePaymentData } = useUserContext();
  useEffect(() => {
    if (location.pathname === '/create-new-sheet') {
      paymentData.serialNumber = [];
    }
  }, [location])

  const [docData, setDocData] = useState({
    UserName: '',
    Reason: 'Supportive Document',
    Village: '',
    Post: '',
    state: '',
    District: '',
    Date: '',
    NumberOfSheet: '1',
  });

  const [errors, setErrors] = useState({
    UserName: '',
    Reason: '',
    Village: '',
    Post: '',
    state: '',
    District: '',
    Date: '',
    NumberOfSheet: '',
  });

  const validateFields = () => {
    const tempErrors = {}
    let isValid = true
    const requiredFields = ['UserName', 'Reason', 'Village', 'NumberOfSheet']
    
    requiredFields.forEach((field) => {
      if (!docData[field]) {
        tempErrors[field] = `${field} is required`
        toast.error(`${field} is required`)
        setErrors(tempErrors)
        isValid = false
      }
    })

    if (docData.NumberOfSheet > 5) {
      tempErrors.NumberOfSheet = "Maximum 5 sheets can be printed"
      isValid = false
    }

    setErrors(tempErrors)
    return isValid
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('[CreateNewSheet] Input changed:', { field: name, value });
    setDocData((prev) => {
      const newData = {
        ...prev,
        [name]: value,
        ...(name === 'state' && { District: '' }),
      };
      console.log('[CreateNewSheet] Updated form data:', newData);
      return newData;
    });
  };

  const districts = docData.state
    ? StatesData.find((state) => state.state === docData.state)?.districts || []
    : [];

  const onHandleDocCreated = async (e) => {
    e.preventDefault();
    if (!validateFields())return;

    const today = new Date();
    const todayFormatted = today.toISOString().split('T')[0];

    if (docData.Date < todayFormatted) {
      console.log('[CreateNewSheet] Invalid date selected:', {
        selected: docData.Date,
        today: todayFormatted,
      });
      toast.error('Please do not select past dates.');
      return;
    }

    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 31);
    const maxDateFormatted = maxDate.toISOString().split('T')[0];

    if (docData.Date >= maxDateFormatted) {
      toast.error('Please select a date within the next 31 days.')
      return
    }

    if (docData.Reason.length > 300) {
      toast.error('Reason must be within 300 Charachter');
    }
    if (docData.Village.length > 30) {
      toast.error('Village name must be within 30 chatachter');
    }
    if (docData.Post.length > 30) {
      toast.error('Post lenght must be within 30 Charachter');
    }
    if (docData.NumberOfSheet > 5) {
      toast.error('Max 5 Sheet can be printed .');
    }

    try {
      setLoading(true);
      console.log('[CreateNewSheet] Sending API request to create sheet');

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user/create-sheet`,
        docData
      );

      if (response.data.success) {
        const { amount, name, _id: sheetID, serialNumbers } = response.data.data;
        console.log('[CreateNewSheet] Sheet created successfully:', {
          amount,
          name,
          sheetID,
          serialNumbers,
        });

        const serialNumberValues = serialNumbers.map((item) => item.serialNumber);
        console.log('[CreateNewSheet] Updating payment data');
        updatePaymentData({
          amount,
          name,
          sheetID,
          serialNumber: serialNumberValues,
        });

        console.log('[CreateNewSheet] Navigating to payment page');
        navigate('/payment');
      } else {
        console.log('[CreateNewSheet] API returned success: false');
        toast.error('Failed to Create Sheet');
      }
    } catch (error) {
      console.error(
        '[CreateNewSheet] Error creating sheet:',
        error.response?.data || error.message
      );
      toast.error('Failed to create sheet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create New Document Sheet | Easy Document Creation</title>
        <meta
          name="description"
          content="Create a new document sheet quickly and easily. Our secure platform helps you generate, manage, and store your important documents with QR code access."
        />
        <meta
          name="keywords"
          content="create document, new sheet, document generation, QR code document, secure documents, digital documents, document management"
        />
        <meta property="og:title" content="Create New Document Sheet - Easy Document Creation" />
        <meta
          property="og:description"
          content="Start creating your new document sheet now. Our platform makes it easy to generate, manage, and securely store your important documents."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com/create-new-sheet" />
      </Helmet>

      <Banner title="Create Your Sheet" text="Fill your information correctly and get your sheet" />

      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex md:flex-row flex-col-reverse justify-center items-center py-6 md:mb-0 mb-16 px-2 mx-auto w-full">
          <motion.div
            className="md:w-2/3 w-full space-y-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Input fields */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col p-4 border-2 border-gray-200 rounded-lg">
                <label className="mb-2 font-medium text-gray-700" htmlFor="UserName">
                  Your Name <span className='text-red-500'>*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  type="text"
                  name="UserName"
                  value={docData.UserName}
                  onChange={handleInputChange}
                  id="UserName"
                  placeholder="Enter Name"
                  className="py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 ring-4 ring-green-100"
                />
                {errors.UserName && <p className="text-red-500 text-xs">{errors.UserName}</p>}
              </div>

              <div className="flex flex-col p-4 border-2 border-gray-200 rounded-lg">
                <label className="mb-2 font-medium text-gray-700" htmlFor="Reason">
                  Reason <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="Reason"
                  value={docData.Reason}
                  onChange={handleInputChange}
                  id="Reason"
                  maxLength={300}
                  placeholder="Enter Reason"
                  className="py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 ring-4 ring-green-100"
                />
                {errors.Reason && <p className="text-red-500 text-xs">{errors.Reason}</p>}
              </div>
            </motion.div>

            {/* Village and Post */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col p-4 border-2 border-gray-200 rounded-lg">
                <label className="mb-2 font-medium text-gray-700" htmlFor="Village">
                  Village <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="Village"
                  value={docData.Village}
                  onChange={handleInputChange}
                  id="Village"
                  maxLength={30}
                  placeholder="Enter Your Village"
                  className="py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 ring-4 ring-green-100"
                />
                {errors.Village && <p className="text-red-500 text-xs">{errors.Village}</p>}
              </div>

              <div className="flex flex-col p-4 border-2 border-gray-200 rounded-lg">
                <label className="mb-2 font-medium text-gray-700" htmlFor="Post">
                  Post
                </label>
                <input
                  type="text"
                  name="Post"
                  value={docData.Post}
                  onChange={handleInputChange}
                  id="Post"
                  maxLength={30}
                  placeholder="Enter Post"
                  className="py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 ring-4 ring-green-100"
                />
                {errors.Post && <p className="text-red-500 text-xs">{errors.Post}</p>}
              </div>
            </motion.div>

            {/* State, District, and Date */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col p-4 border-2 border-gray-200 rounded-lg">
                <label className="mb-2 font-medium text-gray-700" htmlFor="state">
                  Select State
                </label>
                <select
                  id="state"
                  name="state"
                  value={docData.state}
                  onChange={handleInputChange}
                  className="py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 ring-4 ring-green-100"
                >
                  <option value="">Select State</option>
                  {StatesData.map((state, index) => (
                    <option key={index} value={state.state}>
                      {state.state}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
              </div>

                <div className="flex flex-col p-4 border-2 border-gray-200 rounded-lg">
                  <label className="mb-2 font-medium text-gray-700" htmlFor="District">
                    Select District
                  </label>
                  <select
                    id="District"
                    name="District"
                    value={docData.District}
                    onChange={handleInputChange}
                    className="py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 ring-4 ring-green-100"
                  >
                    <option value="">Select District</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  {errors.District && <p className="text-red-500 text-xs">{errors.District}</p>}
                </div>
              

              <div className="flex flex-col p-4 border-2 border-gray-200 rounded-lg">
                <label className="mb-2 font-medium text-gray-700" htmlFor="Date">
                  Select Date
                </label>
                <input
                  type="date"
                  name="Date"
                  value={docData.Date}
                  min={(() => {
                    const today = new Date()
                    today.setMinutes(today.getMinutes() - today.getTimezoneOffset())
                    return today.toISOString().split('T')[0]
                  })()}
                  max={(() => {
                    const today = new Date()
                    const maxDate = new Date()
                    maxDate.setMonth(today.getMonth() + 1)
                    maxDate.setMinutes(maxDate.getMinutes() - maxDate.getTimezoneOffset())
                    return maxDate.toISOString().split('T')[0]
                  })()}
                  onChange={handleInputChange}
                  id="Date"
                  className="py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 ring-4 ring-green-100"
                />
                {errors.Date && <p className="text-red-500 text-xs">{errors.Date}</p>}
              </div>
            </motion.div>

            <motion.div
              className="flex md:flex-row flex-col gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Number of Sheets */}
              <div className="flex flex-col p-4 border-2 border-gray-200 rounded-lg w-full ">
                <label className="mb-2 font-medium text-gray-700" htmlFor="NumberOfSheet">
                  Number of Sheets <span className='text-red-500'>*</span>
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  id="NumberOfSheet"
                  name="NumberOfSheet"
                  value={docData.NumberOfSheet}
                  onChange={handleInputChange}
                  className="py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500 ring-4 ring-green-100"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </motion.select>
                {errors.NumberOfSheet && (
                  <p className="text-red-500 text-xs">{errors.NumberOfSheet}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center p-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  onClick={onHandleDocCreated}
                  className={`w-80 h-12 py-3 rounded-xl focus:outline-none ring-2 transition-all duration-700 ring-green-100 bg-green-300 text-black hover:bg-green-400 ${loading ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
                      <span className="ml-2">Creating...</span>
                    </div>
                  ) : (
                    'Create Sheet'
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Animation Section */}
          <motion.div
            className="hidden md:block md:w-1/3 w-full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Player autoplay loop src={CreateSheet} style={{ height: 'auto', width: '100%' }} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CreateNewSheet;
