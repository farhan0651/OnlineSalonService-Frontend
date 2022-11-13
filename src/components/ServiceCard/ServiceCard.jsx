import React from 'react'
import { useNavigate } from 'react-router-dom';
import { StyledServiceCard } from './ServiceCard.styled';
import { Button } from "react-bootstrap";

const ServiceCard = ({ id, image, name, servicePrice, serviceDuration, discount }) => {
  const navigate=useNavigate()
  const handle=()=>{
    navigate('/Appointments');
}

    return (
      <StyledServiceCard>
        <div className='img-wrapper'>
          <img src={image} alt="service" />
        </div>
  
        <h1>{name}</h1>
  
        <p>Price: {servicePrice}</p>
        <p>Duration: {serviceDuration}</p>
        <p>Discount: {discount}</p>
  
        <div>
          <Button data-testid="button3" onClick={handle}>Book Appointment</Button>
        </div>
      </StyledServiceCard>
    );
  };

export default ServiceCard