import React, { useState } from 'react';
import './checkEmail.css';
import { useNavigate } from 'react-router-dom';

export default function CheckEmail({ user }) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Call your backend API to send a verification email and generate code
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                // Assuming email was sent successfully
                console.log('Verification email sent to:', email);

                // Navigate to the Verify component
                navigate('/verify');
            } else {
                console.error('Failed to send verification email');
            }
        } catch (error) {
            console.error('Error sending verification email:', error);
        }
    };

    return (
        <div className="checkEmail">
            <h1>Enter Reset Email</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Send Email and Verify</button>
            </form>
        </div>
    );
}
