import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


export default function Home() {

    return(
        <div id='eHome'>
            <h1>Hey... how you doing?</h1>
            
            <div id='eHomeButtons'>
                <Link to='/restaurant/signup'>
                    <button>
                        Lizzie
                    </button>
                </Link>
                <Link to='/restaurant/login'>
                    <button>
                        Mohamed
                    </button>
                </Link>
                <Link to='/customer/login'>
                    <button>
                        Mark
                    </button>
                </Link>
                <Link to='/customer/signup'>
                    <button>
                        Glory
                    </button>
                </Link>
            </div>
        </div>
    )
}