import React from "react";
import {useDispatch} from "react-redux";
const Operation = ({operation, span, passedFunction}) => {
  const dispatch = useDispatch();

  const handleOperationClick = () => {
    if (typeof passedFunction === "function") {
      dispatch(passedFunction(operation));
    } else {
      console.error("Passed function is not a function:", passedFunction);
    }
  };

  return (
    <div
      onClick={handleOperationClick}
      className={`operation ${span ? "span-2" : ""}`}
    >
      {operation}
    </div>
  );
};

export default Operation;
