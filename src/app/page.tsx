import Image from 'next/image'
import Carousel from './components/Carousel'
import Plans from './components/Plans'
import Power from './components/Power'
import Solutions from './components/Solutions'
import Training from './components/Training'
import Services from './components/Services'
import New from './components/New'
import Testimonial from './components/Testimonial'
import Project from './components/Project'
import Discover from './components/Discover'
import Skill from './components/Skill'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="f">
      <Carousel />
      <Services />
      <Project />
      <Discover />
      <Skill />
      <Training />
      <New />
      <Testimonial />
      <Contact />
    </main>
  )
}
