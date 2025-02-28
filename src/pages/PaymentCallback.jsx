import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import axios from 'axios';
import { CheckCircle, SplineIcon, TimerIcon } from 'lucide-react';

const PaymentCallback = () => {
    const [status, setStatus] = useState('loading');
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const merchantTransactionId = searchParams.get('merchantTransactionId') || localStorage.getItem('currentPaymentId');

        if (!merchantTransactionId) {
            setStatus('error');
            setError('Transaction ID not found');
            return;
        }

        const checkPaymentStatus = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/payments/status/${merchantTransactionId}`);
                const { data } = response;

                if (data.success) {
                    setPaymentDetails(data);
                    setStatus(data.code === 'PAYMENT_SUCCESS' ? 'SUCCESS' : 'FAILED');
                } else {
                    throw new Error(data.message || 'Payment verification failed');
                }
            } catch (error) {
                console.error('Error checking payment status:', error);
                setStatus('error');
                setError(error.response?.data?.error || error.message || 'Failed to verify payment status');
            }
        };

        // Check payment status immediately and then every 3 seconds until we get a final status
        const checkInterval = setInterval(async () => {
            if (status === 'SUCCESS' || status === 'FAILED') {
                clearInterval(checkInterval);
                return;
            }
            await checkPaymentStatus();
        }, 3000);

        checkPaymentStatus(); // Initial check

        return () => clearInterval(checkInterval);
    }, [location, status]);

    const getStatusContent = () => {
        switch (status) {
            case 'SUCCESS':
                return {
                    icon: <CheckCircle className="text-green-500 text-6xl mb-4" />,
                    title: 'Payment Successful',
                    message: 'Thank you! Your payment has been processed successfully.',
                    color: 'text-green-500'
                };
            case 'FAILED':
                return {
                    icon: <TimerIcon className="text-red-500 text-6xl mb-4" />,
                    title: 'Payment Failed',
                    message: 'Sorry, your payment could not be processed. Please try again.',
                    color: 'text-red-500'
                };
            case 'error':
                return {
                    icon: <TimerIcon className="text-red-500 text-6xl mb-4" />,
                    title: 'Error',
                    message: error || 'An error occurred while processing your payment.',
                    color: 'text-red-500'
                };
            default:
                return {
                    icon: <SplineIcon className="text-blue-500 text-6xl mb-4 animate-spin" />,
                    title: 'Processing Payment',
                    message: 'Please wait while we verify your payment...',
                    color: 'text-blue-500'
                };
        }
    };

    const content = getStatusContent();

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center"
            >
                {content.icon}
                <h2 className={`text-2xl font-bold mb-2 ${content.color}`}>{content.title}</h2>
                <p className="text-gray-600 mb-6">{content.message}</p>
                
                {(status === 'SUCCESS' || status === 'FAILED' || status === 'error') && (
                    <button
                        onClick={() => navigate('/')}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Back to Home
                    </button>
                )}

                {paymentDetails && status === 'SUCCESS' && (
                    <div className="mt-6 text-left bg-gray-50 p-4 rounded-md">
                        <h3 className="font-semibold mb-2">Payment Details:</h3>
                        <p className="text-sm text-gray-600">Transaction ID: {paymentDetails.merchantTransactionId}</p>
                        <p className="text-sm text-gray-600">Amount: ₹{paymentDetails.amount / 100}</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default PaymentCallback;