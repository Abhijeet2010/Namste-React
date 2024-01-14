import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/slices/cartSlice";

function Cart() {
  const data = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const Img_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotal = () => {
    return data.reduce(
      (total, cartItem) => total + cartItem.card.info.defaultPrice,
      0
    );
  };
  return (
    <div className="outline-1 w-5/12 mx-auto">
      {data?.map((cartItem) => (
        <div
          key={cartItem.card.info.id}
          className="flex p-5 border-2 items-center flex-wrap justify-between"
        >
          {console.log(cartItem.card.info)}
          <img
            className="w-[70px] h-[50px]"
            src={Img_URL + cartItem.card.info.imageId}
            alt="item-menu"
          />
          <div>
            <p>{cartItem.card.info.name}</p>

            <span>{"Rs." + cartItem.card.info.defaultPrice / 100}</span>
          </div>

          <button
            onClick={() => handleRemove(cartItem.card.info.id)}
            className="border-2 p-2 bg-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="w-1/2">
        <p>Rs. {calculateTotal() / 100}</p>
      </div>
    </div>
  );
}

export default Cart;
