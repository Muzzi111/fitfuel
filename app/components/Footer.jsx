import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiYoutube } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <main className='min-h-[70vh] bg-gray-800  gap-30 flex justify-items-center py-20 relative '>
            <div className='block gap-0 px-40'>
                <Link href={"/"} className='flex items-center '>
                    <Image
                        src="/fitgear logo.jpeg"
                        alt="FitFuel Logo"
                        width={100}
                        height={100}
                        className='w-20 h-20'

                    />
                    <p className='text-gray-400 text-4xl font-bold'>FITFUEL</p>
                </Link>
                <p className='text-gray-400 font-thin text-sm px-20'>WORKOUT COMPLETE</p>

            </div>
            <div className='grid grid-cols-4 gap-8'>
                <div className='flex flex-col gap-3 '>
                    <p className='uppercase text-gray-300 text-sm font-bold'>Workouts</p>
                    <p className='uppercase text-gray-300 text-sm'>Workout Videos</p>
                    <p className='uppercase text-gray-300 text-sm'>Custom Workouts</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>Programs</p>
                    <p className='uppercase text-gray-300 text-sm'>Workout Programs</p>
                    <p className='uppercase text-gray-300 text-sm'>MEAL PLANS</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>ROUTINE</p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <p className='uppercase text-gray-300 text-sm font-bold'>Healthy Living</p>
                    <p className='uppercase text-gray-300 text-sm'>Fitness</p>
                    <p className='uppercase text-gray-300 text-sm'>Health</p>
                    <p className='uppercase text-gray-300 text-sm'>Nutrition</p>
                    <p className='uppercase text-gray-300 text-sm'>Healthy Recipes</p>
                    <p className='uppercase text-gray-300 text-sm'>Experts</p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <p className='uppercase text-gray-300 text-sm font-bold'>About</p>
                    <p className='uppercase text-gray-300 text-sm'>Careers</p>
                    <p className='uppercase text-gray-300 text-sm'>Health</p>
                    <p className='uppercase text-gray-300 text-sm'>Tutorials</p>
                    <p className='uppercase text-gray-300 text-sm'>Our Team</p>
                    <p className='uppercase text-gray-300 text-sm'>B2B Options</p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <p className='uppercase text-gray-300 text-sm font-bold'>Membership</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>FB Plus</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>Community</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>Referral Program</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>Blog</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>Contact Us</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>faqs</p>
                    <p className='uppercase text-gray-300 text-sm font-bold'>store</p>
                </div>
            </div>
            <div className=' py-10 shadow-lg shadow-white w-fit text-gray-300 absolute
                 bottom-0 left-0 right-0 flex space-x-100 px-40 items-center'>
                <div className='flex items-center gap-5'>

                    <p className='text-sm text-gray-500'>Copyright © 2025 Fitfuel. All rights reserved. </p>
                    <p className='text-gray-400'>Terms of Use</p>
                    <p className='text-gray-400'>Privacy Policy</p>
                </div>
                <div className='flex items-center gap-5 text-xl '>
                    <FiYoutube className='hover:text-gray-500 transition-colour duration-300' />
                    <FaPinterest className='hover:text-gray-500 transition-colour duration-300' />
                    <FaFacebook className='hover:text-gray-500 transition-colour duration-300' />
                    <FaInstagram className='hover:text-gray-500 transition-colour duration-300' />
                    <FaXTwitter className='hover:text-gray-500 transition-colour duration-300' />

                </div>
            </div>
        </main>
    )
}

export default Footer