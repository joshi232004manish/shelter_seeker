import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/header';
import Home from "./pages/home";
import About  from "./pages/about";
import  Profile from "./pages/profile";
import  SignIn from "./pages/signin"  ;
import  SignUp from "./pages/signup";










export default function App() {
  return (
    <BrowserRouter>
    <Header/>
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
