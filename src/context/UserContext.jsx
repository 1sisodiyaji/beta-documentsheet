import { createContext, useContext, useState ,useEffect} from 'react';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'documentsheet123@2024';
const COOKIE_NAME = 'user_Details_DOC';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    name: '',
    sheetID: '',
    serialNumber: [],
    merchantOrderId: '',
    
  }); 

  const saveToCookie = (data) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    Cookies.set(COOKIE_NAME, encryptedData, { expires: 1/48 });
  };

  const loadFromCookie = () => {
    const cookieData = Cookies.get(COOKIE_NAME);
    if (cookieData) {
      try {
        const bytes = CryptoJS.AES.decrypt(cookieData, SECRET_KEY);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setPaymentData(decryptedData);
      } catch (error) {
        console.error('Error decrypting cookie data:', error);
      }
    }
  };
 
  const updatePaymentData = (data) => {
    console.log('Updating Payment Data:', data);
    setPaymentData(prev => {
      const updatedData = {
        ...prev,
        ...data,
        serialNumber: Array.isArray(data.serialNumber)
          ? [...prev.serialNumber, ...data.serialNumber]
          : data.serialNumber || prev.serialNumber
      };
      saveToCookie(updatedData); // Save updated data to cookie
      return updatedData;
    });
  };

  const clearPaymentData = () => {
    setPaymentData({
      amount: '',
      name: '',
      sheetID: '',
      serialNumber: '',
      merchantOrderId: '',
    });
    Cookies.remove(COOKIE_NAME);
  };

  useEffect(() => {
    loadFromCookie();
  }, []);

  return (
    <UserContext.Provider value={{ 
      paymentData, 
      updatePaymentData, 
      clearPaymentData 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
