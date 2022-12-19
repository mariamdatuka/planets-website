import styled from 'styled-components'

export const Content=styled.div`
    padding: 80px 150px;
    display:flex;
    gap:25px;
`
export const Container=styled.div`
    width:240px;
    height:100px;
    border:1px solid gray;
    display:flex;
    flex-direction:column;
    padding:20px;
    gap:20px;
    
    & p{
        font-size:14px;
        color:gray;
        font-weight:bold;
    }

    & h1{
        font-size:34px;
    }
`

