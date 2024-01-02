import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Shimmer from "../components/Shimmer";

const SingleRestaurant = () => {
  const [showData, setShowData] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getResDetails = async () => {
    setLoading(true);
    const API =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.667347&lng=73.8071448&restaurantId=" +
      id;

    const response = await fetch(API);
    const data = await response.json();

    const filterCategories =
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card["@type"].includes("ItemCategory")
      );
    setMenuData(filterCategories);
    setLoading(false);
  };

  useEffect(() => {
    getResDetails();
  }, []);

  const handleClick = () => {
    setShowData(!showData);
  };

  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        menuData?.map((item, index) => {
          return (
            <div className="w-7/12 mx-auto p-3 border-b-2 " key={index}>
              <h2
                className="font-semibold text-2xl p-2 cursor-pointer"
                onClick={handleClick}
              >
                {item.card.card.title}
              </h2>

              {showData && <ItemList data={item?.card?.card?.itemCards} />}
            </div>
          );
        })
      )}
    </>
  );
};

export default SingleRestaurant;
