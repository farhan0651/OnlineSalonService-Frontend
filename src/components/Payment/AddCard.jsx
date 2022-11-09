import axios from 'axios'
import React from 'react'
//import { useEffect } from 'react'
import { useState } from 'react'

//
const AddCard = ({setCardList}) => {
    //Managing State of fills Using Use State
    const [cardDetails, setCardDetails] = useState({
        cardName:"",
        cardNumber:"",
        expiryDate:"",
        bankName:""
    }) 
    //const [formErrors, setFormErrors] = useState({});
    //const [isSubmit, setIsSubmit] = useState(false);
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
    const formValidation = (values) =>{
        const cardNameErr ={};
        const cardNumberErr ={};
        const expiryDateErr ={};
        const bankNameErr ={};
        let isValid = true;

        if(cardDetails.cardName===''){
            cardNameErr.cardName = "Card Name is required";
            isValid = false;
        }
        if(cardDetails.cardNumber===''){
            cardNumberErr.cardNumber = "Card Number is required";
            isValid = false;
        }else if(cardDetails.cardNumber.trim().length !== 6){
            cardNumberErr.cardNumber = "Card Number is must be of 6 digits";
            isValid = false;
        }
        if(cardDetails.expiryDate===''){
            expiryDateErr.expiryDate = "Card Name is required";
            isValid = false;
        }
        if(cardDetails.bankName===''){
            bankNameErr.bankName = "Bank Name is required";
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
    <AddCard>
    <h6>Add Card</h6>
    <form action="" onSubmit={handleSubmit}>
        <div class="mb-3">
            <label htmlFor='cardName' class="form-label">Card Name</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={cardDetails.cardName}
            placeholder="Enter Card Name"
            onChange={handleInput}
            name='cardName' id='cardName' class="form-control"/>
        </div>
        {Object.keys(cardNameErr).map((key)=>{
            return <div style={{color:"red"}}>{cardNameErr[key]}</div>
        })}
        <div class="mb-3">
            <label htmlFor='cardNumber' class="form-label">Card Number</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={cardDetails.cardNumber}
            placeholder="Enter Card Number"
            onChange={handleInput}
            name='cardNumber' id='cardNumber'/>
        </div>
        {Object.keys(cardNumberErr).map((key)=>{
            return <div style={{color:"red"}}>{cardNumberErr[key]}</div>
        })}
        <div class="mb-3">
            <label htmlFor='expiryDate' class="form-label">Expiry Date</label>
            <br />
            <input type= 'date' autoComplete='off' 
            value={cardDetails.expiryDate}
            placeholder="Enter Expiry Date"
            onChange={handleInput}
            name='expiryDate' id='expiryDate'/>
        </div>
        {Object.keys(expiryDateErr).map((key)=>{
            return <div style={{color:"red"}}>{expiryDateErr[key]}</div>
        })}
        <div class="mb-3">
            <label htmlFor='bankName' class="form-label">Bank Name</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={cardDetails.bankName}
            placeholder="Enter Bank Name"
            onChange={handleInput}
            name='bankName' id='bankName'/>
        </div>
        {Object.keys(bankNameErr).map((key)=>{
            return <div style={{color:"red"}}>{bankNameErr[key]}</div>
        })}
        
        <button type='submit' class="btn btn-primary" >Add Card</button>
        
    </form>
    </AddCard>
  )
}

export default AddCard