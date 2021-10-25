import React from "react";

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      +
    </button>
    <button type="button" onClick={onDecrement}>
      -
    </button>
  </div>
);

export default Controls;
