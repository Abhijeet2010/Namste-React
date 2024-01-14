import React from "react";
import Header from "./Header";
import "../../public/style.css";
// import BodyContainer from "./BodyContainer";
import { Outlet } from "react-router-dom";
import { AppProvider } from "../utils/userContext";
import { Provider } from "react-redux";
import appStore from "../utils/store/store";

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
    <Provider store={appStore}>
      <div className="app">
        <AppProvider>
          <Header />
          <Outlet />
        </AppProvider>
      </div>
    </Provider>
  );
};

export default App;
