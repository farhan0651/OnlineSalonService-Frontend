import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { AddressBox, Appointmentdetails, CustomerDetails, H1, SearchButtonWrapper2, SearchInput } from './styled'

const BookAppointment = () => {
        const [appointmentDetails, setappointmentDetails] = useState({
            visitType:"",
            preferredDate:"",
            preferredTime:"",
            location:"",
            customer: {
                name: "",
                email: "",
                contactNo: "",
                dob: "",
                user1: {
                userId: 0,
                userName: "",
                password: ""
                },
                address: {
                door_no: "",
                street: "",
                area: "",
                city: "",
                state: "",
                pincode: 0
                },
                userId: 0
                },
                salonService: {
                    serviceId: 0,
                    serviceName: "",
                    servicePrice: "",
                    serviceDuration: "",
                    discount: 0
                    },
            payment: {
                paymentId: 1,
                type: "",
                status: "",
                card: null
                }
        }) 
    
    
        const handleInput = (e)=>{
            const name =e.target.name;
            const value = e.target.value;
            console.log(name, value);
            setappointmentDetails({ ...appointmentDetails, [name]: value})
        }
        const handleCustomerInput = (e)=>{
            const { name, value } = e.target;
            setappointmentDetails(prevValues => {
                return {...prevValues, customer:{...prevValues.customer, [name]:value}}})
        }
        // const handleSalonServiceInput = (e)=>{
        //     const { name, value } = e.target;
        //     setappointmentDetails(prevValues => {
        //         return {...prevValues, salonService:{...prevValues.customer, [name]:value}}})
        // }
        // const handlePaymentInput = (e)=>{
        //     const { name, value } = e.target;
        //     setappointmentDetails(prevValues => {
        //         return {...prevValues, payment:{...prevValues.customer, [name]:value}}})
        // }
    
        const handleSubmit = (e)=>{
            axios.post("http://localhost:8000/appointment/addAppointment",appointmentDetails)
            .then(resp=>{
                let newappointment = {...appointmentDetails, id:resp.id};
                setappointmentDetails(prev=>[...prev, newappointment]);
                //setappointmentDetails({initialValues});
            })
            .catch(err=>console.log(err));
            
        }
      return (
        <div>
        <H1>Book Appointment</H1>
        <form action="" onSubmit={handleSubmit}>
            <Appointmentdetails>
            <div>
                <label htmlFor='visitType'>Visit Type</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.visitType}
                placeholder="Visit Type"
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
                <label htmlFor='preferredDate'>Preffered Date</label>
                <SearchInput type= 'Date' autoComplete='off' 
                value={appointmentDetails.preferredDate}
                placeholder="Preffered Date"
                onChange={handleInput}
                name='prefferredDate' id='prefferredDate'/>
            </div>
            <div>
                <label htmlFor='preferredTime'>Preffered Time</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.preferredTime}
                placeholder="Preffered Time"
                onChange={handleInput}
                name='preferredTime' id='preferredTime'/>
            </div>
            </Appointmentdetails>
            <AddressBox>
            <div>
                <label htmlFor='customerId'>Customer ID</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.customerId}
                placeholder="Customer ID"
                onChange={handleInput}
                name='customerId' id='customerId'/>
            </div>
            </AddressBox>

            <CustomerDetails>
            <div>
                <label htmlFor='area'>Area</label>
                <SearchInput type= 'text' autoComplete='off' 
                //value={appointmentDetails.area}
                placeholder="Service ID"
                onChange={handleCustomerInput}
                name='area' id='area'/>
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <SearchInput type= 'text' autoComplete='off' 
                //value={appointmentDetails.city}
                placeholder="City"
                onChange={handleCustomerInput}
                name='city' id='city'/>
            </div>
            <div>
                <label htmlFor='door_no'>Door Number</label>
                <SearchInput type= 'text' autoComplete='off' 
                //value={appointmentDetails.door_no}
                placeholder="Door Number"
                onChange={handleCustomerInput}
                name='door_no' id='door_no'/>
            </div>
            <div>
                <label htmlFor='pincode'>Pincode</label>
                <SearchInput type= 'text' autoComplete='off' 
                //value={appointmentDetails.pincode}
                placeholder="Pincode"
                onChange={handleCustomerInput}
                name='pincode' id='pincode'/>
            </div>
            <div>
                <label htmlFor='state'>State</label>
                <SearchInput type= 'text' autoComplete='off' 
                //value={appointmentDetails.state}
                placeholder="State"
                onChange={handleCustomerInput}
                name='state' id='state'/>
            </div>
            <div>
                <label htmlFor='street'>Street</label>
                <SearchInput type= 'text' autoComplete='off' 
                //value={appointmentDetails.street}
                placeholder="Street"
                onChange={handleCustomerInput}
                name='street' id='street'/>
            </div>
            </CustomerDetails>
            <SearchButtonWrapper2><button type='submit'>Add appointment</button></SearchButtonWrapper2>
            
        </form>
        </div>
      )
    
}

export default BookAppointment