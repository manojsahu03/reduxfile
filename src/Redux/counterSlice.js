import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    amount: (state, action) => {
      state.value += action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};
export const { increment, decrement, amount, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
