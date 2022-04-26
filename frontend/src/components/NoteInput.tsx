import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { sendNoteToServer } from "../actions/apiActions";



export const StyledNoteCreateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  padding: 20px 56px 20px 56px;
  background-color: ${(props) => props.theme.background};
  transition: background 0.3s ease-in;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 28rem;
  }
`;

export const StyledInput = styled.input`
  margin: 15px auto;
  padding: 15px;
  outline: 2px solid transparent;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  outline-offset: 2px;
  width: 100%;
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(51 51 51 / var(--tw-bg-opacity));
  padding: 1rem 1rem;
  background-color: white;
`;

export const StyledButton = styled.button`
  margin: 20px;
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const NoteInput: React.FC = () => {
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
    sendNoteToServer(title, descriptionText);
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

      <StyledButton onClick={addNoteClick}>save</StyledButton>
    </StyledNoteCreateSection>
  );
};

export default NoteInput;
