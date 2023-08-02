import React, { useEffect, useState } from "react";
import NavC from "./NavC";
import "./Prof.css";
import Logo from '../../assets/chips.jpeg';

export default function ProfC({user}) {
    const [profile, setProfile] = useState([])
    console.log("file: ProfC.jsx:8 -> ProfC -> profile:", profile);

    useEffect(()=>{
        fetch('https://backendfood-co7z.onrender.com/restaurants/1')
        .then(r=>r.json())
        .then(data=>{
            setProfile(data)
        })
    },[])
    

    return(
        <div className="eProfileMain">
            <NavC/>
            <div className="eProfile">
                <div className="eProfDet">
                    <div className="eProfPic" >
                        <img src={profile.picture} alt="prof" id="eProfImg" />
                    </div>

                </div>
            </div>
        </div>
    )
}