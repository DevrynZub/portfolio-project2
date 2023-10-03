import React from "react";

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import CSharp from '../assets/csharp.png';
const Skills = () => {
    0
    return (
        <div id='skills' className='w-full h-screen text-black bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl mx-auto font-bold text-center'>Skills</p>
                    <p className='py-4 text-center'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={Mongo} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    {/* <div className='text-white bg-slate-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-3' src={CSharp} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Skills;