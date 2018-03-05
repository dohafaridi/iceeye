import React from "react";
import PropTypes from "prop-types";
import { dispatch } from "redux";
import { connect } from "react-redux";
import debounce from "lodash/debounce";

import Header from "./Header";
import { setUserId } from "../../actions/userId";
import { setDiameterValue } from "../../actions/diameter";

const DEFAULT_USER_ID = 0;

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDiameterChange = this.handleDiameterChange.bind(this);
    this.state = { diameter: null };
  }

  handleDiameterChange(e) {
    this.setState({ diameter: e.currentTarget.value }, () => {
      debounce(() => {
        this.props.handleDiameterChanges(parseInt(this.state.diameter));
        this.props.handleUserIdChanges(DEFAULT_USER_ID);
      }, 1000)();
    });
  }

  render() {
    return (
      <Header
        {...this.props}
        handleDiameterChange={this.handleDiameterChange}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleDiameterChanges: diameter => dispatch(setDiameterValue(diameter)),
  handleUserIdChanges: id => dispatch(setUserId(id))
});

HeaderContainer.propTypes = {
  homeLink: PropTypes.object,
  logo: PropTypes.object,
  handleDiameterChanges: PropTypes.func
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
