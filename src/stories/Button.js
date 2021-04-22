import React from 'react';
import styled from 'styled-components';
import { Wrapper as CollapsibleWrapper } from './Collapsible';

export default function Button(props){
  if(props.disabled == false){
    return(
      <CuteButton className={props.class}
              type="button">
          {props.text}
      </CuteButton>
    )
  } else {
    return(
    <CuteButton className={props.class}
            type="button"
            disabled>
      {props.text}
    </CuteButton>
    )
  }
}

const CuteButton = styled.button`
  border-radius: 40px;
  border-style: dashed;
  border-width: 5px;
  border-color: hsl(332, 96%, 44%);
  padding: 20px;
  background-color: hsl(54, 100%, 90%);
  color: hsl(332, 96%, 44%);
  font-size: 1.25rem;
  font-family: 'Leckerli One', cursive;
  width: fit-content;

  &:hover{
    color: hsl(332, 96%, 64%);
  }

  &:disabled{
    background-color: hsl(209, 79%, 24%);
    color: hsl(208, 80%, 68%);
    border-color: hsl(208, 80%, 68%);
  }

  ${CollapsibleWrapper} & {
    /*
      Need to use CollapsibleWrapper to give the button a different width
      when it's used within the Collapsible component. This tip courtesy
      of Josh W. Comeau's article on the styled components happy path– thank
      you, Josh!
      
      src: https://www.joshwcomeau.com/css/styled-components/
    */
    width: 100%
  }
`
