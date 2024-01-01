import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleRestaurant = () => {
  const [showData, setShowData] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();

  const getResDetails = async () => {
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
  };

  useEffect(() => {
    getResDetails();
  }, []);

  const handleClick = () => {
    setShowData(!showData);
  };

  return (
    <>
      {menuData?.map((item, index) => {
        const IMG_URL =
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

        return (
          <div className="w-6/12 mx-auto p-3 border-b-2  my-10" key={index}>
            <h2
              className="font-semibold text-2xl p-2 cursor-pointer"
              onClick={handleClick}
            >
              {item.card.card.title}
            </h2>

            {showData &&
              item?.card?.card?.itemCards?.map((a) => (
                <div className="w-full flex border-2 my-2" key={a.card.info.id}>
                  <div className="w-10/12 shadow-md p-2">
                    <h3 className="text-lg font-bold">{a?.card?.info?.name}</h3>
                    <p>{a.card.info.description}</p>
                    <span className="font-semibold">
                      ₹ {a.card.info.price / 100}.00
                    </span>
                  </div>
                  <div className="w-2/12">
                    <img
                      className="h-28 w-full"
                      src={IMG_URL + a.card.info.imageId}
                      alt="resMenu"
                    />
                  </div>
                </div>
              ))}
          </div>
        );
      })}
    </>
  );
};

export default SingleRestaurant;
