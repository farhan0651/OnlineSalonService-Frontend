import React from 'react'
//import { Link } from 'react-router-dom';
import { StyledAppointmentCard } from './AppointmentCard.styled';

const AppointmentCard = ({id,name,image,appointmentPrice,appointmentDuration,discount,location,prefferedDate,prefferedTime,visitType}) => {
    return (
        <StyledAppointmentCard>
          <div className='img-wrapper'>
            <img src={image} alt="service" />
          </div>
    
          <h1>{name}</h1>
          <p>Location: {location}</p>
          <p>Visit Type: {visitType}</p>
          <p>Preffered Date: {prefferedDate}</p>
          <p>Preffered Time:{prefferedTime}</p>
          <p>Price: {appointmentPrice}</p>
          <p>Duration: {appointmentDuration}</p>
          <p>Discount: {discount}</p>

          {/* <div className='btns'>
            <button type="button">Update Location</button>
            <button type="button">Cancel</button>
          </div> */}
        </StyledAppointmentCard>
      );
}

export default AppointmentCard