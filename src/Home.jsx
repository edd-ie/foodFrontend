import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg'
import CustomerLogin from './components/customer/loginSignup/Login';
import RestaurantLogin from './components/restaurant/loginSignup/Login';


export default function Home({user, setUser, setLogin }) {
    const [optA, setOptA] = React.useState(false)
    const [optB, setOptB] = React.useState(false)

    return(
        <>
        {!optA && !optB &&<div id='eHome'>
            <div className="eHomeSide" onClick={()=>setOptA(true)}>
                <span className="material-symbols-sharp">
                restaurant
                </span>
                <p>Enter as a Customer</p>
            </div>

            <div className="eHomeSide" onClick={()=>setOptB(true)}>
                    <span className="material-symbols-sharp">
                    storefront
                    </span>
                    <p>Enter as a restaurant</p>
            </div>
            </div>} 
            {
                optA && !optB && <CustomerLogin user={user} setUser={setUser} setLogin={setLogin} />
            }
            {
                !optA && optB && <RestaurantLogin user={user} setUser={setUser} setLogin={setLogin} />
            }
        </>
    )
}