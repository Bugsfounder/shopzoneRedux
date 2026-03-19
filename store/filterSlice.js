import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'All',
  priceRange: 1000, 
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    }
  }
});

export const { setCategory, setPriceRange } = filterSlice.actions;
export default filterSlice.reducer;
