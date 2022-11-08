import React from 'react'
import ServiceCard from './ServiceCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled'

const ServiceGrid = ({data}) => {
  return (
    <FlexGrid>
        {
        data.map((service)=><ServiceCard 
        key={service.serviceId}
        id={service.serviceId}
        name={service.serviceName}
        image={service.image? service.image.medium : IMAGE_NOT_FOUND }
        servicePrice={service.servicePrice}
        serviceDuration={service.serviceDuration+" hrs"}
        discount={service.discount+"%"}       
        />)
        }
    </FlexGrid>
  )
}

export default ServiceGrid