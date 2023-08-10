import React, { useEffect,useState } from 'react'
import "./history.css"
import NavC from '../../utility/NavC'

function History() {

    const [records, setRecords] = useState([])

  useEffect(() =>{
    fetch("https://backendfood-co7z.onrender.com/customer/orders/1")
    .then(r => r.json())
    .then(data=> {
        console.log(data)
        let format = []
         for (let x of data){
            let set = {
                foods: x.items.join(' , '),
                restaurant: x.restaurant.name,
                total: x.total
            }
            format.push(set)
         }
         setRecords(format)
    })


  },[])
  console.log(records)

  return (
    <div className='khistory'>
        <NavC/> 
        <h2 className='kCaption'>Your Order History</h2>
        <div className="kMain">
        <table className="ktable">
            <thead>
               <tr>
               <th>Restaraunt Name</th>
               <th>Foods</th>
                <th>Total</th>
               </tr>
            </thead>
            <tbody>
                {records.map(item =>(
                    <tr key={item.id}>
                        <td>{item.restaurant}</td>
                        <td>{item.foods}</td>
                        <td>{item.total}</td>
                    </tr>
                ))}

            </tbody>
        </table>

        </div>
        
    </div>
  
  )
}

export default History