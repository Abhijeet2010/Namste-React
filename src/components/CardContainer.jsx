import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const CardContainer = () => {
  // Imgurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ + cloudinaryImageId"

  const [listedData, setListedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchtext, setSearchText] = useState("");
  const [filter, setFilter] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.667347&lng=73.8071448&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();

      setListedData(
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );

      setFilter(
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[90%] mx-auto">
        {loading ? (
          <Shimmer count={20} />
        ) : (
          filter?.map((resData) => {
            return (
              <Link key={resData.info.id} to={"/res/" + resData.info.id}>
                <Card resName={resData} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default CardContainer;
