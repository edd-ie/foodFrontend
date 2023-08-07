import React, { useEffect, useState} from 'react'
import NavR from '../../utility/NavR'
import './resthistory.css'

function RestHistory() {
 const [records, setRecords] = useState([])

 useEffect(()=>{
    fetch("https://backendfood-co7z.onrender.com/restaurant/orders/1")
    .then(r => r.json())
    .then(data =>{
        console.log(data)
        let format = []
        for (let x of data){
           let set = {
               foods: x.order.items.join(','),
               id: x.id,
               total: x.order.total
           }
           format.push(set)
        }
        setRecords(format)
    })

 },[])
 console.log(records)

  return (
    <div className='khistory'>
        <NavR/>
        <div className="searchHeading">
            <div className="kSearchDiv">
            <input type="text"  name='search' placeholder='Search Orders' className='kSearchBar'/><button className="kSearchBtn"></button>
            </div>
            
        <h2 className='kCaption'>Your Order History</h2>
        </div>
        <div className="kMain">
        <table className="ktable">
            <thead>
               <tr>
               <th>ID</th>
                <th>Orders</th>
                <th>Total</th>
               </tr>
            </thead>
            <tbody>
                {records.map(item =>(
                    <tr key={item.id}>
                        <td className='kFoodsID'>{item.id}</td>
                        <td className='kFoodsTD'>{item.foods}</td>
                        <td className='kFoodsID'>{item.total}</td>
                    </tr>
                ))}

            </tbody>
        </table>

        </div>
        
    </div>
  )
}

export default RestHistory