import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card_img">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lbye6vascq2ggicljkkw"
          alt="card"
        />
      </div>
      <div className="card_text">
        <h3>Savli</h3>
        <h4>
          Rating : 4.2 <span className="card_delivery_time">24 mins</span>
        </h4>
        <span className="cusine">South Indian, North...</span>
        <p className="card_location">Nigdi</p>
      </div>
    </div>
  );
};

export default Card;
