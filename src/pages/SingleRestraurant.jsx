import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleRestraurant = () => {
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();

  const getResDetails = async () => {
    const API =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.667347&lng=73.8071448&restaurantId=" +
      id;
    const response = await fetch(API);
    const data = await response.json();

    setMenuData(
      data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };
  useEffect(() => {
    getResDetails();
  }, []);
  return <div>{menuData?.map((item) => console.log(item.card.info.name))}</div>;
};

export default SingleRestraurant;
