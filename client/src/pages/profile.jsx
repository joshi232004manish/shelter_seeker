import React from 'react'
import { useSelector } from 'react-redux'

function profile() {
  const {curUser} = useSelector((state)=>state.user);
  console.log(curUser);

  return (
    <div className='p-3 max-w-xl mx-auto'>

      <h2 className='text-4xl font-semibold text-center my-7 '>Profile</h2>
      <form className='flex flex-col justify-center gap-6' action="">
      <img src={curUser.avatar} alt="" className='w-28 h-28  rounded-full mx-auto my-10 ' />
      <input type="text" placeholder='username' className=' text-2xl py-2 px-2' />
      <input type="text" placeholder='email' className=' text-2xl py-2 px-2 ' />
      <input type="password" placeholder='password' className='text-2xl py-2' />
      <button className='text-2xl bg-slate-700 text-white  py-2 px-2 ' >Update</button>
      <button className='text-2xl bg-green-400 px-2' >Create Listings</button>
      <ul className='flex justify-between'>
      <li><a href="">Delete Account</a></li>
      <li><a href="">Sign Out</a></li>
      </ul>
      <span className='mx-auto'>Show Listings</span>
      
      </form>
    </div>
  )
}

export default profile
