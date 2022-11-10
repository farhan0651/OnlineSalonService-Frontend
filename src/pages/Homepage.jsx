import React from 'react'
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'
//import Group403 from '../public/Group403.png'
import UserRegister from '../components/Register'
import { useState } from 'react'
import UserLogin from '../components/Login'
import { SearchButtonWrapper } from './styled'


const Homepage = () => {
  const [option,setOption]=useState('Register');
  const registerShow=()=>{
    if((option==="Register")){
      console.log("Inside function");
      //dispatch({type:'FetchSuccess', results:null})
      return(<UserRegister />);
    }
    else{
      return(<UserLogin/>);
    }
  }
    const handleSubmit=()=>{
      if((option==="Register")){
        setOption("SignIn")
      }
      else(
        setOption("Register")
      )
      
    }
    const back="https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
  return (
    <div style={{backgroundImage: `url(${back})`}}>
      <MainPageLayout>
      <Title title="Homepage" subtitle="Get The Service YOU WANT!! We'll style while you smile!" />
      <SearchButtonWrapper>
      <button onClick={handleSubmit} type='submit' class="btn btn-primary" 
      style={{fontSize:"17px",marginTop:"10px"}}>{option==="Register"?"SignIn":"Register"}</button></SearchButtonWrapper>
        {registerShow()}
        {/* <img src="../public/Group403" alt="Image" /> */}

      </MainPageLayout>
      
    </div>
  )
}

export default Homepage;