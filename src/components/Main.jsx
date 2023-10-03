import React from "react"
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left' src="https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" alt="/" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl  pb-3 font-bold text-grey-800'>Welcome</h1>
          <h2 className='sm:text-4xl text-3xl text-grey-800'>I'm Devryn Zub</h2>
          <h3 className='flex sm:text-2xl text-1xl pt-4 text-grey-800'>I'm a
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Creator',
                2000,
                'Student',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
              repeat={Infinity} />
          </h3>
          <div className='flex justify-between pt-5 max-w-[100px] w-full'>
            <a href="https://www.linkedin.com/in/devryn-zub-41164a194/" aria-label='Go To LinkedIn'>
              <FaLinkedinIn className="cursor-pointer" size={30} />
            </a>
            <a href="https://github.com/DevrynZub" aria-label='Go To Github'>
              <FaGithub className="cursor-pointer" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Main
