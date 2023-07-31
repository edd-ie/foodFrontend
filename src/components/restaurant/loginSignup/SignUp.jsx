import React,{useState}from 'react';
import logo from '../../../assets/logo.svg';


import './signup.css'

export default function RestaurantSignUp({user, setUser, setLogin, login}) {
    const [signUp, setsignUp] = useState(false)
    
    function handleSignUp(){

    }
    
    return(
        <div id='kSignup'>
            <div className='logo'><img src={logo} alt="logo" />
            </div>
            <p className='title'>Create your account</p>
           <form action="submit" onClick={handleSignUp}>
            <input type="text" name='restaurant-name' placeholder='Restaraunt Name' required />
            <input type="text" name='address' placeholder='Address' required />
            <input type="email" name='restaurant-email' placeholder='Restaraunt Email' required />
            <input type="text" name='restaurant-phone-number' placeholder='Restaraunt Phone Number' required />
            <input type="text" name='Ambience' placeholder='Ambience' required />
            <input type="password" name='password' placeholder='Password' required />
            <div id='kcheckbox-div'>
            <input type="checkbox" name='terms' id='check-box'/>
                <p id="label">Agree to all Term, Privacy Policies and Fees</p>

            </div>
            <button className='sign-up'>Sign Up</button>
           </form>

           <div className='terms'><p>Have an account?</p><p className='Login'>Login</p></div> 

           </div>
    )
}