import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MainPageLayout from "../components/MainPageLayout";
import Title from "../components/Title";
import OrderGrid from "../components/OrderCard/OrderGrid";

const Orders = () => {
  //const [input, setlnput] = useState("");
  const [results, setResults] = useState(null);
  /* const [option, setOption] = useState("viewOrder");
  const isView = option === "viewOrder";

  const onlnputChange = (eventObject) => {
    setlnput(eventObject.target.value);
  };*/
  useEffect(() => {
    axios
      .get("http://localhost:8000/orders/getAllOrder")
      .then((resp) => setResults(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return <OrderGrid data={results} />;
    }
    return null;
  };
  /*
  const onRadioChange = (eventObject) => {
    setOption(eventObject.target.value);
  };*/

  return (
    <div>
      <MainPageLayout>
        <Title title="My Orders" subtitle="Have a Look At your All Orders" />
        {renderResults()}
      </MainPageLayout>
    </div>
  );
};

export default Orders;