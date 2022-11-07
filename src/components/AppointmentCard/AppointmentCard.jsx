import React from 'react'
//import { Link } from 'react-router-dom';

const AppointmentCard = ({id,name,image,appointmentPrice,appointmentDuration,discount,location,prefferedDate,prefferedTime}) => {
    return (
        <div>
          <div className='img-wrapper'>
            <img src={image} alt="service" />
          </div>
    
          <h1>{name}</h1>
          <p>{location}</p>
          <p>{prefferedDate}</p>
          <p>{prefferedTime}</p>
          <p>{appointmentPrice}</p>
          <p>{appointmentDuration}</p>
          <p>{discount}</p>

          <div className='btns'>
            <button type="button">Update Location</button>
            <button type="button">Cancel</button>
          </div>
        </div>
      );
}

export default AppointmentCard