import React, { useState } from 'react';
import './Login.css';
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
    <div id="moLand">
    <div id='moLogin'>
    <img id='moLogo'  src={logo} alt="logo" />
      <h1>Login to your account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label id='moUsername' htmlFor='username'>Username:</label>
          <input 
            type='text'
            id='mohausername'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label id='moPassword' htmlFor='password'>Password:</label>
          <input
            type='password'
            id='mohapassword'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div id='moForgot'>
        <p>
            <span
              style={{ cursor: 'pointer', color: 'orange' }}
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </span>
          </p>
        </div>
        <button id='moButton' type='submit'>Login</button>
      </form>
      <div id="mohaLogin">
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
