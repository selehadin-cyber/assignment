import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { deleteNoteOnServerFile } from "../actions/apiActions";
import { ButtonIcon, Pen } from "../Icons/Pen";
import { Remove } from "../Icons/Remove";
import { StyledInput } from "./NoteInput";

interface CardProps {
  id: number;
  title: string;
  description: string;
  sendUpdatedNoteToServer: (id: number, titleText: string, descriptionText: string ) => any;
}






const Title = styled.h2`
  color: ${(props) => props.theme.color};
  font-weight: 500;
`;

const Description = styled.p`
  color: ${(props) => props.theme.color};
  font-weight: 300;
`;

const CardParent = styled.div`
  margin: 20px;
  max-width: 500px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 12px 18px;
  background-color: ${(props) => props.theme.gradientColor};
  background-image: ${(props) => props.theme.gradientImage};
  
  
`;

const StyledButton = styled.button`
   
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

const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-block: 10px;
`;

export const StyledNoteEditSection = styled.div`
  padding: 20px 56px 20px 56px;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 28rem;
  }
`;

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  sendUpdatedNoteToServer,
}) => {
  const [titleText, setTitleText] = useState(title);
  const [descriptionText, setDescriptionText] = useState(description);
  const [edit, setEdit] = useState(false);


  

  const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleText(event.target.value);
  };

  const updateDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescriptionText(event.target.value);
  };

  const updateNoteClick = () => {
    sendUpdatedNoteToServer(id, titleText, descriptionText);
    setTitleText("");
    setDescriptionText("");
    handleEdit();
  };

  const handleEdit = () => {
    setEdit(!edit);
    setTitleText(titleText);
    setDescriptionText(descriptionText);
    console.log(edit);
  };

  return (
    <CardParent>
      <Title>{title}</Title>
      <Description>{description}</Description>
      
      <FlexRow>
        <ButtonIcon onClick={() => handleEdit()}>
          <Pen/>
        </ButtonIcon>
        <ButtonIcon onClick={() => deleteNoteOnServerFile(id)}>
          <Remove />
        </ButtonIcon>
      </FlexRow>
      {edit && (
        <StyledNoteEditSection>
          <StyledInput
            type="text"
            name=""
            value={titleText}
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
          <StyledButton onClick={updateNoteClick}>Save Changes</StyledButton>
        </StyledNoteEditSection>
      )}
    </CardParent>
  );
};

export default Card;
