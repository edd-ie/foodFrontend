import React,{useState}from 'react';
import logo from '../../../assets/logo.svg';


import './signup.css'

export default function RestaurantSignUp({user, setUser, setLogin, login}) {
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
    
    function handleSignUp(){

    }
    
    return(
        <div className="gSIgnup">
            <img src={logo} alt="logo" id='gSignLogo'/>
            <h3>Create account</h3>
            <form action="submit" className="gSIgnupForm">
                <label className="gFormLabel" htmlFor="email">Email</label>
                <input type="email" placeholder="Email" name='email' required/>
                
                <label className="gFormLabel" htmlFor="password">Password</label>
                <input type="password" placeholder="password" name='password' required/>

                <label className="gFormLabel" htmlFor="phone">Phone:</label>
                <input type="number" placeholder="phone" name='phone' required />

                <label className="gFormLabel" htmlFor="ambience">Ambience</label>
                <select name="ambience" className='formSelect'>
                <option value="Cultural" className="formSelVal">Classy</option>
                <option value="romantic" className="formSelVal">Romantic</option>
                <option value="urban" className="formSelVal">urban</option>
                <option value="Fine Dining" className="formSelVal">Fine Dining</option>
                <option value="Café/Bistro" className="formSelVal">Café/Bistro</option>
                <option value="Classy" className="formSelVal">Classy</option>
                <option value="other" className="formSelVal">other</option>
                </select>

                <label className="gFormLabel" htmlFor="cuisine">Cuisine</label>
                <select name="cuisine" className='formSelect'>
                <option value="swahili" className="formSelVal">swahili</option>
                <option value="chinese" className="formSelVal">chinese</option>
                <option value="fastFood" className="formSelVal">fast food</option>
                <option value="Italian" className="formSelVal">Italian</option>
                <option value="Indian" className="formSelVal">Indian</option>
                <option value="other" className="formSelVal">Other</option>
                </select>

                <label className="gFormLabel" htmlFor="price range">Price Range</label>
                <select name="price range" className='formSelect'>
                <option value="$" className="formSelVal">$</option>
                <option value="$$" className="formSelVal">$$</option>
                <option value="$$$" className="formSelVal">$$$</option>
                </select>
                
                <p id='gPolicyText'>
                <input type="checkbox" name="policy" id="policy" required/>
                I agree to the terms and conditions</p>

                <input type="submit" value="Sign Up" className="gSubFrmBtn" />
                <p className="gFormTransfer">Already have an account? <span onClick={() => {}}>Login</span></p>
                </form>
            </div>
    )
}