"use client"

import Head from 'next/head'
import Running from './pages/Running'
import Comunitee from './pages/Comunitee'
import Bar from './components/Bar'
import Header from './components/Header'

export default function Home() {


  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <Header></Header>
      <Running></Running>
      <Bar></Bar>
      <Comunitee></Comunitee>
    </>
  );
}
