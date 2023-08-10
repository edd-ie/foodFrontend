import React, {useEffect, useState} from "react";
import './dishes.css'
import NavR from "../../utility/NavR";

export default function Dishes({user}) {

    const [resId, setResId] = useState(1)
    const [foods, setFoods] = useState([])
    const [filtered, setFiltered] = useState([])
    const category = ["All",'Burgers', 'Fries', "Breakfast",'Main', "Sides", "Desserts", "fastFood"]
    const [addFood, setAddFood] = useState(false)


    useEffect(() => {

        fetch('https://backendfood-co7z.onrender.com/restaurant/menu/1')
        .then(res=>res.json())
        .then(data=>{
            setFoods(data)
            setFiltered(data)
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
    

    const [editFood, setEditFood] = useState([])
    console.log("file: Dishes.jsx:52 -> deleteFood -> editFood:", editFood);
    const [change, setChange] = useState(false)

    
    function edit(e){
        setChange(true)
        setEditFood(e)
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
            <button onClick={()=>{setPicUrl(e.picture);edit(e)}}>Edit</button>
            <button onClick={()=>deleteFood(e.id, e.name)}>Delete</button>
            </div>
        </div>
        </div>)
    })

    const [picUrl, setPicUrl] = useState('')
    const [image, setImage] = useState('')

    function handleImage(e) {
        let file = e.target.files[0]
        let form = new FormData()

        setPicUrl(URL.createObjectURL(file))
        
        form.append('file', file)
        form.append('upload_preset', 'testCase')
        setImage(form)
    }

    function handleSubmit(e){
        e.preventDefault()
        let form = e.target

        let formData = new FormData(form)
    
        //Image submission
        const cloudName = "https://api.cloudinary.com/v1_1/dmv2gp5qf"
        fetch(`${cloudName}/image/upload`, {
        method: 'POST',
        body: image
        }).then(res => {
        return res.json()
        })
        .then(data => {      
        // Data submission
            form.reset()
            let set = {
                name: formData.get('name'),
                ingredients: formData.get('ingredients'),
                vegetarian: formData.get('vegetarian') == "true"?true:false,
                allergen: formData.get('allergen')== "true"?true:false,
                price: parseInt(formData.get('price')),
                category: formData.get('category'),
                restaurant_id: parseInt(resId),
                picture: data.secure_url,
                discount: 0
            }
            console.log("file: SignUp.jsx:59 -> handleSignUp -> set:", set);

            fetch('https://backendfood-co7z.onrender.com/foods',{
                method: 'POST',
                headers: {"Accept": "*/*", 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(set),
                credentials: 'include'
            }).then(res=>res.json())
            .then(data=>{
                console.log("file: SignUp.jsx:59 -> handleSignUp -> data:", data);
                setFiltered([...filtered, data])
                setAddFood(false)
            })
        })
    }
    
    return(
        <div className="dishes">
            <NavR></NavR>
            {!addFood&& !change&&<div className="dishMain">
                <div className="dishEdit">
                    {options}
                    <button id="dishBTN" onClick={()=>setAddFood(true)}>add food</button>
                </div>

                <div className="dishFoods">
                    {dishes}
                </div>
            </div>}
            {addFood && <div className="dishAdd">
                <div className="addClose" onClick={()=>{setEditFood([]);setAddFood(false); setPicUrl("")}}>
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
                        {picUrl && <img id="preView" src={picUrl} alt="pic"/>}
                        {!picUrl && <h2>No image selected</h2>}
                    </div>
                    <div className="addSide">
                        <form action="submit" id="addForm" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input className="addVal" placeholder="Pizza" type="text"  name="name"/>
                            
                            <label htmlFor="ingredients">Description</label>
                            <textarea className="addVal" name="ingredients" 
                            placeholder="Pizza with tomato sauce, cheese, and pepperoni"
                            id="ingredients" cols="40" rows="6"/>
                            
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
                            
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category">
                                <option value="Burgers">Burgers</option>
                                <option value="Sides">Sides</option>
                                <option value="Main">Main</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Fries">Fries</option>
                                <option value="fastFood">Fast food</option>
                            </select>
                            
                            <label htmlFor="price">price</label>
                            <input className="addVal" placeholder="250" type="number" step="1" min="1" max="20000" id="price" name="price"/>
                            
                            <input type="file" name="foodPic" onChange={handleImage}/>
                            
                            <input type="submit" value="Submit" id="addSubBTN"/>
                            
                        </form>
                    </div>
                </div>
            </div>}
            {change && <div className="dishAdd">
                <div className="addClose" onClick={()=>setChange(false)}>
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
                        {picUrl && <img id="preView" src={picUrl} alt="pic"/>}
                        {!picUrl && <h2>No image selected</h2>}
                    </div>
                    <div className="addSide">
                        <form action="submit" id="addForm" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input className="addVal" placeholder={editFood? editFood.name:'Pizza'} type="text" name="name"/>
                            
                            <label htmlFor="ingredients">Description</label>
                            <textarea className="addVal" name="ingredients" 
                            placeholder={editFood? editFood.ingredients:"Pizza with tomato sauce, cheese, and pepperoni"}
                            id="ingredients" cols="40" rows="6"/>
                            
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
                            
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category">
                                <option value="Burgers">Burgers</option>
                                <option value="Sides">Sides</option>
                                <option value="Main">Main</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Fries">Fries</option>
                                <option value="fastFood">Fast food</option>
                            </select>
                            
                            <label htmlFor="price">price</label>
                            <input className="addVal" placeholder={editFood? editFood.price:250} type="number" step="1" min="1" max="20000" id="price" name="price"/>
                            
                            <input type="file" name="foodPic" onChange={handleImage}/>
                            
                            <input type="submit" value="Submit" id="addSubBTN"/>
                            
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    )
}