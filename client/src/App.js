import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path='*'element={<Errorpage/>}/>
    </Routes>
    
    </>
  )
}

export default App

