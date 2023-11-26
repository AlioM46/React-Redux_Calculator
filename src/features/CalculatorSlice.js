import {createSlice, current} from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    currentNum: null,
    previousNum: null,
    operation: null,
  },

  reducers: {
    addNum: (state, action) => {
      const currentNumAsString = String(state.currentNum || "");

      if (currentNumAsString[0] === "0" && action.payload === "0") {
        return;
      }

      if (currentNumAsString.includes(".") && action.payload === ".") {
        return;
      }

      state.currentNum = `${currentNumAsString}${action.payload}`;
    },

    addOperation: (state, action) => {
      if (state.currentNum !== null && state.previousNum == null) {
        state.operation = action.payload;
        state.previousNum = state.currentNum;
        state.currentNum = null;
      }
      if (state.currentNum !== null && state.previousNum !== null) {
        state.previousNum = Evaluate(
          state.previousNum,
          state.currentNum,
          state.operation
        );
        state.currentNum = null;
        state.operation = null;
      }

      if (state.currentNum == null && state.previousNum !== null) {
        state.operation = action.payload;
        console.log("Here");
        console.log(action.payload);
      }
    },

    deleteNumber: (state, action) => {
      let newCurrentNumberAsString = String(state.currentNum);
      if (newCurrentNumberAsString.length > 0 && state.currentNum !== null) {
        state.currentNum = newCurrentNumberAsString.slice(0, -1);
      }
    },
    clear: (state, action) => {
      state.currentNum = null;
      state.previousNum = null;
      state.operation = null;
    },

    numberState: (state, action) => {
      state.currentNum *= -1;
    },

    evaluate: (state, action) => {
      if (
        state.currentNum !== null &&
        state.previousNum !== null &&
        state.operation !== null
      ) {
        state.currentNum = Evaluate(
          state.previousNum,
          state.currentNum,
          state.operation
        );
        state.operation = null;
        state.previousNum = null;
      }
    },
  },
});

export default calculatorSlice.reducer;

export const {
  addNum,
  addOperation,
  deleteNumber,
  clear,
  evaluate,
  numberState,
} = calculatorSlice.actions;

export const currentNumSelector = (state) => state.calc.currentNum;
export const previousNumSelector = (state) => state.calc.previousNum;
export const operationSelector = (state) => state.calc.operation;

const Evaluate = (prev, cur, op) => {
  let result = null;
  let current = Number(cur);
  let previous = Number(prev);

  switch (op) {
    case "+":
      result = current + previous;
      break;
    case "-":
      result = previous - current;
      break;
    case "*":
      result = current * previous;
      break;
    case "/":
      result = previous / current;
      break;
  }

  return result;
};
