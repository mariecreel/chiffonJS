import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default class Collapsible extends React.Component{

  constructor(props){
    super(props);
    this.state = {visible: false};

  }

  changeVisibility(){
    if(!this.state.visible){
      this.setState({
        visible: true
      });
    } else {
      this.setState({
        visible: false
      })
    }
  }

  render() {
    return(
    <Wrapper>
      <Button disabled={false} onClick={this.changeVisibility.bind(this)}>
        {this.props.title}
      </Button>
      <Content visible={this.state.visible}>
        {this.props.children}
      </Content>
    </Wrapper>
    )
  }
}

/*
exporting so that we can give the button a different style when inside Wrapper
*/

export const Wrapper = styled.div`
  width: 100%;
`

/*
  visibility of content dependent on state: start off invisible then change
  to visible based on when user clicks the collapsible button.

  method from styled-component docs:
  https://styled-components.com/docs/basics#adapting-based-on-props
*/

const Content = styled.section`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  background-color: hsl(209, 79%, 24%);
  color: hsl(208, 80%, 80%);
  border-style: none dashed dashed;
  border-width: 5px;
  border-width-top: 0px;
  display: ${props => props.visible ? "block" : "none"};
  padding: 20px;
`
