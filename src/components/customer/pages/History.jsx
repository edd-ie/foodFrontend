import React, { useEffect,useState } from 'react'

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
                foods: x.items.join(','),
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
    <div></div>
  )
}

export default History