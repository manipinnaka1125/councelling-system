import './App.css';
import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Appointment from './components/Appointment';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Sucess1 from './components/Sucess1';
import Contact from './components/Contact';
import About from './components/About';
import FetchRegistration from './components/Fetchregistrations';
import Fetchdata from './components/Fetchdata';
import Homepage from './components/Homepage';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>
      <Routes>
      <Route path='/' element={<Home/>} exact/>
        <Route path='/home' element={<Home/>} exact/>
        <Route path='/Fetchdata' element={<Fetchdata/>} exact/>
        <Route path='/fetchregistration' element={<FetchRegistration/>} exact/>
        <Route path='/signup' element={<Signup/>} exact/>
        <Route path='/signin' element={<Signin/>} exact/>
        <Route path='/appointment' element={<Appointment/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>
        <Route path='/about' element={<About/>}exact/>
        <Route path='/Sucess1' element={<Sucess1/>}exact/>
        <Route path='/datafetch' element={<FetchRegistration/>}exact/>
        <Route path='/Homepage'element={<Homepage/>}exact/>
      </Routes>
    </main>
    <footer>

    </footer>

  </React.Fragment>
}

export default App;