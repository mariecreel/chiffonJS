import React from 'react';
import Collapsible from './Collapsible';

export default {
  title: 'Collapsible',
  component: Collapsible
}

export function SimpleCollapsible(){
  return(
    <Collapsible title = "Why did the chicken cross the road?">
    ...because it wanted to get to the other side! *ba dum tsh*
    </Collapsible>
  )
}
