import React, { useState, useEffect } from "react";
import './profR.css';
import logo from '../../assets/logo1.png';
import { useNavigate } from "react-router-dom";

export default function ProfR({ user }) {
  const [res, setRes] = useState({});
  const [editedPicture, setEditedPicture] = useState("");
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [editedPolicy, setEditedPolicy] = useState(false);
  const [editedTillNum, setEditedTillNum] = useState("");
  const [editedAmbience, setEditedAmbience] = useState("");
  const [editedCuisine, setEditedCuisine] = useState("");
  const [editedPriceRange, setEditedPriceRange] = useState("");
  const [editedRatings, setEditedRatings] = useState("");

  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/restaurants/1')
      .then(response => response.json())
      .then(data => {
        setRes(data);
        setEditedPicture(data.picture);
        setEditedName(data.name);
        setEditedEmail(data.email);
        setEditedPhone(data.phone.toString());
        setEditedPolicy(data.policy);
        setEditedTillNum(data.till_num.toString());
        setEditedAmbience(data.ambience);
        setEditedCuisine(data.cuisine);
        setEditedPriceRange(data.price_range);
        setEditedRatings(data.ratings.toString());
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleImage = (e) => {
    let file = e.target.files[0];
    let form = new FormData();
    
    form.append('file', file);
    form.append('upload_preset', 'testCase');
    
    fetch('https://api.cloudinary.com/v1_1/dmv2gp5qf/image/upload', {
      method: 'POST',
      body: form
    })
    .then(res => res.json())
    .then(data => {
      setEditedPicture(data.secure_url);
    })
    .catch(error => {
      console.error("Error uploading image:", error);
    });
  };

  const handleEditSubmit = () => {
    const updatedData = {
      picture: editedPicture,
      name: editedName,
      email: editedEmail,
      phone: parseInt(editedPhone),
      policy: editedPolicy,
      till_num: parseInt(editedTillNum),
      ambience: editedAmbience,
      cuisine: editedCuisine,
      price_range: editedPriceRange,
      ratings: parseFloat(editedRatings),
    };

    fetch('https://backendfood-co7z.onrender.com/restaurants/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
      setRes(data);
      setEditedPicture(data.picture);
      setEditedName(data.name);
      setEditedEmail(data.email);
      setEditedPhone(data.phone.toString());
      setEditedPolicy(data.policy);
      setEditedTillNum(data.till_num.toString());
      setEditedAmbience(data.ambience);
      setEditedCuisine(data.cuisine);
      setEditedPriceRange(data.price_range);
      setEditedRatings(data.ratings.toString());
    })
    .catch(error => {
      console.error("Error updating data:", error);
    });

    setEditing(false);
  };

  const nav = useNavigate();

  return (
    <div className="Chwey-profile-container">
      <div className="Chwey-profile-header">
        <img src={logo} alt="logo" className="Chwey-profile-logo" onClick={() => nav('/restaurant/dashboard')} />
      </div>
      <div className="Chwey-profile-main">
        <div className="Chwey-profile-display">
          <div className="Chwey-profile-details">
            <h2>{res.name}</h2>
            <div className="Chwey-profile-picture">
              <img src={editedPicture} alt="Profile" className="Chwey-profile-profile-image" />
            </div>
            <p>Name: {editedName}</p>
            <p>Email: {editedEmail}</p>
            <p>Phone: {editedPhone}</p>
            <p>Policy: {editedPolicy ? "Yes" : "No"}</p>
            <p>Till Number: {editedTillNum}</p>
            <p>Cuisine: {editedCuisine}</p>
            <p>Ambience: {editedAmbience}</p>
            <p>Price Range: {editedPriceRange}</p>
          </div>
        </div>
        <div className="Chwey-profile-edit-section">
          <h2>Edit Profile</h2>
          <label>
           
          </label>
          <input className="Chwey-edit-section-input"
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input  className="Chwey-edit-section-input"
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <input  className="Chwey-edit-section-input"
            type="text"
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
          />
          <label>
            Policy:
            <input
              type="checkbox"
              checked={editedPolicy}
              onChange={() => setEditedPolicy(!editedPolicy)}
            />
          </label>
          <input  className="Chwey-edit-section-input"
            type="text"
            value={editedTillNum}
            onChange={(e) => setEditedTillNum(e.target.value)}
          />
          <input  className="Chwey-edit-section-input"
            type="text"
            value={editedCuisine}
            onChange={(e) => setEditedCuisine(e.target.value)}
          />
          <input  className="Chwey-edit-section-input"
            type="text"
            value={editedAmbience}
            onChange={(e) => setEditedAmbience(e.target.value)}
          />
          <input  className="Chwey-edit-section-input"
            type="text"
            value={editedPriceRange}
            onChange={(e) => setEditedPriceRange(e.target.value)}
          />
               <label className="chweyFormLabel" htmlFor="profileImage">Profile image:</label>
           <input type="file" name='file' onChange={handleImage} required/>
  
          <button className="Chwey-profile-edit-button" onClick={handleEditSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
}


// export default function CustomerSignUp({setChange, user, setUser, setLogin, login }) {
//     const [location, setLocation] = useState([])
//     const [image, setImage] = useState('')
    
//     function handleImage(e) {
//       let file = e.target.files[0]
//       let form = new FormData()
      
//       form.append('file', file)
//       form.append('upload_preset', 'testCase')
//       setImage(form)
//     }
  
//     function handleSignUp(e) {
//       e.preventDefault();
//       let form = e.target
//       let formData = new FormData(form)
      
//       //Image submission
//       const cloudName = "https://api.cloudinary.com/v1_1/dmv2gp5qf"
//       fetch(`${cloudName}/image/upload`, {
//         method: 'POST',
//         body: image
//       }).then(res => {
//         return res.json()
//       })
//       .then(data => {      
//         // Data submission
//         let set = {
//           username: formData.get('username'),
//           email: formData.get('email'),
//           phone: formData.get('phone'),
//           password: formData.get('password'),
//           password_confirmation: formData.get('password'),
//           policy: formData.get('policy')?true:false,
//           picture: data.secure_url,
//         }
//         console.log("file: SignUp.jsx:59 -> handleSignUp -> set:", set);
  
//         fetch('https://backendfood-co7z.onrender.com/customers',{
//           method: 'POST',
//           headers: {"Accept": "*/*",
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(set)
//         })
//         .then(res => {
//           return res.json()})
//         .then(data => {
//           alert("Signup successful")
//           console.log(data)
//           localStorage.getItem('foodChapUser') ? localStorage.removeItem('foodChapUser') : null
//           localStorage.getItem('foodChapSide') ? localStorage.removeItem('foodChapSide') : null
  
//           localStorage.setItem('foodChapUser', data.id)
//           localStorage.setItem('foodChapSide', 'cust')
//           let x = localStorage.getItem('foodChapUser')
//           setUser(data)
//           setLogin(true)
//         })
//         .catch(err => {
//           alert("Error on signup try again after 1 min")
//           console.log(err)})
  
//       })
  
  
//       let data = {}
//     }
  
  
  
//     useEffect(() => {
//       console.log("Start");
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         console.log("Latitude is :", position.coords.latitude);
//         console.log("Longitude is :", position.coords.longitude);
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.log(error);
//       },
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   }, [])
  
//     return (
//       <div className="mSIgnup">
//         <img src={logo} alt="logo" id='eSignLogo'/>
//         <h3>Create account</h3>
//         <form action="submit" className="mSIgnupForm" onSubmit={handleSignUp}>
//           <label className="mFormLabel" htmlFor="username">Username:</label>
//           <input style={{ color:'black',background:'white', width: '80%', height:'%', border:'none', borderRadius:'12px'}} className='eSignIn' type="text" placeholder="Userx1970" name='username' required/>
          
//           <label className="mFormLabel" htmlFor="email">Email:</label>
//           <input className='eSignIn' type="email" placeholder="Email" name='email' required/>
          
//           <label className="mFormLabel" htmlFor="phone">Phone:</label>
//           <input style={{ color:'black',background:'white', width: '80%', height:'4%', border:'none', borderRadius:'12px'}} className='eSignIn' type="number" placeholder="07110101010" name='phone' required />
            
//           <label className="mFormLabel" htmlFor="password">Password:</label>
//           <input  className='eSignIn' type="password" placeholder="password" name='password' required/>
          
//           <label className="mFormLabel" htmlFor="profileImage">Profile image:</label>
//           <input type="file" name='file' onChange={handleImage} required/>
  
//           <p id='mPolicyText' className='mFormTransfer' >
//             <input type="checkbox" name="policy" id="policy" required/>
//             I agree to the terms and conditions</p>
  
//           <input type="submit" value="Sign Up" className="eSubFrmBtn" />
//           <p className="mFormTransfer">Already have an account? <span onClick={() => setChange(false)}>Login</span></p>
//           </form>
//       </div>
//     );
//   }
  