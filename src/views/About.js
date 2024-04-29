import { useEffect, useState, useRef } from 'react'
import { SideNav } from '../components/SideNav'

const Section = (props) => {
  return (
    <div className='hover:shadow-2xl flex flex-row justify-center p-10'>
      <div>
        <div className='flex flex-row gap-x-5'>
          <div className='italic'>{props.period}</div>
          <div className='text-lg font-bold'>{props.header}</div>
        </div>
        <div className='p-5'>{props.description}</div>
        <div>
          <div className='flex flex-row flex-wrap'>
            {props.skills &&
              props.skills.length > 0 &&
              props.skills.map((skill) => {
                return (
                  <div
                    key={skill}
                    className='py-2 px-3 border border-white rounded-3xl cursor-pointer xl m-2 hover:shadow-xl'
                  >
                    {skill}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

const About = () => {
  const pageHeight = window.innerHeight - 112
  const screenWidth = window.innerWidth

  const [bgInView, setBgInView] = useState(false)
  const [expInView, setExpInView] = useState(false)
  const [projInView, setProjInView] = useState(false)

  const bgRef = useRef(null)
  const expRef = useRef(null)
  const projRef = useRef(null)

  useEffect(() => {
    let background = document.getElementById('background')
    let experience = document.getElementById('experience')
    let projects = document.getElementById('projects')

    function isInView(element) {
      const rect = element.getBoundingClientRect()
      const containerHeight = element.clientHeight

      console.log('rect', rect, element)

      const bottomInView = rect.bottom >= 0 && rect.bottom <= containerHeight
      const topInView = rect.top >= 0 && rect.top <= containerHeight

      return topInView || bottomInView
    }

    function handleScroll() {
      if (background && experience && projects) {
        setBgInView(isInView(background) && !isInView(experience))
        setExpInView(isInView(experience) && !isInView(projects))
        setProjInView(isInView(projects))
      }
    }

    // Get the container element to track scroll
    const container = document.getElementById('container')

    // Add event listener for scroll events on the container element
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div style={{ height: pageHeight }} className=' gap-y-5'>
      <SideNav />
      <div className='flex flex-row justify-center pt-10'>
        <div className='text-xl font-bold'>About Me</div>
      </div>
      <div className='flex flex-row justify-center py-10 px-5'>
        {window.innerWidth > 1024 && (
          <div className='w-2/5 flex flex-col items-center pt-20'>
            <div className='space-y-10'>
              <div
                onClick={() => {
                  if (bgRef.current) {
                    bgRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }
                }}
                className={
                  bgInView
                    ? 'text-white underline cursor-pointer'
                    : 'text-gray-500 cursor-pointer'
                }
              >
                Background / Education
              </div>
              <div
                onClick={() => {
                  if (expRef.current) {
                    expRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }
                }}
                className={
                  expInView
                    ? 'text-white underline cursor-pointer'
                    : 'text-gray-500 cursor-pointer'
                }
              >
                Experience
              </div>
              <div
                onClick={() => {
                  if (projRef.current) {
                    projRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }
                }}
                className={
                  projInView
                    ? 'text-white underline cursor-pointer'
                    : 'text-gray-500 cursor-pointer'
                }
              >
                Projects
              </div>
            </div>
          </div>
        )}
        <div
          className='lg:w-3/5 w-full h-[600px] border border-white overflow-y-auto'
          id='container'
        >
          <div id='background' ref={bgRef}>
            <div className='text-center pt-10 underline text-xl'>
              Background
            </div>
            I
            <Section
              header='About me'
              description={`
            Over 3 years of experience building web and mobile applications across the full stack. Recently, I have been exploring building on web3 using Solidity and Web3js.`}
            />
            <Section
              header='Bachelor of Science (University of Otago 2016-2018)'
              description={`Majored in Human Anatomy. Stumbled upon coding whilst taking an introductory Comp-sci paper in
            python during the final year of my bachelors. Since then I was
            hooked into coding and knew that it was exactly what I wanted to do.`}
            />
            <Section
              header='Masters of Software Development (Victoria University of Wellington (2020-2021)'
              description={`GPA-Based entry into a 1\u00BD year degree that teaches everything from OOP with Java to web development to advanced concepts such as cloud, security and hands on real-world projects.`}
            />
          </div>
          <div className='py-5' />

          <div id='experience' ref={expRef}>
            <div className='text-center py-10 underline text-xl'>
              Experience
            </div>
            <Section
              header='Software Engineer - SenSys'
              description='Working for a small SAAS company designing and developing data-intensive software applications.
            These include Mobile and Web Apps, with a large part of the front-end built by me. Also responsible for API development and optimization, 
            and contributing to our data-intensive backend.'
              period='2021-present'
              skills={[
                'Javascript',
                'Typescript',
                'React',
                'React Native',
                'Python',
                'Django',
                'TailwindCSS',
                'AWS',
                'Docker'
              ]}
            />
            <Section
              header='Software Research Intern - Callaghan Innovation'
              description='Spent 3 Months researching, designing and implementing CI/CD (Continuous Integration & Continuous Development)
            using bitbucket pipelines & Docker. Automated the installation of dependencies, build, testing and deployment for a large embedded project.
            Presented the end result, findings and improvements to the team'
              period='2021-2021'
              skills={[
                'CI/CD pipelines',
                'python',
                'C',
                'Automated testing',
                'Docker'
              ]}
            />
          </div>
          <div className='py-5' />

          <div id='projects' ref={projRef}>
            <div className='text-center py-10 underline text-xl'>Projects</div>
            <Section
              header='Drama Rating website external TVMaze API'
              description='Users can add and leave ratings for their favourite TV Shows / Dramas.
           Search / Filter by Popularity, Genre, Year etc.'
              skills={[
                'NextJS',
                'Javascript',
                'Typescript',
                'TailwindCSS',
                'NodeJS',
                'Sequelize',
                'PostgresQL',
                'Docker'
              ]}
            />
            <Section
              header='Personal Website'
              description='2024 Portfolio website (Yes, this website)'
              skills={['Javascript', 'React', 'TailwindCSS']}
            />
            <Section
              header='Base Analytics (Coming soon)'
              description='Analytics for Base shitcoins'
              skills={['Typescript', 'React', 'Web3JS']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
