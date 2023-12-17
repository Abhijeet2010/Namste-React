import React from "react";
import Card from "./Card";
import resObj from "../constants/restraurant.json";

const CardContainer = () => {
  // Imgurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ + cloudinaryImageId"
  return (
    <div className="cardContainer">
      {resObj?.restaurants?.map((resData) => {
        return <Card key={resData.info.id} resName={resData} />;
      })}
    </div>
  );
};

export default CardContainer;
