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

export default function Home() {
  return (
    <main className="f">
      <Carousel />
      <Services />
      <Project />
      <Training />
      <New />
      <Testimonial />
    </main>
  )
}
