import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react';
import { useState,useEffect } from 'react';
// import  from 'redux-persist/es/storage/getStorage';
import {ref,uploadBytesResumable,getStorage,getDownloadURL} from 'firebase/storage'
import { app } from '../firebase';

function profile() {
  const {curUser} = useSelector((state)=>state.user);
  const fileRef = useRef(null);
  const [file,setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError,setFileErrorUpload] = useState(false);
  const [formData,SetFormData] = useState({});
  console.log(curUser);
  console.log(filePerc);

  console.log(file);
  console.log(formData);
  console.log(new Date().getTime());


  
  //Firebase storage
  // allow read;
  //     allow write: if 
  //     request.resource.size < 2*1024*1024 && 
  //     request.resource.contentType.matches('image/.*')
  useEffect(()=>{
    if(file) {
      handleFileUpload(file);
    }
  },[file])

  const handleFileUpload = (file)=>{
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage,fileName);
    const uploadTask = uploadBytesResumable(storageRef,file);

    uploadTask.on(
      'state_changed',(snapshot)=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log('Upload is '+progress+'% done');
        setFilePerc(Math.round(progress));
        // console.log(filePerc);

      },
      (error)=>{
        setFileErrorUpload(true);
      },
      ()=> {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          SetFormData({...formData,avatar:downloadURL});
        })
      }

    );
  }

  return (
    <div className='p-3 max-w-xl mx-auto'>

      <h2 className='text-4xl font-semibold text-center my-7 '>Profile</h2>
      <form className='flex flex-col justify-center gap-6' action="">
      <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref = {fileRef} hidden accept='image/*' />
      <img src={formData.avatar ||curUser.avatar} alt="" className='w-28 h-28  rounded-full mx-auto my-10 ' onClick={()=>{fileRef.current.click();console.log(fileRef);}} />
      <p className='self-center'>
        
        
          {fileUploadError? (
            <span className='self-center text-red-500'>Error image Upload</span>
          ): filePerc>0 && filePerc<100 ? (
            <span className='text-green-400'> Uploading {filePerc}% </span>
          ): filePerc===100 ? (
            <span className='self-center text-green-400'>Image Successfully Updated</span>
          ):('')
        }
        
        
      </p>
      <input type="text" placeholder='username' className=' text-2xl py-2 px-2' />
      <input type="text" placeholder='email' className=' text-2xl py-2 px-2 ' />
      <input type="password" placeholder='password' className='text-2xl py-2 px-2' />
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
