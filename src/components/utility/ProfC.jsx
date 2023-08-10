import React, { useEffect, useState } from "react";
import NavC from "./NavC";
import "./Prof.css";
import Logo from '../../assets/chips.jpeg';
import { useNavigate } from "react-router-dom";

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

    const nav = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        let form = e.target
        let data = {}
        
        for (let x of form){
            if (x.name !== ""){
                data[x.name] = x.value
            }
        }
        
        console.log("fileData: ", data);
        

        // fetch('https://backendfood-co7z.onrender.com/customers/1',{
        //     method: 'PATCH',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({})
        // })
    }

    return(
        <div className="eProfileMain">
            <NavC/>
            <div className="eProfile">
                <div className="eProfDet">
                    <div className="eProfPic" >
                        <img src={profile.picture} alt="prof" id="eProfImg" />
                    </div>
                    <div className="eProfForm">
                        <form action="submit" className="eProfFrm" onSubmit={handleSubmit} >
                            <input className="eProfFrm1" type="text" name="username" placeholder="username" />
                            <input className="eProfFrm1" type="email" name="email" placeholder="email" />
                            <input id="eText1" className="eProfFrm1" type="text" name="phone" placeholder="phone" />
                            <input className="eProfFrm1" type="file" name="picture" placeholder="picture" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}