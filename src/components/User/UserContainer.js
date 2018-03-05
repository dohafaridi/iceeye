import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";

import User from "./User";
import { USERS_JSON_URL } from "../../constants";
import { fetchJson } from "../../helpers";

const getUserById = (users, id) => users.find(u => u.id == id);

const getUsersFromJsonUrl = url => fetchJson(url);

class UserContainer extends React.Component {
  constructor(props) {
    super(props);

    this.users = [];
    this.user = {};

    this.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.setUser(nextProps.userId);
    }
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.userId, nextProps.userId);
  }

  fetchUsers() {
    if (isEmpty(this.users)) {
      getUsersFromJsonUrl(USERS_JSON_URL).then(json => (this.users = json));
    }
  }

  setUser(id) {
    this.user = getUserById(this.users, id);
  }

  render() {
    const currentUser = this.user || {};
    return <User user={currentUser} />;
  }
}

const mapStateToProps = ({ userId }) => ({ userId });

UserContainer.propTypes = {
  userId: PropTypes.number
};

export default connect(mapStateToProps)(UserContainer);
