import React, {useEffect, useState} from "react";
import './dashboard.css'
import NavR from "../../utility/NavR";
import PieDisp from "./Pie";
import Trasnsactions from "./transactions";
import RadarGraph from "./Radar";
import exportFromJSON from "export-from-json";

export let dataset = []

export default function Dashboard({user, setUser, setLogin, login}) {
    const [sales, setSales] = useState([])
    const [transactions, setTransactions] = useState([])
    const [rankings, setRankings] = useState([])
    console.log("file: Dashboard.jsx:11 -> Dashboard -> rankings:", rankings);
    const [ratings, setRatings] = useState([])
    const [restaurant, setRestaurant] = useState([])
    const [orders, setOrders] = useState([])
    const [inventory, setInventory] = useState([])

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
            .then(data =>{dataset = data; setRankings(data)});
        
            fetch('https://backendfood-co7z.onrender.com/restaurant/transactions/1')
            .then(response => response.json())
            .then(data => setTransactions(data));
        
            fetch('https://backendfood-co7z.onrender.com/restaurant/inventory/1')
            .then(response => response.json())
            .then(data => setInventory(data));
        
            fetch('https://backendfood-co7z.onrender.com/restaurant/orders/1')
            .then(response => response.json())
            .then(data => {
                let set = []
                data.map(x=>set.push(x.order))
                setOrders(set)});

    },[])

    let rankA = []
    let rankB = []

    for(let x in rankings.categories){
        console.log(x, rankings.categories[x])
        
        rankA.push([x, rankings.categories[x]])
    }
    for(let x in rankings.foods){
        rankB.push([x, rankings.foods[x]])
    }

    console.log(rankA, rankB)

    const categories = rankA.map((item, index) => {
        return(
            <li className="catList" key={item[0]+index}>{item[0]}</li>
        )
    })
    const foods = rankB.map((item, index) => {
        return(
            <li className="catList" key={item[0]+index}>{item[0]}</li>
        )
    })

    function exportData (type){
        let data = []
        if(type == 'Transactions-report'){
            data = transactions.all
        }else if(type == 'Sales-report'){
            data = orders
        }else if(type == 'Inventory-report'){
            data = inventory
        }
        let fileName = type
        const exportType = exportFromJSON.types.csv

        exportFromJSON({data, fileName, exportType})
    }

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
                            <h4>Best Selling Categories</h4>
                        </div>
                        <div className="eBestRank">
                            <ol>
                                {categories}
                            </ol>
                        </div>
                    </div>
                    <div className="eDashBest">
                        <div className="eBestHeader">
                             <h4>Best Selling Foods</h4>
                        </div>
                        <div className="eBestRank">
                            <ol>
                                {foods}
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Graphics */}
                <div id="eDashGraph">
                    <div className="eMainGraph">
                        <div className="eDivGraph1">
                            <div className="eGraphItem">
                                <h1 style={{textAlign:'center',
                                    fontWeight:'bolder',
                                    marginTop: '4%',
                                    textDecoration: 'underline'                                
                                }}>
                                    {restaurant.name}
                                    <span className="material-symbols-sharp"
                                        style={{textAlign:'center',
                                        color: 'orange',
                                        fontWeight:'bolder',
                                        marginTop: '4%'                              
                                    }}
                                    >
                                    restaurant
                                    </span>
                                </h1>
                            </div>
                            <div className="eGraphItem" style={{
                                paddingLeft: '12%',
                            }}>
                                <h3>Revenue: {sales} ksh</h3>
                            </div>
                            <div className="eGraphItem"
                                style={{
                                    paddingLeft: '12%',
                                }} 
                            >
                                <h3>Ratings: {ratings}</h3>
                            </div>
                            <div className="exports">
                                <h3>Generate reports csv</h3>
                                <div className="report" onClick={()=>exportData("Transactions-report")}>
                                    <span className="material-symbols-sharp">
                                        download
                                    </span>
                                    Transactions report
                                </div>  
                                <div className="report" onClick={()=>exportData("Sales-report")}>
                                    <span className="material-symbols-sharp">
                                        download
                                    </span>
                                     Sales report 
                                </div>  
                                <div className="report" onClick={()=>exportData("Inventory-report")}>
                                    <span className="material-symbols-sharp">
                                        download
                                    </span>
                                     Inventory report
                                </div>  
                            </div>
                        </div>
                        <div className="eDivGraph1"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <RadarGraph/>
                        </div>
                        <div className="eDivGraph">
                        <PieDisp/>
                        </div>
                    </div>
                    <div className="eMainGraph">
                        <Trasnsactions/>
                    </div>
                </div>
            </div>
        </div>
    )
}
