import { SideNav } from '../components/SideNav'

const Contact = () => {
  const pageHeight = window.innerHeight - 80
  console.log(pageHeight)
  return (
    <div>
      <SideNav />
      <div style={{ height: pageHeight }}>
        <div className='text-center'>Contact Me</div>
      </div>
    </div>
  )
}

export default Contact
