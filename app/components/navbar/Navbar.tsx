'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'

import Link from "next/link"
import { useState } from 'react'
import Image from 'next/image'

const styles = {
    navLinks: "cursor-pointer ml-10 uppercase border-b border-white hover:border-[#F6B519] text-xl"
}

const Navbar = () => {
    const [menuOpen, setMunuOpen] = useState(false);
    const toggleMenu = () => {
        setMunuOpen(!menuOpen)
    }
  return (
    <header>
        <nav className="w-full h-24 shadow-xl bg-slate-900">
            <div className="flex items-center justify-between px-4 h-full w-full">
                <Link href="/">
                    <Image 
                      src="/images/logo.jpg"
                      alt='logo'
                      width={100}
                      height={100}
                    />
                </Link>
                <div className="text-white hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <li className={styles.navLinks}>
                            <Link href="/about">about</Link>
                        </li>
                        <li className={styles.navLinks}>
                            <Link href="/contact">contact</Link>
                        </li>
                        <li className={styles.navLinks}>
                            <Link href="/about">News</Link>
                        </li>
                        <li className={styles.navLinks}>
                            <Link href="/about">event</Link>
                        </li>
                        <li className="
                            flex 
                            items-center 
                            space-x-5 
                            text-[#F6B519] 
                            ml-10">
                                <h3 className="
                                    text-center
                                    cursor-pointer 
                                    border 
                                    border-[#F6B519] 
                                    px-4 
                                    py-1 
                                    rounded-full 
                                    bg-[#F6B519] 
                                    text-black 
                                    hover:bg-black 
                                    hover:text-[#F6B519] 
                                    ease-in-out 
                                    duration-300">Book now</h3>
                        </li>
                    </ul>
                </div>
                {/* Mobile menu */}
                <div 
                 onClick={toggleMenu}
                className='sm:hidden cursor-pointer'>
                    <AiOutlineMenu className="h-8 w-8 text-white"/>
                </div>
                <div className={ menuOpen ? 
                    `fixed 
                    top-0 
                    left-0 
                    w-[70%] 
                    sm:hidden 
                    h-screen 
                    bg-[#ecf0f3] 
                    p-10 
                    z-10
                    ease-in-out 
                    duration-500` : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500 h-screen z-10'}>
                    <div 
                    onClick={toggleMenu}
                    className='flex w-full items-center justify-end'>
                        <AiOutlineClose size={24}/>
                    </div>
                    <div className='flex flex-col py-4'>
                    <ul>
                        <li 
                        onClick={() => setMunuOpen(false)}
                        className='py-4 hover:underline hover:decoration-[#F6B519] font-bold uppercase'>
                            <Link href="/about">about</Link>
                        </li>
                        <li 
                         onClick={() => setMunuOpen(false)}
                        className='py-4 hover:underline hover:decoration-[#F6B519] font-bold uppercase'>
                            <Link href="/contact">contact</Link>
                        </li>
                        <li 
                          onClick={() => setMunuOpen(false)}
                        className='py-4 hover:underline hover:decoration-[#F6B519] font-bold uppercase'>
                            <Link href="/about">News</Link>
                        </li>
                        <li 
                          onClick={() => setMunuOpen(false)}
                        className='flex items-center py-4 text-[#F6B519]'>
                            <p className='
                              cursor-pointer
                              px-4
                              py-1
                              rounded-full
                              bg-[#F6B519]
                              text-black
                              hover:bg-black
                              hover:text-[#F6B519]
                              ease-in-out
                              duration-300
                            '>Book now</p>
                        </li>
                    </ul>
                </div>
                {/* Social media links */}
                <div className='flex flex-row justify-around'>
                    <Link href="/instagram">
                        <AiOutlineInstagram size={30}
                        className="
                          cursor-pointer
                          hover:text-[#f6B519]
                          ease-in-out
                          duration-300
                        "
                        />
                    </Link>
                    <Link href="/facebook">
                        <AiOutlineFacebook size={30}
                        className="
                          cursor-pointer
                          hover:text-[#f6B519]
                          ease-in-out
                          duration-300
                        "
                        />
                    </Link>
                </div>
                </div>
                {/* Mobile Menu Links  */}
            </div>
        </nav>
    </header>
  )
}

export default Navbar