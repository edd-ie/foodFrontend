import React, {useState} from 'react';
import './payment.css'
import Mpesa from '../../../assets/mpesa.png'
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    const [receipt, setReceipt] = useState([])
    const nav = useNavigate()

    
    const url = "https://b859-197-139-44-10.ngrok-free.app"

    let totalMPesa = 1;

    function handleSubmit(e){
        e.preventDefault()
        let form = e.target
        let formData = new FormData(form)
       let phone = parseInt(formData.get('number'))

        let dataSet = {amount: totalMPesa,
            phoneNumber: parseInt("254" + phone) 
            
          }
          console.log(dataSet)

          fetch(`${url}/stkpush`,
          {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataSet)

          }
          ).then(r => r.json())
          .then((data) => {
           console.log(data)
           setReceipt(data)
          })
    }
    console.log(receipt)
    
    let myArrayString = localStorage.getItem("cs") ? localStorage.getItem("cs"):0 ;
    let list = JSON.parse(myArrayString);

    let myArray = localStorage.getItem("cartList") ? localStorage.getItem("cartList") : 0;
    let ids = JSON.parse(myArray);

    let myArr = localStorage.getItem("cartNames") ? localStorage.getItem("cartNames") : 0;
    let foods = JSON.parse(myArr);

    const [clear, setClear] = useState(false)

    function updateOrder(data){
        let x = localStorage.getItem("trId")
        
        x ?
        fetch(`https://backendfood-co7z.onrender.com/order_tracks/${x}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(data =>{
            localStorage.removeItem("cs")
            localStorage.removeItem("cartList")
            localStorage.removeItem("cartNames")
            localStorage.removeItem("trId")
            nav("/customer/tracking");
            console.log(data)
        })
        :
        fetch('https://backendfood-co7z.onrender.com/customer/order',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(data =>{
            localStorage.removeItem("cs")
            localStorage.removeItem("cartList")
            localStorage.removeItem("cartNames")
            localStorage.removeItem("trId")
            nav("/customer/tracking");
            console.log(data)
        })
    }
    
    
    


    function checkPayment(){
        let x = localStorage.getItem("trId")
        let dataset =x ? {
            id: parseInt(x),
            paid: clear
        }: {
            items: foods,
            food_id: ids,
            customer_id:  parseInt(localStorage.getItem("foodChapUser")),
            restaurant_id: parseInt(localStorage.getItem("restaurantId")),
            discount: 0,
            service_fee: list[1],
            paid: clear,
            total: list[0],
        }
        console.log("file: Payment.jsx:60 -> checkPayment -> dataset:", dataset);

        // updateOrder(dataset) /// for testing

        fetch(`${url}/stkquery`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({checkoutRequestID:receipt[1]["CheckoutRequestID"]})
        })
        .then(r => r.json())
        .then(data =>{
            console.log(data)
            if(data[1]["ResultCode"] == 0 ) {
                alert("payment confirmed")
                setClear(true)
            }else{
                alert("payment was unsuccessful")
            }
            
            updateOrder(dataset)
        })
        .catch(err => {console.log(err); updateOrder(dataset)})
        
    }
    
    

    return(
        <div className='ePayment'>
            <div className="eMpesa">
                <img src={Mpesa} alt="mpesa"  className='eMpesaLogo'/>
                <h1 className='kText'>Lipa na Mpesa</h1>
                <form action="submit" className='eMpesaForm' onSubmit={handleSubmit}> 
                <input type="text" name='name' placeholder='Elizabeth Kerubo' className='eMpesaInputs' required />
                <input type="number" name='number' placeholder='0746909001' className='eMpesaInputs' required />

                <button className='eMpesaButton'>{`Pay - ${list[0]+list[1]}`} </button>
                </form>
                <button onClick={checkPayment} className='eMpesaConfirm'>Proceed to Tracking</button>

            </div>



        </div>
    )
}