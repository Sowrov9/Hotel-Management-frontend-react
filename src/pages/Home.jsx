import React from 'react'
import Banner from '../components/home/Banner'
import Facility from '../components/home/Facility'
import Gallery from '../components/home/Gallery'
import Counter from '../components/home/Counter'
import About from '../components/home/About'
import Price from '../components/home/Price'
import Menu from '../components/home/Menu'
import Testimonial from '../components/home/Testimonial'
import Location from '../components/home/Location'
import Rooms from '../components/home/Rooms'

const Home = () => {
  return (
    <>
        <Banner />
        <Rooms />
        <Facility/>
        <Gallery />
        <Counter />
        <About />
        <Price />
        <Menu />
        <Testimonial />
        <Location />
    </>
  )
}

export default Home