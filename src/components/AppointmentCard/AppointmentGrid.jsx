import React from 'react'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled'
import AppointmentCard from './AppointmentCard'

const AppointmentGrid = ({data}) => {
    return (
        <FlexGrid>
            {
            data.map((appointment)=><AppointmentCard
            key={appointment.appointmentId}
            id={appointment.appointmentId}
            name={appointment?.salonService?.serviceName}
            location={appointment.location}
            image={appointment.image? appointment.image.medium : IMAGE_NOT_FOUND }
            appointmentPrice={appointment?.salonService?.servicePrice}
            appointmentDuration={appointment?.salonService?.serviceDuration+" hrs"}
            visitType={appointment.visitType}
            prefferedDate={appointment.preferredDate}
            prefferedTime={appointment.prefferedTime}
            discount={appointment?.salonService?.discount+"%"}       
            />)
            }
        </FlexGrid>
      )
}

export default AppointmentGrid