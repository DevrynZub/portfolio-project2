import React from 'react'

const ProjectItem = ({ img, title, work, sourceCode, liveDemoUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-red-400'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-black tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-black text-center'>{work}</p>
        <div className='flex flex-row'>
          <a className='p-3' href={liveDemoUrl}>
            <p className='text-center p-3 rounded-lg bg-black text-red-200 font-bold cursor-pointer text-sm'>Live Demo</p>
          </a>
          <a className='p-3' href={sourceCode}>
            <p className='text-center p-3 rounded-lg bg-black text-red-200 font-bold cursor-pointer text-sm'>Code</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
