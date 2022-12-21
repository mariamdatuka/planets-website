import React, {useState} from 'react'
import { Nav, Logo, LinkBox, LinkItem, OpenNavButton, MobileNav, Item, Box, Planet, Circle } from './Navbar.styles';
import icon from '../../assets/icon-hamburger.svg';
import arrow from '../../assets/icon-chevron.svg';


const Navbar = () => {

  const [isClicked, setIsClicked]=useState<boolean>(false);

  const handleClick=()=>{
    setIsClicked(false);
  }

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
              <OpenNavButton onClick={()=>setIsClicked(!isClicked)}> 
                 <img src={icon} alt='icon'/>
              </OpenNavButton>
              </Nav>
              {
                isClicked && <>
                    <MobileNav>
                      {planets?.map((item,index)=>(
                        <Box key={index} onClick={handleClick}>
                          <Planet>
                          <Circle color={item.color}/>
                          <li key={index}>
                             <Item  to={`/${item.path}`}>{item.name}</Item>
                          </li>
                          </Planet>
                          <div>
                          <img src={arrow} alt='arrow'/>
                          </div>
                         </Box>
                        ))
                       }
                   </MobileNav>
                  </>
              }
         
      
    </>
  )
}

export default Navbar



