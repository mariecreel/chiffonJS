import React from 'react';
import styled from 'styled-components';

export default function Input(props){
  return(
    <Wrapper>
      <CuteLabel for={props.id}>
        <HiddenInput type={props.type}
               id={props.id}
               name={props.name}
               accept={props.accept}/>
               Upload {props.accept}
      </CuteLabel>
    </Wrapper>
   )
}

const HiddenInput = styled.input`
  display: none;
  /*
  this allows us to hide the default input button and substitute our own.
  to style the new "button", you must style the label itself.
  */
`

const CuteLabel = styled.label`
  /* this is where the input "button" style lives. */
  border-radius: 40px;
  border-style: dashed;
  border-width: 5px;
  border-color: hsl(332, 96%, 44%);
  padding: 20px;
  background-color: hsl(54, 100%, 90%);
  color: hsl(332, 96%, 44%);
  font-size: 1.25rem;
  font-family: 'Leckerli One', cursive;
  width: 100%;
  &:hover{
    color: hsl(332, 96%, 64%);
  }
`

const Wrapper = styled.div`
    margin-top: 30px;
    width: fit-content;
    padding-bottom: 10px;
`
