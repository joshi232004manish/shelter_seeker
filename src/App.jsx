import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import from Home from "./pages/home";
import from About  from "./pages/about";
import from Profile from "./pages/profile";
import from SignIn from "./pages/signin"  ;
import from SignUp from "./pages/signup";










export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
