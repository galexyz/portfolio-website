// _app.js
import '../global.css'
import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SideNav } from '../components/SideNav'

export default function App({ Component, pageProps }) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log(container)
  }

  return (
    init && (
      <div className='flex flex-col max-h-screen'>
        <Analytics />
        <div id='app' className='w-full text-white flex-1'>
          <SideNav />

          <Component {...pageProps} />
          <div className=''>
            <Footer />
          </div>
        </div>

        <Particles
          id='tsparticles'
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: true, mode: 'repulse' },
                resize: true
              },
              modes: {
                push: { quantity: 1 },
                repulse: { distance: 200, duration: 0.4 }
              }
            },
            particles: {
              color: { value: '#ffffff' },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 6,
                straight: false
              },
              number: {
                density: { enable: true, area: 800 },
                value: 80
              },
              opacity: { value: 0.5 },
              shape: { type: 'square' },
              size: { value: { min: 1, max: 5 } }
            },
            detectRetina: true
          }}
        />
      </div>
    )
  )
}
