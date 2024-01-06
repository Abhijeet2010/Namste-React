import { createContext, useState } from "react";

// learn How to create Context
// 1. It is like an Global Store where we put only that which is require in most of every component
// 2. It save us from becoming Prop-drilling.
// 3. It is created by using createContext Hook.
// 4. To get access context data we use useContext Hook.
// 5. Right now it is an advance way of passing data to all over the components or children.
// 6. we have  wrap this context with main top level Parent component so then it will easily access by any component.

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("Abhijeet");
  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
