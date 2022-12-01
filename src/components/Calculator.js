import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="screen">{0}</div>
        <div className="buttons-container">
          <div className="number"><button type="button" className="button">AC</button></div>
          <div className="number"><button type="button" className="button">+/-</button></div>
          <div className="number"><button type="button" className="button">%</button></div>
          <div className="number operator"><button type="button" className="button">/</button></div>
          <div className="number"><button type="button" className="button">7</button></div>
          <div className="number"><button type="button" className="button">8</button></div>
          <div className="number"><button type="button" className="button">9</button></div>
          <div className="number operator"><button type="button" className="button">X</button></div>
          <div className="number"><button type="button" className="button">4</button></div>
          <div className="number"><button type="button" className="button">5</button></div>
          <div className="number"><button type="button" className="button">6</button></div>
          <div className="number operator"><button type="button" className="button">-</button></div>
          <div className="number"><button type="button" className="button">1</button></div>
          <div className="number"><button type="button" className="button">2</button></div>
          <div className="number"><button type="button" className="button">3</button></div>
          <div className="number operator"><button type="button" className="button">+</button></div>
          <div className="number zero"><button type="button" className="button">0</button></div>
          <div className="number"><button type="button" className="button">.</button></div>
          <div className="number operator"><button type="button" className="button">=</button></div>
        </div>
      </div>
    );
  }
}

export default Calculator;
