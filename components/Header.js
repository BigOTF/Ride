import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-3 px-10 image'>
        <h1 className='text-slate-100 text-2xl font-semibold tracking-wide'>
            CRida
        </h1>

        <nav>
            <ul className='flex justify-between gap-8 items-center'>
                <li className='text-gray-400 hover:text-slate-100 transition-all duration-500 text-sm'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='text-gray-400 hover:text-slate-100 transition-all duration-500 text-sm'>
                    <Link href='About'>About Us</Link>
                </li>
                <li className='text-gray-400 hover:text-slate-100 transition-all duration-500 text-sm'>
                    <Link href='Rentals'>Car Rentals</Link>
                </li>
                <li className='text-gray-400 hover:text-slate-100 transition-all duration-500 text-sm'>
                    <Link href='Sales'>Car Sales</Link>
                </li>
                <li className='text-gray-400 hover:text-slate-100 transition-all duration-500 text-sm'>
                    <Link href='Coride'>Co-Ride</Link>
                </li>
                <li className='text-gray-400 hover:text-slate-100 transition-all duration-500 text-sm'>
                    <Link href='Hailing'>Ride Hailing</Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-6'>
            <button className='text-gray-400 hover:text-slate-100 transition-all duration-500 text-sm'>Sign In</button>
            <button className='bg-orange-500 text-slate-50 px-5 py-1 rounded text-sm'>Sign Up</button>
        </div>
    </header>
  )
}

export default Header