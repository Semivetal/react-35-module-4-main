import React, { useEffect, useState } from "react";
//import Controls from './Controls';
//import Value from './Value';
import "./Counter.css";

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((prevState) => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB((prevState) => prevState + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`;
    /* console.log('Выполняется useEffect -' + Date.now()); */
  }, [counterA, counterB]);

  return (
    <>
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули counterA {counterA} раз
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}

/* 
state = {
        value: this.props.inatialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };

    render() {
        const { value } = this.state; 
    }
*/

/* export function Counter({ counter, handleIncrement, handleDecrement }) {
    return (
    <div className="counter">
        <button type="button" onClick={handleIncrement}>+</button>
        <p>{counter}</p>
        <button type="button" onClick={handleDecrement}>-</button>
    </div>
    )
} */

/* 
return (
        <div className="Counter">
            <h1>Counter for React Module-2</h1>
            <Value value={value} />
                
            <Controls
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        </div>
        );
*/
