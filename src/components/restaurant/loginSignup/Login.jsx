import React, { useState } from 'react';
import '../../customer/loginSignup/login.css';
import logo from '../../../assets/logo1.png';
import RestaurantSignUp from './SignUp'

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

  const [change, setChange] = useState(false)

  return (
    <div id="maLand">
    {!change && <div id='maLogin'>
    <img id='maLogo'  src={logo} alt="logo"  style={{alignSelf: 'center', marginLeft:'20%', marginBottom:'5%'}}/>
      <h1>Login to your account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label id='maUsername' htmlFor='email'>Email:</label>
          <input 
            type='email'
            id='markusername'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label id='maPassword' htmlFor='password'>Password:</label>
          <input
            type='password'
            id='markpassword'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div id='maForgot'>
        <p>
            <span
              style={{ cursor: 'pointer', color: 'orange' }}
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </span>
          </p>
        </div>
        <button id='maButton' type='submit'>Login</button>
      </form>
      <div id="markLogin">
      <p>
          Don't have an account?
          <span
            style={{ cursor: 'pointer', color: 'orange'}}
            onClick={() => setChange(true)}
          >
           Create account
          </span>
        </p>
      </div>
    </div>}
    {change && <RestaurantSignUp user={user} setUser={setUser} login={login} setLogin={setLogin}/>}
    </div>
  );
}