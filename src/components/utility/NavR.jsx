import React from "react";
import { Link } from "react-router-dom";
import './navC.css'

export default function NavR({user, setLogin}) {
    const [count, setCount] = React.useState(1)


    return(
        <div id="rootNav">
            <div className="rLink rLogo">
            </div>
            <div className="rLink">Inventory</div>
            <div className="rLink">Staff</div>
            <div className="rLink">Menu</div>
            <div className="rLink">History</div>
            <div className="rLink rCart">
                Orders 
                <span class="material-symbols-sharp">
                    restaurant_menu
                </span>
                <div className="cartCount">
                    {count}
                </div>
            </div>
            <div className="rLink rProf"></div>
        </div>
    )
}