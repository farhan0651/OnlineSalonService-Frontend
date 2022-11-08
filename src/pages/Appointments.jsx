import React from 'react'
import { useState, useEffect,useReducer } from 'react'
import { useParams } from 'react-router';
import axios from "axios";
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'
import AppointmentGrid from '../components/AppointmentCard/AppointmentGrid';


const reducer=(previousState,action)=>{
  switch(action.type){
    case 'FetchSuccess':{
      return {...previousState,results:action.results,error:null}
    }
    case 'FetchFailed':{
      return {...previousState,error:action.error}
    }

    default: return previousState
  }
}

const initialState={
  results:null,
  error:null
}

const Appointments = () => {
const [input, setlnput]=useState('');
//const [results,setResults]=useState(null);
const [option,setOption]=useState('viewAppointment');
const isView= option==='viewAppointment';
const[{results,error},dispatch]=useReducer(reducer,initialState);

const {id}=useParams();

const onlnputChange = (eventObject)=>{
  setlnput(eventObject.target.value);
};

useEffect(()=>{
  axios.get("http://localhost:8000/appointment/getAll")
  .then(resp=>dispatch({type:'FetchSuccess',results:resp.data}))
  .catch(err=>console.log(err));
}, [])

const onSearch=()=>{
  if(isView){
    fetch(`http://localhost:8000/appointment/${input}`)
    .then(res=>res.json())
    .then(result=>{
      const r=[result]
      dispatch({type:'FetchSuccess',results:r})
      //setResults(r);
      console.log(r);
    })
    .catch(err=>dispatch({type:'FetchFailed',error:err.message}));
  }
  /*else{
    fetch(`http://localhost:8000/appointment/getAll`)
    .then(res=>res.json())
    .then(result=>{
      setResults(result);
      console.log(result);
    })
    .catch(err=>console.log(err));
  }*/
};

const onKeyDown = (ev)=>{
  if (ev.keyCode === 13) {
    onSearch();
  }
};

const renderResults=()=>{
    if(results && results.length===0)
    {
      return<div>No Appointments</div>
    }
    if(results && results.length>0){
      return <AppointmentGrid data={results} />
    }
    return null;
};

const onRadioChange=(eventObject)=>{
  setOption(eventObject.target.value);
}

  return (
    <div>
      <Title title="Appointment" subtitle="Have a look at the services for which you can book an appointment" />
      <MainPageLayout>
      <div>
      <label htmlFor="view-appointment">
      View Appointment
      <input id="view-appointment" type="radio" value="viewAppointment" checked={isView} onChange={onRadioChange} />
      </label>
      <label htmlFor='book-appointment'>
      Book Appointment
      <input id="book-appointment" type="radio"value="bookAppointment" checked={!isView} onChange={onRadioChange} />
      </label>
      </div>
      <input type="text" placeholder='Appointment ID' onChange={onlnputChange} value={input} onKeyDown={onKeyDown} />
      <button type="button" onClick={onSearch}>Search Appointment</button>
      {renderResults()}
      </MainPageLayout>
    </div>
  )
}

export default Appointments