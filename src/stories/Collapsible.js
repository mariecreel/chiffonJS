import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function Collapsible(props){
  return (
    <Wrapper>
      <Button disabled={false} text = {props.title}/>
      <Content>
        {props.children}
      </Content>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  /*
  exporting so that we can give the button a different style when inside Wrapper
  */
  width: 100%;
`
const Content = styled.section`
  font-size: 1.2rem;
  color: hsl(332, 96%, 44%);
  background-color: hsl(54, 100%, 90%);
`
