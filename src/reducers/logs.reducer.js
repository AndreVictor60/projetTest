import { GET_LOGS_BY_ID } from "../actions/logs.actions";

const initialState = {};

export default function logsReducer(state = initialState, action){
    switch(action.type){
        case GET_LOGS_BY_ID:
            return action.payload;
        default:
            return state;
    }
}