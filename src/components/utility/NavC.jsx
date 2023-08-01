import React from "react";
import { Link } from "react-router-dom";
import './navC.css'

export default function NavC({user, setLogin}) {
    const [count, setCount] = React.useState(1)
    const [show, setShow] = React.useState(false)

    function handleProfile() {
        setShow(!show)
    }

    return(
        <div id="rootNav">
            <div className="rLink rLogo">
            </div>
            <div className="rLink">Favorites</div>
            <div className="rLink">Restaurants</div>
            <div className="rLink">Tracking</div>
            <div className="rLink">History</div>
            <div className="rLink rCart">
                Cart 
                <span className="material-symbols-sharp">
                    shopping_cart
                </span>
                <div className="cartCount">
                    {count}
                </div>
            </div>
            <div className="rLink rProf" onClick={handleProfile}></div>

            {show && 
                <div className="rProfSetting">
                    <div className="rProfSettingItem" onClick={handleProfile}>
                        <span className="material-symbols-sharp">
                        account_circle
                        </span>
                        <p>Account</p> 
                    </div> 
                    <div className="rProfSettingItem" onClick={handleProfile}>
                        <span className="material-symbols-sharp">
                        logout
                        </span> 
                        <p>Logout</p>    
                    </div>   
                </div>
            }
        </div>
    )
}