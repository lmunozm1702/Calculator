import {
  MainContainer, Screen, ButtonsContainer, Button,
} from './components/calculator';

function App() {
  return (
    <MainContainer>
      <ButtonsContainer />
      <Screen value={0} />
      <ButtonsContainer>
        <Button value={0} onClick={0} className="number" />
      </ButtonsContainer>
    </MainContainer>
  );
}

export default App;
