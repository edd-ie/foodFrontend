import React, { useState } from 'react';
import './login.css';
import logo from '../../../assets/logo1.png';
import { useNavigate} from 'react-router-dom';
import CustomerSignUp from './SignUp';



export default function CustomerLogin({ user, setUser, setLogin, login }) {
  const [change, setChange] = useState(false);
  // let history = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
  };

  //const nav = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let set = {email: formData.email, password: formData.password}
    console.log(set);

    fetch('https://backendfood-co7z.onrender.com/customer/login',{
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
      localStorage.setItem('foodChapSide', 'cust')
      let x = localStorage.getItem('foodChapUser')
      setUser(data)
      setLogin(true)

    })
    .catch(err => console.log(err))
  };

  const handleForgotPassword = () => {
    
    console.log("Forgot Password clicked!");
   
    let navigate = useNavigate()
    navigate("/checkEmail")
  };

  return (
    <>
      {!change&&<div id="maLand">
        <div id='maLogin'>
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
            <p style={{
              marginTop: '3%'
            }}>
                New here?
                <span
                  style={{ cursor: 'pointer', color: 'orange', marginLeft: '3%'}}
                  onClick={() => {
                    setChange(true);
                  }              
                  }
                >
                Create account
                </span>
              </p>
            </div>
        </div>
      </div>}
      {change && <CustomerSignUp user={user} setUser={setUser} setLogin={setLogin} login={login} setChange={(e)=>setChange(e)} />}
    </>
  );
}
