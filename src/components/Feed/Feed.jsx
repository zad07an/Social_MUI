import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Avatar, Checkbox } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import './Feed.css'
import PostMenu from '../PostMenu/PostMenu';
import PostBox from '../PostBox/PostBox';
import AddPost from '../AddPost/AddPost';

export default function Feed() {
  return (
    <section className='feed_container'>
      <AddPost/>
      <PostBox/>
      <PostBox/>
      <PostBox/>
      <PostBox/>
    </section>
  )
}
