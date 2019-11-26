import axios from 'axios';

import { GET_MEMBERS, ADD_MEMBERS,GET_ERRORS } from './types';

// GET LEADS
export const getMembers = () => dispatch => {
    axios
        .get("127.0.0.1:8000/api/home/")
        .then(res => {
            dispatch({
                type : GET_MEMBERS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

export const addMembers = () => dispatch => {
	axios.post("127.0.0.1:8000/api/home/") // 실제 데이터를 보내기 위한 명령어도 POST입니다. 그러니 post로!
    	.then(res => {
        	dispatch({
            	type: ADD_MEMBERS,
                payload: res.data
            });           
        })
        .catch(err => {
        	const errors = {
            	msg: err.response.data,
                status: err.response.status
            }
            dispatch({
            	type: GET_ERRORS,
                payload: errors
            });
        });
};