import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import FeaturedRow from '../components/FeaturedRow'
import HeaderSlider from '../components/HeaderSlider'
import PortfolioRow from '../components/PortfolioRow'
import Site_Header from '../components/Site_Header'
import TypesLogo from '../components/TypesLogo'


import about from './about'


const Home: NextPage = () => {
  return (
    <div>
      <Site_Header />
      <HeaderSlider />
      <TypesLogo />
      <FeaturedRow />
      <PortfolioRow />

    </div>
  )
}

export default Home
