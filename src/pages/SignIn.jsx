import React,{useEffect, useState} from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {Form, Col, Row, Container, Button, Alert} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

import axios from 'axios';

const SignIn = () => {

    let count=0;
    const navigate = useNavigate();
    const [errorMessage,setErr] = useState('');
    const [data,setData]= useState({
        userName :'',
        password : ''
    })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    
    const setUser = (user) => {
        console.log(JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));
      }



    const login = ({userName, password}) => {
        return axios.post("http://localhost:8000/user/signin", {
            userName,
            password
          })
          .then((response) => {
            if (response.data.accessToken) {
                console.log("Inside Login :response.data")
              setUser(response.data);
            }
            console.log("login response: ");
            console.log(response);
            return response.data;
          });
      };    

    useEffect(()=>{
        setErr(null);
    },[])



    const changeHandler = e =>{
        setData({...data,[e.target.name] : e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        setFormErrors(validate(data));
        if( data.userName==="" ){
            //alert("passwords are not matched")
            setErr("userName should not be blank,");
            count++;
        }

        else if( data.password==="" ){
            //alert("passwords are not matched")
            setErr("Password should not be blank");
            count++;
        }
        else{
        setErr(null);
        console.log(data)
        login(data)
        .then(resp=>{
            console.log("Sign in Success");
            console.log(resp.data);
            setFormErrors(validate(data));
            localStorage.setItem("isLoggedIn", true);
            navigate('/Homepage');
        })
        .catch(err=>{console.error(err)
            localStorage.setItem("isLoggedIn", false);
            setIsSubmit(false);
        });
    }
    }

    const validate = (values) => {
        const errors = {password:"",userName:""};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!values.userName) {
          errors.userName = "*User name is required!";
        }
        if (!values.password) {
          errors.password = "*Password is required";
        } else if (values.password.length < 4) {
          errors.password = "*Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "*Password cannot exceed more than 10 characters";
        }
        return errors;
      };
    
      const back="https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
    return (
      <div style={{backgroundImage: `url(${back})`,backgroundRepeat:'noRepeat' ,height: '100vh'}}>
        <div className="card" style={{
          width:"320px",
          height:"500px",
          marginLeft: "580px",
          marginRight: "120px",
            padding: "30px 25px",
            marginTop: "20px",
          }}>
                <div className="card-body" >

             <Container className='mt-0.5 p-4'>
                <h1 className='text-center'>Login</h1>
                <Form onSubmit={submitHandler}>
                <Form.Group as={Row} className="mb-3" controlId="userName">
                <Form.Label style={{ display: 'flex'}}>
                Username
                </Form.Label>
                
                <Form.Control type="text" name="userName" value={data.userName} placeholder="Username" onChange={changeHandler} style={{  width: '122%'}} />
                
                {errorMessage==="Username should not be blank," ? 
                <Alert variant="danger">
                    {errorMessage}
                    </Alert> : null
                 }
                 <p style={{color:"red", fontSize:"13px"}}>{formErrors.userName}</p>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-1" controlId="password">
                <Form.Label style={{ display: 'flex'}}>
                Password
                </Form.Label>
                
                <Form.Control type="password" name="password" value={data.password} placeholder="password" onChange={changeHandler} style={{  width: '122%'}} />
                
                {errorMessage==="password should not be blank" ? 
                <Alert variant="danger">
                    {errorMessage}
                    </Alert> : null
                 }
                 <p style={{color:"red", fontSize:"13px"}}>{formErrors.password}</p>
                </Form.Group>
                    <Button type="submit" name="submit" style={{ width: '100%'}} className='my-3'>Sign In</Button>
                    <br />
                </Form>
                <p className='m-6'>
                    Don't have an account? &nbsp;
                <LinkContainer to='/signup'><a>Sign Up</a></LinkContainer>
                </p>
                {
                  errorMessage==="Bad Credentials" ?
                        <Alert variant="danger">
                    {errorMessage}
                    </Alert> : null
                }
             </Container>
            </div>
            </div>
            </div>

    )
} ;

export default SignIn;