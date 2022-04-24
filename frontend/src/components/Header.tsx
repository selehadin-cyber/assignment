import styled from "styled-components"
import Toggle from "./Toggle"

interface ToggleProp {
    /* sum: (a: number, b: number) => number;
    logMessage: (message: string) => void; */
  
    // 👇️ turn off type checking
    toggle: () => any;
  }

const StyledHeader = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
max-width: 500px;
margin: 0 auto;
`

function Header({ toggle }: ToggleProp) {
  return (
    <StyledHeader>
        <h1>Note App</h1>
        <div onClick={() => toggle()}><Toggle/></div>
    </StyledHeader>
  )
}

export default Header