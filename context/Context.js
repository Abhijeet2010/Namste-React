import { createContext, useState } from "react";
import resObj from "../src/constants/restraurant.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [listedData, setListedData] = useState(resObj);

  const filterByTopRated = () => {
    const filterData = listedData.restaurants.filter((res) => {
      if (res.info.avgRating > 4.2) {
        return res.info;
      }
      setListedData({ ...listedData, restaurants: filterData });
    });
  };

  const filterByVeg = () => {
    const vegHotel = listedData.restaurants.filter((res) => {
      return res.info.veg;
    });
    setListedData({ ...listedData, restaurants: vegHotel });
  };

  const filterByOpen = () => {
    const isOpen = listedData.restaurants.filter((res) => {
      return res.info.isOpen;
    });
    setListedData({ ...listedData, restaurants: isOpen });
  };

  const reset = () => {
    setListedData(resObj);
  };

  return (
    <AppContext.Provider
      value={{
        listedData,
        setListedData,
        filterByOpen,
        filterByTopRated,
        filterByVeg,
        reset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
