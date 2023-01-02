import styled from 'styled-components'
import { Image, H4, Text, Box } from './global'

const CardBox = styled.div`
  width:${props=>props.width};
  height:${props=>props.height};
  border-radius:${props=>props.borRadius};
  background-color:${props=>props.bgColor};
  box-shadow:${props=>props.bxShadow};
  display:flex;
  flex-direction:column;
  max-width:${props=>props.maxWidth};
  min-width:${props=>props.minWidth};
  min-height:${props=>props.minHeight};
  justify-content:space-between;
  background-image: url(${props=>props.bgImage});
  background-size: ${props=>props.bgSize};
  background-repeat: ${props=>props.bgRepeat};
`

export default function Testimonial({
    width="25vw",
    height="300px",
    borRadius="10px",
    bgColor="white",
    bxShadow="0px 5px 7px #16425B",
    heading="heading",
    paragraph="paragraph",
    headingColor="black",
    textAlign="center",
    maxWidth="300px",
    padding="20px",
    verAlign="text-bottom",
    classs="cardBox",
    bgSize,
    bgImage,
    bgRepeat


}) {

  return (
    <CardBox className={classs} maxWidth={maxWidth} padding={padding} width={width} height={height} bgColor={bgColor} borRadius={borRadius} bxShadow={bxShadow} bgImage={bgImage} bgSize={bgSize} bgRepeat={bgRepeat}>    
        <Text aliIt="center" justCont="center" textAlign={textAlign} verAlign={verAlign} padding={padding} height="225px"><i>{paragraph}</i></Text>
        <Box bgColor="#D9F0F4" height="75px" width="100%" position="relative" bottom="0px" aliIt="center" borderRadius="0 0 10px 10px">
            <H4 color={headingColor} margin="0 0 0 10px" textAlign={textAlign}>{heading}</H4>
        </Box>
    </CardBox>
  )
}
