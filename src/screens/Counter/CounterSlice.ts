import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  value: number;
};

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log('IncrementByAmount!')
      state.value += action.payload
    }
  },
});

// Thunk action creator
export const logAndAdd = (amount) => {
  return (dispatch, getState) => {
    console.log(amount);
    const stateBefore = getState()
    console.log(`Counter before: ${stateBefore.counter.value}`)
    dispatch(incrementByAmount(amount));
    const stateAfter = getState()
    console.log(`Counter after: ${stateAfter.counter.value}`)
  }
};



// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
