import React, { useEffect, useState } from 'react';
import './blog.css';
import Restaurant from '../customer/pages/Restaurant';
import logo from '../../assets/logo1.png';
import { useNavigate } from 'react-router-dom';
import truck from '../../assets/truck.jpg';


export default function Blog() {

    const[post, setPost] = useState([])
    console.log("file: Blog.jsx:8 -> Blog -> post:", post);

    let dataset={
        image: '../../assets/truck.jpg',
        restaurant: 'The Orient',
        description: 'Tale of a chef the lost his taste',
    }

    useEffect(() => {
        let data = []
        let n = 20
        for(let i = 0; i < n; i++){
            data.push(dataset)
        }
        setPost(data)
    },[])


    const cards = post.map((card,index) =>{
        return(
            <div className="blogCard" key={index+card.restaurant}>
                <div id="gImage-container">
                <img src={truck} alt="" />
                </div>
                <div id="gCard-content">
                <div id="gCard-title">
                    <h1>The Orient</h1>
                </div>
                <div id="gCard-body">
                    <p>Tale of a chef the lost his taste.Anyone who has ever suffered through a cold knows how unappealing food gets. </p>
                </div>

                </div>
               
                <div id="gBtn">
                    <button>
                        <a>
                            View more
                        </a>
                    </button>
                </div>
            </div>
        )
    })

    const nav = useNavigate()
    return( 
        <div className="blog">
            <div className="blogHeader">
                <img src={logo} alt="logo" className="blogLogo"  onClick={()=>nav('/customer/homePage')}/>
                <h1 className="blogHead">The connoisseur</h1>
                <div className="blogProf"></div>
            </div>
            <div className="blogDisplay">
                {cards}
            </div>
        </div>
    )
}