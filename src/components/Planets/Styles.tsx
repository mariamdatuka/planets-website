import styled from 'styled-components'


export const MainContent=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:100px;
`

export const InfoBox=styled.div`
    align-self:flex-start;
    display:flex;
    flex-direction:column;
    gap:30px;
    padding-left:250px;
`

export const ImgContainer=styled.div`
    margin-left:135px;

    & img{
        width:300px;
    }
`

export const General=styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;

    & h2{
        font-size:80px;
        font-family:'Antonio', sans-serif;
      }

    & div{
       width:350px;
       height:120px;
       line-height:1.2;
       font-size:18px;
     }

     & p{
        color:gray;
     }
`

export const ButtonsBox=styled.div`
 display:flex;
 flex-direction:column;
 gap:10px;
    
`

export const Button=styled.button`
    width:320px;
    padding: 0 20px;
    height:40px;
    border:1px solid gray;
    display:flex;
    color:#fff;
    background:none;
    align-items:center;
    gap:20px;
    letter-spacing:2px;
    font-size:14px;
    cursor:pointer;
    transition:0.3s ease-in-out;

    &:hover{
        background-color:#38384F;
     }

   
`