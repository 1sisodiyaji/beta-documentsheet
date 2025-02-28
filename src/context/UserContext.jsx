import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    name: '',
    sheetID: '',
    serialNumber: '',
    merchantOrderId: ''
  });

  const updatePaymentData = (data) => {
    setPaymentData(prev => ({ ...prev, ...data }));
  };

  const clearPaymentData = () => {
    setPaymentData({
      amount: '',
      name: '',
      sheetID: '',
      serialNumber: '',
      merchantOrderId: ''
    });
  };

  return (
    <UserContext.Provider value={{ paymentData, updatePaymentData, clearPaymentData }}>
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
