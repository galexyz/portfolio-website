import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='h-28 w-full bg-black flex flex-col justify-center z-40'>
      <div className='flex flex-row text-white justify-center gap-x-4'>
        <FaGithub
          className='w-8 h-8 cursor-pointer'
          onClick={() => window.open('https://github.com/galexyz')}
        />
        <FaLinkedin
          className='w-8 h-8 cursor-pointer'
          onClick={() => window.open('https://www.linkedin.com/in/a-huo/')}
        />
      </div>
    </div>
  )
}

export default Footer
