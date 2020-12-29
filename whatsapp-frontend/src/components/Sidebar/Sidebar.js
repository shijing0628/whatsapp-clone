import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from '../SidebarChat/SidebarChat';




function Sidebar() {
 return (
  <div className="sidebar">
   <div className="sidebar__header">
    <Avatar src="https://i.pinimg.com/originals/76/b3/51/76b351ffa72d83d305a255f0f7b80508.png" />
    <div className="sidebar__headerRight">
     <IconButton>
      <DonutLargeIcon />
     </IconButton>
     <IconButton>
      <ChatIcon />
     </IconButton>
     <IconButton>
      <MoreVertIcon />
     </IconButton>

    </div>
   </div>
   <div className="sidebar__search">
    <div className="sidebar__searchContainer">
     <SearchOutlined />
     <input type="text" placeholder="Search or start a new chat" />
    </div>
   </div>
   <div className="sidebar__chats">
    <SidebarChat />
    <SidebarChat />
    <SidebarChat />
   </div>
  </div>
 )
}

export default Sidebar
