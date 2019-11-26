import { GET_MEMBERS,ADD_MEMBERS } from '../actions/types.js';

const initialState = {
    members: []
};

export default function(state = initialState, action) {
	switch(action.type) {
    	case GET_MEMBERS:
        	return {
            	...state,
                members: action.payload
            };
        case ADD_MEMBERS:
            return{
                ...state,
                members: [...state.members, action.payload]
            }
        default:
            return state;
    }
}