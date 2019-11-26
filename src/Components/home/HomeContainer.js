import React, { Component ,Fragment } from 'react';
import Members from './Members';
import Register from './Register';

export default class HomeContainer extends Component {
    render() {
        return (
            <>
                <Register/>
                <Members/>
            </>

        )
    }
}