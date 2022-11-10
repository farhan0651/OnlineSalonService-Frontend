import React from 'react'

import { useState, useEffect } from "react";
import axios from "axios";
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'
import MyprofileGrid from '../components/Myprofile/MyprofileGrid'
const Myprofile = () => {
  const [results, setResults] = useState(null);
 
 
  useEffect(() => {
    axios
      .get("http://localhost:8000/Customer/getAllCustomer")
      .then((resp) => setResults(resp.data))
      .catch((err) => console.log(err));
  }, []); 
 
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return <MyprofileGrid data={results} />;
    }
    return null;
  };
  
  return (
    <div>
      {renderResults()}
      <MainPageLayout>
      <Title title="Profile page" subtitle="Have a look at all the profile" />
      
      </MainPageLayout>
    </div>
  );

};
export default Myprofile;