import React from 'react'
import neptune from '../../assets/planet-neptune.svg'
import internal from '../../assets/planet-neptune-internal.svg'
import geolog from '../../assets/geology-neptune.png';
import { ImgContainer,ButtonsBox, Button, MainContent, InfoBox, General} from './Styles'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import data from '../../data/data.json';
import {useState} from 'react';

const Neptune = () => {
  
  const [info, setInfo]=useState<any>(data[7]);
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
      onclick: handleClick
      
    },

    {
      id:'02',
      name:'INTERNAL STRUCTURE',
      onclick: handleClick2,
    },

    {
      id:'03',
      name:'SURFACE GEOLOGY',
      onclick: handleClick3
    },
  ]



  return (
    <>
    <MainContent>
    <ImgContainer>
         {structure && <img src={internal} alt='img'/>}
         {geology && <img src={geolog} alt='img'/>}
         {overview && <img src={neptune} alt='img'/>}
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

export default Neptune
