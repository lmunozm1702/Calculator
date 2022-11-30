import PropTypes from 'prop-types';

const Screen = (props) => {
  const { value } = props;
  return <div className="screen">{value}</div>;
};

Screen.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Screen;
