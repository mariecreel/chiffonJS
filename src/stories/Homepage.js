import React from 'react';
import styled from 'styled-components';
import Faq from './Faq';
import Button from './Button';
import Input from './Input'

export default function Homepage(){
  let inputProps = {
      id: "accept-zip",
      name: "accept-zip",
      accept: ".zip",
      type: "file"
    }
  /*
  function downloadHandler(){

  }
  */
  return (
    <Wrapper>
      <h1>Chiffon: Build Dress-up Games!</h1>
      <Input {... inputProps}/>
      <Button>Download Assets Template</Button>
      <Faq/>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 60%;
  margin: 0 auto;
  border-radius: 40px;
  border-style: dashed;
  border-width: 5px;
  border-color: hsl(332, 96%, 44%);
  padding: 20px;
  background-color: hsl(54, 100%, 90%);
  color: hsl(332, 96%, 44%);
  font-size: 1rem;
  font-family: 'Leckerli One', cursive;
`
