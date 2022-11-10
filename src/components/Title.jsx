import React from 'react'
import {TitleWrapper } from './styled'

const Title = ({title,subtitle}) => {
  
  return (
    <TitleWrapper>
        <h1>{title}</h1>
        <p><h5 className="js-type-writer"><strong>{subtitle}</strong></h5></p>
    </TitleWrapper>
  )
}

export default Title