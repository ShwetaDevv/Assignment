import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    
       <nav className='bg-indigo-300 p-6 space-x-8'>
         <Link to='/' className='text-2xl'>Home</Link>
         <Link to='/about'  className='text-2xl'>About</Link>
       </nav>
    
  )
}

export default Navbar