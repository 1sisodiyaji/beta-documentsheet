import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    name: '',
    sheetID: '',
    serialNumber: [],
    merchantOrderId: ''
  });

  const updatePaymentData = (data) => {
    console.log('Updating Payment Data:', data);
    setPaymentData(prev => ({
      ...prev,
      ...data,
      serialNumber: Array.isArray(data.serialNumber)
        ? [...prev.serialNumber, ...data.serialNumber]
        : data.serialNumber || prev.serialNumber
    }));
  }; 

  const clearPaymentData = () => {
    setPaymentData({
      amount: '',
      name: '',
      sheetID: '',
      serialNumber: '',
      merchantOrderId: '',
    });
  };

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
