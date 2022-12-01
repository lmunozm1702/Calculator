import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    console.log('this is:', this);
    console.log('event', event.target.innerHTML);
    this.setState((state) => calculate(state, event.target.innerHTML));
    console.log(this.state);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <div className="screen">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons-container">
          <div className="number"><button onClick={this.handleClick} type="button" className="button">AC</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">+/-</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">%</button></div>
          <div className="number operator"><button onClick={this.handleClick} type="button" className="button">÷</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">7</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">8</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">9</button></div>
          <div className="number operator"><button onClick={this.handleClick} type="button" className="button">x</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">4</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">5</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">6</button></div>
          <div className="number operator"><button onClick={this.handleClick} type="button" className="button">-</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">1</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">2</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">3</button></div>
          <div className="number operator"><button onClick={this.handleClick} type="button" className="button">+</button></div>
          <div className="number zero"><button onClick={this.handleClick} type="button" className="button">0</button></div>
          <div className="number"><button onClick={this.handleClick} type="button" className="button">.</button></div>
          <div className="number operator"><button onClick={this.handleClick} type="button" className="button">=</button></div>
        </div>
      </div>
    );
  }
}

export default Calculator;
