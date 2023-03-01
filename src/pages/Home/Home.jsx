import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css'

export default function Home() {

  const navigate = useNavigate();

  return (
    <section className='home_container'>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </section>
  )
}
