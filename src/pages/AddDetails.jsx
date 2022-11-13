import React from 'react'
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title';
import { useState,useEffect } from 'react';
import axios from 'axios';
import ListDetails from '../components/Myprofile/ListDetails';
import AddCustomer from '../components/Myprofile/AddCustomer';

const AddDetails = () => {

    const [customerList, setCustomerList] = useState([]);
    //Getting card list from and Setting Updated Cards List to backend respectively
    // useEffect(() => {
    //   // Get api of card list 
    //   axios.get(`http://localhost:8000/Customer/1`)
    //   // res.data is card list from api
    //   .then(resp=>{
    //     setCustomerList(resp.data)
    // })
    // .catch(err=>console.log(err))
    // },[])
    

  return (
    <div>
    <MainPageLayout>
    <Title title="My Profile"/>
    <div className='d-flex'>
    {/* Callin Add Customer file from components and updating card list */}
      <AddCustomer setCustomerList={setCustomerList}/>
      {/* Callling list card file from components */}
      <ListDetails customerList={customerList}/>
    </div>
    </MainPageLayout>
  </div>
  )
}

export default AddDetails