import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Nav=styled.nav`
    padding: 25px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid gray;
`

export const Logo=styled(Link)`
    color:#fff;
    font-size:26px;
    text-decoration:none;
    font-weight:bold;
`

export const LinkBox=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
`

export const LinkItem=styled(Link)`
 position:relative;
 text-decoration:none; 
 color:#fff;
 font-size:14px;  

 &:after {
    content: "";
    position:absolute;
    background-color:#2d68f0;
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