import cartSlice from "../slices/cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
