import axios from 'axios'
import React from 'react'
//import { useEffect } from 'react'
import { useState } from 'react'


const AddCustomer = ({setCustomerList}) => {
    //Managing State of fills Using Use State, Initial Empty
    const [customerDetails, setCustomerDetails] = useState({
        address: {
            door_no: 1
          },
        contactNo: "",
        dob:"",
        email: "",
        name: "",
        user1: {
         userId: 0
       }
    }) 

    // Use States for Form Validation   
    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [dobErr, setDobErr] = useState({});
    const [contactNoErr, setContactNoErr] = useState({});
    const [doorNoErr, setDoorNoErr] = useState({});

    //Handeling Input
    const handleInput = (e)=>{
        const name =e.target.name;
        const value = e.target.value;
        // First taking Initial State and then setting Card Details 
        setCustomerDetails({ ...customerDetails, [name]: value})
    }

    const handleAddressInput = (e)=>{
        const { name, value } = e.target;
            setCustomerDetails(prevValues => {
                return {...prevValues, address:{...prevValues.address,[name]:value}}})
    }

    const handleUserInput = (e)=>{
        const { name, value } = e.target;
            setCustomerDetails(prevValues => {
                return {...prevValues, user1:{...prevValues.user1,[name]:value}}})
    }

    //Handeling Submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(customerDetails)
        const isValid = formValidation();
        console.log(isValid);
        if(isValid){
            axios.post("http://localhost:8000/Customer/addCustomer",customerDetails)
            .then(resp=>{
                console.log("Customer Added: "+resp.data)
            let newCustomer = {...customerDetails, customerId:resp.id};
            setCustomerList(prev=>[...prev, newCustomer]);
            //After Adding it will  reset the form to initial state
            setCustomerDetails({name:"", email:"", dob:"",contactNo:"",door_no:""});
            })
            .catch(err=>console.log(err));
        }
        //setFormErrors(validate(cardDetails));
        //setIsSubmit(true);
    }
    //Form Validation
    const formValidation = (values) =>{
        const nameErr ={};
        const emailErr ={};
        const dobErr ={};
        const contactNoErr ={};
        const doorNoErr={}

        let isValid = true;
        



        if(customerDetails.name===''){
            nameErr.name = "*Customer Name is required";
            isValid = false;
        }
        if(customerDetails.email===''){
            emailErr.email = "*Customer Email is required";
            isValid = false;
        }
        

        if(customerDetails.contactNo===''){
            contactNoErr.contactNo = "*Contact Number is required";
            isValid = false;
        }
        else if(customerDetails.contactNo.trim().length !== 10 && customerDetails.contactNo>0){
            contactNoErr.contactNo = "*Contact Number must be of 10 digits";
            isValid = false;
        }
        
        if(customerDetails.dob===''){
            dobErr.dob = "*Date of birth is required";
            isValid = false;
        }
        
        if(customerDetails.door_no===''){
            doorNoErr.door_no = "*Door No. is required";
            isValid = false;
        }
        
        setNameErr(nameErr);
        setEmailErr(emailErr);
        setContactNoErr(contactNoErr);
        setDobErr(dobErr);
        setDoorNoErr(doorNoErr);
        return isValid;
        
    }

  return (
    <div>
    {/* Heading for Add Card */}
    <h4 style={{
          fontWeight:"800",
          marginLeft: "250px",
        }}>Add Your Details Below</h4>

    <form action="" onSubmit={handleSubmit} className="card" style={{
        width:"350px",
        marginLeft: "250px",
        marginRight: "120px",
          padding: "30px 25px",
          marginTop: "20px"
        }}>
        {/* Customer Name Input */}
        <div class="mb-3">
            <label htmlFor='name' className="form-label" style={{fontWeight:"600"}}>Enter Your Name</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={customerDetails.name}
            placeholder="Enter Your Name"
            onChange={handleInput}
            name='name' id='name' className="form-control"/>
        </div>
        {/* For Showing Error Below Text Field */}
        {Object.keys(nameErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{nameErr[key]}</div>
        })}
        {/* email Input */}
        <div class="mb-3">
            <label htmlFor='email' className="form-label" style={{fontWeight:"600"}}>Enter Your Email Id</label>
            <br />
            <input type= 'email' autoComplete='off'
            value={customerDetails.email}
            placeholder="Enter Your Email Id"
            onChange={handleInput}
            name='email' id='email' className="form-control"/>
        </div>
        {Object.keys(emailErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{emailErr[key]}</div>
        })}

        {/* Contact Number Input */}
        <div class="mb-3">
            <label htmlFor='contactNo' className="form-label" style={{fontWeight:"600"}}>Enter Your Contact Number</label>
            <br />
            <input type= 'tel' autoComplete='off' 
            value={customerDetails.contactNo}
            placeholder="Enter Your Contact Number"
            onChange={handleInput}
            name='contactNo' id='contactNo' className="form-control"/>
        </div>
        {Object.keys(contactNoErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{contactNoErr[key]}</div>
        })}

        {/* Date of Birth Input */}
        <div class="mb-3">
            <label htmlFor='dob' className="form-label" style={{fontWeight:"600"}}>Date Of Birth</label>
            <br />
            <input type= 'date' autoComplete='off' min="1888-04-04" max="2022-11-14"
            value={customerDetails.dob}
            placeholder="Enter Date of Birth"
            onChange={handleInput}
            name='dob' id='dob' className="form-control"/>
        </div>
        {Object.keys(dobErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{dobErr[key]}</div>
        })}
        {/* Bank Name Input */}
        <div class="mb-3">
            <label htmlFor='door_no' className="form-label" style={{fontWeight:"600"}}>Enter Door no </label>
            <br />
            <input type= 'number' autoComplete='off' min="0"       
            value={customerDetails.door_no}
            placeholder="Enter Door Number"
            onChange={handleAddressInput}
            name='door_no' id='door_no' className="form-control"/>
        </div>
        {Object.keys(doorNoErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{doorNoErr[key]}</div>
        })}
        <div class="mb-3">
            <label htmlFor='userId' className="form-label" style={{fontWeight:"600"}}>User ID</label>
            <br />
            <input type= 'number' autoComplete='off' min="0"
            value={customerDetails?.user1?.userId}
            placeholder="Enter UserID"
            onChange={handleUserInput}
            name='userId' id='userId' className="form-control"/>
        </div>
        {/* Submit Button */}
        <button type='submit' class="btn btn-primary" style={{fontSize:"17px",marginTop:"10px"}}>Add Details</button>
        
    </form>
    </div>
  )
}

export default AddCustomer;