import React from "react";
import {useDispatch} from "react-redux";
import {addNum} from "../features/CalculatorSlice";
const Degit = ({digit}) => {
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(addNum(digit))}>{digit}</div>;
};

export default Degit;
