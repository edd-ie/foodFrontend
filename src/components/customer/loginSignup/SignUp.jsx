import React, { useEffect, useState } from 'react';
import './signup.css';
import logo from '../../../assets/logo1.png';




// id
// name
// email
// phone
// policy
// pay_bill
// acc_num
// till_num
// ambience
// cuisine
// price_range
// latitude
// longitude
// ratings
// picture

export default function CustomerSignUp({ user, setUser, setLogin, login }) {
  const [location, setLocation] = useState([])
  console.log("file: SignUp.jsx:26 -> CustomerSignUp -> location:", location);

  useEffect(() => {
    console.log("Start");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    (error) => {
      console.log(error);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
}, [])

  return (
    <div className="gSIgnup">
      <img src={logo} alt="logo" id='gSignLogo'/>
      <h3>Create account</h3>
      <form action="submit" className="gSIgnupForm">
        <label className="gFormLabel" htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name='email' required/>
        
        <label className="gFormLabel" htmlFor="phone">Phone:</label>
        <input type="number" placeholder="phone" name='phone' required />
          
        <label className="gFormLabel" htmlFor="password">Password</label>
        <input type="password" placeholder="password" name='password' required/>
        
        <p id='gPolicyText'>
          <input type="checkbox" name="policy" id="policy" required/>
          I agree to the terms and conditions</p>

        <input type="submit" value="Sign Up" className="gSubFrmBtn" />
        <p className="gFormTransfer">Already have an account? <span onClick={() => {}}>Login</span></p>
        </form>
    </div>
  );
}
