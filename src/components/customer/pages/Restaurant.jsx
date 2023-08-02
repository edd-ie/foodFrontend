import React,{useState, useEffect} from 'react';
import './restaurant.css'
import NavC from '../../utility/NavC';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart , faLocationDot} from '@fortawesome/free-solid-svg-icons'


// export default function Restaurant({user, setUser, setLogin, login}) {
//     const [rest, setRest] = useState([])
//     console.log("name");

//     useEffect(()=>{
//         fetch('https://backendfood-co7z.onrender.com/restaurants')
//         .then((r)=> r.json())
//         .then((data)=>{
           
//          setRest(data)
//         })
//     },[])
//     console.log(rest);
//     const elements = rest.map((element, index) =>{
//         return (
//             <div className="krest" key={"home"+index}>
//                 <div className="ktopRest" key={"top"+index}>
//                     <img className='kimg-rest' src={element.picture} alt="restaurant" />
                
//                 </div>
//                 <div className="kbottomRest" key={"bottom"+index}>
//                     <div className="kbottomnames" key={"rest-details" + index}>
//                        <h2 className="rest-details">{element.name}</h2>
//                        <h3 className="rest-ratings">Ratings: {element.ratings}</h3>
//                        <h3 className="rest-time">30 - 40min</h3>
//                        <h3 className="rest-distance"> <FontAwesomeIcon icon={faLocationDot} className='emoji-location' /> 2km</h3>

//                     </div>
//                     <div className="emoji" key={"emoji-details" + index}>
//                     <FontAwesomeIcon icon={faHeart} className='emoji-heart' />
                        
//                         </div>

//                 </div>

//             </div>
//         )
//     })

//     return(
//         <div id='krestauraunts'>
//            {/* <div className="knavbar"></div> */}
//            <div className="kmain">
//             <div className="kleft-sidebar">
//           <div className="koption">
//           <label for="cars">Choose a car:</label>
//   <select name="cars" id="cars">
//     <option value="volvo">Volvo</option>
//     <option value="saab">Saab</option>
//     <option value="opel">Opel</option>
//     <option value="audi">Audi</option>
//   </select>
//           </div>
//             </div>
//             <div className="kright-sidebar">{elements}</div>
//            </div>
//            <div className="kfooter"></div>
//         </div>
//     )
// }

export default function Restaurant({user, setUser, setLogin, login}) {
    const [rest, setRest] = useState([])
    
    

    useEffect(()=>{
        fetch('https://backendfood-co7z.onrender.com/restaurants')
        .then((r)=> r.json())
        .then((data)=>{
            setRest(data)
        })
    },[])

    const elements = rest.map((element, index) =>{
        return(
            <div className="kResDisp" key={element.name+index}>
                <div key={element.name+index+'a'} className="kResDispTop" style={{background: `url(${element.picture})`}}>
                </div>
                <div className="kResDipBot" key={element.name+index+'b'} >
                    <div key={element.name+index+'c'}  className="kDispLeft">
                        <div className="kDispTags">{element.name}</div>
                        <div key={element.name+index+'f'} className="kDispTags">Ratings: {element.ratings}</div>
                        <div key={element.name+index+'g'} className="kDispTags">Distance: {element.latitude}</div>
                    </div>
                    <div key={element.name+index+'d'}  className="kDispRight">
                        <span className="material-symbols-sharp">
                            favorite
                        </span>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="kResMain">
            <NavC/>
            <div className="kBodyCenter">
                
            </div>
            <div className="kBodyRes">

                <div className="kSidBarRes">
                    <div className="kSideFilter">
                        <div className="kFilterComp">Ambience
                        </div>
                        <div className="kFilterComp">Romantic</div>
                        <div className="kFilterComp">Casual</div>
                        <div className="kFilterComp">Fine Dining</div>
                    </div>
                    <div className="kSideFilter">
                        <div className="kFilterComp">Cuisine</div>
                        <div className="kFilterComp">Swahili</div>
                        <div className="kFilterComp">Italian</div>
                        <div className="kFilterComp">Chinese</div>
                    </div>
                    <div className="kSideFilter">
                        <div className="kFilterComp">Price Range</div>
                        <div className="kFilterComp">$</div>
                        <div className="kFilterComp">$$</div>
                        <div className="kFilterComp">$$$</div>
                    </div>
                </div>


                <div className="kMainContent">
                    <div className="kDisplayRes">
                        {elements}
                    </div>
                </div>


            </div>
            <div className="kFooterRes">
                <div className="kFootPart"></div>
                <div className="kFootPart"></div>
                <div className="kFootPart"></div>
            </div>
        </div>
    )
}