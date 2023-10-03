import React from 'react'
import WorkItem from './WorkItem.jsx'

const data = [
  {
    year: '7.2021 to 2.2023',
    company: 'OpSec Security',
    title: 'Brand Security Analyst',
    details: 'Performed quality analysis and identified trends to ensure data integrity for the client. Used multiple technologies to determine the best course of action for the clients needs. Tracked key metrics and applied them in reports to the client with infractions and violations.'
  },

  {
    year: '8.2019 to 7.2021',
    company: 'Best Buy',
    title: 'SWAT/Inventory Specialist',
    details: 'Checked internal supply and stock each day to insure flow of deliveries and to verify theft. Completed weekly and monthly reports on stock counts and theft to update truck schedules. Completed and led a yearly audit of the entire store to determine the upcoming yearly budget.'
  },

  {
    year: '10.2019 to 7.2021',
    company: 'Geek Squad',
    title: 'Cadet',
    details: 'Worked in customers homes to perform services at clients requests. Cadets were supports for Repair Agents and were in charge of keeping areas clean and taking on projects that would allow the repair agent to make sales and educate the customers. Worked on a very strict timeline of getting work completed as there were multiple jobs scheduled a day.'
  },

  {
    year: '10.2013 to 8.2018',
    company: 'Geek Squad/Best Buy',
    title: 'Repair Agent',
    details: ' Worked directly with clients to educate on technical issues and educated them on upcoming changes. Repaired computers and cleaned up software and infections. Updated software and installed new software as per client requests. Repaired and replaced hardware in laptops and desktops. Adheres to safety protocols and policies to reduce workplace hazards.'
  }
]
const Work = () => {
  return (
    <div className='bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500'>
      <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center mb-6 text-black '>Work</h1>
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            // @ts-ignore
            year={item.year}
            company={item.company}
            title={item.title}
            details={item.details} />
        ))}
      </div>
    </div>
  )
}

export default Work
