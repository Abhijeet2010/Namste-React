import React, { useState } from "react";
import Card from "./Card";
import resObj from "../constants/restraurant.json";

const CardContainer = () => {
  const [listedData, setListedData] = useState(resObj);

  // const handleClick = () => {
  //   const filterData = listedData.restaurants.filter(
  //     (res) => res?.info?.avgRating > 4.5
  //   );
  //   setListedData({ ...listedData, restaurants: filterData });
  // };

  // Imgurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ + cloudinaryImageId"

  const handleClick = () => {
    const filterdata = listedData.restaurants.filter((res) => {
      return res.info.avgRating > 4.2;
    });

    setListedData({ ...listedData, restaurants: filterdatas });
  };

  return (
    <>
      <button onClick={() => handleClick()}>Data</button>
      <div className="cardContainer">
        {/* <button onClick={handleClick}>Hello</button>   */}
        {listedData?.restaurants?.map((resData) => {
          return <Card key={resData.info.id} resName={resData} />;
        })}
      </div>
    </>
  );
};

export default CardContainer;
