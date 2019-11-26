import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log(this.props);
  }

  UNSAFE_componentWillReceiveProps(prevProps) {
    const { error, alert } = this.props;
    console.log(error);
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error("Name is Required");
      if (error.msg.email) alert.error("Email is Required");
    }
  }

  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = state => ({
  error: state.errors
});

const withConnect = connect(
  mapStateToProps,
  {}
);

export default withConnect(Alerts);
