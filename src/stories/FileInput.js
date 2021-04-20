import React from 'react';

export default function FileInput(props){
  return(
    <input type="file" id={props.id} name={props.name} accept={props.accept}/>
   )
}
