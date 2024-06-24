import React from 'react'
import { Faqs } from '@/data/FAQ'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from 'react-icons/fa'

const FAQs = () => {

    const FaqDataSection = () => {
        return (
          Faqs.map((data) => {
            return (
              <div key={data.id} className='flex items-center justify-between border-b border-black px-3 py-3'>
                <div className='flex flex-col gap-2'>
                  <p>{data.question}</p>
                </div>
                <div>
                  <FaAngleDown className='cursor-pointer'/>
                </div>
               
              </div>
            )
          })
        )
    }

  return (
    <section className='px-20 flex flex-col gap-10 my-20'>
        <p className='text-2xl font-semibold text-black text-center'>Frequently Asked Questions</p>

        <div>
        <FaqDataSection />
        </div>
  </section>
  )
}

export default FAQs