import { createSlice } from '@reduxjs/toolkit';

const calculateTotalPrice = (items) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const discountedPrice = totalPrice * 0.95; 
  return {
    totalPrice,
    discountedPrice
  };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    discountedPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      const { totalPrice, discountedPrice } = calculateTotalPrice(state.items);
      state.totalPrice = totalPrice;
      state.discountedPrice = discountedPrice;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      const { totalPrice, discountedPrice } = calculateTotalPrice(state.items);
      state.totalPrice = totalPrice;
      state.discountedPrice = discountedPrice;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.discountedPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
