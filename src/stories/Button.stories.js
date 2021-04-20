import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
}

export function Primary() {
  return(
    <Button primary text= "Upload Assets" disabled={false}/>
  )
}

export function Disabled(){
  return(
    <Button disabled={true} text="Disabled..."/>
  )
}
