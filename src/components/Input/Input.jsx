import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = props => <input {...props} aria-required={props.required} />;

Input.propTypes = {
  props: PropTypes.object
};

export default Input;
