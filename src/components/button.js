import PropTypes from 'prop-types';

function Button(props) {
  const { a, b } = props;
  return (
    <button type="button" className={a}>
      {b}
    </button>
  );
}

Button.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Button;
