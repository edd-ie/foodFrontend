import React, {useEffect, useState} from "react";
import './dashboard.css'
import NavR from "../../utility/NavR";
import PieDisp from "./Pie";
import Trasnsactions from "./transactions";

export default function Dashboard({user, setUser, setLogin, login}) {
    const [sales, setSales] = useState([])
    const [transactions, setTransactions] = useState([])
    const [rankings, setRankings] = useState([])
    const [ratings, setRatings] = useState([])
    const [restaurant, setRestaurant] = useState([])

    useEffect(()=>{

        fetch('https://backendfood-co7z.onrender.com/restaurant/sales/1')
            .then(response => response.json())
            .then(data => setSales(data));

        fetch('https://backendfood-co7z.onrender.com/restaurant/ratings/1')
            .then(response => response.json())
            .then(data => setRatings(data));

        fetch('https://backendfood-co7z.onrender.com/restaurants/1')
            .then(response => response.json())
            .then(data => setRestaurant(data));
        
        fetch('https://backendfood-co7z.onrender.com/restaurant/rankings/1')
            .then(response => response.json())
            .then(data => setRankings(data));
        fetch('https://backendfood-co7z.onrender.com/restaurant/transactions/1')
            .then(response => response.json())
            .then(data => setTransactions(data));

    },[])

    const Categories = rankings.categories.map((category, index) => {
        return(
            <ul>
                <li>category</li>
            </ul>
        )
    })

    return(
        <div className="eDashboard">
            {/* Header */}
            <NavR/>

            {/* Main */}
            <div id="eDashContent">
                {/* SideBar */}
                <div id="eDashSide">
                    <div className="eDashBest">
                        <div className="eBestHeader">
                            {/* <h3>Best Selling Categories</h3> */}
                        </div>
                        <div className="eBestRank">
                            {Categories}
                        </div>
                    </div>
                    <div className="eDashBest">
                        <div className="eBestHeader"></div>
                        <div className="eBestRank"></div>
                    </div>
                </div>

                {/* Graphics */}
                <div id="eDashGraph">
                    <div className="eMainGraph">
                        <div className="eDivGraph">
                            <div className="eGraphItem">
                                <h2>{restaurant.name}</h2>
                            </div>
                            <div className="eGraphItem">
                                <h2>Revenue: {sales}</h2>
                            </div>
                            <div className="eGraphItem">
                                <h2>Ratings: {ratings}</h2>
                            </div>
                        </div>
                        <div className="eDivGraph"></div>
                        <div className="eDivGraph">
                            </div>
                        <PieDisp/>
                    </div>
                    <div className="eMainGraph">
                        <Trasnsactions/>
                    </div>
                </div>
            </div>
        </div>
    )
}