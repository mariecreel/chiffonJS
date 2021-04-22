import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input
}

export function AcceptZip(){
  let props = {
    id: "accept-zip",
    name: "accept-zip",
    accept: ".zip",
    type: "file"
  }
  return(
    <Input {...props}/>
  )
}
