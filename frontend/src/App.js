import './App.css';
import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Appointment from './components/Appointment';
import Visitor from './components/Visitor';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Sucess from './components/Sucess';
import Contact from './components/Contact';
import About from './components/About';
import FetchRegistration from './components/Fetchregistrations';


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>
      <Routes>
      <Route path='/' element={<Home/>} exact/>
        <Route path='/home' element={<Home/>} exact/>
        <Route path='/add-visitor' element={<Visitor/>} exact/>
        <Route path='/fetchregistration' element={<FetchRegistration/>} exact/>
        <Route path='/signup' element={<Signup/>} exact/>
        <Route path='/signin' element={<Signin/>} exact/>
        <Route path='/appointment' element={<Appointment/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>
        <Route path='/about' element={<About/>}exact/>
        <Route path='/Sucess' element={<Sucess/>}exact/>
        <Route path='/datafetch' element={<FetchRegistration/>}exact/>
        
      </Routes>
    </main>
    <footer>

    </footer>

  </React.Fragment>
}

export default App;