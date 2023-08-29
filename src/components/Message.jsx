import PropTypes from "prop-types";

const Message = ({ children, type }) => {
  return <div className={`alerta ${type}`}>{children}</div>;
};

Message.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Message;
