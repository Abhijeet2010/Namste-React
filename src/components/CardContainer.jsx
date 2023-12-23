import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const CardContainer = () => {
  // Imgurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ + cloudinaryImageId"

  const [listedData, setListedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.667347&lng=73.8071448&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();

      setListedData(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const handleClick = () => {
    const filterdata = listedData?.filter((res) => {
      console.log(res.info.avgRating > 4.2);
      return res.info.avgRating > 4.2;
    });

    setListedData(filterdata);
  };

  return (
    <>
      <button onClick={() => handleClick()}>Data</button>
      <div className="cardContainer">
        {loading ? (
          <Shimmer count={20} />
        ) : (
          listedData?.map((resData) => {
            return <Card key={resData.info.id} resName={resData} />;
          })
        )}
      </div>
    </>
  );
};

export default CardContainer;
