import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMembers } from "../../actions/members";
import Button from "../button";

export class Register extends Component {
  state = {
    user_id: "",
    user_name: "",
    password: "",
    phone: ""
  };

  static propTypes = {
    addMembers: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { user_id, user_name, password, phone } = this.state;
    const member = { user_id, user_name, password, phone };
    this.props.addMembers(member);
  };

  render() {
    const { user_id, user_name, password, phone } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <Button title={user_name} />
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>user_id</label>
            <input
              className="form-control"
              type="email"
              name="user_id"
              onChange={this.onChange}
              value={user_id}
            />
          </div>
          <div className="form-group">
            <label>user_name</label>
            <input
              className="form-control"
              type="name"
              name="user_name"
              onChange={this.onChange}
              value={user_name}
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <input
              className="form-control"
              type="tel"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>phone</label>
            <input
              className="form-control"
              type="tel"
              name="phone"
              onChange={this.onChange}
              value={phone}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addMembers }
)(Register);
