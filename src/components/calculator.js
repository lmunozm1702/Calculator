function MainContainer() {
  return (
    <div className="main-container" />
  );
}

function Screen(value) {
  return (
    <div className="screen">{value}</div>
  );
}

function ButtonsContainer() {
  return (
    <div className="buttons-container" />
  );
}

function Button(className, onClick, value) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export {
  MainContainer, Screen, ButtonsContainer, Button,
};
