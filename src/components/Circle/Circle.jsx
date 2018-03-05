import React from "react";
import PropTypes from "prop-types";

import { NO_DIAMETER_MSG } from "../../constants";
import Message from "../Message";
import "./Circle.css";

const isValidDiameter = diameter => diameter >= 1 && diameter <= 100;

const Circle = ({ diameter, handleUserIdChange }) => {
  if (!isValidDiameter(diameter)) return <Message msg={NO_DIAMETER_MSG} />;

  const styles = {
    width: diameter + "px",
    height: diameter + "px"
  };

  return <div className="Circle" onClick={handleUserIdChange} style={styles} />;
};

Circle.propTypes = {
  handleUserIdChange: PropTypes.func,
  diameter: PropTypes.number
};

export default Circle;
