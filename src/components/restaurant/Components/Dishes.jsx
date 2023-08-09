import React, {useEffect, useState} from "react";
import './dishes.css'
import NavR from "../../utility/NavR";

export default function Dishes({user}) {

    const [foods, setFoods] = useState([])
    const [filtered, setFiltered] = useState([])
    const [category, setCategory] = useState([])
    const [addFood, setAddFood] = useState(false)


    useEffect(() => {

        fetch('https://backendfood-co7z.onrender.com/restaurant/menu/1')
        .then(res=>res.json())
        .then(data=>{
            setFoods(data)
            setFiltered(data)
        })

        fetch('https://backendfood-co7z.onrender.com/restaurant/rankings/1')
        .then(res=>res.json())
        .then(data=>{
            let set = ['All']
            for (let x in data.categories){
                set.push(x)
            }
            setCategory(set)
        })

    },[])

    function sortFood (x){
        if (x==='All'){
            setFiltered(foods)
        }else{
            let change = foods.filter(e=>e.category===x)
            setFiltered(change)
        }
    }

    const options = category.map((x,i)=>{
        return(
            <button className="options" key={x+i+'opt'} onClick={()=>sortFood(x)}>
                {x}
            </button>
        )
    })

    function deleteFood (id, name){
        let confirm = window.confirm(`Are you sure you want to delete ${name}?`)
        
        let change = filtered.filter(e=>e.id!==id)
        confirm ? setFiltered(change) : null
        //if (confirm){
        
    }
    


    const dishes = filtered.map((e, i)=>{
        return(
        <div className="dishContainer">
        <div className="menuPicDiv" key={i+e.name}
            style={{background: `url(${e.picture})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
        <div className="menuCont" key={"menu"+e.price+i}>
            <h1 key={"menu0"+e.price+i+2}>{e.name}</h1>
            <p key={"menu1"+e.price+i+2}>{e.ingredients}</p>
            <p key={"menu2"+e.price+i+3}>Vegetarian: {e.vegetarian ? 'Yes' : 'No'}</p>
            <p key={"menu3"+e.price+i+4}>Allergen: {e.allergen ? 'Yes' : 'No'}</p>
            <p key={"menu4"+e.price+i+5}>Price: {e.price}</p>
            <div className="botMenu">
            <button onClick={()=>move2(e.id)}>Edit</button>
            <button onClick={()=>deleteFood(e.id, e.name)}>Delete</button>
            </div>
        </div>
        </div>)
    })

    const [picUrl, setPicUrl] = useState('')
    
    return(
        <div className="dishes">
            <NavR></NavR>
            {!addFood&&<div className="dishMain">
                <div className="dishEdit">
                    {options}
                    <button id="dishBTN" onClick={()=>setAddFood(true)}>add food</button>
                </div>

                <div className="dishFoods">
                    {dishes}
                </div>
            </div>}
            {addFood && <div className="dishAdd">
                <div className="addClose" onClick={()=>setAddFood(false)}>
                    <span className="material-symbols-sharp">
                        close
                    </span>
                </div>
                <div className="addMain">
                    <div className="addSide"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {picUrl && <img src={picUrl} alt="pic"/>}
                        {!picUrl && <h2>No image selected</h2>}
                    </div>
                    <div className="addSide">
                        <form action="submit" id="addForm">
                            <label htmlFor="name">Name</label>
                            <input placeholder="Pizza" type="text" id="name" name="name" required/>
                            <label htmlFor="ingredients">Description</label>
                            <textarea name="ingredients" id="ingredients" cols="40" rows="6"/>
                            <label htmlFor="vegetarian">Vegetarian</label>
                            <select name="vegetarian" id="vegetarian">
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                            <label htmlFor="allergen">Allergen</label>
                            <select name="allergen" id="allergen">
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                            <label htmlFor="price">price</label>
                            <input placeholder="250.00" type="number" step="0.01" min="0" max="20000" id="price" name="price" required/>
                            
                            <input type="file" id="name" name="foodPic" required/>
                            
                            
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    )
}