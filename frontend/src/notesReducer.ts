
const initialState = {}

type Action = {type: "FETCH_NOTE", payload: Object}

export const notesReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case "FETCH_NOTE": {
            return {payload: action.payload};
            
        }
        default:
             return state
    }
}