import React from 'react'
import ServiceCard from './ServiceCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled'
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

const ServiceGrid = ({data}) => {
  //console.log(data);
  const im=[HairCut,PreBridal,FacialCleanUp,BleachDTan,Manicure,Pedicure,HairCare,Waxing,BodyDeals,MakeUp,Threading]
  return (
    <FlexGrid>
        {
        data.map((service)=><ServiceCard 
        key={service.serviceId}
        id={service.serviceId}
        name={service.serviceName}
        image={service.url? im[service.serviceId-1] : IMAGE_NOT_FOUND }
        servicePrice={service.servicePrice}
        serviceDuration={service.serviceDuration+" hrs"}
        discount={service.discount+"%"}       
        />)
        }
    </FlexGrid>
  )
}

export default ServiceGrid