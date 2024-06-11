import React from 'react'
import Navbar from '../component/Navbar'
import Banner from "../component/Banner"
import Cards from '../component/Cards'
import Footer from '../component/Footer'
import Freebooks from '../component/Freebooks'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Freebooks/>
        <Footer/>
    </div>
  )
}

export default Home