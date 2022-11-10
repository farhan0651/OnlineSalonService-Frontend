import React from 'react'
import { useState,useEffect} from 'react'
import axios from "axios";
import MainPageLayout from '../components/MainPageLayout'
import ServiceGrid from '../components/ServiceCard/ServiceGrid'
import Title from '../components/Title'
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './styled';

const Services = () => {
  const [input, setlnput]=useState('');
  const [results,setResults]=useState(null);
  const [option,setOption]=useState('viewService');
  const isView= option==='viewService';

  const onlnputChange = (eventObject)=>{
    setlnput(eventObject.target.value);
  };

  useEffect(()=>{
    axios.get(`http://localhost:8000/SalonService/services`)
    .then(resp=>setResults(resp.data))
    .catch(err=>console.log(err));
  }, [])

  const onSearch=()=>{
    if(isView){
    fetch(`http://localhost:8000/SalonService/service/${input}`)
    .then(res=>res.json())
    .then(result=>{
      setResults(result);
      console.log(result);
    })
    .catch(err=>console.log(err));
  }
  /*else{
    fetch(`http://localhost:8000/SalonService/services`)
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
        return<div>No Service available</div>
      }
      if(results && results.length>0){
        return <ServiceGrid data={results} />
      }
      return null;
  };

  const onRadioChange=(eventObject)=>{
    setOption(eventObject.target.value);
  }

  return (
    <div>
      <MainPageLayout>
      <Title title="Service" subtitle="These are the services which we offer" />
      <RadioInputsWrapper>
        <div>
      <label htmlFor="view-service">
      View Service
      <input id="view-service" type="radio" value="viewService" checked={isView} onChange={onRadioChange} />
      </label>
      </div>
      <div>
      <label htmlFor='book-appointment'>
      Services available
      <input id="all-servies" type="radio"value="allService" checked={!isView} onChange={onRadioChange} />
      </label>
      </div>
      </RadioInputsWrapper>
      <SearchInput type="text" placeholder='Service Name' onChange={onlnputChange} value={input} onKeyDown={onKeyDown} />
      <SearchButtonWrapper><button type="button" onClick={onSearch}>Search Service</button></SearchButtonWrapper>
      {renderResults()}
      </MainPageLayout>
    </div>
  )
}

export default Services