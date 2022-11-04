import React from 'react'
import Navigation from './Navigation'

const MainPageLayout = ({children}) => {
  return (
    <div>
        <Navigation/>
        {children}
    </div>
  )
}

export default MainPageLayout