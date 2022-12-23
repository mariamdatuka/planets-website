import styled from 'styled-components'

export const Content=styled.div`
    padding: 80px 100px;
    display:flex;
    gap:25px;
    font-family: 'Antonio', sans-serif;

    @media (max-width:940px){
        padding: 80px 50px;
    }

    @media (max-width:799px){
        padding: 80px 20px;
    }

    @media (max-width:599px){
      flex-direction:column;
      gap:5px;
      align-items:center;
      padding:30px 0 0 0;
    }
`
export const Container=styled.div`
    width:300px;
    height:100px;
    border:1px solid gray;
    display:flex;
    flex-direction:column;
    padding:10px;
    gap:10px;
    
    & p{
        font-size:14px;
        color:gray;
        font-weight:bold;
    }

    & h1{
        font-size:30px;
    }

    @media (max-width:1199px){
        width:350px;

        & h1{
        font-size:28px;
    }

    }

    @media (max-width:940px){
        width:450px;

        & h1{
        font-size:24px;
    }

}

    @media(max-width:799px){
        width:500px;
    }

    @media(max-width:599px){
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        height:50px;
        width:330px;

        & h1{
            font-size:22px;
        }
    }
  `

