import React from 'react'
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom'

function Navbar({ isLogedIn, setIsLogedIn }) {
    return (
        <main className='w-[100vw] flex px-[120px] mx-auto justify-between items-center py-3 border-b border-b-[#ccc] sticky top-0 z-10 bg-white'>
            <Link to='/'>
                <h1 className='text-[2.2rem] font-semibold'>edu <span className='text-[#f6543e]'>web</span></h1>
            </Link>

            <nav className='mt-2'>
                <ul className='flex gap-[2.5rem] text-lg'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <section className='flex items-center gap-3'>
                { 
                    !isLogedIn &&
                    <Link to='/login'>
                        <button className='py-1.5 px-2.5 bg-[#e2e2e2] rounded hover:bg-[#e8e8e8]'>Log in</button>
                    </Link>
                }
                {
                    !isLogedIn &&
                    <Link to='/signup'>
                        <button className='py-1.5 px-2.5 bg-[#f6543e] rounded text-white'>Sign up</button>
                    </Link>
                }
                {
                    isLogedIn &&
                    <Link to='/'>
                        <button 
                         className='py-1.5 px-2.5 bg-[#e2e2e2] rounded'
                         onClick={() => {
                            setIsLogedIn(false);
                            toast.success('Logged Out');
                         }}
                        >Log out</button>
                    </Link>
                }
                {
                    isLogedIn &&
                    <Link to='/dashboard'>
                        <button className='py-1.5 px-2.5 bg-[#f6543e] rounded text-white'>Dashboard</button>
                    </Link>
                }
            </section>
        </main>
    )
}

export default Navbar
