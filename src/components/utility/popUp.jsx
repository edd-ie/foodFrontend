import React from "react";
import './popUp.css'

export default function PopUp({user, setLogin, setShow}) {

    return(
        <div className="pop">
            <div className="selectPop">
                Profile Settings
            </div>
            <div className="selectPop">
                Logout
            </div>
        </div>
    )
}
