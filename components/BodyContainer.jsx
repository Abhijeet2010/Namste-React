import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import resData from "../constants/restraurant.json";

const BodyContainer = () => {
  return (
    <div className="bodyContainer">
      <SearchBar />
      <CardContainer />
    </div>
  );
};

export default BodyContainer;
