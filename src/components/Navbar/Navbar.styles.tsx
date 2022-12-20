import styled from 'styled-components';
import {Link} from 'react-router-dom'

interface Props{
  color:string;
}

interface Height{
  isClicked:boolean;
}

export const Nav=styled.nav<Height>`
    width:100%;
    padding: 25px 40px;
    height:${(props)=>props.isClicked?'100vh':'80px'};
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid gray;

    @media (min-width: 700px) {
    height: 80px;
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

  @media (max-width:700px){
    display:none;
   }
`

export const OpenNavButton=styled.button`
   width:70px;
   height:50px;
   background:none;
   border:none;
   color:white;
   cursor:pointer;
   font-size:45px;

   @media (min-width:700px){
    display:none;
   }
`

export const MobileNav=styled.div`
  display:flex;
  flex-direction:column;

  & li{
      list-style:none;
    }
`

export const Item=styled(Link)`
   text-decoration:none; 
   color:#fff;
   font-size:16px;  
`

export const Box=styled.div`
  width:100vw;
  height:40px;
  border-bottom:1px solid gray;
  display:flex;
  align-items:center;
  justify-content:space-between;

  @media(min-width:700px){
    display:none;
  }
`

export const Circle=styled.div<Props>`
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:${props=>(props.color)};
`