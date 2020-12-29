import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'



function SidebarChat({ roomTitle, romeMsg }) {
 return (
  <div className="sidebarChat">
   <Avatar src="https://images.clipartlogo.com/files/istock/previews/1006/100605257-ute-vector-girl-avatar-icon.jpg" />
   <div className="sidebarChat__info">
    <h2>{roomTitle}</h2>
    <p>{romeMsg}</p>
   </div>
  </div>
 )
}

export default SidebarChat
