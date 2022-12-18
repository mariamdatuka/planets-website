import React from 'react'
import { Nav, Logo, LinkBox, LinkItem } from './Navbar.styles';




interface Props{
  planets:any
}

const Navbar = ({planets}:Props) => {


  return (

    <>
        <Nav>
            <Logo to='/'>THE PLANETS</Logo>
            <LinkBox>
              {planets?.map((item:any,index:any)=>(
                  <li key={index}>
                    <LinkItem to={`/${item.path}`}>{item.name}</LinkItem>
                  </li>
                ))
              }
              </LinkBox>
            
        </Nav>
    </>
  )
}

export default Navbar



