import Screen from './components/screen';
import ButtonsContainer from './components/buttons-container';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <ButtonsContainer />
      <Screen value={0} />
      <ButtonsContainer>
        <Button value={0} onClick={0} className="number" />
      </ButtonsContainer>
    </div>
  );
}

export default App;
