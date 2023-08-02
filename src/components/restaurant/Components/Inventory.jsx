import React, { useEffect, useState } from "react";
import NavR from "../../utility/NavR";
import './Inventory.css'


export default function Inventory({user}) {

    return(
        <div className="mInventory">
            <NavR/>
            <div className="mInventoryContent">
                
            </div>
        </div>
    )
}