import React from 'react'
import Image from 'next/image'

import carHero from '@/public/carSalesBack.png'
import { BsFillPersonFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa6";
import { IoIosSnow } from "react-icons/io";
import { TbAutomaticGearbox } from "react-icons/tb";

import { carRentals } from '@/data/Rentals'

const rentals = () => {

  const CarRentalsSections = () => {
    return (
      carRentals.map((data) => {
        return (
          <div key={data.id} className='bg-slate-100 shadow w-[23%]'>
            <div>
              <Image src={data.image} alt='cars'/>
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
      <section>
        <Image src={carHero} alt='carRentals'/>
      </section>

      <section className='flex items-center justify-between bg-white mx-20 px-5 py-3 translate-y-[-25px]'>
        <p className='font-semibold text-black'>Sort By</p>

        <div className='flex items-center gap-3'>
          <div className='border-r border-gray-500 h-4'></div>
          <select>
            <option>Price</option>
            <option>Value</option>
          </select>
          <div>
            <button className='bg-purple-700 hover:bg-purple-900 text-slate-200 transform transition-all duration-500 px-5 py-1 rounded'>Search</button>
          </div>
        </div>

        
      </section>

      <section className='px-20'>
        <div className='mt-10 flex flex-wrap gap-7'>
          <CarRentalsSections />
        </div>
        
      </section>
    
    </main>
  )
}

export default rentals