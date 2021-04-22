import React from 'react';
import styled from 'styled-components';

export default function Button(props){
  if(props.disabled == false){
    return(
      <Wrapper>
        <CuteButton className={props.class}
                type="button">
            {props.text}
        </CuteButton>
      </Wrapper>
    )
  } else {
    return(
      <Wrapper>
        <CuteButton className={props.class}
                type="button"
                disabled>
          {props.text}
        </CuteButton>
      </Wrapper>
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

  &:hover{
    color: hsl(332, 96%, 64%);
  }

  &:disabled{
    background-color: hsl(209, 79%, 24%);
    color: hsl(208, 80%, 68%);
    border-color: hsl(208, 80%, 68%);
  }
`

const Wrapper = styled.div`
  width: fit-content;
  border-radius: 40px;
  padding-bottom: 10px;
  margin: 5px;
`
