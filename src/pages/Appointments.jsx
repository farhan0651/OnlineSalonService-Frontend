import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'


const Appointments = () => {
const [input, setlnput]=useState('');
const [results,setResults]=useState(null);

const onlnputChange = (eventObject)=>{
  setlnput(eventObject.target.value);
};

useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(resp=>setResults(resp.data))
  .catch(err=>console.log(err));
}, [])

const onSearch=()=>{
  //fetch('http://localhost:8000/appointment/getAll')
  fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
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
      return(<div>{results.map((item)=>(<div key={item.id}>{item.show.name}</div>))}</div>);
    }
    return null;
};

  return (
    <div>
      <Title title="Appointment" subtitle="Have a look at the services for which you can book an appointment" />
      <MainPageLayout>
      <div>
      <label htmlFor="view-appointment">
      View Appointment
      <input id="shows-search" type="radio" value="view-appointment" />
      </label>
      <label htmlFor='book-appointment'>
      Book Appointment
      <input id="book-appointment" type="radio"value="people" />
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