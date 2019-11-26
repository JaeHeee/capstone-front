import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


export class Alerts extends Component {
    static propTypes = {
    	error: PropTypes.object.isRequired
    }

     componentDidMount(prevProps) {
    	const { error, alert } = this.props;
        if( error !== prevProps.error) {
            if(error.msg.name) alert.error("Name is Required");
            if(error.msg.email) alert.error("Email is Required");
        }
    }

	render() {
    	return <Fragment />;
    }

}

const mapStateToProps = state => ({
	error: state.errors
});

export default connect(mapStateToProps)(withAlert(Alerts));