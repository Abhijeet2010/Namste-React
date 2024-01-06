import React from "react";
import Header from "./Header";
import "../../public/style.css";
// import BodyContainer from "./BodyContainer";
import { Outlet } from "react-router-dom";
import { AppProvider } from "../utils/userContext";

{
  /* 
        Navbar
         - Logo
         - NavLinks
        
        BodyContainer
         - searchBar
         - card-Container
            - card
                - img
                - title
                - cuisines
                - starRatings
                - Location
        
        Footer
         - Links
    
    */
}

const App = () => {
  return (
    <div className="app">
      <AppProvider>
        <Header />
        <Outlet />
      </AppProvider>
    </div>
  );
};

export default App;
