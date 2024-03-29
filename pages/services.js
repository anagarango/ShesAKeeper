import Head from 'next/head'
import NavBar from '../comps/navbar'
import Footer from '../comps/footer'
import { Hero, H1, H2, H3, H4, Text, Box, PullQuote, Image, Container } from '../comps/global'
import Card from '../comps/card'
import CardImage from '../data/card.json'


export default function Home() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Head>
        <title>Sandra Cleaning Service - Personalized Cleaning for your Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/sandra-logo.svg" />
      </Head>

      <NavBar />

      <main style={{display:"flex", flexDirection:"column", backgroundColor:"white", padding:"35px"}}> 
        <Hero src="/laundry.jpg" width="55%" margin="90px 0 0 0" height="400px" bgSize="cover"></Hero>
        <Hero src="/vacuum.jpg" width="55%" margin="-200px 0 0 45%" height="400px" bgSize="cover" bgPosition="center top" transform="scaleX(-1)"></Hero>
        <H1 padding="0" margin="-70px 0 0 0" borderRadius="0 30px 30px 0">Services</H1>
          <Box width="100%" padding="100px 5% 0 5%" justCont="space-evenly" flexWrap="wrap">
            {
              CardImage.map((o)=>(
                <Card key={o.heading} src={o.image} widthImg="75%" paddingImg='40px' show="" maxWidth='235px' minHeight='235px'  heading={o.heading}></Card>
              ))
            }
          </Box>
      </main>
      <Footer></Footer>
    </div>
  )
}
