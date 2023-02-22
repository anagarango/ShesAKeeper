import styled from 'styled-components'
import { Text, Box, H2 } from './global'

const Tel = styled.a`
  color: #16425B;
  font-size:16px;
  font-weight:600
`

export default function Footer() {

  const Year = new Date().getFullYear()

  return (
    <Box width="100vw" height="fit-content" maxWidth="100vw" aliIt="center" bgColor="#81C3D7" padding="0px" flexDir="column" boxShadow="0px -5px 10px rgba(170,170,170,0.8)">
      <Box width="95%">
        <Box width="33%" height="100%" flexDir="column" padding="20px">
          <H2 padding="0px">Services Included</H2>
          <Text padding="0px">Floors and Vacuuming. Kitchen and Dishwasher. Bathroom and Toilet. Bedrooms and Living/Dining Areas. Waste and Dusting</Text>
        </Box>
        <Box width="34%" height="100%" flexDir="column" padding="20px">
          <H2 padding="0px">Contact</H2>
          <Text padding="0px">Feel free to give me a call if you're interested in my services.</Text>
          <Tel href="tel:6044734616">604-473-4616</Tel>
        </Box>
        <Box width="33%" height="100%" flexDir="column" padding="20px">
          <H2 padding="0px">Location</H2>
          <Text padding="0px">Coquitlam, Pitt Meadows, Port Coquitlam, and Port Moody</Text>
        </Box>
      </Box>   
      <Box width="100vw" bgColor="#16425B" justCont="center" maxWidth="100vw">
        <Text padding="0px" textAlign="center" color="white"> @{Year} Designed and Developed by Ana Arango</Text>
      </Box> 
    </Box>
  )
}
