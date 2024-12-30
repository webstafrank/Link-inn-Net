// frontend/src/components/PaymentPopup.js
import React, { useState } from 'react';

const PaymentPopup = ({ onPaymentComplete }) => {
    const [pin, setPin] = useState('');

    const handlePayment = () => {
        fetch('/api/payments/mpesa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pin }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert('Payment successful!');
                    onPaymentComplete();
                } else {
                    alert('Payment failed. Try again.');
                }
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-bold mb-4">Enter MPESA PIN</h3>
                <input
                    type="password"
                    className="w-full mb-4 p-2 border rounded"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter PIN"
                />
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    onClick={handlePayment}
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default PaymentPopup;

