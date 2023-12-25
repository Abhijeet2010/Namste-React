import React from "react";
import Header from "./Header";
import "../../public/style.css";
// import BodyContainer from "./BodyContainer";
import { Outlet } from "react-router-dom";

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
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
