"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import carImage from '@/public/herocar.png'
import hero3 from '@/public/hero3.png'
import hero4 from '@/public/hero4.png'
import mail from '@/public/mail.svg'

import { exploreData } from '@/data/Explore'

import { IoMdClock } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiFlexibleStar } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiSeatbeltFill } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa6";
import { IoIosSnow } from "react-icons/io";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";


const Home = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")

const ExploreDataSection = () => {
  return (
    exploreData.map((data) => {
      return (
        <div key={data.id} className='bg-slate-100 shadow w-[32.2%]'>
          <div>
            <Image src={data.image}/>
          </div>
          <div className='px-3 py-4 flex flex-col gap-2'>
            <p className='text-xl font-semibold text-black'>{data.name}</p>
            <p className='text-black'>{data.price}</p>
            <div className='flex items-center gap-3'>
              <div>
                <BsFillPersonFill className='text-purple-700'/>
                <p className='text-sm text-gray-500'>{data.seat}</p>
              </div>
              <div>
                <FaToolbox className='text-purple-700'/>
                <p className='text-sm text-gray-500'>{data.package}</p>
              </div>
              <div>
                <IoIosSnow className='text-purple-700'/>
                <p className='text-sm text-gray-500'>{data.air}</p>
              </div>
              <div>
                <TbAutomaticGearbox className='text-purple-700'/>
                <p className='text-sm text-gray-500'>{data.tire}</p>
              </div>
            </div>
            <div className='py-8'>
              <button className='bg-purple-700 text-slate-100 px-8 py-3 rounded-lg hover:bg-purple-800 transform transition-all duration-500'>Book Now</button>
            </div>
          </div>
        </div>
      )
    })
)}

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
     

      <section className='mt-10 px-20 grid grid-cols-2 items-center'>
        <div>
          <Image src={hero3} />
        </div>

        <div className='flex flex-col gap-2'>

          <div className='flex items-center gap-2'>
            <div className='w-12 h-[2px] bg-orange-700'></div>
            <p className='text-orange-700 text-2xl'>Who We Are</p>
          </div>

          <p className='text-gray-500 text-[1rem] leading-6'>
            CRida is your reliable transportation partner, dedicated to ensuring safe and comfortable journeys. We create value by being proactive in maintaining quality fleet at reduced costs in order to provide efficient services by making sure we are at your service when needed. Meet our team and discover our commitment to excellence.
          </p>

          <div>
            <button onClick={() => router.push('/About')} className='bg-purple-700 text-slate-100 hover:bg-purple-900 transition-all duration-500 px-3 py-2 rounded'>More About Us</button>
          </div>

        </div>

        <div>

        </div>
      </section>

      <section className='mt-20 flex gap-12 items-center'>

        <div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2 pl-28'>
              <div className='flex items-center gap-2'>
                <div className='w-12 h-[2px] bg-orange-700'></div>
                <p className='text-orange-700 text-2xl'>Why Choose Us</p>
              </div>
              
              <p className='text-gray-500 text-[1rem] leading-6'>Choose CRida for unbeatable convenience, reliablility and affordability. Experience top-notch service with every ride.</p>
            </div>
           

            <div>
              <Image src={hero4} />
            </div>
          </div>
        </div>

        <div className='pr-28 grid grid-cols-2 gap-4 items-center'>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <IoMdClock className='text-orange-700 text-xl'/>
              <p className='text-gray-950 font-semibold text-sm'>24/7 Support</p>
            </div>

            <p className='text-sm text-gray-600'>
              Our round-the-clock customer support team is here to help, anytime, anywhere.
            </p>
          </div>

         
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <FaHandHoldingUsd className='text-orange-700 text-xl'/>
              <p className='text-gray-950 font-semibold text-sm'>Affordable Pricing</p>
            </div>

            <p className='text-sm text-gray-600'>
              Enjoy competitive rates without compromising on quality. Get the best value for your money with CRida.
            </p>
          </div>

         
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <GiFlexibleStar className='text-orange-700 text-xl'/>
              <p className='text-gray-950 font-semibold text-sm'>Flexible</p>
            </div>

            <p className='text-sm text-gray-600'>
              Tailored solutions to suit your unique travel needs. Enjoy the flexibility you deserve. 
            </p>
          </div>

         
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <FaCalendarAlt className='text-orange-700 text-xl'/>
              <p className='text-gray-950 font-semibold text-sm'>Seamless Reservation</p>
            </div>

            <p className='text-sm text-gray-600'>
              Book your ride in seconds with our user-friendly platform. Enjoy a hassle-free booking experience with CRida.
            </p>
          </div>

         
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <IoShieldCheckmarkOutline className='text-orange-700 text-xl'/>
              <p className='text-gray-950 font-semibold text-sm'>Insurance</p>
            </div>

            <p className='text-sm text-gray-600'>
              Travel with confidence as all our vehicles are fully insured for your safety.
            </p>
          </div>

         
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <PiSeatbeltFill className='text-orange-700 text-xl'/>
              <p className='text-gray-950 font-semibold text-sm'>Clean and Safe Cars</p>
            </div>

            <p className='text-sm text-gray-600'>
              Hygienic and well-maintained vehicles ensure a safe and comfortable journey with CRida.
            </p>
          </div>

         

        </div>

      </section>

      <section>
        <div className='image5 h-[300px]'>
          <div className='imageBD5 flex flex-col items-center pt-16 gap-3'>

            <div className='flex items-center gap-2'>
              <div className='w-12 h-[2px] bg-orange-700'></div>
              <p className='text-orange-700 text-2xl'>Our Services</p>
            </div>

            <p className='text-gray-300 text-[1rem] leading-6 flex flex-col items-center'>
              Explore the diverse range of transportation <span>solutions offered by CRida</span> 
            </p>

          </div>
        </div>
      </section>

      <section className='flex gap-7 mx-52 translate-y-[-100px]'>
        <div className='bg-slate-100'>
          <p className='bg-purple-700 text-slate-100 py-2 text-center'>Car Rentals</p>
          <p className='px-3 pb-2 pt-5 text-gray-600 text-sm leading-[22px]'>Experience the freedom of exploring your destination at your own pace with CRida's car rental service. Choose from a variety of vehicles to suit your preferences and enjoy </p>
        </div>
        <div className='bg-slate-100'>
          <p className='bg-purple-700 text-slate-100 py-2 text-center'>Car Sales</p>
          <p className='px-3 pb-2 pt-5 text-gray-600 text-sm leading-[22px]'>Experience the freedom of exploring your destination at your own pace with CRida's car rental service. Choose from a variety of vehicles to suit your preferences and enjoy</p>
        </div>
        <div className='bg-slate-100'>
          <p className='bg-purple-700 text-slate-100 py-2 text-center'>Car Sharing</p>
          <p className='px-3 pb-2 pt-5 text-gray-600 text-sm leading-[22px]'>Planning a group trip or corporate event? CRida's bus rental service has you covered. From spacious coaches to comfortable mini busses, we provide reliable transportation</p>
        </div>
        <div className='bg-slate-100'>
          <p className='bg-purple-700 text-slate-100 py-2 text-center'>Ride Hailing</p>
          <p className='px-3 pb-2 pt-5 text-gray-600 text-sm leading-[22px]'>Take control of your travel itinerary with CRida's rent and self-drive options. Whether you're traveling for business or leisure, our fleet of well-maintained vehicles is available for</p>
        </div>
      </section>

      <section className='px-20 translate-y-[-30px]'>
        <div className='flex justify-between'>

          <div className='w-[30%] flex flex-col gap-2'>
            <p className='text-black font-semibold text-2xl'>Explore Our Vehicles</p>
            <p className='text-sm text-gray-700'>
              Discover your ideal ride with CRida's diverse fleet. From sleek sedans to spacious SUVs and luxurious vans. 
            </p>
          </div>

          <div className='mt-auto'>
            <button className='bg-purple-700 text-slate-100 hover:bg-purple-900 transform transition-all duration-500 px-7 py-3 rounded'>See All Cars</button>
          </div>

        </div>

        <div className='mt-10 flex flex-wrap gap-5'>
          <ExploreDataSection />
        </div>
       
      </section>

      <section className='exploreMain h-[520px]'>
        <div className='exploreBD'></div>
      </section>

      <section className='my-8 flex flex-col gap-4'>
        <div className='px-20 flex flex-col gap-1'>
          <p className='text-2xl font-semibold text-black underline tracking-wider'>CRida Services</p>
          <p className='text-2xl font-semibold text-black underline tracking-wider'>Available all over Abuja F.C.T Nigeria</p>
        </div>

        <p className='px-3 text-gray-600 text-sm w-[70%]'>Need a safe and convenient way to get around Abuja? Look no further than CRida Services! We offer a variety of transportation options to fit your needs, all across the Federal Capital Territory.</p>
       
      </section>

      <section className='mt-24 mb-10 mailColor mx-64 px-10'>
        <div className='flex justify-between pt-8'>
          <p className='text-black text-2xl font-semibold tracking-wide'>Subscribe for exclusive offers and deals&#x21;</p> 
          <div className='flex justify-end'>
            <Image src={mail}/>
          </div>
        </div>

        <div className='flex flex-col gap-3 pb-14'>
          <input className='w-full px-3 py-2 rounded mailColor border border-black'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'

          />
          <div>
            <button className='bg-purple-700 w-[100%] text-slate-100 py-3 rounded hover:bg-purple-900 transform transition-all duration-500'>
              Sign Me Up
            </button>
          </div>
        </div>
       
      </section>

      <section>
        <div>
          <p>Testimonial</p>
          <p>What Our Customers Are Saying</p>
          <p>Here are some of our customers saying about our services.</p>
        </div>
      </section>
    
    </main>
  )
}

export default Home