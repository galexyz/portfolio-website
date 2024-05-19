import HeadShot from '../components/Headshot'
import Intro from '../components/Intro'
import { SideNav } from '../components/SideNav'
import Skills from '../components/Skills'

const Home = () => {
  const pageHeight = window.innerHeight - 80

  return (
    <div
      style={{ height: pageHeight }}
      className='flex flex-row justify-center pt-10 sm:spt-20 sm:gap-y-5 gap-y-3'
    >
      <SideNav />
      <div className='sm:pb-20 pb-0'>
        <HeadShot />
        <Intro />
        <Skills />
      </div>
    </div>
  )
}

export default Home
