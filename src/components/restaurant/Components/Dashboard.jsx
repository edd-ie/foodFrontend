import React, {useEffect, useState} from "react";
import './dashboard.css'
import NavR from "../../utility/NavR";
import PieDisp from "./Pie";
import Trasnsactions from "./transactions";

export default function Dashboard({user, setUser, setLogin, login}) {
    

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
                        <div className="eBestRank"></div>
                    </div>
                    <div className="eDashBest">
                        <div className="eBestHeader"></div>
                        <div className="eBestRank"></div>
                    </div>
                </div>

                {/* Graphics */}
                <div id="eDashGraph">
                    <div className="eMainGraph">
                        <div className="eDivGraph"></div>
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