import React, {useState} from 'react';
import './payment.css'
import Mpesa from '../../../assets/mpesa.png'
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    const [receipt, setReceipt] = useState([])
    const nav = useNavigate()

    const url = "https://2078-102-220-169-34.ngrok-free.app"

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
    
    function checkPayment(){
        fetch(`${url}/stkquery`,
          {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
  
                checkoutRequestID:receipt[1]["CheckoutRequestID"]
               
              })

          }
          ).then(r => r.json())
          .then(data =>{
            console.log(data)
            if(data[1]["ResultCode"] == 0 ) {
                alert("payment confirmed")
                nav("/customer/tracking")
            }else{
                alert("payment was unsuccessful")
            }
          } )
    }
    

    return(
        <div className='ePayment'>
            <div className="eMpesa">
                <img src={Mpesa} alt="mpesa"  className='eMpesaLogo'/>
                <h1 className='kText'>Lipa na Mpesa</h1>
                <form action="submit" className='eMpesaForm' onSubmit={handleSubmit}> 
                <input type="text" name='name' placeholder='Elizabeth Kerubo' className='eMpesaInputs' required />
                <input type="number" name='number' placeholder='0746909001' className='eMpesaInputs' required />

                <button className='eMpesaButton'>{`Pay ${totalMPesa }`} </button>


                </form>
                <button onClick={checkPayment} className='eMpesaConfirm'>Confirm</button>

            </div>



        </div>
    )
}