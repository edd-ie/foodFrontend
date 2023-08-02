import React,{useState, useEffect} from 'react';
import NavC from '../../utility/NavC';
import './orderTracking.css'

export default function OrderTracking({user}) {

    return(
        <div className="gOrderTrack">
            <NavC/>
            <div className="gOrderTrack-content">

            </div>
        </div>
    )
}