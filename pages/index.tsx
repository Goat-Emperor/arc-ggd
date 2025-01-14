import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
const Home: NextPage = () => {
  return (
    <>
    <Script type="text/javascript" src="/static/Grid.js" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js" />
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-container" id="js-grid"></div>
    </div>
    </>
  )
}

export default Home
