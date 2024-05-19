import { useEffect, useState, useRef } from 'react'
import { SideNav } from '../components/SideNav'
import ratemydramaImage from '../assets/ratemydrama.png'
import websiteImage from '../assets/website.png'
import { useNavigate, useLocation } from 'react-router-dom'

const Section = (props) => {
  return (
    <div className='hover:shadow-2xl flex flex-row justify-start p-10'>
      <div>
        <div className='flex flex-row gap-x-5'>
          <div className='italic'>{props.period}</div>
          <div className='sm:text-xl text-base font-bold'>{props.header}</div>
        </div>
        <div className='sm:p-5 p-2 text-sm sm:text-lg'>{props.description}</div>
        <div>
          {props.image && (
            <div className='flex flex-row pl-5 md:pl-20 w-full h-60 my-5'>
              <img
                onClick={() => window.open(props.link)}
                className='h-full object-cover rounded-md w-96 hover:scale-110 transition duration-300 cursor-pointer border'
                src={props.image}
                alt={props.header}
              />
            </div>
          )}
          <div className='flex flex-row flex-wrap'>
            {props.skills &&
              props.skills.length > 0 &&
              props.skills.map((skill) => {
                return (
                  <div
                    key={skill}
                    className='py-2 px-3 border border-white rounded-3xl cursor-pointer sm:text-base text-xs xl m-1 sm:m-2 hover:shadow-xl'
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
  const pageHeight = window.innerHeight - 80
  const containerHeight = window.innerHeight * 0.8
  const navigate = useNavigate()
  const location = useLocation()

  console.log('location', location)

  useEffect(() => {})

  const handleNavigation = (section) => {
    navigate(`${location.pathname}#${section}`, { replace: true })
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  console.log(`window ${window.innerHeight} container ${containerHeight}`)

  return (
    <div style={{ height: pageHeight }} className=' gap-y-5'>
      <SideNav />
      <div className='flex flex-row justify-center py-10 px-5'>
        {window.innerWidth > 1024 && (
          <div className='w-1/3 flex flex-col items-center pt-20'>
            <div className='space-y-10'>
              <div
                onClick={() => handleNavigation('background')}
                className={
                  !location.hash || location.hash === '#background'
                    ? 'text-white underline cursor-pointer hover:scale-110 duration-300 transition'
                    : 'text-gray-500 cursor-pointer hover:scale-110 duration-300 transition'
                }
              >
                Background / Education
              </div>
              <div
                onClick={() => handleNavigation('experience')}
                className={
                  location.hash === '#experience'
                    ? 'text-white underline cursor-pointer hover:scale-110 duration-300 transition'
                    : 'text-gray-500 cursor-pointer hover:scale-110 duration-300 transition'
                }
              >
                Experience
              </div>
              <div
                onClick={() => handleNavigation('projects')}
                className={
                  location.hash === '#projects'
                    ? 'text-white underline cursor-pointer hover:scale-110 duration-300 transition'
                    : 'text-gray-500 cursor-pointer hover:scale-110 duration-300 transition'
                }
              >
                Projects
              </div>
            </div>
          </div>
        )}
        <div
          style={{ height: containerHeight }}
          className={`lg:w-2/3 w-full overflow-y-auto`}
          id='container'
        >
          <div id='background'>
            <div className='text-center pt-10 underline text-xl'>
              Background
            </div>
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

          <div id='experience'>
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

          <div id='projects'>
            <div className='text-center py-10 underline text-xl'>Projects</div>
            <Section
              header='Drama Rating website external TVMaze API'
              link='https://github.com/galexyz/ratemydrama-nextJS'
              description='Users can add and leave ratings for their favourite TV Shows / Dramas.
           Search / Filter by Popularity, Genre, Year etc. Uses the external TVMaze API to search for new dramas to add. Frontend built using NextJS.
            Backend built using NodeJS, Sequelize ORM and postgresQL and containerized within docker. Decided against hosting due to cost.'
              image={ratemydramaImage}
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
              link='https://github.com/galexyz/portfolio-website'
              image={websiteImage}
              description='2024 Portfolio website (Yes, this website). Built using React, TailwindCSS and some animation libraries'
              skills={['Javascript', 'React', 'TailwindCSS']}
            />
            <Section
              header='Base Analytics (Coming soon)'
              description='Analytics for Base shitcoins. Planning to experiment building on web3'
              skills={['Typescript', 'React', 'Web3JS']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
