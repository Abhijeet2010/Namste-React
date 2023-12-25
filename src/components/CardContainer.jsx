import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const CardContainer = () => {
  // Imgurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ + cloudinaryImageId"

  const [listedData, setListedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchtext, setSearchText] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.667347&lng=73.8071448&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      console.log(jsonData.data.cards[2].card.card.gridElements.infoWithStyle);

      setListedData(
        jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );

      setFilter(
        jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const handleClick = () => {
    const filterdata = listedData?.filter((res) => {
      return res.info.avgRating > 4.2;
    });

    setListedData(filterdata);
  };

  const handleSearch = () => {
    const searchFilterData = listedData.filter(
      (res) =>
        res.info.name.toLowerCase().includes(searchtext.toLowerCase()) ||
        res.info.cuisines
          .join(" ")
          .toLowerCase()
          .includes(searchtext.toLowerCase()) ||
        res.info.locality.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilter(searchFilterData);
  };

  return (
    <>
      <div>
        <div>
          <input
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        <button onClick={() => handleClick()}>Data</button>
      </div>
      <div className="cardContainer">
        {loading ? (
          <Shimmer count={20} />
        ) : (
          filter?.map((resData) => {
            return <Card key={resData.info.id} resName={resData} />;
          })
        )}
      </div>
    </>
  );
};

export default CardContainer;
