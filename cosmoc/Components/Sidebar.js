"use client";
import React from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'

const Sidebar = ({isMenuOpen, setIsMenuOpen}) => {

    return (
        <div>
            <nav className={`lg:hidden fixed top-0 left-0 h-screen w-screen z-999 bg-white/60 backdrop-blur-sm
            shadow-[-10px_0_10px_rgba(0,0,0,0.1)] flex justify-center flex-col gap-6 p-4 pb-20 
            transition-transform duration-500 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className='flex flex-col gap-6'>
                <span className='flex justify-end w-full'>
                    <X onClick={() => setIsMenuOpen(false)} />
                </span>
                <span className='w-full p-2 gap-2 flex justify-center items-center border-black border rounded-3xl'>
                    <textarea className='resize-none flex-2 h-6 ml-0.75' name="" placeholder='Find on Cosmoc' id=""></textarea>
                    <Search />
                </span>
            </div>
            <ul className='flex  gap-4 items-center justify-center flex-col  '>
                <Link className='PrimaryHoverEffect text-3xl text-center w-full' href="/">Store</Link>
                <Link className='PrimaryHoverEffect text-3xl text-center w-full' href="/">Brands</Link>
                <Link className='PrimaryHoverEffect text-3xl text-center w-full' href="/">Hair Care</Link>
                <Link className='PrimaryHoverEffect text-3xl text-center w-full' href="/">Perfumes</Link>
                <Link className='PrimaryHoverEffect text-3xl text-center w-full' href="/">Contact Us</Link>
                <Link className='PrimaryHoverEffect text-3xl text-center w-full' href="/">Skin Care</Link>
            </ul>
        </nav>
        </div >
    )
}

export default Sidebar
