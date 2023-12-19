import React from "react";

const Card = (props) => {
  const {
    name,
    cloudinaryImageId,
    locality,
    avgRating,
    cuisines,
    sla: { deliveryTime },
  } = props.resName.info;

  // Imgurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ + cloudinaryImageId"

  const truncateText = (title) => {
    if (title.length > 20) {
      return title.slice(0, 17) + "...";
    } else {
      return title;
    }
  };

  const ratingStars = (rating) => {
    const arr = [];
    for (let i = 1; i <= Math.round(rating); i++) {
      arr.push("⭐");
    }
    return arr;
  };

  const truncateCuisine = (cusine) => {
    if (cusine.length > 25) {
      return cusine.slice(0, 22) + "...";
    } else {
      return cusine;
    }
  };

  const truncatedName = truncateText(name);
  const truncatedCuisine = truncateCuisine(cuisines.join(", "));
  const stars = ratingStars(avgRating);
  return (
    <div className="card">
      <div className="card_img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="card"
        />
      </div>
      <div className="card_text">
        <h3>{truncatedName}</h3>
        <h4>
          {avgRating}&nbsp; {stars} &nbsp;
        </h4>
        <p className="card_delivery_time">{deliveryTime} mins</p>{" "}
        <span className="cusine">{truncatedCuisine}</span>
        <p className="card_location">{locality}</p>
      </div>
    </div>
  );
};

export default Card;
