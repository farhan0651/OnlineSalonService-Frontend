import React, {useEffect, useState} from 'react'
import Title from '../components/Title'
import AddCard from '../components/Payment/AddCard'
import ListCard from '../components/Payment/ListCard'
import axios from 'axios'
import MainPageLayout from '../components/MainPageLayout'

const MyCards = () => {
  const [cardList, setCardList] = useState([]);
  //Getting card list from and Setting Updated Cards List to backend respectively
  useEffect(() => {
    // Get api of card list 
    axios.get(`http://localhost:8000/card/getAllCards`)
    // res.data is card list from api
    .then(resp=>{
      setCardList(resp.data)
  })
  .catch(err=>console.log(err));

    // setCardList([{
    //   cardName: "kjef",
    //   cardNumber: "ysgdfj",
    //   expiryDate:"ehbfkasd",
    //   bankName:"HDFC"
    // },{
    //   cardName: "bbbb",
    //   cardNumber: "zzzz",
    //   expiryDate:"ehbfxxx",
    //   bankName:"HDFCdsdsfd"
    // },])

    
    return () => {
    }
  }, [])
  
  
  return (
    <div>
      <MainPageLayout>
      <Title title="MyCard"/>
      <div className='d-flex'>
      {/* Callin Add card file from components and updating card list */}
        <AddCard setCardList={setCardList}/>
        
        {/* Callling list card file from components */}
        <ListCard cardList={cardList}/>
      </div>
      </MainPageLayout>
    </div>
  )
}

export default MyCards