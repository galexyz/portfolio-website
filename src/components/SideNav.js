import * as React from 'react'
import { useRef } from 'react'
import { motion, sync, useCycle } from 'framer-motion'
import { useDimensions } from './UseDimensions'
import { MenuToggle } from './MenuToggle.js'
import { Navigation } from './Navigation'

const sidebar = {
  open: (height = 1400) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

export const SideNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      className='navWrap z-20'
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className='background' variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
