import React from 'react'
import styled from 'styled-components'

const StyledRemove = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid ${(props) => props.theme.color};
    border-radius: 22px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: ${(props) => props.theme.color};
    border-radius: 5px;
    top: 8px;
    left: 4px;
  }
`

export const Remove = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <>
        <StyledRemove {...props} ref={ref} icon-role="remove" />
      </>
    )
  },
)
