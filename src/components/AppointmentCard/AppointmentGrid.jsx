import React from 'react'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled'
import AppointmentCard from './AppointmentCard'
import HairCut from '../../images/HairCut.jpg'
import PreBridal from '../../images/Pre-Bridal.jpg'
import Waxing from '../../images/Waxing.jpg'
import Manicure from '../../images/Manicure.jpg'
import Pedicure from '../../images/Pedicure.png'
import FacialCleanUp from '../../images/FacialCleanUp.jpg'
import MakeUp from '../../images/MakeUp.jpg'
import HairCare from '../../images/HairCare.jpg'
import BodyDeals from '../../images/BodyDeals.jpg'
import Threading from '../../images/Threading.jpg'
import BleachDTan from '../../images/BleachDTan.png'

const AppointmentGrid = ({data}) => {
    const im=[HairCut,PreBridal,FacialCleanUp,BleachDTan,Manicure,Pedicure,HairCare,Waxing,BodyDeals,MakeUp,Threading]
    return (
        <FlexGrid>
            {
            data.map((appointment)=><AppointmentCard
            key={appointment.appointmentId}
            id={appointment.appointmentId}
            name={appointment?.salonService?.serviceName}
            location={appointment.location}
            image={appointment.salonService.url? im[appointment.salonService.serviceId-1] : IMAGE_NOT_FOUND }
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