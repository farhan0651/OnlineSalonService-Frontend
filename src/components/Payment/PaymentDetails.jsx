import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const PaymentDetails = () => {
    const [payment, setPayment] = useState({
        paymentType:"",
        cardNumber:""
    }) 
    //For Card List
   // const[cardNumber,setCardNumber] =useState({});
    
    // const onChangeHandler = (e) =>{
    //     const value = e.target.value;
    //     console.log(value);
    //     setCardNumber({ ...cardNumber, value})
    // }
    //For Payment Type
    //const [value, setValue] = useState("");
    const onChangeHandle = (event) =>{
        const name =event.target.name;
        const value = event.target.value;
        console.log(name,value)
        setPayment({...setPayment, [name]: value});
    }
    useEffect(() => {
        // Get api of card list 
        axios.get(`http://localhost:8000/card/getAllCards`,payment.cardNumber)
        // res.data is card list from api
        .then(resp=>{
          setPayment(resp.data)
      })
      .catch(err=>console.log(err));
      return () => {
        }
       }, [payment.cardNumber])
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/payment/addPayment",payment)
            .then(resp=>{
                // console.log(resp.id)
                // let newCard = {...cardDetails, id:resp.id};
                // setCardList(prev=>[...prev, newCard]);
                // setCardDetails({cardName:"", cardNumber:"", expiryDate:"",bankName:""});
            })
            .catch(err=>console.log(err));
        
    }

    return (
    <div>
    <h4>Payment Details</h4>
    <form action="" onSubmit={handleSubmit} >

        <div>
            <h6>Choose Payment Type</h6>
            <select name = "paymentType" value={payment.paymentType} onChange={onChangeHandle}>
                <option className="dropdown-item" value="card">Card</option>
                <option value="upi" className="dropdown-item">UPI</option>
                <option value="Cash" className="dropdown-item">Cash</option>
            </select>
            
        </div>
            
        <div class="mb-3">
            <label htmlFor='cardNumber'><h6>Choose Card for Payment</h6></label>
            <br />
            <div>
                <input type= 'radio' name='cardNumber' 
                value={payment.paymentType}
                onChange={onChangeHandle}/>
            </div>
            
        </div>
        
        <button type='submit' className="btn btn-primary">Pay</button>
        
    </form>
            
    </div>
    )
}

export default PaymentDetails;