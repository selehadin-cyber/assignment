import {createStore, applyMiddleware} from "redux";
import { notesReducer } from "./reducers/notesReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(notesReducer, composeWithDevTools(
    applyMiddleware()
    
  ))