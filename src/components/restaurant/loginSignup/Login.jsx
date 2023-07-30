import React, { useState } from 'react';
import './Login.css';
import logo from '../../../assets/logo.svg';

export default function RestaurantLogin({ user, setUser, setLogin, login }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform restaurant login logic using the formData
    console.log(formData);
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked!");
  };

  return (
    <div id="moLand">
      <div id='moLogin'>
        <img id='moLogo' src={logo} alt="logo" />
        <h1>Restaurant Login</h1>
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