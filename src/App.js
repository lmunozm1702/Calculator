import Screen from './components/screen';
import ButtonsContainer from './components/buttons-container';
import Button from './components/button';

// const buttonList = [
// 'AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
// ];

function App() {
  return (
    <div className="App">
      <ButtonsContainer />
      <Screen value={0} />
      <ButtonsContainer>
        <Button value="AC" className="number" />
        <Button value="+/-" className="number" />
        <Button value="%" className="number" />
        <Button value="/" className="number operator" />
        <Button value="7" className="number" />
        <Button value="8" className="number" />
        <Button value="9" className="number" />
        <Button value="X" className="number operator" />
        <Button value="4" className="number" />
        <Button value="5" className="number" />
        <Button value="6" className="number" />
        <Button value="-" className="number operator" />
        <Button value="1" className="number" />
        <Button value="2" className="number" />
        <Button value="3" className="number" />
        <Button value="+" className="number operator" />
        <Button value="0" className="number zero" />
        <Button value="." className="number" />
        <Button value="=" className="number operator" />
      </ButtonsContainer>
    </div>
  );
}

export default App;
