import React from "react";
import PropTypes from "prop-types";

import Input from "../Input";
import { INPUT_PLACEHOLDER } from "../../constants";

import "./Header.css";

const Header = ({ handleDiameterChange, homeLink, logo }) => {
  const inputProps = {
    type: "number",
    placeholder: INPUT_PLACEHOLDER,
    onChange: handleDiameterChange,
    required: true
  };

  return (
    <div className="Header">
      <div className="container">
        <div className="Header__logo">
          <a {...homeLink}>
            <img {...logo} />
          </a>
        </div>
        <div className="Header__search-input">
          <Input {...inputProps} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  inputProps: PropTypes.object,
  homeLink: PropTypes.object,
  logo: PropTypes.object
};

export default Header;
