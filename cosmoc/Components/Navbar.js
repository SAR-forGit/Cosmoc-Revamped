"use client";
import { React, useState, useEffect, useRef } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Search, Handbag, Menu } from 'lucide-react';
import NavbarNavigators from "@/Components/NavbarNavigators";
import DarkModeLightModeButton from "./DarkModeLightModeButton";
import Sidebar from './Sidebar';
import gsap from "gsap";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const logoRef = useRef(null), navRef = useRef(null);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(logoRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                delay: 0.2
            });
            tl.from(".Navigators .Link", {
                y: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power3.out",
            });

        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <header className="sticky top-0 z-50 lg:static flex p-2 bg-[var(--foreground)]">
                <div className='flex gap-1'>
                    <div className='md:hidden hover:cursor-pointer flex items-center justify-center PrimaryHoverEffect'>
                        <Menu onClick={() => setIsMenuOpen(true)} className="PrimaryHoverEffect text-[var(--primary)]" size={20} />
                    </div>
                    <div className='flex items-center justify-center'>
                        <DarkModeLightModeButton dark={dark} setDark={setDark} />
                    </div>
                </div>
                <div className='flex items-center justify-center flex-2'>
                    <Link className='' href="/">
                        <Image className="w-auto h-auo" ref={logoRef} src="/logo.png"
                            alt="Logo"
                            priority
                            width={150}
                            height={60} />
                    </Link>
                </div>
                <div className="gap-5  pr-2 flex justify-center items-center">
                    <div className='PrimaryHoverEffect hidden md:block hover:cursor-pointer'>
                        <Search className="PrimaryHoverEffect text-[var(--primary)]" size={20} />
                    </div>
                    <div className='PrimaryHoverEffect hover:cursor-pointer'>
                        <Handbag className="PrimaryHoverEffect text-[var(--primary)]" size={20} />
                    </div>
                </div>
            </header>

            <NavbarNavigators />

            <Sidebar
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </>
    )
}

export default Navbar


