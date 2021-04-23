import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
}

export function Primary() {
  return(
    <Button primary disabled={false}>
      Click me!
    </Button>
  )
}

export function Disabled(){
  return(
    <Button disabled={true}>
      "Oh no, you can't click me..."
    </Button>
  )
}
