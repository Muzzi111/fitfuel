"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";


const Nav = () => {

    const [navOpen, setNavOpen] = useState(false);

    const handleOpen = () => {
        setNavOpen(!navOpen);
    };

    const navItems = [
        { url: "/", label: "Workout" },
        { url: "/meal plan", label: "Meal plan" },
        { url: "/healthy living", label: "Healthy living" },
        { url: "/program", label: "Program" },
        { url: "/community", label: "Community" },
        { url: "/about", label: "About" },
        { url: "/store", label: "Store" },
        
    ];


    return (
        <nav className='bg-gray-100 h-30 flex items-center' >
            
            <Link href={"/"} className='flex items-center px-20 py-5'>
                <Image
                    src="/fitgear logo.jpeg"
                    alt="FitFuel Logo"
                    width={100}
                    height={100}
                    className='w-20 h-20'

                />
                <p className='text-blue-900 text-4xl font-bold'>Fit fuel</p>
            </Link>

            <div className='flex item-center gap-8 '>
                {
                    navItems.map((item, i) => (
                        <Link key={i}
                            href={item.url}
                            className='text-md hover:border-b-blue-500 hover:border-b-2 transition-colors duration-300 '>
                            {item.label}
                        </Link>
                    ))
                }
                <p className=' text-blue-600 text-lg hover:border-b-blue-500 hover:border-b-2 transition-colors duration-300 '>Membership</p>


            </div>
            <Link href={"#"} className=' gap-5 text-lg px-3 py-1 border border-blue-100 
                transition-colors deuration-300 ml-8 max-lg:ml-auto z-50'>
                    <p className='max-lg:hidden text-sm text-blue-300'>Hi sign In</p>
                    <div className='flex items-center gap-2  hover:border-b-blue-500 hover:border-b-4'>
                        <h1 className='text-sm '>MY FITNESS</h1>
                        <IoMdArrowDropdown />
                    </div>
                </Link>

                <div className='flex items-center gap-5 ml-5 mr-10 max-lg:mr-5'>
                <IoSearch  className='text-2xl hover:text-blue-500 '/>
                <BsCart4 className='text-2xl hover:text-blue-500 '/>
                </div>


        </nav>
    )
}

export default Nav