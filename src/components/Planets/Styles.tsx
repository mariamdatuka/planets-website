import styled from 'styled-components'


export const MainContent=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:100px;

    @media(max-width:799px){
        flex-direction:column;
    }

    @media(max-width:599px){
        padding-top:0;
    }
`

export const InfoBox=styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;
    padding-left:100px;

    @media(max-width:799px){
        flex-direction:row;
        padding-top:30px;
        padding-left:50px;
        padding-right:50px;
    }

    @media(max-width:599px){
        align-items:center;
        justify-content:center;
        padding: 30px 0 0 0;
    }
`

export const ImgContainer=styled.div`
    margin-left:135px;

    & img{
        width:300px;
    }

    @media(max-width:799px){
        margin-left:0;

        & img{
        width:200px;
       }
    }

    @media(max-width:799px){
        & img{
        width:150px;
       }

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

     @media(max-width:799px){
       & h2{
        font-size:50px;
       }

       & div{
        font-size:16px;
       }

       @media(max-width:599px){
        align-items:center;
        gap:20px;
        
        h2{
            font-size:42px;
        }
        & div{
        font-size:14px;
        padding-left:5px;
        padding-right:5px;
        height:80px;
        text-align:center;
       }

       }
    }
`

export const ButtonsBox=styled.div`
 display:flex;
 flex-direction:column;
 gap:10px;

 @media(max-width:799px){
     align-items:center;
     justify-content:center;
     padding-top:30px;
    }
    
    @media(max-width:599px){
        display:none;
    }
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
    font-family: 'League Spartan',sans-serif;
    cursor:pointer;
    transition:0.3s ease-in-out;

    &:hover{
        background-color:#38384F;
     }

     @media (max-width:799px){
        width:270px;
        font-size:10px;
        gap:10px;
     }
`

export const ButtonsBoxMobile=styled.div`
    display:none;
   @media(max-width:599px){
        display:flex;
        margin-bottom:50px;
    }
`

export const MobileButton=styled.button`
    width:200px;
    height:40px;
    font-size:12px;
    border:none;
    background:none;
    color:gray;
    border-bottom:1px solid gray;
    font-family: 'League Spartan',sans-serif;
    cursor:pointer;

    &:hover{
        background-color: #38384F;
    }
    
    @media (max-width:499px){
        width:150px;
    }

    @media (max-width:399px){
        width:140px;
    }

    @media (max-width:390px){
        width:130px;
    }

    @media (max-width:365px){
        font-size:10px;
      
    }
`