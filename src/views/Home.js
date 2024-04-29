import HeadShot from '../components/Headshot'
import Intro from '../components/Intro'
import { SideNav } from '../components/SideNav'
import Skills from '../components/Skills'

const Home = () => {
  const pageHeight = window.innerHeight - 112

  return (
    <div
      style={{ height: window.innerWidth > 1024 && pageHeight }}
      className='flex flex-row justify-center pt-20 gap-y-5 '
    >
      <div className='z-20'>
        <SideNav />
      </div>
      <div className='pb-20'>
        <HeadShot />
        <Intro />
        <Skills />
      </div>
    </div>
  )
}

export default Home
