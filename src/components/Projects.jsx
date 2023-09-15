import React from 'react';
import ProjectItem from './ProjectItem.jsx';
// @ts-ignore
import allSpiceImg from "../assets/AllSpiceProject.jpg";
// @ts-ignore
import dndCapstoneImg from '../assets/DnDCapstone.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima molestias dicta facere nostrum! Enim aut, tempora sint reprehenderit fugit doloremque sapiente perspiciatis laudantium temporibus.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={allSpiceImg} title='AllSpice App' work='Vue/C#/SQL' liveDemoUrl='' sourceCode='https://github.com/DevrynZub/ALLSPICE_Checkpoint' />
        <ProjectItem img={dndCapstoneImg} title='DnDCapstone App' work='Vue/Node.js' liveDemoUrl='' sourceCode='https://github.com/DevrynZub/devs_and_dragons-Developer' />
        {/* <ProjectItem img={allSpiceImg} title='AllSpice App' work='Vue/C#/SQL' liveDemoUrl='' sourceCode='' /> */}
        {/* <ProjectItem img={dndCapstoneImg} title='DnDCapstone App' work='Vue/C#/SQL' liveDemoUrl='' sourceCode='' /> */}
      </div>
    </div>
  )
}

export default Projects
