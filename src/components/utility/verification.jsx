import React, { useState } from 'react';
import './verification.css';
import { useNavigate } from 'react-router-dom';

export default function Verify() {
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();

    const handleVerifyCode = () => {
        // Simulate successful verification (replace with actual verification logic)
        if (verificationCode === "98752") {
            navigate('/ResetPassword');
        } else {
            console.error('Invalid verification code');
        }
    };

    return (
        <div className="Verify">
            <h1>Verify Your Account</h1>
            <p>Enter the verification code sent to your email:</p>
            <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
            />
            <button onClick={handleVerifyCode}>Verify Code</button>
        </div>
    );
}

