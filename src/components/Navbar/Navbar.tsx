import React, {useState} from 'react'
import { Nav, Logo, LinkBox, LinkItem, OpenNavButton, MobileNav, Item, Box, Circle } from './Navbar.styles';
import icon from '../../assets/icon-hamburger.svg';
import arrow from '../../assets/icon-chevron.svg';


const Navbar = () => {

  const [isClicked, setIsClicked]=useState<boolean>(false);

  console.log(isClicked);

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
        <Nav isClicked={isClicked}>
            <Logo to='/'>THE PLANETS</Logo>
            <LinkBox>
              {planets?.map((item,index)=>(
                  <li key={index}>
                    <LinkItem color={item.color} to={`/${item.path}`}>{item.name}</LinkItem>
                  </li>
                ))
              }
              <OpenNavButton onClick={()=>setIsClicked(!isClicked)}> 
                 <img src={icon} alt='icon'/>
              </OpenNavButton>
              </LinkBox>
              {
                isClicked && <>
                    <MobileNav>
                      {planets?.map((item,index)=>(
                        <Box key={index}>
                          <div style={{display:'flex', gap:'10px'}}>
                          <Circle color={item.color}/>
                          <li key={index}>
                             <Item  to={`/${item.path}`}>{item.name}</Item>
                          </li>
                          </div>
                          <div>
                          <img src={arrow} alt='arrow'/>
                          </div>
                         </Box>
                        ))
                       }
                   </MobileNav>
                  </>
              }
         
        </Nav>
    </>
  )
}

export default Navbar



