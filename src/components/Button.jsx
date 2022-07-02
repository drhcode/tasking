import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "blue",
};

Button.propTypes = {
  text: PropTypes.string,
  colots: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
