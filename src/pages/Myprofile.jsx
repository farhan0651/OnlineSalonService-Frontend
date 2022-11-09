import React from 'react'
import { useState } from 'react'
//import axios from "axios";
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'
//import { isHtmlElement } from 'react-router-dom/dist/dom';
import MyprofileGrid from '../components/Myprofile/MyprofileGrid'

const Myprofile = () => {

const [input, setlnput] = useState("");
  const [results, setResults] = useState(null);
  const onlnputChange = (eventObject) => {
    setlnput(eventObject.target.value);
  };
  const onSearch = () => {
    fetch(`http://localhost:8000/Customer/${input}`)
      .then((res) => res.json())
      .then((result) => {
        setResults([result]);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
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
      <Title title="My Profile" subtitle="Enter the Customer Id to look your Profile" />
      <MainPageLayout>
        <div>
          <label htmlFor="view-Myprofile">
            View Myprofile
            <input id="shows-search" type="radio" value="view-orders" />
          </label>
        </div>
        <input
          type="text"
          placeholder="CustomerId"
          onChange={onlnputChange}
          value={input}
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={onSearch}>
          Search Orders
        </button>
        {renderResults()}
      </MainPageLayout>
    </div>
  );
};
export default Myprofile