import React from 'react'
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'

const Payment = () => {
  return (
    <div>
      <Title title="Payment" subtitle="These are the payment details for (usernam)" />
      <MainPageLayout>This is Payments page</MainPageLayout>
    </div>
  )
}

export default Payment