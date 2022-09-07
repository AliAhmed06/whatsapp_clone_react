import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SideBar.css'

import db from '../firebase';
import { collection, query, onSnapshot } from "firebase/firestore";


import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SideBarChat from './SideBarChat';

const SideBar = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "rooms"))
    const unsub = onSnapshot(q, (snapshot) => {
        setRooms(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data()
            }
        )))
    });
  }, [])
  
  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <Avatar />
            <div className="sidebar_headerRight">
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
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchIcon />            
                <input type="text" placeholder='Search or start new chat' />
            </div>
        </div>
        <div className="sidebar_chats">
            <SideBarChat addNewChat />
            {
                rooms.map(room => (
                    <SideBarChat key={room.id} id={room.id} name={room.data.name} />
                ))
            }
        </div>
    </div>
  )
}

export default SideBar