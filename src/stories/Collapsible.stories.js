import React from 'react';
import Collapsible from './Collapsible';

export default {
  title: 'Collapsible',
  component: Collapsible
}

export function SimpleCollapsible(){
  return(
    <Collapsible summary = "Why did the chicken cross the road?">
    To get to the other side! <i>*ba dum tsh*</i>
    </Collapsible>
  )
}
