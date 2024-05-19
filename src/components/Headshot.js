import React from 'react'
import Me from '../assets/me.jpg'

const HeadShot = (props) => {
  return (
    <div className=' sm:w-60 w-40 h-40 sm:ml-0 ml-10 sm:h-60 mb-5 sm:mb-10 border-8 border-gray-400 rounded-full overflow-hidden shadow-lg relative'>
      <img className='w-full h-full object-cover' src={Me} alt='me' />
    </div>
  )
}

export default HeadShot
