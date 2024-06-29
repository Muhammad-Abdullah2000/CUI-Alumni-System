import React from 'react'
import Header from './HomeComponents/Header'
import NavBar from './HomeComponents/NavBar'
import Middel from "./HomeComponents/Middle_Start"
import Middel_Down from "./HomeComponents/Middle_Down"
import Center_Up from './HomeComponents/Center_Up'

const Home = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Middel/>
      <Middel_Down/>
      {/* <Center_Up/> */}
    </>
  )
}

export default Home
