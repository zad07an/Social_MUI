import { Avatar, Button, ButtonGroup, Divider, TextField } from '@mui/material'
import { Box } from '@mui/system'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import React from 'react'

export default function AddPost() {
  return (
    <Box sx={{width: '90%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px'}} boxShadow='0 4px 10px #ccc' border='1px solid #ccc' padding='30px 15px' borderRadius='10px'>
      <Box sx={{width: '100%', display: "flex", justifyContent: 'flex-start', alignItems: 'center', gap: '10px'}}>
        <Avatar src='https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <TextField id="standard-basic" label="What's on your mind?" variant="standard" sx={{width: '100%'}} />
      </Box>
      <Divider />
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <Button variant='text' startIcon={<VideoCameraBackIcon color='error'/>}>Live video</Button>
        <Button variant='text' startIcon={<AddPhotoAlternateIcon color='success'/>}>Photo/video</Button>
        <Button variant='text' startIcon={<AddReactionIcon color='warning'/>}>Feeling/activity</Button>
      </div>
    </Box>
  )
}
