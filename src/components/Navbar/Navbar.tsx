import React from 'react'
import { Nav, Logo, LinkBox, LinkItem } from './Navbar.styles';


const Navbar = () => {

  const planets:{path:string, name:string, color:string}[]=[
    {
      path:'',
      name:'MERCURY',
      color:'#419EBB'
    },
  
    {
      path:'venus',
      name:'VENUS',
      color:'#EDA249' 
    },
  
    {
      path:'earth',
      name:'EARTH',
      color: '#6D2ED5'

    },
  
    {
      path:'mars',
      name:'MARS',
      color:'#D14C32'
    },
  
    {
      path:'jupiter',
      name:'JUPITER',
      color:'#D83A34'
    },
  
    {
      path:'saturn',
      name:'SATURN',
      color:'#CD5120'
    },
  
    {
      path:'uranus',
      name:'URANUS',
      color:'#1EC1A2'
    },
  
    {
      path:'neptune',
      name:'NEPTUNE',
      color:'#2D68F0'

    }
  ]


  return (

    <>
        <Nav>
            <Logo to='/'>THE PLANETS</Logo>
            <LinkBox>
              {planets?.map((item,index)=>(
                  <li key={index}>
                    <LinkItem color={item.color} to={`/${item.path}`}>{item.name}</LinkItem>
                  </li>
                ))
              }
              </LinkBox>
            
        </Nav>
    </>
  )
}

export default Navbar



