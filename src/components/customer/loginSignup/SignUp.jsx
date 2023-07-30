import React, { useState } from 'react';
import './signup.css';




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

  return (
    <div id="gMain">
    <div id='gSignup'>
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label1 htmlFor='name'>Name:</label1>
          <input type='text' id='name' name='name' value={formData.name} onChange={handleChange}required />
        </div>
        <div>
          <label2 htmlFor='username'>Username:</label2>
          <input type='text' id='username' name='username' value={formData.username} onChange={handleChange} required/>
        </div>
        <div>
          <label3 htmlFor='email'>Your email:</label3>
          <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label4 htmlFor='password'>Password:</label4>
          <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} required />
        </div>
        <div id="gCheckbox">
          <input type='checkbox' id='agreeTerms' name='agreeTerms' checked={formData.agreeTerms} onChange={handleChange} required />
          <label5 htmlFor='agreeTerms'>
            Agree to all Term,Privacy Policies and Fees
          </label5>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
      <div id="gLogin">
      <p>
        Have an account?
        <span
          style={{ cursor: 'pointer', color: 'orange' }}
          onClick={() => setLogin(!login)}
        >
          {login ? 'Login' : 'Login'}
        </span>
      </p>
      </div>
    </div>
    </div>
  );
}
