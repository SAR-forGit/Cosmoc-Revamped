import React from 'react'
import Link from 'next/link'

const NavbarNavigators = () => {
    return (
        <nav className='Navigators lg:sticky lg:top-0 lg:z-50 hidden md:flex justify-center items-center gap-15 flex-wrap bg-[var(--foreground))] text-[var(--primary)] p-2'>
            <Link className='Link PrimaryHoverEffect' href="/">Store</Link>
            <Link className='Link PrimaryHoverEffect' href="/">Brands</Link>
            <Link className='Link PrimaryHoverEffect' href="/">Skin Care</Link>
            <Link className='Link PrimaryHoverEffect' href="/">Hair Care</Link>
            <Link className='Link PrimaryHoverEffect' href="/">Perfumes</Link>
            <Link className='Link PrimaryHoverEffect' href="/">Contact Us</Link>
        </nav>
    )
}

export default NavbarNavigators
