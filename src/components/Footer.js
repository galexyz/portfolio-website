import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='h-28 w-full bg-black flex flex-col justify-center z-40'>
      <div className='flex flex-row text-white justify-center gap-x-4'>
        <FaGithub className='w-8 h-8 cursor-pointer' />
        <FaLinkedin className='w-8 h-8 cursor-pointer' />
      </div>
    </div>
  )
}

export default Footer
