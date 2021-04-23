import React from 'react';
import styled from 'styled-components';
import Faq from './Faq';
import Button from './Button';
import Input from './Input';
import logo from '../images/chiffonJSlogo.png';

export default function Homepage(){
  let inputProps = {
      id: "accept-zip",
      name: "accept-zip",
      accept: ".zip",
      type: "file"
    }
  /*
  function downloadHandler(){

  }
  */
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={logo} alt="Chiffon JS Logo"/>
      </ImgWrapper>
      <h1> Build Dress-up Games for the web! </h1>
      <h3> Are you ready to build a game? </h3>
      <Input {... inputProps}> Upload Assets (.zip)</Input>
      <h3> Do you need a template to get started? </h3>
      <Button disabled={false}>Download Assets Template</Button>
      <Faq/>
      <footer>
      Built by Marie Creel - Contact: <a href="mailto:hi@chiffonjs.com">hi@chiffonjs.com</a> -
      Twitter: <a href="https://twitter/toofyMaw">@toofyMaw</a>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 60%;
  margin: 0 auto;
  margin-top: 140px;
  border-radius: 40px;
  border-style: dashed;
  border-width: 5px;
  padding: 20px;
  background-color: hsl(54, 100%, 90%);
  color: hsl(332, 96%, 44%);
  border-color: hsl(332, 96%, 44%);
  font-size: 1rem;
  font-family: 'Leckerli One', cursive;
  text-align: center;

  & a{
    color: inherit;
  }

  & a:hover{
    background-color: hsl(332, 97%, 76%) ;
    font-weight:700;
    color: hsl(34, 100%, 56%)
    cursor: pointer;
  }

  h1{
    font-size: 2.5rem;
    margin: 40px 0px 60px;
  }

  h1::before, h1::after, h2::before, h2::after{
    content: '🎀'
  }

  h3{
    font-size: 1.5rem;
    padding: 10px;
  }

  @media (max-width: 1280px){
    width: 80%;
    margin-top: 140px;
  }

  @media (max-width: 800px){
    width: 80%;
    margin-top: 80px;
  }

  @media (max-width: 414px){
    width: 100%;
    padding: 20px 10px;
    margin: 0;
    margin-top: 90px
  }

  @media (max-width: 375px){
    width: 100%;
    padding: 20px 10px;
    margin: 0;
    margin-top: 90px
  }

  @media (max-width: 320px){
    width: 100%;
    padding: 20px 10px;
    margin: 0;
    margin-top: 75px
  }
`

const ImgWrapper = styled.div`
  margin-top: -140px;
  text-align: center;
  & img{
    width: 50%;
  }

  @media (max-width: 1280px){
    margin-top: -125px;
    & img{
      width: 50%
    }
  }

  @media (max-width: 1000px){
    margin-top: -95px;
  }

  @media (max-width: 800px){
    margin-top: -80px;
  }

  @media (max-width: 414px){
    margin-top: -85px;
    & img{
      width: 80%
    }
  }

  @media (max-width: 375px){
    margin-top: -80px;
    & img{
      width: 80%
    }
  }

  @media (max-width: 320px){
    margin-top: -70px;
    & img{
      width: 80%
    }
  }
`
