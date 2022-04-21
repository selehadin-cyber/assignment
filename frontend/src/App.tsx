import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [notesArray, setNotesArray] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  return (
    <div className="App">
      <div>Notes app</div>
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => {setNotesArray((prev) => prev.concat(text));setText("")}}>
        save
      </button>
      
      {notesArray.map((note, idx) => (
        <div>
        <p key={idx}>{note}</p>
        <button key={idx + 1} onClick={() => setNotesArray(notesArray.filter((e) => notesArray[idx] !== e))}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
