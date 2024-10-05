import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function header() {
  const currentUser = useSelector((state)=>state.user);
  console.log(currentUser)
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
        <li className='self-center hidden sm:inline  hover:underline'>
          <Link to='/profile'>
            {
              currentUser.curUser ? (
                <img className='rounded-full w-10 h-10 ' src={currentUser.curUser.avatar} alt="profile" />

              ):(
                <li className='text-xl'>Sign In</li>
              )
            }
          </Link>
          
        
        </li>
      </div>
    </div>
    </header>
  )
}

export default header
