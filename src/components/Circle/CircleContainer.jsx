import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";

import { setUserId } from "../../actions/userId";
import Circle from "./Circle";

class CircleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserIdChange = this.handleUserIdChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.diameter, nextProps.diameter);
  }

  handleUserIdChange() {
    this.props.handleUserIdChanges(this.props.diameter);
  }

  render() {
    return (
      <Circle {...this.props} handleUserIdChange={this.handleUserIdChange} />
    );
  }
}

const mapStateToProps = ({ diameter }) => ({ diameter });

const mapDispatchToProps = dispatch => ({
  handleUserIdChanges: id => dispatch(setUserId(id))
});

CircleContainer.propTypes = {
  handleUserIdChanges: PropTypes.func,
  diameter: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(CircleContainer);
