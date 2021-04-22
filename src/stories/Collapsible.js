import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function Collapsible(props){
  function collapsibleHandler(){
    console.log(this.Content.style.visibility);
    if(this.Content.style.visibility == "hidden"){
      Content.style.visibility = "visible"
    } else {
      this.Content.style.visibility = "hidden"
    }
  }

  return (
    <Wrapper>
      <Button disabled={false}
              text = {props.title}
              onClick={collapsibleHandler}/>
      <Content>
        {props.children}
      </Content>
    </Wrapper>
  )
}
/*
exporting so that we can give the button a different style when inside Wrapper
*/
export const Wrapper = styled.div`
  width: 100%;
`

const Content = styled.section`
  font-size: 1.2rem;
  color: hsl(332, 96%, 44%);
  background-color: hsl(54, 100%, 90%);
  border-style: dashed;
  border-width: 2px;
  visibility: hidden;
`
