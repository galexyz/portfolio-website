import { SideNav } from '../components/SideNav'

const Notfound = () => {
  const pageHeight = window.innerHeight - 80
  return (
    <div style={{ height: pageHeight }} className='w-full'>
      <SideNav />
      <div className='text-white text-center pt-20'>404 NOT FOUND</div>
    </div>
  )
}

export default Notfound
