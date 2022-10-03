import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const categorySlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      return action.payload;
    },
    cleanCategory: () => initialState,
  },
});

export default categorySlice;
