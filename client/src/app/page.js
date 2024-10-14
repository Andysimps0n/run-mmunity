"use client"
import Running from './pages/Running'
import Comunitee from './pages/Comunitee'
import Bar from './components/Bar'
import Header from './components/Header'

export default function Home() {


  return (
    <>
      <Header></Header>
      <Running></Running>
      <Bar></Bar>
      <Comunitee></Comunitee>
    </>
  );
}
