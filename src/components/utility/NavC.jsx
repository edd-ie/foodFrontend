import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './navC.css'

export default function NavC({user, setLogin}) {
    const [count, setCount] = React.useState(1)
    const [show, setShow] = React.useState(false)
    const navigate = useNavigate()

    function handleProfile() {
        setShow(!show)
    }

    function handleHome() {
        navigate('/customer/homepage')
    }

    function handleLogOff() {
        handleProfile() 
        localStorage.removeItem('foodChapUser')
        navigate('/')
    }

    return(
        <div id="rootNav">
            <div className="rLink rLogo" onClick={handleHome}></div>
            <div className="rLink">
                <Link to='/blog'>Blog</Link>
            </div>
            <div className="rLink">
                <Link to='/Favourites'>Favourites</Link>
            </div>
            <div className="rLink">
                <Link to='/customer/restaurant'>Restaurant</Link>
            </div>
            <div className="rLink">
                <Link to='/customer/tracking'>Tracking</Link>
            </div>
            <div className="rLink">History</div>
            <div className="rLink rCart">
                <Link to='/customer/cart'>Cart</Link>
                <span className="material-symbols-sharp">
                    shopping_cart
                </span>
                <div className="cartCount">
                    {count}
                </div>
            </div>
            <div className="rLink rProf" onClick={()=>{handleProfile();  nav('/profile')}}></div>

            {show && 
                <div className="rProfSetting">
                    <div className="rProfSettingItem" onClick={handleProfile}>
                        <span className="material-symbols-sharp">
                        account_circle
                        </span>
                        <p>Account</p> 
                    </div> 
                    <div className="rProfSettingItem" onClick={handleLogOff}>
                        <span className="material-symbols-sharp"  onClick={handleLogOff}>
                        logout
                        </span> 
                        <p  onClick={handleLogOff}>Logout</p>    
                    </div>   
                </div>
            }
        </div>
    )
}