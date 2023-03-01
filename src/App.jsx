import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layouts from './layouts/Layouts';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<Layouts/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}
