import React, { useState } from 'react';
import './Login.css';
import logo from '../../../assets/logo.svg';

export default function RestaurantLogin({ user, setUser, setLogin, login }) {
  const [formData, setFormData] = useState({
    email: '',
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
    let set = {email: formData.email, password: formData.password}
    console.log(set);

    fetch('https://backendfood-co7z.onrender.com/restaurant/login',{
      method: 'POST',
      headers: {"Accept": "*/*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(set),
      withCredentials: true,
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      localStorage.getItem('foodChapUser') ? localStorage.removeItem('foodChapUser') : null
      localStorage.getItem('foodChapSide') ? localStorage.removeItem('foodChapSide') : null
      
      localStorage.setItem('foodChapUser', data.id)
      localStorage.setItem('foodChapSide', 'res')
      setUser(data)
    })
    .catch(err => console.log(err))
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
            <label id='moUsername' htmlFor='username'>email:</label>
            <input 
              type='email'
              id='mohausername'
              name='email'
              value={formData.email}
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