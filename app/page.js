import React from 'react'
import Image from 'next/image'
import carImage from '@/public/herocar.png'
import hero3 from '@/public/hero3.png'
import hero4 from '@/public/hero4.png'

import { IoMdClock } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiFlexibleStar } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiSeatbeltFill } from "react-icons/pi";

const Home = () => {
  return (
    <main className=''>

      <section className='flex'>
        <div className='heroImage w-[45%]'>
          <div className='heroImage2 flex flex-col justify-center px-10 gap-4'>
            <div className='flex items-center gap-2'>
              <div className='w-12 h-[2px] bg-purple-700'></div>
              <h3 className='text-slate-100 text-xl uppercase'>Enjoy Your Ride</h3>
            </div>
          
            <h2 className='text-slate-100 text-5xl leading-[65px]'>Feel The Difference With CRida Rentals</h2>

            <div className='flex items-center gap-3'>
              <div className='w-[2px] h-12 bg-purple-700'></div>
              <p className='text-gray-500 flex-wrap'>Safety measures for all trips in order to better protect our customers and our bus partners, We have implemented new measures in line with the guidelines from NCDC</p>
            </div>
          
          </div>
        </div>

        <div className=''>
          <Image src={carImage}/>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='flex w-[800px] py-5 justify-between px-16 shadow-lg transform translate-y-[-30px] bg-white'>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-gray-950 text-xl'>150+</p>
            <p className='text-gray-500 text-sm'>Cars</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-gray-950 text-xl'>1000+</p>
            <p className='text-gray-500 text-sm'>Happy Clients</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-gray-950 text-xl'>5</p>
            <p className='text-gray-500 text-sm'>Branches</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-gray-950 text-xl'>50+</p>
            <p className='text-gray-500 text-sm'>Professional Drivers</p>
          </div>
        </div>
      </section>
     

      <section className='mt-10 px-12 grid grid-cols-2 items-center'>
        <div>
          <Image src={hero3} />
        </div>

        <div className='flex flex-col gap-2'>

          <div className='flex items-center gap-2'>
            <div className='w-12 h-[2px] bg-orange-700'></div>
            <p className='text-orange-700 text-xl'>Who We Are</p>
          </div>

          <p className='text-gray-500 text-[1rem] leading-5'>
            CRida is your reliable transportation partner, dedicated to ensuring safe and comfortable journeys. We create value by being proactive in maintaining quality fleet at reduced costs in order to provide efficient services by making sure we are at your service when needed. Meet our team and discover our commitment to excellence.
          </p>

          <div>
            <button className='bg-purple-700 text-slate-100 hover:bg-purple-900 transition-all duration-500 px-3 py-2 rounded'>More About Us</button>
          </div>

        </div>

        <div>

        </div>
      </section>

      <section className='mt-10 px-12 grid grid-cols-2 items-center'>

        <div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <div className='w-12 h-[2px] bg-orange-700'></div>
              <p className='text-orange-700 text-xl'>Why Choose Us</p>
            </div>

            <p>Choose CRida for unbeatable convenience, reliablility and affordability. Experience top-notch service with every ride.</p>

            <div>
              <Image src={hero4} />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2'>

          <div>
            <IoMdClock />
            <p className=''>24/7 Support</p>
          </div>

        </div>

      </section>
    
    </main>
  )
}

export default Home