export interface NotesState{
    notes: string[]
}

const initialState = {
    notes: []
}

type Action = {type: "ADD_NOTE", payload: string}

export const notesReducer = (state: NotesState = initialState, action: Action) => {
    switch(action.type) {
        case "ADD_NOTE": {
            var requestOptions: RequestInit  = {
                method: 'POST',
                redirect: 'follow'
              };
              
              fetch("https://veloce-assignment.herokuapp.com/task/create/my fiirst deployed api/i am happy and gratefull to have deployed my first ever api online", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            return {...state, notes: [...state.notes, action.payload]}
        }
        default:
             return state
    }
}