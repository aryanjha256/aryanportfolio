import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Projects from '../components/projects'

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-900 px-2 text-gray-50 ">
      <Head>
        <title>Aryan Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" container mx-auto max-w-4xl  antialiased lg:px-4">
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default Home
