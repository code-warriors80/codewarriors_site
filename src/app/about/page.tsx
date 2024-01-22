import React from 'react'
import Landing from '../components/about/AboutLanding'
import Expert from '../components/about/Expert'
import Overview from '../components/about/Overview'
import Experience from '../components/about/Experience'
import Mission from '../components/about/Mission'
import Contact from '../components/Contact'
import Discover from '../components/about/Discover'
import Enterprice from '../components/about/Enterprice'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Landing />
        <div className=' mx-auto'>
            <Expert />
            <Overview />
            <Experience />
            <Mission />
            <Discover />
            <Enterprice />
            <Contact />
        </div>
    </div>
  )
}

export default page