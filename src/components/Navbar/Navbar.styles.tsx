import styled from 'styled-components';
import {Link} from 'react-router-dom'

interface Props{
  color:string;
}

export const Nav=styled.nav`
    width:100%;
    padding: 25px;
    height:'80px';
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid gray;

    @media (max-width:799px){
       flex-direction:column;
       justify-content:none;
       gap:40px;
    }

    @media (max-width:499px){
      flex-direction:row;
      justify-content:space-between;
    }

`

export const Logo=styled(Link)`
    color:#fff;
    font-size:26px;
    text-decoration:none;
    font-weight:bold;
    font-family:'Antonio', sans-serif;
`

export const LinkBox=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:30px;

    & li{
      list-style:none;
    }

    @media (max-width:499px){
    display:none;
   }
`

export const LinkItem=styled(Link)<Props>`
 position:relative;
 text-decoration:none; 
 color:#fff;
 font-size:14px;  


 &:after {
    content: "";
    position:absolute;
    background-color:${props => (props.color)};
    width:0;
    height:3px;
    transition:0.3s;
    left:0;
    top:-27px;
  }

  &:hover{
    font-weight:bold;
  }

  &:hover:after{
    width:100%;
  }
`

export const OpenNavButton=styled.button`
   width:70px;
   height:50px;
   background:none;
   border:none;
   color:white;
   cursor:pointer;
   

   @media (min-width:499px){
    display:none;
   }
`

export const MobileNav=styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  margin: 0 25px 25px 25px;


  & li{
      list-style:none;
    }

  @media (min-width: 499px) {
    display: none;
  }
`

export const Planet=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;

`

export const Item=styled(Link)`
   text-decoration:none; 
   color:#fff;
   font-size:18px;  
   font-weight:bold;
   
`

export const Box=styled.div`
  width:100%;
  height:70px;
  border-bottom:1px solid gray;
  display:flex;
  align-items:center;
  justify-content:space-between;

`

export const Circle=styled.div<Props>`
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:${props=>(props.color)};
`