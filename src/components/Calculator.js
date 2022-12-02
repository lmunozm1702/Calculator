/* eslint-disable max-len */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({
    total: 0, next: null, operation: null,
  });

  const handleClick = (event) => {
    setValue((state) => calculate(state, event.target.textContent));
  };

  const { total, next, operation } = value;

  return (
    <div className="App">
      <div className="screen">
        {total}
        {operation}
        {next}
      </div>
      <div className="buttons-container">
        <div className="number">
          <button onClick={handleClick} type="button" className="button">AC</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">+/-</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">%</button>
        </div>
        <div className="number operator">
          <button onClick={handleClick} type="button" className="button">÷</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">7</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">8</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">9</button>
        </div>
        <div className="number operator">
          <button onClick={handleClick} type="button" className="button">x</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">4</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">5</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">6</button>
        </div>
        <div className="number operator">
          <button onClick={handleClick} type="button" className="button">-</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">1</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">2</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">3</button>
        </div>
        <div className="number operator">
          <button onClick={handleClick} type="button" className="button">+</button>
        </div>
        <div className="number zero">
          <button onClick={handleClick} type="button" className="button">0</button>
        </div>
        <div className="number">
          <button onClick={handleClick} type="button" className="button">.</button>
        </div>
        <div className="number operator">
          <button onClick={handleClick} type="button" className="button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
