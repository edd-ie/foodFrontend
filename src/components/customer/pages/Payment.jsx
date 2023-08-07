import React from 'react';
import './payment.css'
import Mpesa from '../../../assets/mpesa.png'

export default function Payment() {

    let totalMPesa = 1;

    function handleSubmit(e){
        e.preventDefault()

    }
    
    

    return(
        <div className='ePayment'>
            <div className="eMpesa">
                <img src={Mpesa} alt="mpesa"  className='eMpesaLogo'/>
                <form action="submit" className='eMpesaForm'> 
                <input type="text" name='name' placeholder='Elizabeth Kerubo' className='eMpesaInputs' required />
                <input type="number" name='number' placeholder='0746909001' className='eMpesaInputs' required />

                <button className='eMpesaButton'>{`Pay ${totalMPesa }`} </button>


                </form>

            </div>



        </div>
    )
}