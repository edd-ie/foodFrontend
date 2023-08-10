import React, { useState } from 'react';
import './verification.css';

export default function Verify({ user }) {
    const [verificationCode, setVerificationCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform the logic to verify the entered code
        console.log('Verification code submitted:', verificationCode);
    };

    return (
        <div className="Verify">
            <h1>Verify Your Account</h1>
            <p>A verification code has been sent to your email.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Verification Code:
                    <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Verify</button>
            </form>
        </div>
    );
}
