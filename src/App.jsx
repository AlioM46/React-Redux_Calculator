import React from "react";
import {useSelector} from "react-redux";
import "./App.css";
import Digit from "./components/Degit";
import {
  addOperation,
  clear,
  deleteNumber,
  evaluate,
  numberState,
} from "./features/CalculatorSlice";

import Operation from "./components/Operation";
import {
  currentNumSelector,
  operationSelector,
  previousNumSelector,
} from "./features/CalculatorSlice";
const App = () => {
  const currentNumber = useSelector(currentNumSelector);
  const previousNumber = useSelector(previousNumSelector);
  const operation = useSelector(operationSelector);

  return (
    <div className="calc">
      <div className="calc__result">
        <div className="__calc__result__current">
          {currentNumber || ""} {operation || ""}
        </div>
        <div className="__calc__result__previous">{previousNumber}</div>
      </div>

      <div className="calc__numbers">
        <Operation
          onClick={() => {
            console.log("heelo");
          }}
          passedFunction={clear}
          operation={"AC"}
          span={true}
        />
        <Operation passedFunction={deleteNumber} operation={"DEL"} />
        <Operation passedFunction={addOperation} operation={"/"} />
        <Digit digit={"1"} />
        <Digit digit={"2"} />
        <Digit digit={"3"} />
        <Operation passedFunction={addOperation} operation={"+"} />
        <Digit digit={"4"} />
        <Digit digit={"5"} />
        <Digit digit={"6"} />
        <Operation passedFunction={addOperation} operation={"-"} />
        <Digit digit={"7"} />
        <Digit digit={"8"} />
        <Digit digit={"9"} />
        <Operation passedFunction={addOperation} operation={"*"} />
        <Digit digit={"."} />
        <Digit digit={"0"} />
        <Operation passedFunction={numberState} operation={"-/+"} />
        <Operation passedFunction={evaluate} operation={"="} />
      </div>
    </div>
  );
};

export default App;
