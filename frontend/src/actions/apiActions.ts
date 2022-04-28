import { store } from "../store";
import { 
      CREATE_NOTE,
      DELETE_NOTE,
      EDIT_NOTE,
      FETCH_NOTES
  } from './types';

export const deleteNoteOnServerFile = (id: number) => {
    var requestOptions:  RequestInit = {
      method: "DELETE",
      redirect: "follow"
    };

    fetch(
      `https://veloce-assignment.herokuapp.com/task/delete/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => store.dispatch({ type: DELETE_NOTE, payload: result }))
      .catch((error) => console.log("error", error));
  };

export const fetchNotesFromServer = () => {
  var requestOptions:  RequestInit = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://veloce-assignment.herokuapp.com/tasks", requestOptions)
    .then((response) => response.json())
    .then((result) => store.dispatch({ type: FETCH_NOTES, payload: result }))
    .catch((error) => console.log("error", error));
}

export const sendNoteToServer = (title: string, description: string) => {
  var requestOptions:  RequestInit = {
    method: "POST",
    redirect: "follow"
  };

  fetch(
    `https://veloce-assignment.herokuapp.com/task/create/${title}/${description}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => store.dispatch({ type: CREATE_NOTE , payload: result }))
    .catch((error) => console.log("error", error));
};

export const sendUpdatedNoteToServer = (id: number, title: string, description: string) => {
  var requestOptions:  RequestInit = {
    method: "PUT",
    redirect: "follow"
  };

  fetch(
    `https://veloce-assignment.herokuapp.com/task/update/${id}/${title}/${description}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => store.dispatch({ type: EDIT_NOTE , payload: result }))
    .catch((error) => console.log("error", error));
};