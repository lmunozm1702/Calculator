import PropTypes from 'prop-types';

function ButtonsContainer(props) {
  const { children } = props;
  return (
    <div className="buttons-container">
      {children}
    </div>
  );
}

ButtonsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonsContainer;
