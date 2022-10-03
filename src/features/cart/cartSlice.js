import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPlant: (state, action) => {
      const newPlant = {
        id: v4(),
        category: action.payload.category,
        cover: action.payload.cover,
        name: action.payload.name,
        price: action.payload.price,
        amount: action.payload.amount,
      };
      state.push(newPlant);
    },
    addAmount: (state, action) => {
      state = state.map(
        (plantList) =>
          plantList.name === action.payload.name &&
          (plantList.amount += action.payload.amount)
      );
    },
    changeAmount: (state, action) => {
      state = state.map(
        (plantList) =>
          plantList.name === action.payload.name &&
          (plantList.amount = action.payload.amount)
      );
    },
    delPlant: (state, action) => {
      state = state.filter((p) => p.id !== action.payload);
    },
    cleanCart: () => initialState,
  },
});

export default cartSlice;
