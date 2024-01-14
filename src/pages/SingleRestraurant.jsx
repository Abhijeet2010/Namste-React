import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Shimmer from "../components/Shimmer";

const SingleRestaurant = () => {
  const [showData, setShowData] = useState(0);
  // const [isOpen, setIsOpne] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preData, setPreData] = useState("");
  const { id } = useParams();

  const getResDetails = async () => {
    setLoading(true);
    const API =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.667347&lng=73.8071448&restaurantId=" +
      id;

    const response = await fetch(API);
    const data = await response.json();
    setPreData(data.data.cards[0].card.card.info);

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

  const handleClick = (index) => {
    setShowData(index);
    // setIsOpne(!isOpen);
  };

  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        // "hello"
        <>
          {/* predata will show restraurant name and locality */}
          <div className="w-7/12 text-center mx-auto p-3 leading-10">
            <h2 className="text-center text-2xl font-bold">{preData.name}</h2>
            <p className="text-center text-lg font-semibold">
              Cost For Two - Rs.{preData.costForTwo / 100}
            </p>
            <p className="text-center ">{preData.locality}</p>{" "}
            <p
              className={
                preData.avgRating > 4
                  ? "bg-green-500 text-center font-medium w-fit mx-auto px-2"
                  : preData.avgRating > 3.5
                  ? "bg-orange-500  text-center font-medium w-fit mx-auto px-2"
                  : preData.avgRating > 2
                  ? "bg-red-500  text-center font-medium w-fit mx-auto px-2"
                  : null
              }
            >
              {preData.avgRating}⭐
            </p>
          </div>

          {menuData?.map((item, index) => {
            return (
              <div className="w-7/12 mx-auto p-3 border-b-2 " key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer transition-opacity"
                  onClick={() => handleClick(index)}
                >
                  <h2 className="font-semibold text-xl p-2 ">
                    {item.card.card.title}
                  </h2>
                  <span className="text-3xl">⇩</span>
                </div>
                {showData === index ? (
                  <ItemList data={item?.card?.card?.itemCards} />
                ) : null}
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default SingleRestaurant;
