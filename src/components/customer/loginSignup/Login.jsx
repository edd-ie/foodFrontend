import React, { useState } from 'react';
import './login.css';
import logo from '../../../assets/logo.svg';




export default function CustomerSignUp({ user, setUser, setLogin, login }) {

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    agreeTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleForgotPassword = () => {
    
    console.log("Forgot Password clicked!");
  };

  return (
    <div id="mLand">
    <div id='mLogin'>
    <img id='mLogo'  src={logo} alt="logo" />
      <h1>Login to your account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label id='mUsername' htmlFor='username'>Username:</label>
          <input 
            type='text'
            id='markusername'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label id='mPassword' htmlFor='password'>Password:</label>
          <input
            type='password'
            id='markpassword'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div id='mForgot'>
        <p>
            <span
              style={{ cursor: 'pointer', color: 'orange' }}
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </span>
          </p>
        </div>
        <button id='mButton' type='submit'>Login</button>
      </form>
      <div id="markLogin">
      <p>
          Don't have an account?  
          <span
            style={{ cursor: 'pointer', color: 'orange'}}
            onClick={() => setLogin(!login)}
          >
          Create account
          </span>
        </p>
      </div>
    </div>
    </div>
  );
}
