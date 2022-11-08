import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { AddressBox, Appointmentdetails, CustomerDetails, H1, RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './styled'

const BookAppointment = () => {
        const [appointmentDetails, setappointmentDetails] = useState({
            visitType:"",
            prefferedDate:null,
            prefferedTime:null,
            location:""
        }) 

        const [addressDetails, setaddressDetails] = useState({
            doorNo:"",
            state:"",
            city:"",
            pinCode:"",
            area:"",
            stree:""
        }) 

        const [customerDetails, setcustomerDetails] = useState({
            name:"",
            email:"",
            contactNo:"",
            dateOfBirth:""
        }) 
    
    
        const handleInput = (e)=>{
            const name =e.target.name;
            const value = e.target.value;
            console.log(name, value);
            setappointmentDetails({ ...appointmentDetails, [name]: value})
        }
    
        const handleSubmit = (e)=>{
            axios.post("http://localhost:8000/appointment/addAppointment",appointmentDetails)
            .then(resp=>{
                // let newappointment = {...appointmentDetails, id:resp.id};
                // setappointmentList(prev=>[...prev, newappointment]);
                // setappointmentDetails({appointmentName:"", appointmentNumber:"", expiryDate:"",bankName:""});
            })
            .catch(err=>console.log(err));
            
        }
      return (
        <div>
        <H1>Book Appointment</H1>
        <form action="POST" onSubmit={handleSubmit}>
            <Appointmentdetails>
            <div>
                <label htmlFor='visitType'>Visit Type</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.visitType}
                placeholder="Enter Bank Name"
                onChange={handleInput}
                name='visitType' id='visitType'/>
            </div>
            <div>
                <label htmlFor='location'>Location</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.location}
                placeholder="Location"
                onChange={handleInput}
                name='location' id='location'/>
            </div>
            <div>
                <label htmlFor='prefferedDate'>Preffered Date</label>
                <SearchInput type= 'date' autoComplete='off' 
                value={appointmentDetails.prefferedDate}
                placeholder="Preffered Date"
                onChange={handleInput}
                name='prefferedDate' id='prefferedDate'/>
            </div>
            <div>
                <label htmlFor='prefferedTime'>Preffered Time</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.prefferedTime}
                placeholder="Preffered Time"
                onChange={handleInput}
                name='prefferedTime' id='prefferedTime'/>
            </div>
            </Appointmentdetails>
            <AddressBox>
            <div>
                <label htmlFor='doorNo'>Door Number</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={addressDetails.doorNo}
                placeholder="Door No."
                onChange={handleInput}
                name='doorNo' id='doorNo'/>
            </div>
            <div>
                <label htmlFor='street'>Street</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={addressDetails.street}
                placeholder="Street"
                onChange={handleInput}
                name='street' id='street'/>
            </div>
            <div>
                <label htmlFor='area'>Area</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={addressDetails.area}
                placeholder="Area"
                onChange={handleInput}
                name='area' id='area'/>
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={addressDetails.city}
                placeholder="City"
                onChange={handleInput}
                name='city' id='city'/>
            </div>
            <div>
                <label htmlFor='state'>State</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={addressDetails.state}
                placeholder="State"
                onChange={handleInput}
                name='state' id='state'/>
            </div>
            <div>
                <label htmlFor='pinCode'>Pin Code</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={addressDetails.pinCode}
                placeholder="Pin Code"
                onChange={handleInput}
                name='pinCode' id='pinCode'/>
            </div>
            </AddressBox>

            <CustomerDetails>
            <div>
                <label htmlFor='name'>Name</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={customerDetails.name}
                placeholder="Name"
                onChange={handleInput}
                name='name' id='name'/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={customerDetails.email}
                placeholder="Email"
                onChange={handleInput}
                name='email' id='email'/>
            </div>
            <div>
                <label htmlFor='contactNo'>Contact No.</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={customerDetails.contactNo}
                placeholder="Contact Number"
                onChange={handleInput}
                name='contactNo' id='contactNo'/>
            </div>
            <div>
                <label htmlFor='dateOfBirth'>Date Of Birth</label>
                <SearchInput type= 'date' autoComplete='off' 
                value={customerDetails.dateOfBirth}
                placeholder="Date Of Birth"
                onChange={handleInput}
                name='dateOfBirth' id='dateOfBirth'/>
            </div>
            </CustomerDetails>
            <SearchButtonWrapper><button type='submit'>Add appointment</button></SearchButtonWrapper>
            
        </form>
        </div>
      )
    
}

export default BookAppointment