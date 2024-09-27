import React from 'react'
import {Link} from 'react-router-dom'

function signup() {
  return (
    <div className='p-3 max-w-xl mx-auto'>
    <h2 className='text-4xl text-center p-5 m-3 '>Sign In</h2>
    <div >
    <form action="" className='flex flex-col gap-5'>
      <input type="text" placeholder='username' id='username' className='border py-3 px-2 rounded-xl text-xl' />
      <input type="email" placeholder='Email' id='username' className='border py-3 px-2 rounded-xl text-xl' />
      <input type="password" placeholder='Password' id='username' className='border py-3 rounded-xl px-2 text-xl' />
      <button className='bg-slate-700 text-white uppercase py-4 rounded-xl text-xl hover:opacity-85'>Sign in</button>
      <button className='bg-red-700 text-white uppercase py-4 rounded-xl text-xl hover:opacity-85'>Continue With Google</button>
    </form>
    <div className='flex gap-3'>
      <p>Don't Have an Account ?</p>
      <Link to={"/signin"}>
      <span className='text-blue-700'>Sign In</span>
      </Link>
      
    </div>
    </div>

  </div>
  )
}

export default signup
