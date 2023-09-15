import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-red-500'>Contact</h1>
      <form action="https://getform.io/f/951a4d1c-1e71-4ebb-a9d0-a23414e206ba" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-black' type="text" name='name' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 flex border-black' type="text" name='phone' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input className='border-2 rounded-lg p-3 flex border-black' type="email" name='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-black' type="text" name='subject' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea className='border-2 rounded-lg p-3 border-black' name="message" rows='10'></textarea>
        </div>
        <button className='bg-red-400 text-black mt-4 w-full p-4 rounded-md'>Send</button>
      </form>

    </div>
  )
}

export default Contact
