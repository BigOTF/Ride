import React from 'react'

import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiMessageFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-16 footerBackground mt-12 text-slate-200 flex flex-col'>

        <section className='px-20 flex justify-between gap-12'>
            <div className='flex flex-col gap-4 w-[20%]'>
                <p className='font-semibold text-xl'>About Us</p>
                <p className='text-sm text-slate-300'>Discover CRida's commitment to excellence and learn more about our mission to redefine transportation services.</p>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='font-semibold text-xl'>Quick Links</p>
                <ul className='flex flex-col gap-2'>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>About Us</li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>Services</li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>FAQ</li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>Terms and Condition</li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>Privacy Policy</li>
                </ul>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='font-semibold text-xl'>Rental Cars</p>
                <ul className='flex flex-col gap-2'>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>Saloon</li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>Suv</li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>Mini bus</li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300'>Large car</li>
                </ul>
            </div>

            <div className='flex flex-col gap-4 w-[30%]'>
                <p className='font-semibold text-xl'>Contact us</p>
                <ul className='flex flex-col gap-2'>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300 flex items-center gap-3'>
                        <FaPhone className='text-slate-300'/>
                        <p>+234 825470000</p>
                    </li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300 flex items-center gap-3'>
                        <FaLocationDot className='text-slate-300'/>
                        <p>No 84. Kwame Nkurumah Crescent, Asoroko Abuja</p>
                    </li>
                    <li className='text-sm cursor-pointer hover:text-slate-100 transition-all duration-500 text-slate-300 flex items-center gap-3'>
                        <RiMessageFill className='text-slate-300'/>
                        <p>reservation@gmail.com</p>
                    </li>
                </ul>
            </div>

        </section>

        <section className='px-20 flex flex-col gap-4 mt-10'>
            <p className='font-semibold text-xl'>Follow Us</p>

            <div className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-3xl footerLogo flex items-center justify-center cursor-pointer'>
                    <FaFacebookSquare className='text-blue-600 '/>
                </div>
                <div className='w-7 h-7 rounded-3xl footerLogo flex items-center justify-center cursor-pointer'>
                    <FaInstagram className='text-red-600'/>
                </div>
                <div className='w-7 h-7 rounded-3xl footerLogo flex items-center justify-center cursor-pointer'>
                    <FaYoutube className='text-red-600'/>
                </div>
                <div className='w-7 h-7 rounded-3xl footerLogo flex items-center justify-center cursor-pointer'>
                    <FaLinkedin className='text-blue-600'/>
                </div>
            </div>
           
        </section>

        <div className='border border-slate-700 mt-14'></div>

        <p className='px-20 text-slate-300 text-sm mt-5'>Copyright 2023, crida@gmail.com. All right reserved</p>
    </footer>
  )
}

export default Footer