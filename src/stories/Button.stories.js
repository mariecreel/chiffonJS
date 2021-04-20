import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
}

export function Primary() {
  return(
    <Button primary class= "button-round" text= "Download Template" disabled={false}/>
  )
}

export function Disabled(){
  return(
    <Button disabled={true} class="button-round" text="Disabled..."/>
  )
}
