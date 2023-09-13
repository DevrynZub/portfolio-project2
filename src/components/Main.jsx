import React from "react"
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left' src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div>
          <h1>Welcome</h1>
          <h2>I'm Devryn Zub</h2>
          <h3>I'm a
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
              repeat={Infinity}
            />
          </h3>
          <div>
            <a href="https://www.linkedin.com/in/devryn-zub-41164a194/">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/DevrynZub">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Main
