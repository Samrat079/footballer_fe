import { PiSmileySad } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Not_found_01 = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='p-4 flex flex-col items-center justify-center gap-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-200'>
        <PiSmileySad size={64}/>
        <p className='text-4xl font-bold'>404</p>
        <p className='text-2xl font-semibold'>Page Not Found</p>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <Link to="/list" className='inline-block p-4 border border-gray-200 rounded-xl shadow-sm hover:bg-indigo-400 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
          GO Back to Home
        </Link>
      </div>
    </div>
  )
}


export default Not_found_01