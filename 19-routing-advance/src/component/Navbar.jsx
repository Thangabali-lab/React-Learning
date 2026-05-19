import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex py-4 items-center px-8 bg-cyan-900 justify-between'>
            <h2 className='text-2xl font-bold'>Thangabali</h2>
            <div className='flex gap-10'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/course'>Course</Link>
                <Link to='/product'>Product</Link>
            </div>

        </div>
    )
}

export default Navbar