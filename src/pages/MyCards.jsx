import React, {useEffect, useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'
import AddCard from '../components/Payment/AddCard'
import ListCard from '../components/Payment/ListCard'
import axios from 'axios'

const MyCards = () => {
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    // Get api of card list 
    axios.get(`http://localhost:8000/card/getAllCards`)
    // res.data is card list from api
    .then(resp=>{
      setCardList(resp.data)
  })
  .catch(err=>console.log(err));
    return () => {
    }
  }, [])
  
  return (
    <div>
      <Title title="My Cards" subtitle="These are the card details" />
      <MainPageLayout>This is My Profile page</MainPageLayout>
      <div className='d-flex'>
        <AddCard setCardList={setCardList}/>
        <ListCard cardList={cardList}/>
      </div>
    </div>
  )
}

export default MyCards