import {  useDispatch } from "react-redux";


/* export const deleteNoteOnServer = (id: number) => {
    var requestOptions: any = {
      method: "DELETE",
      redirect: "follow"
    };

    fetch(
      `https://veloce-assignment.herokuapp.com/task/delete/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch({ type: "FETCH_NOTE", payload: result }))
      .catch((error) => console.log("error", error));
  }; */

  export const deleteNote = (id: number) => async(dispatch: any) => {
        var requestOptions: any = {
        method: "DELETE",
        redirect: "follow"
      };
  
      fetch(
        `https://veloce-assignment.herokuapp.com/task/delete/${id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => dispatch({ type: "FETCH_NOTE", payload: result }))
        .catch((error) => console.log("error", error));
    }