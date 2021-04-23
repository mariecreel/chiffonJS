import React from 'react';
import styled from 'styled-components';

export default function Button(props){
  if(props.disabled == false){
    return(
      <CuteButton className={props.class}
              type="button">
          {props.children}
      </CuteButton>
    )
  } else {
    return(
    <CuteButton className={props.class}
            type="button"
            disabled>
      {props.children}
    </CuteButton>
    )
  }
}

const CuteButton = styled.button`
  border-radius: 40px;
  border-style: dashed;
  border-width: 5px;
  padding: 20px;
  background-color: hsl(332, 98%, 84%);
  color: hsl(332, 96%, 44%);
  border-color: hsl(332, 96%, 44%);
  font-size: 1.25rem;
  font-family: 'Leckerli One', cursive;
  width: fit-content;
  cursor: pointer;
  margin: 5px 0;

  &:hover{
    background-color: hsl(332, 97%, 76%);
  }

  &:disabled{
    background-color: hsl(209, 79%, 24%);
    color: hsl(208, 80%, 80%);
    border-color: hsl(208, 80%, 80%);
    cursor: not-allowed;
  }
`
