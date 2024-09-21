import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk("/products", async () => {
  const response = await fetch("api/products");
  const data = await response.json();
  return data;
});

export const productsSlice = createSlice({
  name: "user",
  initialState: { productsData: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default productsSlice.reducer;
