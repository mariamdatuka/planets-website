import React from 'react'
import saturn from '../../assets/planet-saturn.svg'
import internal from '../../assets/planet-saturn-internal.svg'
import geolog from '../../assets/geology-saturn.png';
import { ImgContainer,ButtonsBox, Button, MainContent, InfoBox, General, MobileButton, ButtonsBoxMobile} from './Styles'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import data from '../../data/data.json';
import {useState} from 'react';





const Saturn = () => {
  const info=(data[5]);
const [structure,setStructure]=useState<Boolean>(false);
const [geology,setGeology]=useState<Boolean>(false);
const [overview,setOverview]=useState<Boolean>(true);


const handleClick=()=>{
  setOverview(true);
  setStructure(false);
  setGeology(false)
}

const handleClick2=()=>{
  setOverview(false);
  setStructure(true);
  setGeology(false)
}

const handleClick3=()=>{
  setOverview(false);
  setStructure(false);
  setGeology(true)
}


const buttonsArray=[
  {
    id:'01',
    name:'OVERVIEW',
    onclick: handleClick,
    color:'#fff',
    
  },

  {
    id:'02',
    name:'INTERNAL STRUCTURE',
    onclick: handleClick2,
    color:'#fff',
  },

  {
    id:'03',
    name:'SURFACE GEOLOGY',
    onclick: handleClick3,
    color:'#fff',
  },
]
  return (
    <>
       <MainContent>
       <ButtonsBoxMobile>
            {
             buttonsArray.map((item,index)=>(
              <MobileButton key={index} onClick={item.onclick} color={item.color}>
                   {item.name}
              </MobileButton>
            ))
           }
           </ButtonsBoxMobile>
    <ImgContainer>
         {structure && <img src={internal} alt='img'/>}
         {geology && <img src={geolog} alt='img'/>}
         {overview && <img src={saturn} alt='img'/>}
    </ImgContainer>
      <InfoBox>
        <General>
          <h2>{info?.name}</h2>
          <div>
             {structure && `${info?.structure.content}`}
             {overview && `${info?.overview.content}`}
             {geology && `${info?.geology.content}`}
          </div>
          <p>Source: 
             {overview && <a href={info?.overview.source} target="_blank" rel="noopener">Wikipedia</a>}
             {geology && <a href={info?.geology.source} target="_blank" rel="noopener">Wikipedia</a>}
             {structure && <a href={info?.structure.source} target="_blank" rel="noopener">Wikipedia</a>}
          </p>
        </General>
        <ButtonsBox>
           {
            buttonsArray.map((item,index)=>(
              <Button key={index} onClick={item.onclick}>
                <span>{item.id}</span>
                 <p>{item.name}</p>
              </Button>
            ))
           }
        </ButtonsBox>
      </InfoBox>
    </MainContent>
    <AdditionalInfo info={info}/>
    </>
  )
}

export default Saturn
