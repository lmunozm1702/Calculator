import PropTypes from 'prop-types';

function Button(props) {
  const { value, className } = props;
  return (
    <div className={className}>
      <button type="button" className="button">
        {value}
      </button>
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
