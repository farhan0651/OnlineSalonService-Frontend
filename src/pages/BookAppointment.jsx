import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { AddressBox, Appointmentdetails, CustomerDetails, H1, SearchButtonWrapper2, SearchInput } from './styled'
import PaymentDetails from '../components/Payment/PaymentDetails'

const BookAppointment = () => {
        const [appointmentDetails, setappointmentDetails] = useState({
            location: "",
            visitType: "",
            preferredDate: "",
            preferredTime: "",
            salonService: {
              serviceId: 0
            },
            customer: {
              customerId: 0
            },
            payment: {
              type: "",
              status: "",
              card: {
                cardId: 1
              }
            }
            }) 

        const [option,setOption]=useState('viewPayment');
        const paymentDetailsShow=()=>{
            if((option==="viewPayment")){
              console.log("Inside function");
              return(<PaymentDetails data={appointmentDetails}/>);
            }}
    
    
        const handleInput= (e)=>{
            const name =e.target.name;
            const value = e.target.value;
            setappointmentDetails({ ...appointmentDetails, [name]: value})
        }


        const handleCustomerInput = (e)=>{
            const { name, value } = e.target;
            setappointmentDetails(prevValues => {
                return {...prevValues, customer:{...prevValues.customer,[name]:value}}})
            
        }


        const handleSalonServiceInput = (e)=>{
            const { name, value } = e.target;
            setappointmentDetails(prevValues => {
                return {...prevValues, salonService:{...prevValues.salonService, [name]:value}}})
        }


        const handlePaymentInput = (e)=>{
            const { name, value } = e.target;
            setappointmentDetails(prevValues => {
                return {...prevValues, payment:{...prevValues.payment, [name]:value}}})
        }

        // const handleUserInput = (e)=>{
        //     const { name, value } = e.target;
        //     setappointmentDetails(prevValues => {
        //         return {...prevValues, user1:{...prevValues.customer.user1, [name]:value}}})
        // }

        const handleCardInput = (e)=>{
            const { name, value } = e.target;
            setappointmentDetails(prevValues => {
                return {...prevValues, card:{...prevValues.payment.card, [name]:value}}})
        }
    
        const handleSubmit = (e)=>{
            console.log(appointmentDetails)
            e.preventDefault();
            axios.post("http://localhost:8000/appointment/addAppointment",appointmentDetails)
            .then(resp=>{
                console.log("Appointment Created: "+resp.data)
            })
            .catch(err=>console.log(err));
            
        }
      return (
        <div className="card">
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
                <SearchInput type= 'date' autoComplete='off' 
                value={appointmentDetails.preferredDate}
                placeholder="Preffered Date"
                onChange={handleInput}
                name='preferredDate' id='preferredDate'/>
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
                value={appointmentDetails?.customer?.customerId}
                placeholder="Customer ID"
                onChange={handleCustomerInput}
                name='customerId' id='customerId'/>

                {/* <label htmlFor='userId'>User ID</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.customer.user1.userId}
                placeholder="User ID"
                onChange={handleUserInput}
                name='userId' id='userId'/> */}

                <label htmlFor='serviceId'>Service ID</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails?.salonService?.serviceId}
                placeholder="Service ID"
                onChange={handleSalonServiceInput}
                name='serviceId' id='serviceId'/>
            </div>
            </AddressBox>

            <CustomerDetails>
            <div>
                <label htmlFor='type'>Type</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.payment.type}
                placeholder="Type"
                onChange={handlePaymentInput}
                name='type' id='type'/>
            </div>
            <div>
                <label htmlFor='status'>Status</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.payment.status}
                placeholder="Status"
                onChange={handlePaymentInput}
                name='status' id='status'/>
            </div>
            <div>
                {/* <label htmlFor='cardId'>Card ID</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.payment.card.cardId}
                placeholder="Card ID"
                onChange={handleCardInput}
                name='cardId' id='cardId'/> */}
            </div>
            {paymentDetailsShow()}
            </CustomerDetails>
            <SearchButtonWrapper2><button type='submit'>Add appointment</button></SearchButtonWrapper2>
            
        </form>
        </div>
      )
    
}

export default BookAppointment