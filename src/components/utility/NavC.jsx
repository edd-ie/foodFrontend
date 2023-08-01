import React from "react";
import { Link } from "react-router-dom";
import './navC.css'

export default function NavC({user, setLogin}) {
    const [count, setCount] = React.useState(1)


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
                <span class="material-symbols-sharp">
                    shopping_cart
                </span>
                <div className="cartCount">
                    {count}
                </div>
            </div>
            <div className="rLink rProf"></div>
        </div>
    )
}