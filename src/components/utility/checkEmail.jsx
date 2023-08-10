import React, { useEffect, useState } from 'react';
import './checkEmail.css';
import { useNavigate } from 'react-router-dom';

export default function CheckEmail({ user }) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform the logic for sending the reset password email here
        console.log('Email submitted:', email);
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
