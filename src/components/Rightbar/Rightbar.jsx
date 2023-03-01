import { Box } from '@mui/material'
import React from 'react'
import LastConversation from '../LastConversation/LastConversation'
import LatestPosts from '../LatestPosts/LatestPosts'
import OnlineUsers from '../OnlineUsers/OnlineUsers'
import './Rightbar.css'

export default function Rightbar() {
  return (
    <aside className='rightbar_container'>
      <Box position='fixed' paddingTop='20px' paddingLeft='20px'>
        <OnlineUsers/>
        <LatestPosts/>
        <LastConversation/>
      </Box>
    </aside>
  )
}
