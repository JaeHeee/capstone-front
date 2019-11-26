import { combineReducers } from 'redux';
import members from './members';
import errors from "./errors";


export default combineReducers({
    members,
    errors
});

