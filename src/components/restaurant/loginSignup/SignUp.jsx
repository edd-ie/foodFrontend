import React,{useState}from 'react';
import logo from '../../../assets/logo.svg';


import './signup.css'
import { useNavigate } from 'react-router-dom';

export default function RestaurantSignUp({user, setUser, setLogin, login}) {
    const [location, setLocation] = useState([]);
    const [image, setImage] = useState('')
    console.log("file: SignUp.jsx:26 -> RestaurantSignUp -> location:", location);

    // useEffect(() => {
    //     console.log("Start");
    // navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    //     setLocation({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //     });
    //     },
    //     (error) => {
    //     console.log(error);
    //     },
    //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    // );
    // }, [])
    

    function handleImage(e) {
        let file = e.target.files[0]
        let form = new FormData()

        form.append('file', file)
        form.append('upload_preset', 'testCase')
        setImage(form)
    }

    function handleSignUp(e){
        e.preventDefault();
        let form = e.target
        let formData = new FormData(form)

        const cloudName = "https://api.cloudinary.com/v1_1/dmv2gp5qf"
        fetch(`${cloudName}/image/upload`, {
            method: 'POST',
            body: image
        }).then(res => {
            return res.json()
        })
        .then(data => {
            let set = {
                username: formData.get('username'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                ambience: formData.get('ambience'),
                cuisines: formData.get('cuisine'),
                price_range: formData.get('price_range'),
                policy: formData.get('policy')?true:false,
                picture: data.secure_url,
            }

            fetch('https://backendfood-co7z.onrender.com/restaurants', {
                method: 'POST',
                headers: {"Accept" : "*/*",
                "Content-Type": "apllication/json"
            },
              body: JSON.stringify(set)  
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                alert("Signup successful")
                console.log(data)
                localStorage.getItem('foodChapRest') ? localStorage.removeItem('foodChapRest') : null
                localStorage.getItem('foodChapSide') ? localStorage.removeItem('foodChapSide') : null

                localStorage.setItem('foodChapRest', data.id)
                localStorage.setItem('foodChapSide', 'rest')
                let x = localStorage.getItem('foodChapRest')
                setUser(data)
                setLogin(true)
            })
            .catch(err => {
                alert("Error on signup try again after i min")
                console.log(err)
            })
        })
        let data ={}

    }
    
    return(
        <div className="gSIgnup">
            <img src={logo} alt="logo" id='gSignLogo'/>
            <h3 id="gH3">Create account</h3>
            <form action="submit" className="gSIgnupForm" onSubmit={handleSignUp}>
                <label className="gFormLabel" htmlFor="email">Email</label>
                <input id = "gEmail" type="email" placeholder="Email" name='email' required/>
                
                <label className="gFormLabel" htmlFor="password">Password</label>
                <input id = "gPassword" type="password" placeholder="password" name='password' required/>


                
                <label className="gFormLabel" htmlFor="phone">Phone:</label>
                <input  id = "gPhone" type="number" placeholder="phone" name='phone' required />
                

                <label className="gFormLabel" htmlFor="ambience">Ambience</label>
                <div id="gAmbience">
                <select name="ambience" className='formSelect'>
                <option value="Cultural" className="formSelVal">Classy</option>
                <option value="romantic" className="formSelVal">Romantic</option>
                <option value="urban" className="formSelVal">urban</option>
                <option value="Fine Dining" className="formSelVal">Fine Dining</option>
                <option value="Café/Bistro" className="formSelVal">Café/Bistro</option>
                <option value="Classy" className="formSelVal">Classy</option>
                <option value="other" className="formSelVal">other</option>
                </select>
                </div>

                <label className="gFormLabel" htmlFor="cuisine">Cuisine</label>
                <div id="gCuisine">
                <select name="cuisine" className='formSelect'>
                <option value="swahili" className="gSignIn">swahili</option>
                <option value="chinese" className="formSelVal">chinese</option>
                <option value="fastFood" className="formSelVal">fast food</option>
                <option value="Italian" className="formSelVal">Italian</option>
                <option value="Indian" className="formSelVal">Indian</option>
                <option value="other" className="formSelVal">Other</option>
                </select>
                </div>

                <label className="gFormLabel" htmlFor="price range">Price Range</label>
                <div id="gRange">
                <select name="price range" className='formSelect'>
                <option value="$" className="formSelVal">Affordable</option>
                <option value="$$" className="formSelVal">Medium</option>
                <option value="$$$" className="formSelVal">Expensive</option>
                </select>
                </div>

                <input type="file" name='picture' onChange={handleImage} required/>
                
                <p id='gPolicyText'>
                <input type="checkbox" name="policy" id="policy" required/>
                I agree to the terms and conditions</p>

                <input type="submit" value="Sign Up" className="gSubFrmBtn" />
                <p className="gFormTransfer">Already have an account? <span id="mLogin"onClick={() => setChange(false)}>Login</span></p>
                </form>
            </div>
    )
}