import React from "react";
import PropTypes from "prop-types";

import "./Footer.css";

const Footer = ({ text }) => (
  <div className="Footer">
    <div className="Footer__text">{text}</div>
  </div>
);

Footer.propTypes = {
  text: PropTypes.string
};

export default Footer;
