import{ useState } from 'react';
import axios from 'axios';

const MpesaPayment = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');

    const handlePayment = async () => {
        setLoading(true);
        setPaymentStatus('');

        try {
            // Step 1: Get access token
            const tokenResponse = await axios.get('http://localhost:5000/token');
            const token = tokenResponse.data.token;

            // Step 2: Initiate STK Push
            const stkResponse = await axios.post(
                'http://localhost:5000/stkpush',
                { phone, amount },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Handle the STK Push response
            if (stkResponse.data.ResponseCode === '0') {
                setPaymentStatus('Payment initiated! Check your phone to complete the payment.');
            } else {
                setPaymentStatus('Failed to initiate payment. Please try again.');
            }
        } catch (error) {
            setPaymentStatus('Payment failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>M-Pesa Payment</h1>
            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Processing...' : 'Pay with M-Pesa'}
            </button>

            {paymentStatus && <p>{paymentStatus}</p>}
        </div>
    );
};

export default MpesaPayment;