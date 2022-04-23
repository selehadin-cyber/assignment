import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

interface NoteInputProps {
  addNote(title: string, description: string): void;
}

const StyledNoteCreateSection = styled.div`
padding-left: 3.5rem;
padding-right: 3.5rem;
background-color: rgba(0,0,0,.75);
margin: 0 auto;
@media (min-width: 768px)
 {
    max-width: 28rem;
}
`

const StyledInput = styled.input`
  outline: 2px solid transparent;
  outline-offset: 2px;
  width: 100%;
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(51 51 51 / var(--tw-bg-opacity));
  padding: 0.875rem 1.25rem;
  background-color: white
`;

const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  useEffect(() => {
    console.log("usedefffect");
  }, [title]);

  const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const updateDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescriptionText(event.target.value);
  };

  const addNoteClick = () => {
    addNote(title, descriptionText);
    setTitle("");
    setDescriptionText("");
  };

  return (
    
      <StyledNoteCreateSection>
        <StyledInput
          type="text"
          name=""
          value={title}
          id=""
          placeholder="Title here"
          onChange={updateTitle}
        />
        <StyledInput
          type="text"
          name=""
          value={descriptionText}
          id=""
          placeholder="Description here"
          onChange={updateDescription}
        />
      

      <button onClick={addNoteClick}>save</button>
      </StyledNoteCreateSection>
   
  );
};

export default NoteInput;
