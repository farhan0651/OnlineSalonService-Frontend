import React from 'react'
import { Link } from 'react-router-dom';
import { StyledServiceCard } from './ServiceCard.styled';

const ServiceCard = ({ id, image, name, servicePrice, serviceDuration, discount }) => {
    /*const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
      : 'No description';*/
  
    return (
      <StyledServiceCard>
        <div className='img-wrapper'>
          <img src={image} alt="service" />
        </div>
  
        <h1>{name}</h1>
  
        <p>{servicePrice}</p>
        <p>{serviceDuration}</p>
        <p>{discount}</p>
  
        <div className='btns'>
          <Link to={`/Appointments`}>Book Appointment</Link>
          <button type="button">Star me</button>
        </div>
      </StyledServiceCard>
    );
  };

export default ServiceCard