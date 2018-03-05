import React from "react";
import PropTypes from "prop-types";

import "./Message.css";

const Message = ({ msg }) => <div className="Message">{msg}</div>;

Message.propTypes = {
  msg: PropTypes.string
};

export default Message;
