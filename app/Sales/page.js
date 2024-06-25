'use client'
import React, { useState } from 'react'
import { CarOptions } from '@/data/CarOptions';
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';

const sales = () => {
  const [searchModel, setSearchModel] = useState('');

  const CarOptionsSection = () => {
    return (
      CarOptions.map((data) => {
        return (
          <div key={data.id} className='flex flex-col items-center gap-2'>
            <Image src={data.image} alt='carOptionsImages' />
            <p>{data.name}</p>
          </div>
        )
      })
    )
  }

  return (
    <main>

      <section className='salesBackground'>
        <div className='flex flex-col items-center justify-center py-60 gap-5'>
          <p className='font-semibold text-slate-100 text-3xl tracking-wider'>Find The Car Of Your Choice</p>

          <div className='border px-3 py-3 border-slate-300 w-[900px] flex justify-between'>

            <div className='flex items-center gap-2'>
              <CiSearch className='text-slate-300 text-xl'/>
              <input className='rentalsHero px-3 py-1 text-slate-200 text-xl'
                type='text'
                value={searchModel}
                onChange={(e) => setSearchModel(e.target.value)}
                placeholder='Find car by model, year'
              />
            </div>

            <div>
              <button className='bg-purple-700 hover:bg-purple-900 transform transition-all duration-500 text-slate-200 px-5 py-2 rounded'>Search</button>
            </div>

          </div>
        </div>
      </section>

      <section className='flex items-center gap-6 px-20'>
        <CarOptionsSection />
      </section>

      <section className='px-20 my-10 flex items-center gap-6'>
        <select className='selectDiv w-[180px] py-1 border border-gray-500'>
          <option>Price</option>
        </select>
        <select className='selectDiv w-[180px] py-1 border border-gray-500'>
          <option>Body type</option>
        </select>
        <select className='selectDiv w-[180px] py-1 border border-gray-500'>
          <option>Model</option>
        </select>
        <select className='selectDiv w-[180px] py-1 border border-gray-500'>
          <option>Condition</option>
        </select>
        <select className='selectDiv w-[180px] py-1 border border-gray-500'>
          <option>Fuel type</option>
        </select>

        <div>
          <button className='w-[180px] py-1 bg-purple-400 hover:bg-purple-800 transition-all duration-500 hover:text-slate-200 font-semibold rounded'>Clear Filters</button>
        </div>
      </section>
    </main>
  )
}

export default sales