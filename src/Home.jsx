import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg'


export default function Home({user, setUser, setLogin }) {

    return(
        <div id='eHome'>
            <h1>Hey... how you doing?</h1>
            <img src={logo} alt="logo" />
            
            <div id='eHomeButtons'>
                <Link to='/customer/restaurant'>
                    <button>
                        Lizzie
                    </button>
                </Link>
                <Link to='/customer/cart'>
                    <button>
                        Mohamed
                    </button>
                </Link>
                <Link to='/customer/reviews'>
                    <button>
                        Mark
                    </button>
                </Link>
                <Link to='/customer/menu'>
                    <button>
                        Glory
                    </button>
                </Link>
            </div>
        </div>
    )
}