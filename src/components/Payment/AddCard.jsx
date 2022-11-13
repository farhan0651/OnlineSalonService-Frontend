import axios from 'axios'
import React from 'react'
//import { useEffect } from 'react'
import { useState } from 'react'


const AddCard = ({setCardList}) => {
    //Managing State of fills Using Use State, Initial Empty
    const [cardDetails, setCardDetails] = useState({
        cardName:"",
        cardNumber:"",
        expiryDate:"",
        bankName:""
    }) 
    // Use States for Form Validation
    const [cardNameErr, setcardNameErr] = useState({});
    const [cardNumberErr, setcardNumberErr] = useState({});
    const [expiryDateErr, setExpiryDateErr] = useState({});
    const [bankNameErr, setbankNameErr] = useState({});

    //Handeling Input
    const handleInput = (e)=>{
        const name =e.target.name;
        const value = e.target.value;
        console.log(name, value);
        // First taking Initial State and then setting Card Details 
        setCardDetails({ ...cardDetails, [name]: value})
    }

    //Handeling Submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        const isValid = formValidation();
        if(isValid){
            axios.post("http://localhost:8000/card/addCard",cardDetails)
            .then(resp=>{
                console.log(resp.id)
            let newCard = {...cardDetails, id:resp.id};
            setCardList(prev=>[...prev, newCard]);
            setCardDetails({cardName:"", cardNumber:"", expiryDate:"",bankName:""});
            })
            .catch(err=>console.log(err));
        }
        //setFormErrors(validate(cardDetails));
        //setIsSubmit(true);
    }
    //Form Validation
    const formValidation = (values) =>{
        const cardNameErr ={};
        const cardNumberErr ={};
        const expiryDateErr ={};
        const bankNameErr ={};
        let isValid = true;

        if(cardDetails.cardName===''){
            cardNameErr.cardName = "*Card Name is required";
            isValid = false;
        }
        if(cardDetails.cardNumber===''){
            cardNumberErr.cardNumber = "*Card Number is required";
            isValid = false;
        }else if(cardDetails.cardNumber.trim().length !== 16){
            cardNumberErr.cardNumber = "*Card Number must be of 16 digits";
            isValid = false;
        }
        if(cardDetails.expiryDate===''){
            expiryDateErr.expiryDate = "*Card Name is required";
            isValid = false;
        }
        if(cardDetails.bankName===''){
            bankNameErr.bankName = "*Bank Name is required";
            isValid = false;
        }
        setcardNameErr(cardNameErr);
        setcardNumberErr(cardNumberErr);
        setExpiryDateErr(expiryDateErr);
        setbankNameErr(bankNameErr);
        return isValid;
        
    }

    /*useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(cardDetails);
        }
    },[formErrors,cardDetails,isSubmit])*/

    /*const validate = (values) => {
        const errors = {};
        //const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!values.cardName){
            errors.cardName = "Card Name is required";
        }
        if(!values.cardNumber){
            errors.cardNumber = "Card Number is required";
        }else if (values.cardNumber !== 6){
            errors.cardNumber= "Card Number Should be 6 digit"
        }
        if(!values.expiryDate){
            errors.expiryDate = "Expiry Date is required";
        }
        if(!values.bankName){
            errors.bankName = "Bank Name is required";
        }
        return errors;
    };*/
  return (
    <div>
    {/* Heading for Add Card */}
    <h4 style={{
          fontWeight:"800",
          marginLeft: "220px",
        }}>Add Card</h4>

    {/* Form to Add Card */}
    <form action="" onSubmit={handleSubmit} className="card" style={{
        width:"350px",
        marginLeft: "220px",
        marginRight: "120px",
          padding: "30px 25px",
          marginTop: "20px"
        }}>
        {/* Card Name Input */}
        <div class="mb-3">
            <label htmlFor='cardName' className="form-label" style={{fontWeight:"600"}}>Card Name</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={cardDetails.cardName}
            placeholder="Enter Card Name"
            onChange={handleInput}
            name='cardName' id='cardName' className="form-control"/>
        </div>
        {/* For Showing Error Below Text Field */}
        {Object.keys(cardNameErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{cardNameErr[key]}</div>
        })}
        {/* Card Number Input */}
        <div class="mb-3">
            <label htmlFor='cardNumber' className="form-label" style={{fontWeight:"600"}}>Card Number</label>
            <br />
            <input type= 'number' autoComplete='off' 
            value={cardDetails.cardNumber}
            placeholder="Enter Card Number"
            onChange={handleInput}
            name='cardNumber' id='cardNumber' className="form-control"/>
        </div>
        {Object.keys(cardNumberErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{cardNumberErr[key]}</div>
        })}
        {/* Expiry Date Input */}
        <div class="mb-3">
            <label htmlFor='expiryDate' className="form-label" style={{fontWeight:"600"}}>Expiry Date</label>
            <br />
            <input type= 'date' autoComplete='off' min="2022-11-14" max="2032-11-14"
            value={cardDetails.expiryDate}
            placeholder="Enter Expiry Date"
            onChange={handleInput}
            name='expiryDate' id='expiryDate' className="form-control"/>
        </div>
        {Object.keys(expiryDateErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{expiryDateErr[key]}</div>
        })}
        {/* Bank Name Input */}
        <div class="mb-3">
            <label htmlFor='bankName' className="form-label" style={{fontWeight:"600"}}>Bank Name</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={cardDetails.bankName}
            placeholder="Enter Bank Name"
            onChange={handleInput}
            name='bankName' id='bankName' className="form-control"/>
        </div>
        {Object.keys(bankNameErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{bankNameErr[key]}</div>
        })}
        {/* Submit Button */}
        <button type='submit' class="btn btn-primary" style={{fontSize:"17px",marginTop:"10px"}}>Add Card</button>
        
    </form>
    </div>
  )
}

export default AddCard;