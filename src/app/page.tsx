import Carousel from './components/Carousel'
import Training from './components/Training'
import Services from './components/Services'
import New from './components/New'
import Testimonial from './components/Testimonial'
import Project from './components/Project'
import Discover from './components/Discover'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Header from '@/components/header'
import Partner from './components/Partner'


export default function Home() {
  return (
    <main className="f">
      <Header/>
      <Carousel />
      <Partner />
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
