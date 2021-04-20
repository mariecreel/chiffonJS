import React from 'react';
import FileInput from './FileInput';

export default {
  title: 'FileInput',
  component: FileInput
}

export function AcceptZip(){
  let props = {
    id: "accept-zip",
    name: "accept-zip",
    accept: ".zip"
  }
  return(
    <FileInput {...props}/>
  )
}
