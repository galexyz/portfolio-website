import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex h-20 pt-5 flex-row text-white justify-center gap-x-4'>
      <FaGithub
        className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:scale-110 duration-300 transition'
        onClick={() => window.open('https://github.com/galexyz')}
      />
      <FaLinkedin
        className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:scale-110 duration-300 transition'
        onClick={() => window.open('https://www.linkedin.com/in/a-huo/')}
      />
    </div>
  )
}

export default Footer
