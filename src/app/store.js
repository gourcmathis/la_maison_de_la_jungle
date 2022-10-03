import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice.js";
import categorySlice from "../features/category/categorySlice.js";
import modalSlice from "../features/modal/modalSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cat: categorySlice.reducer,
    modal: modalSlice.reducer,
  },
});
