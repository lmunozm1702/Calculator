import PropTypes from 'prop-types';

function Button(props) {
  const { value, className } = props;
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
