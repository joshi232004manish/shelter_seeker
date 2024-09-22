import React from 'react'

function header() {
  return (
    <header>
    <div className='flex justify-evenly bg-slate-200  p-3 '>
      <div>
        <h2>ShelterSeeker</h2>
      </div>
      <div>
        <input type="text" placeholder='Search' />
      </div>
      <div className='flex gap-4'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/profile">Profile</a></li>
      </div>
    </div>
    </header>
  )
}

export default header
