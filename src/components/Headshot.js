import React from 'react'
import Me from '../assets/me.jpg'

const HeadShot = (props) => {
  return (
    <div className=' w-60 h-60 mb-10 border-8 border-gray-400 rounded-full overflow-hidden shadow-lg relative'>
      <img className='w-full h-full object-cover' src={Me} alt='me' />
    </div>
  )
}

export default HeadShot
