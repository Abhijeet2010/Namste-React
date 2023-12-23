import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";

const BodyContainer = () => {
  return (
    <div className="bodyContainer">
      {/* <SearchBar /> */}
      <CardContainer />
    </div>
  );
};

export default BodyContainer;
