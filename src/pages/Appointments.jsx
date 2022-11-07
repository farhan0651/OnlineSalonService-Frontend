import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'


const Appointments = () => {
const [input, setlnput]=useState('');
const [results,setResults]=useState(null);
const [option,setOption]=useState('viewAppointment');
const isView= option==='viewAppointment';

const onlnputChange = (eventObject)=>{
  setlnput(eventObject.target.value);
};

useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(resp=>setResults(resp.data))
  .catch(err=>console.log(err));
}, [])

const onSearch=()=>{
  //fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
  fetch('http://localhost:8000/appointment/getAll')
  .then(res=>res.json())
  .then(result=>{
    setResults(result);
    console.log(result);
  })
  .catch(err=>console.log(err));
};

const onKeyDown = (ev)=>{
  if (ev.keyCode === 13) {
    onSearch();
  }
};

const renderResults=()=>{
    if(results && results.length===0)
    {
      return<div>No Results</div>
    }
    if(results && results.length>0){
      return(<div>{results.map((item)=>(
      <div key={item.appointmentId}>
        <h3>{item.customer.name}</h3>
        <h5>{item.customer.email}</h5>
        <h5>{item.customer.contactNo}</h5>
        <p>
          {item.customer.address.area}
          {item.customer.address.city}
          {item.customer.address.state}
        </p>
      </div>))}
      </div>);
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