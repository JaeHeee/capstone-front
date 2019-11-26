import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMembers } from "../../actions/members";
import Button from "../button";

export class Members extends Component {
  static propTypes = {
    members: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getMembers();
  }

  render() {
    return (
      <div>
        <h2>Members</h2>
        {/* <Button title="members" /> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>user_id</th>
              <th>user_name</th>
              <th>phone</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.members.map(member => (
              <tr key={member.id}>
                <td>{member.user_id}</td>
                <td>{member.user_name}</td>
                <td>{member.phone}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members.members
});

export default connect(
  mapStateToProps,
  { getMembers }
)(Members);
