import React from 'react'
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'

const Homepage = () => {
  return (
    <div>
      <Title title="Homepage" subtitle="Good morning (username of the user)" />
      <MainPageLayout>This is Homepage</MainPageLayout>
    </div>
  )
}

export default Homepage