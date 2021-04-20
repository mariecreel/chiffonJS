import React from 'react';
import "./FileInput.css";

export default function FileInput(props){
  return(
    <div class="input-wrapper">
      <label for={props.id} class="custom-file-upload">
        <input type="file"
               id={props.id}
               name={props.name}
               accept={props.accept}/>
               Upload {props.accept}
      </label>
    </div>
   )
}
