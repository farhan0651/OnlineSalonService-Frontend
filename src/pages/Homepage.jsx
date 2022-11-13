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
    <div style={{backgroundImage: `url(${back})`,backgroundRepeat:'noRepeat' ,height: '100vh'}}>
      <MainPageLayout>
      <Title title="The Kaya" subtitle="Get The Service YOU WANT!! We'll style while you smile!" />
      {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" style={{height: '0.5vh'}}>
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
     </div>
   <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cbwsalon.com/public/user-uploads/carousel-images/10dc42b4524a280f24dce62158bc52dd.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
      {/* <SearchButtonWrapper>
      <button onClick={handleSubmit} type='submit' class="btn btn-primary" 
      style={{fontSize:"17px",marginTop:"10px"}}>{option==="Register"?"SignIn":"Register"}</button></SearchButtonWrapper> */}
        {/* {registerShow()} */}
        {/* <img src="../public/Group403" alt="Image" /> */}

      </MainPageLayout>
      
    </div>
  )
}

export default Homepage;