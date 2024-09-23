import { createSlice } from "@reduxjs/toolkit";

const calculateTotalPrice = (items) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const tax = totalPrice * 0.05;
  return {
    totalPrice,
    tax,
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    tax: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        // If the item is not already in the cart, add it with isAddedToCart set to true
        state.items.push({ ...action.payload, isAddedToCart: true });
      }
      const { totalPrice, tax } = calculateTotalPrice(state.items);
      state.totalPrice = totalPrice;
      state.tax = tax;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      const { totalPrice, tax } = calculateTotalPrice(state.items);
      state.totalPrice = totalPrice;
      state.tax = tax;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
