import React from 'react'
import ServiceCard from './ServiceCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled'

const ServiceGrid = ({data}) => {
  return (
    <FlexGrid>
        {
        data.map(({show})=><ServiceCard 
        key={show.id}
        id={show.id}
        name={show.name}
        image={show.image? show.image.medium : IMAGE_NOT_FOUND }
        summary={show.summary}       
        />)
        }
    </FlexGrid>
  )
}

export default ServiceGrid