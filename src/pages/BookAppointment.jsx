import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { AddressBox, Appointmentdetails, CustomerDetails, H1, SearchButtonWrapper, SearchInput } from './styled'
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
              type: "Cards",
              status: "Done",
              card: {
                cardId: 1
              }
            }
            }) 

            const [orderDetails, setorderDetails] = useState({
   
            amount: 1000,
            billingDate: "",
            paymentMethod: "",
            appointment: {
                appointmentId: 196
            },
            salonService:{
                serviceId:3
            },
            payment:{
                paymentId:119
            }
            }) 

            const[cardList,setCardList] =useState([]);
            const[paymentType,setPaymentType] =useState("upi");
             
             // const onChangeHandler = (e) =>{
             //     const value = e.target.value;
             //     console.log(value);
             //     setCardNumber({ ...cardNumber, value})
             // }
             //For Payment Type
             // const [paymentType, setPaymentType] = useState("");
             const onChangeHandleCard = (event) =>{
                 //Targeting by name and value
                 const name =event.target.name;
                 const value = event.target.value;
                 console.log(name,value)
                 setPaymentType(value)
                 // setPayment({...setPayment, [name]: value});
                //  setappointmentDetails(prevValues=>{return{...prevValues,payment:{card:{cardId:value}},payment:{type:paymentType}}})
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
    

        // const [option,setOption]=useState('viewPayment');
        // const paymentDetailsShow=()=>{
        //     if((option==="viewPayment")){
        //       return(<PaymentDetails data={appointmentDetails}/>);
        //     }}
    
    
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

        const handleUserInput = (e)=>{
            const { name, value } = e.target;
            setappointmentDetails(prevValues => {
                return {...prevValues, user1:{...prevValues.customer.user1, [name]:value}}})
        }

        // const handleCardInput = (e)=>{
        //     const { name, value } = e.target;
        //     setappointmentDetails(prevValues => {
        //         return {...prevValues, card:{...prevValues.payment.card, [name]:value}}})
        // }
        const handleSubmit = (e)=>{
            console.log(appointmentDetails)
            e.preventDefault();
            axios.post("http://localhost:8000/appointment/addAppointment",appointmentDetails)
            .then(resp=>{
                console.log("Appointment Created: ")
                // console.log(resp.data);
                const newOrder=resp.data.substring(31,34);
                console.log(newOrder)
                console.log(typeof(newOrder));
                setorderDetails(prevValues=>{return {...prevValues,appointment:{appointmentId:newOrder},billingDate:appointmentDetails.preferredDate,salonService:{serviceId:appointmentDetails.salonService.serviceId},paymentMethod:appointmentDetails.payment.type}})
                console.log(orderDetails);
            })
            .catch(err=>console.log(err));
            
            setTimeout(5000)

            axios.post("http://localhost:8000/orders/addOrder",orderDetails)
            .then(resp=>{
                console.log("Order Created: ")
                console.log(resp.data);
            })
            .catch(err=>console.log(err));
            
        }
      return (
        <div className="row g-3" style={{marginLeft:"250px"}}>
        <h1>Book Appointment</h1>
        <form className="row g-3" action="" onSubmit={handleSubmit} >
            <div className="col-md-6">
                <label htmlFor='visitType' className="form-label">Visit Type</label><br/>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.visitType}
                placeholder="Visit Type"
                onChange={handleInput}
                name='visitType' id='visitType' className="form-control"/>
            </div>
            <div className="col-md-6">
                <label htmlFor='location' className="form-label">Location</label><br/>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.location}
                placeholder="Location"
                onChange={handleInput}
                name='location' id='location'/>
            </div>
            <div class="col-md-6">
                <label htmlFor='preferredDate' className="form-label">Preffered Date</label><br/>
                <SearchInput type= 'date' autoComplete='off' 
                value={appointmentDetails.preferredDate}
                placeholder="Preffered Date"
                onChange={handleInput}
                name='preferredDate' id='preferredDate'/>
            </div>
            <div class="col-md-6">
                <label htmlFor='preferredTime' className="form-label">Preffered Time</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.preferredTime}
                placeholder="Preffered Time"
                onChange={handleInput}
                name='preferredTime' id='preferredTime'/>
            </div>

            <div class="col-md-6">
                <label htmlFor='customerId' className="form-label">Customer ID</label>
                <SearchInput type= 'text' autoComplete='off' 
                //value={appointmentDetails?.customer?.customerId}
                placeholder="Customer ID"
                onChange={handleCustomerInput}
                name='customerId' id='customerId'/>
            </div>
                {/* <label htmlFor='userId'>User ID</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.customer.user1.userId}
                placeholder="User ID"
                onChange={handleUserInput}
                name='userId' id='userId'/> */}
            <div class="col-md-6">
                <label htmlFor='serviceId' className="form-label">Service ID</label>
                <SearchInput type= 'text' autoComplete='off' 
                //value={appointmentDetails?.salonService?.serviceId}
                placeholder="Service ID"
                onChange={handleSalonServiceInput}
                name='serviceId' id='serviceId'/>
            </div>

            <div>
            {/* <div>
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
            </div> */}
            <div className="col-md-6">
                {/* <label htmlFor='cardId'>Card ID</label>
                <SearchInput type= 'text' autoComplete='off' 
                value={appointmentDetails.payment.card.cardId}
                placeholder="Card ID"
                onChange={handleCardInput}
                name='cardId' id='cardId'/> */}
                
                <h4><strong>Payment Details</strong></h4>
        <div className="form-label">
            <h5 style={{marginTop: "20px", fontWeight:"600"}}>Choose Payment Type</h5>
            <select name = "paymentType" onChange={onChangeHandleCard} style={{width: "80px"}}>
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

            </div>
            {/* {paymentDetailsShow()} */}
            </div>
            <SearchButtonWrapper><button type='submit'>Add appointment</button></SearchButtonWrapper>
            
        </form>
        </div>
      )
    
}

export default BookAppointment