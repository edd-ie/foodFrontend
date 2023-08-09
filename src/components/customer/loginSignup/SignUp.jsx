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

export default function CustomerSignUp({setChange, user, setUser, setLogin, login }) {
  const [location, setLocation] = useState([])
  const [image, setImage] = useState('')
  
  function handleImage(e) {
    let file = e.target.files[0]
    let form = new FormData()
    
    form.append('file', file)
    form.append('upload_preset', 'testCase')
    setImage(form)
  }

  function handleSignUp(e) {
    e.preventDefault();
    let form = e.target
    let formData = new FormData(form)
    
    //Image submission
    const cloudName = "https://api.cloudinary.com/v1_1/dmv2gp5qf"
    fetch(`${cloudName}/image/upload`, {
      method: 'POST',
      body: image
    }).then(res => {
      return res.json()
    })
    .then(data => {      
      // Data submission
      let set = {
        username: formData.get('username'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        password_confirmation: formData.get('password'),
        policy: formData.get('policy')?true:false,
        picture: data.secure_url,
      }
      console.log("file: SignUp.jsx:59 -> handleSignUp -> set:", set);

      fetch('https://backendfood-co7z.onrender.com/customers',{
        method: 'POST',
        headers: {"Accept": "*/*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(set)
      })
      .then(res => {
        return res.json()})
      .then(data => {
        alert("Signup successful")
        console.log(data)
        localStorage.getItem('foodChapUser') ? localStorage.removeItem('foodChapUser') : null
        localStorage.getItem('foodChapSide') ? localStorage.removeItem('foodChapSide') : null

        localStorage.setItem('foodChapUser', data.id)
        localStorage.setItem('foodChapSide', 'cust')
        let x = localStorage.getItem('foodChapUser')
        setUser(data)
        setLogin(true)
      })
      .catch(err => {
        alert("Error on signup try again after 1 min")
        console.log(err)})

    })


    let data = {}
  }



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
    <div className="eSIgnup">
      <img src={logo} alt="logo" id='eSignLogo'/>
      <h3>Create account</h3>
      <form action="submit" className="eSIgnupForm" onSubmit={handleSignUp}>
        <label className="eFormLabel" htmlFor="username">Username:</label>
        <input style={{ color:'black',background:'white', width: '80%', height:'4%', border:'none', borderRadius:'12px'}} className='eSignIn' type="text" placeholder="Userx1970" name='username' required/>
        
        <label className="eFormLabel" htmlFor="email">Email:</label>
        <input className='eSignIn' type="email" placeholder="Email" name='email' required/>
        
        <label className="eFormLabel" htmlFor="phone">Phone:</label>
        <input style={{ color:'black',background:'white', width: '80%', height:'4%', border:'none', borderRadius:'12px'}} className='eSignIn' type="number" placeholder="07110101010" name='phone' required />
          
        <label className="eFormLabel" htmlFor="password">Password:</label>
        <input  className='eSignIn' type="password" placeholder="password" name='password' required/>
        
        <label className="eFormLabel" htmlFor="profileImage">Profile image:</label>
        <input type="file" name='file' onChange={handleImage} required/>

        <p id='ePolicyText' className='eFormTransfer' >
          <input type="checkbox" name="policy" id="policy" required/>
          I agree to the terms and conditions</p>

        <input type="submit" value="Sign Up" className="eSubFrmBtn" />
        <p className="eFormTransfer">Already have an account? <span onClick={() => setChange(false)}>Login</span></p>
        </form>
    </div>
  );
}
