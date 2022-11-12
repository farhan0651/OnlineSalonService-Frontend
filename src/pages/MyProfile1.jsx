import React from 'react'
import { useState } from 'react'
//import axios from "axios";
import MainPageLayout from '../components/MainPageLayout'
import Title from '../components/Title'
//import { isHtmlElement } from 'react-router-dom/dist/dom';
import MyprofileGrid1 from '../components/Myprofile/MyProfileGrid1'
import { SearchButtonWrapper, SearchInput } from './styled';
const Myprofile1 = () => {

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
        return <MyprofileGrid1 data={results} />;
      }
    return null;
  };

  return (
    <div>
      <MainPageLayout>
      <Title title="Search Customer" subtitle="Enter the Customer Id to look your Profile" />
        <SearchInput
          type="text"
          placeholder="CustomerId"
          onChange={onlnputChange}
          value={input}
          onKeyDown={onKeyDown}
        />
        <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
         View Profile
        </button>
        </SearchButtonWrapper>
        {renderResults()}

      </MainPageLayout>
    </div>
  );
};
export default Myprofile1