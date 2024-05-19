import * as React from 'react'
import { motion } from 'framer-motion'
import { FaHouse, FaUser, FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const icons = {
  Home: <FaHouse className='sm:w-6 sm:h-6 h-5 w-5' />,
  'About Me': <FaUser className='sm:w-6 sm:h-6 h-5 w-5' />
}

export const MenuItem = ({ i }) => {
  return (
    <Link to={`/${i.text.split(' ')[0].toLowerCase()}`}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className='flex flex-row py-5'>
          <div className='icon-placeholder text-white w-5 h-5 mr-10'>
            {icons[i.text]}
          </div>
          {window.innerWidth > 600 && (
            <div className='text-placeholder text-white w-20 sm:text-base text-sm'>
              {i.text}
            </div>
          )}
        </div>
      </motion.li>
    </Link>
  )
}
