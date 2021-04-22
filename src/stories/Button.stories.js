import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
}

export function Primary() {
  return(
    <Button primary text= "Click me!" disabled={false}/>
  )
}

export function Disabled(){
  return(
    <Button disabled={true} text="Oh no, you can't click me..."/>
  )
}
