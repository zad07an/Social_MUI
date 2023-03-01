import { Group, Home, Settings } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Box } from '@mui/system'
import React from 'react'

export default function SidebarList() {
  return (
    <Box width='100%' paddingLeft='40px'>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary='Homepage'/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <ArticleOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary='Pages'/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary='Groups'/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <StorefrontOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary='Marketplace'/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <PermIdentityOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary='Friends'/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary='Settings'/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary='Profile'/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
