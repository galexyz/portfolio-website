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
  Home: <FaHouse className='w-6 h-6' />,
  'About Me': <FaUser className='w-6 h-6' />,
  Contact: <FaPhone className='w-6 h-6' />
}

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const MenuItem = ({ i }) => {
  return (
    <Link to={`/${i.text.split(' ')[0].toLowerCase()}`}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className='flex flex-row py-5'>
          <div className='icon-placeholder text-gray-600'>{icons[i.text]}</div>
          <div className='text-placeholder text-gray-600'>{i.text}</div>
        </div>
      </motion.li>
    </Link>
  )
}
