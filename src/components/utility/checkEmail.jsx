import React, { useState } from 'react';
import './checkEmail.css';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import the emailjs library

export default function CheckEmail({ user }) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Call your backend API to send a verification code
            // ... your backend logic here ...
            const num = 98752
            // Use emailjs to send the verification code
            emailjs.send("service_q1o0tbd", "template_kd6vlh5", {
                from_name: "Food ChapChap",
                to_name: email, // Use the user's name here
                message: "Your verification code is: 98752", // Replace with the actual verification code
                their_email: email, // Use the provided email
            }, "ujb75ApoGWIK4eHX9")
            .then(() => {
                console.log('Verification code sent to:', email);
                // Navigate to the Verify component
                navigate('/verify');
            })
            .catch((error) => {
                console.error('Error sending verification code:', error);
            });
        } catch (error) {
            console.error('Error:', error);
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
                <button type="submit">Send Verification Code</button>
            </form>
        </div>
    );
}
