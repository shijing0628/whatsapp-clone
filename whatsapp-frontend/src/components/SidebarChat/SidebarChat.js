import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'



function SidebarChat() {
 return (
  <div className="sidebarChat">
   <Avatar src="https://images.clipartlogo.com/files/istock/previews/1006/100605257-ute-vector-girl-avatar-icon.jpg" />
   <div className="sidebarChat__info">
    <h2>Room Name</h2>
    <p>This is the last message</p>
   </div>
  </div>
 )
}

export default SidebarChat
