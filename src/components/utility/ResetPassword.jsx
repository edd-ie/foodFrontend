import React, { useState } from 'react';
import './ResetPassword.css';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        // Simulate successful password reset (replace with actual reset logic)
        if (newPassword === confirmPassword) {
            console.log('Password reset successful');
        } else {
            console.error('Passwords do not match');
        }
    };

    return (
        <div className="ResetPassword">
            <h1>Reset Your Password</h1>
            <p>Enter your new password:</p>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />
            <p>Confirm your new password:</p>
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button onClick={handleResetPassword}>Reset Password</button>
        </div>
    );
}
