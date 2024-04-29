import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython
} from 'react-icons/fa6'
import { SiTypescript, SiJavascript, SiDjango } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
  return (
    <div className='w-full mt-20 text-lg'>
      <div className=' text-center font-bold py-5'>My Stack</div>
      <div className='flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-10'>
        <div className='space-y-5'>
          <div className='flex flex-row w-60 justify-between '>
            <div className='flex flex-col'>HTML</div>
            <FaHtml5 className='w-6 h-6 text-orange-500 ' />
          </div>
          <div className='flex flex-row w-60 justify-between'>
            <div className='flex flex-col'>CSS</div>
            <FaCss3Alt className='w-6 h-6 text-blue-500' />
          </div>
          <div className='flex flex-row w-60 justify-between'>
            <div className='flex flex-col'>Javascript</div>
            <SiJavascript className='w-6 h-6 text-yellow-500' />
          </div>
          <div className='flex flex-row w-60 justify-between'>
            <div className='flex flex-col'>Typescript</div>
            <SiTypescript className='w-6 h-6 text-blue-500' />
          </div>
        </div>
        <div className='space-y-5'>
          <div className='flex flex-row w-60 justify-between'>
            <div className='flex flex-col'>React / React Native</div>
            <FaReact className='w-6 h-6 text-teal-500' />
          </div>
          <div className='flex flex-row w-60 justify-between'>
            <div className='flex flex-col'>NextJS</div>
            <TbBrandNextjs className='w-6 h-6 text-white' />
          </div>
          <div className='flex flex-row w-60 justify-between'>
            <div className='flex flex-col'>NodeJS</div>
            <FaNodeJs className='w-6 h-6 text-green-300' />
          </div>
          <div className='flex flex-row w-60 justify-between'>
            <div className='flex flex-col'>Django</div>
            <SiDjango className='w-6 h-6 text-green-500' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
