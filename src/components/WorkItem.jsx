import React from 'react'

const WorkItem = ({ year, company, title, details }) => {
  return (
    <div>
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border-white' />
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-black rounded-md'>{year}</span>
            <span className='text-lg font-semibold text-black'>{company}</span>
            <span className='my-1 text-sm font-normal leading-none text-black'>{title}</span>
          </p>
          <p className='my-2 text-base font-normal text-black'>{details}</p>
        </li>
      </ol>
    </div>
  )
}

export default WorkItem
