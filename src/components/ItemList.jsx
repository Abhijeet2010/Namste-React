import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  const handleclick = (data) => {
    dispatch(addItem(data));
  };
  return (
    <>
      {data?.map((a) => {
        const IMG_URL =
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

        return (
          <div key={a.card.info.id}>
            <div className="flex gap-8 ">
              <div className=" border-b-2 w-10/12  p-3 ">
                <span
                  className={
                    a.card.info.isVeg
                      ? "border-2 border-green-500 w-4 h-4 mb-2 flex justify-center items-center"
                      : "border-2 border-red-500 w-4 h-4 mb-2   flex justify-center items-center"
                  }
                >
                  <span
                    className={
                      a.card.info.isVeg
                        ? "bg-green-400 w-2 h-2 inline-block rounded-full"
                        : " bg-red-500 w-2 h-2 inline-block  rounded-full"
                    }
                  ></span>
                </span>

                <h3 className="font-semibold">{a.card.info.name}</h3>
                <span>
                  Rs.{a.card.info.price / 100 || a.card.info.defaultPrice / 100}
                </span>
                <p className="mt-4 font-light text-sm text-wrap text-justify">
                  {a.card.info.description}
                </p>
              </div>

              <div className="relative w-2/12 my-3 flex flex-col items-center justify-center">
                <img
                  className=" rounded-lg  object-cover"
                  src={IMG_URL + a.card.info.imageId}
                  alt="Menu-Items"
                />
                <span
                  className="absolute bottom-5 bg-white px-4 rounded-md"
                  onClick={() => handleclick(a)}
                >
                  Add+
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
