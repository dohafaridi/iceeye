import React from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

import Message from "../Message";
import "./User.css";

const User = ({ user }) => {
  if (isEmpty(user)) return null;

  return (
    <div className="User">
      <h2 className="User__title">{user.title}</h2>
      <div className="User__body">{user.body}</div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object
};

export default User;
