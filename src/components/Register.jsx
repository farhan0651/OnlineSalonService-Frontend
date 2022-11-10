import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";



//import axios from 'axios';
function UserRegister() {
  const initialValues={userId:"",password:"",userName:""};
const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //const dis1=()=>{dispatch(register())};
  const fetchProducts = async () =>{
    await axios.post('http://localhost:8000/user/register',formValues)
    .then((data)=>console.log(data.data))
    .catch((error)=>console.log(error));
  }
 
  // function handleClick() {
    
  //   fetch('http://localhost:8020/capg/userinterface/users', {  

  //     method: 'POST', 
  //     mode: 'no-cors', 
  //     body: JSON.stringify(formValues) 

  //   })
  //   //dis1();
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  // const handleSearch=()=>{
  //   //var errorMessage;
  //   axios
  //   .get(
  //     `http://localhost:8020/user/`
  //   )

  // };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {userId:"",password:"",userName:""};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userId) {
        errors.userId = "*User Id is required!";
      }
    if (!values.userName) {
      errors.userName = "*User name is required!";
    }
    // if (!values.email) {
    //   errors.email = "Email is required!";
    // } else if (!regex.test(values.email)) {
    //   errors.email = "This is not a valid email format!";
    // }
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 4) {
      errors.password = "*Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "*Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form action="/Homepage" onSubmit={handleSubmit} className="card" style={{
        width:"350px",
        marginLeft: "250px",
        marginRight: "120px",
          padding: "30px 25px",
          marginTop: "20px"
        }}>
        <h3 style={{
          fontWeight:"800"
        }}>Register Form</h3>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label class="form-label">User Name:</label><br />
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              value={formValues.userName}
              onChange={handleChange}
              class="form-control"
            />
          </div>
          <p style={{color:"red", fontSize:"13px"}}>{formErrors.userName}</p>
          <div className="field">
            <label class="form-label">User Id:</label><br />
            <input
              type="text"
              name="userId"
              placeholder="User Id"
              value={formValues.userId}
              onChange={handleChange}
              class="form-control"
            />
          </div>
          <p style={{color:"red", fontSize:"13px"}}>{formErrors.userId}</p>
          <div className="field">
            <label class="form-label">Password:</label><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              class="form-control"
            />
          </div>
          <p style={{color:"red", fontSize:"13px"}}>{formErrors.password}</p>
          {/* <div className="field">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formValues.role}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.role}</p> */}

          <button class="btn btn-primary" onClick={fetchProducts}>Register</button>
          {/* <button onClick={()=>{dispatch(register())}}>test</button>
          {isRegistered? <p>Registered</p>:<p>please register</p>}  */}
        </div>
      </form>
      
    </div>
  )
}

export default UserRegister;