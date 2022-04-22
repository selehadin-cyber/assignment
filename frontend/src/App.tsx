import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import NoteInput from "./components/NoteInput";
import { NotesState } from "./notesReducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch()
  
  const addNote = (note: string) => {
    dispatch({type: "ADD_NOTE", payload: note})
  }  

  return (
    <div className="App">
      <div>Notes app</div>
      <NoteInput addNote={addNote} />

      <ul>{notes.map((note) => (<li key={note}>{note}</li>))}</ul>
    </div>
  );
}

export default App;
