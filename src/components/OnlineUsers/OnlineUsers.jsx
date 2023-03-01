import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

export default function OnlineUsers() {
  return (
    <Box marginBottom='20px'>
      <Typography variant='h6' fontWeight='300'>Online Friends</Typography>
      <AvatarGroup max={7} sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </Box>
  )
}
