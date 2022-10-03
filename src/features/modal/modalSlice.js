import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeVisibility: (state, action) => {
      return !state;
    },
  },
});

export default modalSlice;
