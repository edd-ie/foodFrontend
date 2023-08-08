import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './navC.css'

export default function NavR({user, setLogin}) {
    const [count, setCount] = React.useState(1)
    const [show, setShow] = React.useState(false)
    
    const navigate = useNavigate()

    function handleProfile() {
        setShow(!show)
    }
    function handleHome() {
        
        navigate('/restaurant/dashboard')
    }

    


    return(
        <div id="rootNav">
            <div className="rLink rLogo" onClick={handleHome}>
            </div>
            <div className="rLink">
                <Link to="/restaurant/inventory">Inventory</Link>
                </div>
            <div className="rLink">
                <Link to="/restaurant/staff">Staff</Link>
            </div>
            <div className="rLink">Menu</div>
            <div className="rLink">
                History</div>
            <div className="rLink rCart">
                <Link to="/restaurant/orders">Orders</Link>
                 
                <span className="material-symbols-sharp">
                    restaurant_menu
                </span>
                <div className="cartCount">
                    {count}
                </div>
            </div>
            <div className="rLink rProf" onClick={handleProfile}></div>
            
            {
                show && 
                <div className="rProfSetting">
                    <div className="rProfSettingItem" onClick={()=>{handleProfile(); navigate('/restaurant/profile')}}>
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