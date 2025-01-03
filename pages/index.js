import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Image from 'next/image'
import Me from '../public/me.jpg'

const Home = () => {
  const pageHeight = window.innerHeight - 80

  return (
    <div
      style={{ height: pageHeight }}
      className='flex flex-row justify-center pt-10 sm:spt-20 sm:gap-y-5 gap-y-3'
    >
      <div className='sm:pb-20 pb-0 grid justify-items-center'>
        <div className='sm:w-60 w-40 h-40 sm:ml-0 ml-10 sm:h-60 mb-5 sm:mb-10 border-8 border-gray-400 rounded-full overflow-hidden shadow-lg relative sm:mr-0 mr-10'>
          <Image
            className='object-cover w-full h-full'
            src={Me}
            loading='lazy'
            alt='Alex Huo'
          />
        </div>
        <Intro />
        <Skills />
      </div>
    </div>
  )
}

export default Home
