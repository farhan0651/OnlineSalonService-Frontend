import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Appointmentdetails } from '../../pages/styled'
const PaymentDetails = ({apppointmentDetails}) => {
    // const [payment, setPayment] = useState({
    //     paymentType:"",
    //     cardNumber:""
    // }) 
    //For Card List
   const[cardList,setCardList] =useState([]);
   const[paymentType,setPaymentType] =useState("upi");
    
    // const onChangeHandler = (e) =>{
    //     const value = e.target.value;
    //     console.log(value);
    //     setCardNumber({ ...cardNumber, value})
    // }
    //For Payment Type
    // const [paymentType, setPaymentType] = useState("");
    const onChangeHandle = (event) =>{
        //Targeting by name and value
        const name =event.target.name;
        const value = event.target.value;
        console.log(name,value)
        setPaymentType(value)
        // setPayment({...setPayment, [name]: value});
    }
    useEffect(() => {
        // Get api of card list 
        axios.get(`http://localhost:8000/card/getAllCards`)
        // res.data is card list from api
        .then(resp=>{
          setCardList(resp.data)
      })
      .catch(err=>console.log(err));
      
       }, [])
    const handleSubmit = (e)=>{
        e.preventDefault();
        // const data = {status:"Paid",type:paymentType,cardId:apppointmentDetails.payment.card.id}

        // axios.post("http://localhost:8000/payment/addPayment",data)
        // .then((res=>{
        //     console.log(res.data)
        //     // window.location.reload(false);
        // }))
        // console.log(e.target)
    }
    return (
    <div>
    
    <form onSubmit={handleSubmit} className='card' style={{
        width:"350px",
        marginLeft: "250px",
        marginRight: "120px",
        padding: "30px 25px",
        marginTop: "20px"
        }}>
        <h4><strong>Payment Details</strong></h4>
        <div>
            <h5 style={{marginTop: "20px", fontWeight:"600"}}>Choose Payment Type</h5>
            <select name = "paymentType" onChange={onChangeHandle} style={{width: "80px"}}>
                <option value="upi" >UPI</option>
                <option value="card">Card</option>
                <option value="Cash">Cash</option>
            </select>
            
        </div>
      {paymentType==="card"&&
        <>  
        <h5 style={{marginTop: "20px",  fontWeight:"600"}}>Choose Card</h5>
        {cardList.map((c,i)=>{
            return <div key={i} className="form-check">
            <input className="form-check-input" type="radio" name="cardNumber" id={c.cardId} />
            <label className="form-check-label" htmlFor='{c.cardId}' >
                {c.cardNumber}<br/>{c.cardName}
            </label>
            </div>
        })} 
        </>
        }
        {/* <button type='submit' className="btn btn-primary" style={{marginTop: "20px"}}>Pay</button> */}
        
    </form>
            
    </div>
    )
}

export default PaymentDetails;