import React from "react";
import { Link } from "react-router-dom";
import './navC.css'

export default function NavR({user, setLogin}) {
    

    return(
        <div id="rootNav">
            <div className="rLink rLogo">
            </div>
            <div className="rLink">Inventory</div>
            <div className="rLink">Staff</div>
            <div className="rLink">Orders</div>
            <div className="rLink">Menu</div>
            <div className="rLink">History</div>
            <div className="rLink rProf"></div>
        </div>
    )
}