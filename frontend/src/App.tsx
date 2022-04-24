import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Card from "./components/Card";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import { darkTheme, GlobalStyles, LightTheme } from "./styles/Themes";

interface Notes {
  payload: {
    tasks: Array<object>
  }
}
 interface Note {
   id: number
   title: string
   description: string
 }

function App() {
  const selector: any = useSelector((store) => store);

  const [theme, setTheme] = React.useState("light");

  useEffect(() => {
    var requestOptions: any = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://veloce-assignment.herokuapp.com/tasks", requestOptions)
      .then((response) => response.json())
      .then((result) => dispatch({ type: "FETCH_NOTE", payload: result }))
      .catch((error) => console.log("error", error));
  }, []);


  const dispatch = useDispatch();

  const addNote = (title: string, description: string) => {
    dispatch({ type: "ADD_NOTE", payload: title });
  };

  const sendNoteToServer = (title: string, description: string) => {
    var requestOptions: any = {
      method: "POST",
      redirect: "follow"
    };

    fetch(
      `https://veloce-assignment.herokuapp.com/task/create/${title}/${description}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch({ type: "FETCH_NOTE", payload: result }))
      .catch((error) => console.log("error", error));
  };

  const sendUpdatedNoteToServer = (id: number, title: string, description: string) => {
    var requestOptions: any = {
      method: "PUT",
      redirect: "follow"
    };

    fetch(
      `https://veloce-assignment.herokuapp.com/task/update/${id}/${title}/${description}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch({ type: "FETCH_NOTE", payload: result }))
      .catch((error) => console.log("error", error));
  };

  //dark-mode toggle function
  const toggleFunction = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggle={toggleFunction}/>
      <NoteInput sendNoteToServer={sendNoteToServer} />

      <ul>
        {selector.payload?.tasks?.map((note: any) => (
          <div key={note.id}>
            
            <Card id={note.id} title={note.title} description={note.description} sendUpdatedNoteToServer={sendUpdatedNoteToServer}/>
          </div>
        ))}
      </ul>

      
      </ThemeProvider>
  );
}

export default App;
