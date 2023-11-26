import {configureStore} from "@reduxjs/toolkit";
import CalculatorSlice from "../features/CalculatorSlice";

const store = configureStore({
  reducer: {
    calc: CalculatorSlice,
  },
});

export default store;
