import React, { useEffect, useState } from 'react';
import './blogPage.css';
import logo from '../../assets/logo1.png';

export default function Blog() {


    return( 
        <div className="blog">
            <div className="blogHeader">
                <img src={logo} alt="logo" className="blogLogo"  />
                <h1 className="blogHead">The connoisseur</h1>
                <div className="blogProf"></div>
            </div>
        </div>
    )
}