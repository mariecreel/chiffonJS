import React from 'react';
import './Button.css';

export default function Button(props){
  if(props.disabled == false){
    return(
      <div className="button-wrapper">
        <button className="{props.class}"
                type="button">
          {props.text}
        </button>
      </div>
    )
  } else {
    return(
      <div className="button-wrapper disabled">
        <button className="{props.class}"
                type="button"
                disabled>
          {props.text}
        </button>
      </div>
    )
  }
}
