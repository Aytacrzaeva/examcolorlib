import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>
                Home Page
            </title>
        </Helmet>
      <Header/>
      <Slider/>
      <Products/>
      <Card/>
    </div>
  )
}

export default Home
