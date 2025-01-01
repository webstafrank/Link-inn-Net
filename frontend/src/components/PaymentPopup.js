// frontend/src/components/PaymentPopup.js
import React, { useState } from 'react';

const PaymentPopup = ({ onPaymentComplete }) => {
    const [pin, setPin] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handlePayment = () => {
        setLoading(true);
        setError('');

        fetch('/api/payments/mpesa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pin }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                if (data.success) {
                    onPaymentComplete();
                    alert('Payment successful!');
                } else {
                    setError(data.message || 'Payment failed. Please try again.');
                }
            })
            .catch(() => {
                setLoading(false);
                setError('An error occurred. Please try again.');
            });
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
            role="dialog"
            aria-labelledby="payment-popup-title"
            aria-modal="true"
        >
            <div className="bg-white p-6 rounded shadow-md w-80 animate-fadeIn">
                <h3
                    id="payment-popup-title"
                    className="text-lg font-bold mb-4 text-center text-blue-800"
                >
                    Enter MPESA PIN
                </h3>
                <input
                    type="password"
                    className="w-full mb-4 p-3 border rounded focus:ring-2 focus:ring-blue-400"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter PIN"
                    disabled={loading}
                    aria-label="MPESA PIN"
                />
                {error && (
                    <p className="text-sm text-red-500 mb-4" role="alert">
                        {error}
                    </p>
                )}
                <button
                    className={`w-full py-2 rounded text-white font-bold ${
                        loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    onClick={handlePayment}
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            </div>
        </div>
    );
};

export default PaymentPopup;

