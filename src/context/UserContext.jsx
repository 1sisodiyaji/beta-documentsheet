import { useState, useEffect } from 'react';
import { UserContext } from './userContext';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'documentsheet123@2024';
const COOKIE_NAME = 'DocumentSheet_Payment_Data';
const CERTIFICATE_COOKIE_NAME = 'DocumentSheet_Certificate_Data';

export const UserProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    name: '',
    sheetID: '',
    serialNumber: [],
    merchantOrderId: '',
  });

  const [certificateData, setCertificateData] = useState({
    serialNumber: [],
    merchantOrderId: '',
  });

  const saveToCookie = (data) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    Cookies.set(COOKIE_NAME, encryptedData, { expires: 1 / 48 });
  };

  const saveCertificateToCookie = (data) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    Cookies.set(CERTIFICATE_COOKIE_NAME, encryptedData, { expires: 1 / 48 });
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

  const loadFromCookie2 = () => {
    const cookieData = Cookies.get(CERTIFICATE_COOKIE_NAME);
    if (cookieData) {
      try {
        const bytes = CryptoJS.AES.decrypt(cookieData, SECRET_KEY);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setCertificateData(decryptedData);
      } catch (error) {
        console.error('Error decrypting cookie data:', error);
      }
    }
  };

  const updatePaymentData = (data) => {
    console.log('Updating Payment Data:', data);
    setPaymentData((prev) => {
      const updatedData = {
        ...prev,
        ...data,
        serialNumber: Array.isArray(data.serialNumber) ? [...prev.serialNumber, ...data.serialNumber] : data.serialNumber || prev.serialNumber,
      };
      saveToCookie(updatedData); // Save updated data to cookie
      return updatedData;
    });
  };

  const updateCertificateDetails = (data) => {
    console.log('Incoming Certificate Data:', data);
    setCertificateData((prev) => {
      // Handle direct serialNumber and merchantOrderId updates
      const updatedData = {
        ...prev,
        merchantOrderId: data.merchantOrderId || prev.merchantOrderId,
        serialNumber: data.serialNumber
          ? // If serialNumber is a string, make it an array item
            typeof data.serialNumber === 'string'
            ? [...(prev.serialNumber || []), data.serialNumber]
            : // If it's already an array, use it directly
              Array.isArray(data.serialNumber)
              ? data.serialNumber
              : prev.serialNumber
          : prev.serialNumber || [],
      };

      console.log('Updated Certificate Data:', updatedData);
      saveCertificateToCookie(updatedData);
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

  const clearCertificateData = () => {
    setCertificateData({
      serialNumber: [],
      merchantOrderId: '',
    });
    Cookies.remove(CERTIFICATE_COOKIE_NAME);
  };

  useEffect(() => {
    loadFromCookie();
    loadFromCookie2();
  }, []);

  return (
    <UserContext.Provider
      value={{
        paymentData,
        updatePaymentData,
        clearPaymentData,
        certificateData,
        updateCertificateDetails,
        clearCertificateData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
