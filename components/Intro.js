import { ReactTyped } from 'react-typed'

const Intro = () => {
  return (
    <div className='text-white text-sm sm:text-2xl lg:text-3xl font-bold absolute'>
      <ReactTyped
        strings={[
          "Hi I'm Alex!",
          'Passionate Software Craftsman',
          'Like my work? get in touch!'
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  )
}

export default Intro
