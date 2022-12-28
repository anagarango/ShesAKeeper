import Head from 'next/head'
import NavBar from '../comps/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandra Cleaning Service - Personalized Cleaning for your Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/sandra-logo.svg" />
      </Head>

      <main>
        <NavBar/>
        <h1>HELLLOO</h1>

      </main>
    </div>
  )
}