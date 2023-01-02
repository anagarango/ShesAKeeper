import styled from 'styled-components'
import { Image, H4, Text, Box, H2 } from './global'

const Tel = styled.a`
  color: white;
  font-size:16px;
  padding: 0px 20px;
  font-weight:600
`

export default function Footer({
    height="300px",
    bgColor="white",
}) {

  const Year = new Date().getFullYear()

  return (
    <Box width="100vw" height={height} bgColor="#81C3D7" padding="0px" flexDir="column" boxShadow="0px -5px 10px rgba(170,170,170,0.8)">
      <Box>
        <Box width="33vw" height="100%" flexDir="column" padding="50px">
          <H2 padding="0px 20px">Services Included</H2>
          <Text>Floors and Vacuuming. Kitchen and Dishwasher. Bathroom and Toilet. Bedrooms and Living/Dining Areas. Waste and Dusting</Text>
        </Box>
        <Box width="34vw" height="100%" flexDir="column" padding="50px">
          <H2 padding="0px 20px">Contact</H2>
          <Text>Feel free to give me a call if you're interested in my services.</Text>
          <Tel href="tel:6044734616">604-473-4616</Tel>
        </Box>
        <Box width="33vw" height="100%" flexDir="column" padding="50px">
          <H2 padding="0px 20px">Location</H2>
          <Text>Coquitlam, Pitt Meadows, Port Coquitlam, and Port Moody</Text>
        </Box>
      </Box>   
      <Box bgColor="#16425B" justCont="center">
        <Text color="white"> @{Year} Designed and Developed by Ana Arango</Text>
      </Box> 
    </Box>
  )
}