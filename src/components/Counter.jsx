import React, { useState } from "react";

const Counter = (props) => {
  console.log(props);
  return (
    <div className="Counter-box">
      <h1 className="h1-counter">{props.counter}</h1>
      <button className="btnCounterMinus" onClick={props.decrement}>
        -
      </button>
      <button className="btnCounterPlus" onClick={props.increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
