import React from "react";
import Header from "./Header";
import "../../public/style.css";
import BodyContainer from "./BodyContainer";

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
      <BodyContainer />
    </div>
  );
};

export default App;
