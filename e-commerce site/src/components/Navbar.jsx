import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='flex justify-between bg-black text-white items-center'>
        
        <div className='text-4xl font-bold '><h1>SHOPHOLICS</h1></div>
        
        <div className="links flex ">
          <Link className='bg-white text-black m-2 p-2 rounded-xl text-xl font-bold' to = "/" >Shop</Link>
          <Link className='bg-white text-black m-2 p-2 rounded-xl text-xl font-bold' to = "/cart" >Cart</Link>
        </div>
     
    </div>
  )
}

export default Navbar
