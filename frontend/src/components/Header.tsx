import styled from "styled-components";
import { Moon } from "../Icons/Moon";
import { Sun } from "../Icons/Sun";
import Toggle from "./Toggle";

interface ToggleProp {
  /* sum: (a: number, b: number) => number;
    logMessage: (message: string) => void; */

  // 👇️ turn off type checking
  toggle: () => void;
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
  padding 20px;
  font-family: Poppins;
`;

const ToggleContainer = styled.div`
  display: flex;
  gap: 5px;
`;

function Header({ toggle }: ToggleProp) {
  return (
    <StyledHeader>
      <h1>Note App</h1>
      <ToggleContainer onClick={() => toggle()}>
        <Sun />
        <Toggle />
        <Moon />
      </ToggleContainer>
    </StyledHeader>
  );
}

export default Header;
