import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { fetchNotesFromServer, sendUpdatedNoteToServer } from "./actions/apiActions";

import Card from "./components/Card";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import { darkTheme, GlobalStyles, LightTheme } from "./styles/Themes";



function App() {
  const selector: any = useSelector((store) => store);

  const [theme, setTheme] = React.useState("light");

  useEffect(() => {
    fetchNotesFromServer()
  }, []);

  //dark-mode toggle function
  const toggleFunction = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggle={toggleFunction}/>
      <NoteInput />

      <ul>
        {selector.payload?.tasks?.map((note: any) => (
          <li key={note.id}>
            
            <Card id={note.id} title={note.title} description={note.description} sendUpdatedNoteToServer={sendUpdatedNoteToServer}/>
          </li>
        ))}
      </ul>

      
      </ThemeProvider>
  );
}

export default App;
