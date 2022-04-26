import { 
        CREATE_NOTE,
        DELETE_NOTE,
        EDIT_NOTE,
        FETCH_NOTES
    } from '../actions/types';

const initialState = {}

type Action = {type: string, payload: Object}

export const notesReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case FETCH_NOTES: {
            return {payload: action.payload};  
        }
        case DELETE_NOTE: {
            return {payload: action.payload};  
        }
        case EDIT_NOTE: {
            return {payload: action.payload};  
        }
        case CREATE_NOTE: {
            return {payload: action.payload};  
        }
        default:
             return state
    }
}