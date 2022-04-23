import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./App.css";
import NoteInput from "./components/NoteInput";
import { NotesState } from "./notesReducer";

interface Note {
  id: number,
  title: string
  description: string
}

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

    const [serverNotes, setServerNotes] = useState([])

  useEffect(() => {
    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://veloce-assignment.herokuapp.com/tasks", requestOptions)
      .then(response => response.json())
      .then(result => setServerNotes(result.tasks))
      .catch(error => console.log('error', error));



  }, []);
  console.log(serverNotes)
  const dispatch = useDispatch();

  const addNote = (title: string, description: string) => {
    dispatch({ type: "ADD_NOTE", payload: title });
  };

  return (
    <div className="App">
      <div>Notes app</div>
      <NoteInput addNote={addNote} />

      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>

      <ul>
        {serverNotes?.map((note: Note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
