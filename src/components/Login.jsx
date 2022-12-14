import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
//import state from "../Store";

//import axios from 'axios';
function UserLogin() {
    const initialValues={userName:"",password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    var isLogged=true;

  localStorage.setItem("isLoggedIn",false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const fetchUsers = async() =>{
    await axios.get('http://localhost:8000/user/signin',formValues)
    .then((data)=>{

    console.log(data.data)
    for(let i=0;i<data.data.length;i++){
      if(data.data[i].userName==formValues.userName && data.data[i].password==formValues.password ){
        console.log("Logged In");
        localStorage.setItem("isLoggedIn",true);
        isLogged=true;
        break;
      }else{
        validate(formValues);
      }
    }}).catch((error)=>console.log(error));
  }
  //console.log(fetchUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  useEffect(() => {

    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  
  const validate = (values) => {
    const errors = {userName:"",password:""};
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = "User name is required!";
    }
    // if (!values.email) {
    //   errors.email = "Email is required!";
    // } else if (!regex.test(values.email)) {
    //   errors.email = "This is not a valid email format!";
    // }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }if(!isLogged){
      errors.login="Invalid Credentials";
    }
    return errors;
  };

  return (
    <div className="container">
      

      <form className='form card' onSubmit={handleSubmit} style={{
        width:"450px",
        marginLeft: "465px",
        marginRight: "120px",
          padding: "30px 25px",
          marginTop: "20px"
        }}>
        <h3 style={{
          fontWeight:"800"
        }}>Login Form</h3>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label className="form-label">User Name:</label>
            <input
              type="text"
              name="userName"
              placeholder="userName"
              value={formValues.userName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p style={{color:"red", fontSize:"13px"}}>{formErrors.userName}</p>
          
          <p>{formErrors.email}</p>
          <div className="field">
            <label className="form-label">Password:</label><br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p style={{color:"red", fontSize:"13px"}}>{formErrors.password}</p>
          <button data-testid="loginbutton" type='submit' class="btn btn-primary" style={{fontSize:"17px",marginTop:"10px"}} onClick={fetchUsers}>Login</button>
          
        </div>
      </form>
      
    </div>
  )
}

export default UserLogin;