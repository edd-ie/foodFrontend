import React, { useEffect } from "react";
import './profR.css';
import logo from '../../assets/logo1.png';
import { useNavigate } from "react-router-dom";

export default function ProfR({user}) {
    const [res, setRes] = React.useState([])

    useEffect(()=>{
        fetch('https://backendfood-co7z.onrender.com/restaurants/1')
        .then(r=>r.json())
        .then(data=>{
            setRes(data)
            console.log(data)
        })
    },[])
    
    const nav = useNavigate()

    return(
        <div className="reProf">
            <div className="resProfHead">
                <img src={logo} alt="logo" className="resProfLogo" onClick={()=>nav('/restaurant/dashboard')} />
            </div>
            <div className="resProfMain">
                <div className="resProfDisplay"></div>
                <div className="resProfEdit"></div>
            </div>
        </div>
    )
}
