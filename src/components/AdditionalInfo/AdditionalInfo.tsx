import { Container, Content } from './AdditionalInfo.styles'

interface Props{
  info:any
}

const AdditionalInfo = ({info}:Props) => {

    const infos=[
        {
            title:'ROTATION TIME',
            description:info?.rotation
        },

        {
            title:'REVOLUTION TIME',
            description:info?.revolution
        },

        {
            title:'RADIUS',
            description:info?.radius
        },

        {
            title:'AVERAGE TEMP',
            description:info?.temperature
        },
    ]
  return (
    <>
    <Content>
        {infos?.map((item, index)=>(
          <Container key={index}>
          <p>{item.title}</p>
          <h1>{item.description}</h1>
        </Container>
       ))}
    </Content>
    </>
  )
}

export default AdditionalInfo