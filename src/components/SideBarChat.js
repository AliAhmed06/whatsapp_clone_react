import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SideBarChat.css'

import db from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { Link } from 'react-router-dom';

const SideBarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState('');
  
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [])
  
  const createChat = async () => {
    const roomName = prompt('Please enter your name for chat');

    if(roomName){
      const docRef = await addDoc(collection(db, "rooms"), {
          name: roomName
      });      
    }
  }
  
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}> 
      <div className="sidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />
          <div className="sidebarChat_info">
              <h2>{name}</h2>
              <p>Last Message...</p>
          </div>
      </div>
    </Link>
  )
  :
  (
    <div className="sidebarChat" onClick={createChat}>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SideBarChat