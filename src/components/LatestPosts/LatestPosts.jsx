import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

export default function LatestPosts() {
  return (
    <Box marginBottom='20px'>
      <Box>
        <Typography variant='h6' fontWeight='300'>Latest Posts</Typography>
      </Box>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src='https://images.pexels.com/photos/12238219/pexels-photo-12238219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </ImageListItem>
        <ImageListItem>
          <img src='https://images.pexels.com/photos/5758466/pexels-photo-5758466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </ImageListItem>
        <ImageListItem>
          <img src='https://images.pexels.com/photos/15577037/pexels-photo-15577037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </ImageListItem>
      </ImageList>
    </Box>
  )
}
