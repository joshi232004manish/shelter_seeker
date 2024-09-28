import React from 'react'

function header() {
  return (
    <header>
    <div className='flex justify-evenly bg-slate-200  p-5 '>
      <div>
        <h2><span className='text-4xl text-green-400 font-extrabold'>Shelter</span><span className='text-4xl text-blue-400 font-extrabold'>Seeker</span></h2>
      </div>
      <div>
        <input type="text" placeholder='Search' className='p-3 rounded-lg text-2xl' />
      </div>
      <div className='flex gap-20 list-none align-middle '>
        <li className='self-center hidden sm:inline  hover:underline'><a href="/" className='text-xl hover:underline-0'>Home</a></li>
        <li className='self-center hidden sm:inline  hover:underline'><a href="/about" className='text-xl'>About</a></li>
        <li className='self-center hidden sm:inline  hover:underline'><a href="/profile" className='text-xl'>Profile</a></li>
      </div>
    </div>
    </header>
  )
}

export default header
