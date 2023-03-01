import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import UseScrollToTop from '../hooks/UseScrollToTop'

export default function Layouts() {
  return (
    <>
      <UseScrollToTop/>
      <Navbar/>
      <Outlet/>
    </>
  )
}
