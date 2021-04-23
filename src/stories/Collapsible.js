import React from 'react';
import styled from 'styled-components';

export default function Collapsible(props){
  return(
    <Wrapper>
      <Summary>
        {props.summary}
      </Summary>
      <Content>
        {props.children}
      </Content>
    </Wrapper>
  )
}

/*
exporting so that we can give the button a different style when inside Wrapper
*/

const Wrapper = styled.details`
  width: 100%;
`

const Summary = styled.summary`
  border-style: dashed;
  border-width: 5px;
  border-color: hsl(332, 96%, 44%);
  padding: 20px;
  background-color: hsl(54, 100%, 90%);
  color: hsl(332, 96%, 44%);
  font-size: 1.25rem;
  font-family: 'Leckerli One', cursive;
  cursor: pointer;

  &:hover{
    color: hsl(332, 96%, 64%);
  }
`

const Content = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  background-color: hsl(54, 100%, 80%);
  color: hsl(332, 96%, 44%);
  border-style: none dashed dashed;
  border-width: 5px;
  border-width-top: 0px;
  padding: 20px;
  margin-top: 0px;
`
